import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-first-component",
  templateUrl: "./first.component.html"
})
export class FirstComponent {
  // language = new FormControl();
  // year = new FormControl();
  // creator = new FormControl();
  data = [];
  studentForm: FormGroup;
  languageForm: FormGroup = new FormGroup({
    name: new FormControl(),
    year: new FormControl(),
    creator: new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      country: new FormControl()
    })
  });

  constructor(private http: HttpClient) {
    this.studentForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      address: new FormGroup({
        country: new FormControl(),
        state: new FormControl()
      }),
      skills: new FormArray([]),
      courses: new FormArray([])
    });
  }

  print() {
    console.log(this);
  }

  addSkillFC() {
    const fc = new FormControl();
    (this.studentForm.get("skills") as FormArray).push(fc);
  }

  removeSkillFC(ind: number) {
    (this.studentForm.get("skills") as FormArray).removeAt(ind);
  }

  addCourse() {
    const fg = new FormGroup({
      name: new FormControl(),
      year: new FormControl(),
      marks: new FormControl()
    });

    (this.studentForm.get("courses") as FormArray).push(fg);
  }

  removeCourseFG(i: number) {
    (this.studentForm.get("courses") as FormArray).removeAt(i);
  }
}
