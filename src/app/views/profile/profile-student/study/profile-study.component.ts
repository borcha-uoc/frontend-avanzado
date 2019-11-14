import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Study, VocationalStudy, CollegeStudy } from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '@app/shared/state/store.interface';
import { ProfileActions, StudiesActions, LanguagesActions } from '@app/shared/state/user/actions';
import { getSelectedStudy } from '@app/shared/state/user/selectors';



@Component({
  selector: 'app-profile-study',
  templateUrl: './profile-study.component.html',
  styleUrls: ['./profile-study.component.scss']
})
export class ProfileStudyComponent {
  studiesForm: FormGroup;
  options = MockData.TYPE_STUDIES;
  study: Observable<Study>;
  isNew: boolean = false;

  constructor(
    private store: Store<IStore>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.study = this.store.select(getSelectedStudy);
    this.study.subscribe(study => {
      if (!study) return;
      this.studiesForm = new FormGroup({
        option: new FormControl(study.level, [Validators.required])
      });
    });
    this.route.params.subscribe(params => {
      this.isNew = !params.uid;
      if (this.isNew) {
        this.store.dispatch(StudiesActions.newStudy());
      } else {
        this.store.dispatch(StudiesActions.editStudy({uid:+params.uid}));
      }
    });
  }

  compareOption(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(study: VocationalStudy | CollegeStudy) {
    this.store.dispatch(StudiesActions.updateStudy({study}));
  }
  private save(study: VocationalStudy | CollegeStudy) {
    this.store.dispatch(StudiesActions.saveStudy({study}));
  }

  saveOrUpdate(study: VocationalStudy | CollegeStudy) {
    study.level = this.studiesForm.get('option').value;
    this.isNew ? this.save(study) : this.update(study);
  }
  public isSelectVocational(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[0].uid;
  }
  public isSelectUniversity(): boolean {
    const value = this.studiesForm.get('option').value;
    return value && value.uid === MockData.TYPE_STUDIES[1].uid;
  }
  public backProfile() {
    this.router.navigate(['/admin/profile']);
  }
}
