import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  initialYear: string;
  finalYear: string;
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
      finalYear: 'Actual',
      initialYear: '2024',
      company: 'Wise Systems',
      role: 'Software Engineer',
      description: 'Builds REST APIs, refactors and modernizes legacy code, and optimizes Oracle database performance.',
      skills: ['Java', 'PL/SQL', 'Hibernate', 'Struts']
    },
    {
      finalYear: '2024',
      initialYear: '2022',
      company: 'Wise Systems',
      role: 'Data Analyst',
      description: 'Developed and optimized an Oracle-based analytics environment and Qlik Sense dashboards. Tuned PL/SQL queries and collaborated with business users to refine requirements.',
      skills: ['PL/SQL', 'ETL', 'Qlik Sense']
    },
    {
      finalYear: '2022',
      initialYear: '2022',
      company: 'Wise Systems',
      role: 'Web Development Trainee',
      description: 'Full-stack development using Java, Angular, and PL/SQL. Implemented responsive UI components and REST endpoints.',
      skills: ['Java', 'Angular', 'PL/SQL']
    },
    {
      finalYear: '2022',
      initialYear: '2021',
      company: 'CNH Industrial',
      role: 'Manufacturing Assembler',
      description: 'Performed assembly line operations ensuring quality and efficiency standards.'
    },
    {
      finalYear: '2021',
      initialYear: '2021',
      company: 'CNH Industrial',
      role: 'Administrative Assistant',
      description: 'Supported administrative tasks and Kaizen facilitation processes.'
    },
    {
      finalYear: '2019',
      initialYear: '2017',
      company: 'Brado Logística',
      role: 'Marketing & Communications Intern',
      description: 'Assisted with marketing communications and internal campaigns.'
    }
  ];
}
