import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  year: string;
  degree: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education[] = [
    {
      year: '2026',
      degree: 'Technologist, Systems Analysis and Development',
      description: '2023 - 2026'
    }
  ];
}
