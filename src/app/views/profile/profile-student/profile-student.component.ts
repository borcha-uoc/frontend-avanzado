import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.model';
import { VocationalStudy, CollegeStudy } from '@app/shared/models/study.model';
import { Language } from '@app/shared/models/language.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '@app/shared/state/store.interface';
import { ProfileActions, StudiesActions, LanguagesActions } from '@app/shared/state/user/actions';
import { getUserProfile, getStudies, getLanguages } from '@app/shared/state/user/selectors';




@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {
  user: Observable<User>;
  studies: Observable<(VocationalStudy | CollegeStudy)[]>;
  languages: Observable<Language[]>;

  constructor(private store: Store<IStore>) {
    this.user = store.select(getUserProfile);
    this.studies = store.select(getStudies);
    this.languages = store.select(getLanguages);
  }

  ngOnInit() {
    this.store.dispatch(ProfileActions.loadUser());
  }

  deleteStudy(studyID: number) {
    this.store.dispatch(StudiesActions.deleteStudy({id:studyID}));
  }

  deleteLanguage(languageID: any) {
    this.store.dispatch(LanguagesActions.deleteLanguage({id:languageID}));
  }
}
