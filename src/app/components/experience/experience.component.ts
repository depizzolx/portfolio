import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  year: string;
  company: string;
  role: string;
  description: string;
  skills?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      year: '2024',
      company: 'Wise Systems',
      role: 'Software Engineer',
      description: 'Maintains and modernizes a mission-critical legacy platform. Builds REST APIs, refactors legacy code, and optimizes Oracle database performance.',
      skills: ['Java', 'PL/SQL', 'Hibernate', 'Struts']
    },
    {
      year: '2022',
      company: 'Wise Systems',
      role: 'Data Analyst',
      description: 'Developed and optimized an Oracle-based analytics environment and Qlik Sense dashboards. Tuned PL/SQL queries and collaborated with business users to refine requirements.',
      skills: ['PL/SQL', 'ETL', 'Qlik Sense']
    },
    {
      year: '2022',
      company: 'Wise Systems',
      role: 'Web Development Trainee',
      description: 'Contributed to full-stack development using Java, Angular, and PL/SQL. Implemented responsive UI components and REST endpoints.',
      skills: ['Java', 'Angular', 'PL/SQL']
    },
    {
      year: '2021',
      company: 'CNH Industrial',
      role: 'Manufacturing Assembler',
      description: 'Performed assembly line operations ensuring quality and efficiency standards.'
    },
    {
      year: '2021',
      company: 'CNH Industrial',
      role: 'Administrative Assistant',
      description: 'Supported administrative tasks and Kaizen facilitation processes.'
    },
    {
      year: '2017',
      company: 'Brado Logística',
      role: 'Marketing & Communications Intern',
      description: 'Assisted with marketing communications and internal campaigns.'
    }
  ];
}
