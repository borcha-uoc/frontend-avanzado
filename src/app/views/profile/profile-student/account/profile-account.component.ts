import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import {
  User,
  DocumentType,
  Municipe,
  Province
} from 'src/app/shared/models/user.model';
import { documentNumberValidator } from 'src/app/shared/directives/document-number-validator.directive';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '@app/shared/state/store.interface';
import { ProfileActions } from '@app/shared/state/user/actions';
import { getUserProfile } from '@app/shared/state/user/selectors';



@Component({
  selector: 'app-profile-account',
  templateUrl: './profile-account.component.html',
  styleUrls: ['./profile-account.component.scss']
})
export class ProfileAccountComponent implements OnInit {
  rForm: FormGroup;
  user: User;
  documentsType: DocumentType[];
  municipes: Municipe[];
  provinces: Province[];

  constructor(private router: Router, private store: Store<IStore>) {
    store.select(getUserProfile).subscribe(user => {
      if (!user) return;
      this.user = user;
      this.loadFormInstance();
    });
  }
  ngOnInit() {
    this.loadSelectProperties();
  }
  public loadSelectProperties(): void {
    this.documentsType = MockData.DOCUMENTS_TYPE;
    this.municipes = MockData.MUNICIPES;
    this.provinces = MockData.PROVINCES;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup(
      {
        name: new FormControl(this.user.name, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        surname: new FormControl(this.user.surname, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(55),
          Validators.pattern(/^[a-zA-Z]+$/)
        ]),
        phone: new FormControl(this.user.phone, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),
        phone2: new FormControl(this.user.phone2, [
          Validators.pattern(/^[0-9]{6,}$/),
          Validators.required
        ]),

        birthdate: new FormControl(this.user.birthdate, [
          Validators.required,
          dateValidator()
        ]),
        documentType: new FormControl(this.user.documentType, [
          Validators.required
        ]),
        documentNumber: new FormControl(this.user.documentNumber, [
          Validators.required
        ]),
        street: new FormControl(this.user.address.street, [
          Validators.required
        ]),
        municipe: new FormControl(this.user.address.municipe, [
          Validators.required
        ]),
        province: new FormControl(this.user.address.province, [
          Validators.required
        ]),
        aboutMe: new FormControl(this.user.aboutMe),
        otherCompetences: new FormControl(this.user.aboutMe),
        license: new FormControl(this.user.license)
      },
      documentNumberValidator()
    );
  }

  public save() {
    const user = { ...this.user, ...this.rForm.value };
    this.store.dispatch(ProfileActions.saveUser({user}))
  }
  compareByUID(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
}
