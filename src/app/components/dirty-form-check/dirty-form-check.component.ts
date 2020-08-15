import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { dirtyCheck, DirtyComponent } from '@ngneat/dirty-check-forms';
import { Observable, Subscription } from 'rxjs';
import { store, store$ } from './formService.service';

@Component({
  selector: 'app-dirty-form-check',
  templateUrl: './dirty-form-check.component.html',
  styleUrls: ['./dirty-form-check.component.css']
})
export class DirtyFormCheckComponent {
  
  sub: Subscription;
  
  constructor( private _fb: FormBuilder) {}

  settings: FormGroup;
  
  isDirty$: Observable<boolean>;

  ngOnInit() {
    this.settings = this._fb.group({
      firstName: [''],
      lastName: [''],
      addresses: this._fb.array([])
    });

    this.sub = store$.subscribe(state =>
      this.settings.patchValue(state, { emitEvent: false })
    );
    this.add("Pune");
    this.isDirty$ = dirtyCheck(this.settings, store$);
  }

  remove() {
    let addresses = <FormArray>this.settings.get('addresses');
    addresses.removeAt(addresses.length -1);
  }

  add(d) {
    let addresses = <FormArray>this.settings.get('addresses');
    addresses.push(this._fb.group({city: d}));
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

  submit() {
    store.next(this.settings.value);
  }

}