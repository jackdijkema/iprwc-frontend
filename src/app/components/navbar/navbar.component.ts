import { Component } from '@angular/core';
import {LucideAngularModule} from 'lucide-angular';  

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent { }