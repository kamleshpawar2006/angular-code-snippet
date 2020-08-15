import { Injectable } from '@angular/core';
import { DirtyCheckGuard } from '@ngneat/dirty-check-forms'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FormDirtyGuard extends DirtyCheckGuard {
  constructor() {
    super();
  }

  confirmChanges(): Observable<boolean> | boolean {
    return confirm("You have unsave changes. Are you sure you want to you wanto leave this page.")
  }
}
