export class Study {
  id: number;
  level: LevelStudy;
  title: TitleStudy;
  certificate: boolean; //Sera un fichero
  date: string;
  bilingue: boolean;
}

export class CollegeStudy extends Study {
  name: string;
  institution: String;
}

export class VocationalStudy extends Study {
  category: Category;
  grade: Grade;
  dual: boolean;

  institution: Institution;
}

export class Institution {
  id: number;
  name: string;
}
export class Category {
  id: number;
  name: string;
}
export class Grade {
  id: number;
  name: string;
}
export class TitleStudy {
  id: number;
  name: string;
}
export class LevelStudy {
  id: number;
  name: string;
}
