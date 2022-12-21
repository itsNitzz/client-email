import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailPalceholderComponent } from './email-palceholder/email-palceholder.component';
import { EmailNotFoundComponent } from './email-not-found/email-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailListComponent,
    EmailShowComponent,
    EmailPalceholderComponent,
    EmailNotFoundComponent,
    EmailFormComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class InboxModule {}
