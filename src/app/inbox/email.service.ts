import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EmailSummary } from './email';
import { Email } from './email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  fetchEmailsList() {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  fetchEmailData(id: string) {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post<{ status: string }>(`${this.rootUrl}/emails`, email);
  }
}
