import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from './services/supabase.service';

@Component({
  selector: 'tda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe-angular-workshop';
  signedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private supabaseService: SupabaseService) {
    this.supabaseService.authChanges((_e, s) => this.signedIn$.next(!!s));
  }

  // handleLogin(user: string, pass: string, e?: KeyboardEvent) {
  //   if (!e || e?.key === 'Enter') {
  //     this.supabaseService.signIn(user, pass).then(({ data, error }) => {
  //       if (error) {
  //         alert(error);
  //       }
  //     })
  //   }
  // }
}
