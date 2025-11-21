import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  finalYear: string;
  initialYear: string;
  degree: string;
  university: string;
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
      finalYear: '2026',
      initialYear: '2023',
      degree: 'Technologist, Systems Analysis and Development',
      university: 'UNINTER International University Center'
    }
  ];
}
