import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signedup$!: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.signedup$ = this.authService.signedin$;
    this.authService.signedinStatus().subscribe();
    // this.authService.signedup$.subscribe((res) => {
    //   this.signedup = res;
    // });
  }
}
