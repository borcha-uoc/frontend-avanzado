import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '@app/shared/state/store.interface';
import { ProfileActions } from '@app/shared/state/user/actions';
import { getUserProfile } from '@app/shared/state/user/selectors';




@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {
  user: Observable<User>;

  constructor(private store: Store<IStore>) {
    this.user = store.select(getUserProfile);
  }

  ngOnInit() {
    this.store.dispatch(ProfileActions.loadUser());
  }

  deleteStudy(studyID: number) {
    // this.store.dispatch(StudiesAction.delete({id:studyId}));

    // const studies = this.user.studies;
    // const index = studies.findIndex(study => study.uid === studyID);
    // if (index === -1) {
    //   alert('Error: Study not found');
    //   return;
    // }
    // studies.splice(index, 1);
    // this.profileService.updateProfile(this.user);
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
