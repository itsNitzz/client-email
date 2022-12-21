export interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

export interface Email {
  from: string;
  html: string;
  id: string;
  subject: string;
  text: string;
  to: string;
}
