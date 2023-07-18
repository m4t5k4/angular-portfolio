import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  birthdate: string = "1998-02-25";
  age: string = "";

  ngOnInit(): void {
    this.age = this.calculateAge(this.birthdate).toString();
  }

  calculateAge(birthdate : string) {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
  
    const age = currentYear - birthYear;
  
    // Check if birthday has occurred this year
    const today = new Date();
    const birthdateThisYear = new Date(birthdate);
    birthdateThisYear.setFullYear(currentYear);
  
    if (today < birthdateThisYear) {
      return age - 1;
    }
  
    return age;
  }
}
