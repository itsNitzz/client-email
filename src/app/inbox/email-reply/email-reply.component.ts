import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnChanges {
  showModal = false;
  @Input() email!: Email;
  modifiedEmailData!: Email;

  constructor(private emailSerivce: EmailService) {}

  ngOnChanges(): void {
    this.modifiedEmailData = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n-------<${this.email.from}> wrote:---------
       \n ${this.email.text}`,
    };
  }

  onSendingReply(email: Email) {
    this.emailSerivce.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
