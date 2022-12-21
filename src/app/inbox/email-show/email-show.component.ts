import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  emailData!: Email;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => {
      this.emailData = data['email'];
    });
  }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(({ id }) => {
    //       return this.emailService.fetchEmailData(id);
    //     })
    //   )
    //   .subscribe((email) => {
    //     this.emailData = email;
    //   });
  }
}
