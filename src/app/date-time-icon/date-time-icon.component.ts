import { Component, Input, OnChanges, SimpleChanges, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-time-icon',
  templateUrl: './date-time-icon.component.html',
  styleUrls: ['./date-time-icon.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DateTimeIconComponent implements OnChanges {
  @Input() value!: string;
  @Input() color: string = '#007bff';  // Default color for text
  @Input() fontSize: string = '16px';  // Default font size for text

  hasDate = false;
  hasTime = false;
  displayDate?: string;
  displayTime?: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.detectDateAndTime(this.value);
    }
    if (changes['color'] || changes['fontSize']) {
      this.applyStyles();
    }
  }

  private detectDateAndTime(val: string): void {
    this.hasDate = this.containsDate(val);
    this.hasTime = this.containsTime(val);

    if (this.hasDate) {
      this.displayDate = this.formatDate(this.extractDate(val));
    } else {
      this.displayDate = undefined;
    }

    if (this.hasTime) {
      this.displayTime = this.formatTime(this.extractTime(val));
    } else {
      this.displayTime = undefined;
    }
  }

  private applyStyles(): void {
    // Apply styles only to text elements
    const valueElements = this.elRef.nativeElement.querySelectorAll('.value');
    valueElements.forEach((el: HTMLElement) => {
      this.renderer.setStyle(el, 'color', this.color);
      this.renderer.setStyle(el, 'font-size', this.fontSize);
    });
  }

  private containsDate(val: string): boolean {
    const datePattern = /\d{4}-\d{2}-\d{2}/;
    return datePattern.test(val);
  }

  private containsTime(val: string): boolean {
    const timePattern = /([01]\d|2[0-3]):([0-5]\d):([0-5]\d)/;
    return timePattern.test(val);
  }

  private extractDate(val: string): string {
    const dateMatch = val.match(/\d{4}-\d{2}-\d{2}/);
    return dateMatch ? dateMatch[0] : '';
  }

  private extractTime(val: string): string {
    const timeMatch = val.match(/([01]\d|2[0-3]):([0-5]\d):([0-5]\d)/);
    return timeMatch ? timeMatch[0] : '';
  }

  private formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }

  private formatTime(timeStr: string): string {
    if (!timeStr) return '';
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
