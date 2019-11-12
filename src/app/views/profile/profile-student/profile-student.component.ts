import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user.model';
import { VocationalStudy, CollegeStudy } from '@app/shared/models/study.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '@app/shared/state/store.interface';
import { ProfileActions, StudiesActions } from '@app/shared/state/user/actions';
import { getUserProfile, getStudies } from '@app/shared/state/user/selectors';




@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {
  user: Observable<User>;
  studies: Observable<(VocationalStudy | CollegeStudy)[]>;

  constructor(private store: Store<IStore>) {
    this.user = store.select(getUserProfile);
    this.studies = store.select(getStudies);
  }

  ngOnInit() {
    this.store.dispatch(ProfileActions.loadUser());
  }

  deleteStudy(studyID: number) {
    this.store.dispatch(StudiesActions.deleteStudy({id:studyID}));
  }

  deleteLanguage(languageID: any) {
    // this.store.dispatch(LanguagesAction.delete({id:languageID});

    // const languages = this.user.languages;
    // const index = languages.findIndex(language => language.uid === languageID);
    // if (index === -1) {
    //   alert('Error: Language not found');
    //   return;
    // }
    // languages.splice(index, 1);
    // this.profileService.updateProfile(this.user);
  }
}
