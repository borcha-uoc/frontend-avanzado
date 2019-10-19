import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { StudiesService } from 'src/app/shared/services/studies.service'
import { Study, CollegeStudy, VocationalStudy, Institution, Category, Grade, TitleStudy, LevelStudy } from 'src/app/shared/models/study.model';
import { validDate } from 'src/app/shared/validators/validators'

@Component({
  selector: 'app-profile-studies-edit',
  templateUrl: './profile-studies-edit.component.html',
  styleUrls: ['./profile-studies-edit.component.scss']
})
export class ProfileStudiesEditComponent {
  saving = false;

  level;
  levels;
  institutions;
  categories;
  grades;
  titleStudies;

  editing: boolean;
  studiesForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private studiesService: StudiesService)
  {
    this.levels = this.studiesService.getLevelStudies();
    // Cargar opciones de los desplegables
    this.studiesService.getInstitutions().then(institutions => this.institutions = institutions);
    this.studiesService.getCategories().then(categories => this.categories = categories);
    this.studiesService.getGrades().then(grades => this.grades = grades);
    this.studiesService.getTitleStudies().then(titleStudies => this.titleStudies = titleStudies);

    this.editing = this.router.url.endsWith('edit');
    if (this.editing) {
      // buscar el uid y asignarlo a study
      let uid = this.route.snapshot.params.uid;
      let study = authenticationService.currentUser.studies.find(s => s.uid == uid);
      this.level = study.level;
      this.studiesForm = this.createVocationalForm(study);
    } else {
      // Crear un objeto vacio
      this.level = this.levels[0];
      this.onChangeLevel();
    }

  }


  

  createOtherForm(study) {
    return this.formBuilder.group({
      title: [study.title, Validators.required],
      certificate: [study.certificate || false],
      date: [study.date, [Validators.required, validDate]],
      bilingue: [study.bilingue],
    });
  }

  createCollegeForm(study) {
    return this.formBuilder.group({
      institution: [study.institution, Validators.required],
      title: [study.title, Validators.required],
      date: [study.date, [Validators.required, validDate]],
      bilingue: [study.bilingue || false],
      //certificate: [study.certificate || false],
      //name: [study.name],
    });
  }

  createVocationalForm(study) {
    return this.formBuilder.group({
      institution: [study.institution, Validators.required],
      category: [study.category, Validators.required],
      grade: [study.grade, Validators.required],
      title: [study.title, Validators.required],
      date: [study.date,  [Validators.required, validDate]],
      dual: [study.dual || false],
      bilingue: [study.bilingue || false],
      //certificate: [study.certificate],
    });
  }

  onChangeLevel () {
    if (this.level.name == 'Título universitario') {
      this.studiesForm = this.createCollegeForm(new CollegeStudy());
    } else if (this.level.name == 'Ciclo Formativo') {
      this.studiesForm = this.createVocationalForm(new VocationalStudy());
    } else {
      this.studiesForm = this.createOtherForm(new Study());
    }      
  }


  save() {
    let user = this.authenticationService.currentUser;
    let study = this.studiesForm.value;
    study.level = this.level;

    if (this.editing) {
      study.uid = parseInt(this.route.snapshot.params.uid);

      // Reemplazamos el elementos que estamos editando
      user.studies.forEach((element, index) => {
        if(element.uid === study.uid) {
          user.studies[index] = study;
        }
      });
    } else {
      // Generamos un uid distinto cada vez que guardemos
      study.uid = new Date().getTime();
      // Agregamo el elemento
      user.studies.push(study);
    }
    this.saving = true;
    this.authenticationService.saveUser(user)
    .then(() => {
      this.saving = false;
      alert('Datos guardados correctamente');
      this.router.navigate(['/profile/studies']);
    });
  }

  error(field, errorType) {
    let control = field ? this.studiesForm.get(field) : this.studiesForm;
    return (control.dirty || control.touched) && control.invalid && control.errors[errorType];
  }

  compareByUid(c1: any, c2:any): boolean {
    return c1 && c2 ? c1.uid === c2.uid : c1 === c2; 
  }
}
