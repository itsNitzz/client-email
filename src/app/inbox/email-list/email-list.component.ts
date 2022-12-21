import { Component, ElementRef, OnInit } from '@angular/core';
import { EmailSummary } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
})
export class EmailListComponent implements OnInit {
  emailsList: EmailSummary[] = [];
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.fetchEmailsList().subscribe((res) => {
      this.emailsList = res;
    });
  }
}
