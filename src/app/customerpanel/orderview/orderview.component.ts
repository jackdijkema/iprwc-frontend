import { Component, Input } from '@angular/core';
import { User } from '../../../model/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orderview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './orderview.component.html',
  styleUrl: './orderview.component.scss',
})
export class OrderviewComponent {
  @Input() customer: User | null = null;
}
