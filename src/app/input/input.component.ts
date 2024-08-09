import { Component } from '@angular/core';
import { DateTimeIconComponent } from '../date-time-icon/date-time-icon.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [DateTimeIconComponent, FormsModule] // Include FormsModule here
})
export class InputComponent {
  dateTimeValue = '2024-08-07 14:30:15'; // Example value; you can modify or bind it as needed

  // Set the color and fontSize directly here
  color = 'darkblue'; // Example color
  fontSize = '20px'; // Example font size
}
