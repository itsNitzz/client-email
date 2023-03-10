import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  email!: Email;
  showModal = false;
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      from: `${this.authService.username}@angular-email.com`,
      subject: '',
      html: '',
      text: '',
    };
  }

  ngOnInit(): void {}

  sendEmailData(email: Email) {
    this.emailService.sendEmail(email).subscribe((res) => {
      this.showModal = false;
      console.log(res);
    });
  }
}
