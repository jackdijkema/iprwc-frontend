import { Component, Input } from '@angular/core';
import { User } from '../../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orderview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orderview.component.html',
  styleUrl: './orderview.component.scss',
})
export class OrderviewComponent {
  @Input() customer: User | null = null;
}
