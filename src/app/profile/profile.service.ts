import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
  ) { }

  about2 = `Software Engineer with 3.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular, NodeJS, PHP, Ionic,  Bootstrap, MongoDB, SQL, firebase, Electron and UI with Responsive Designs`

  about = "Lover of innovation and everything related to generate new knowledge. Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."

  exprienceData: any = [
    {
      id: 4,
      company: 'eZee Technosys Pvt Ltd.',
      location: 'Surat',
      timeline: 'Jun 2018 to Sep 2021',
      role: 'Software Engineer',
      work: ` Contributed on developing the different reports and insights for the application . 
        Developed features which allowed other company product to come and integrate with product . 
        Worked on REST Api , Dashboard , services and UI of the application . 
        Created sections like templates for email, sms, landing pages, services, providers and triggers Automation . 
        Gathered and designed system design to fullfil customer requirement . 
        Build full fledged Inventory Management System as a lead developer . 
        Debugged problems and corrected issues . 
        Developing software solutions by studying user needs, data usage, and systems flow . 
        Work closely with product manager to enhance performance of the application . 
        Wrote cross-platform applications code as per the industry standards . 
        Performed troubleshooting of technical issues within production environment 
      `
    },
  ]

  skills: any = [
    {
      skill: 'Product development'
    },
    {
      skill: 'Technical Analysis'
    },
    {
      skill: 'Problem Solving'
    },
    {
      skill: 'Innovative'
    },
    {
      skill: 'Software Testing'
    },
    {
      skill: 'Improving operations by running systems analysis'
    },
    {
      skill: 'Developing software solutions by studying user needs, data usage, and systems flow'
    },
    {
      skill: 'Analyzing applications and making recommendations for improvement'
    },
    {
      skill: 'API design knowledge'
    },
    {
      skill: 'Full Stack Development'
    }
  ]

  getSkills():Observable<any> {
    return this.skills;
  }

  exprience(): Observable<any> {
    return this.exprienceData;
  }
}
