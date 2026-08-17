import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Student } from '../../classes/student';

@Component({
  selector: 'app-student-page',
  imports: [],
  templateUrl: './student-page.html',
  styleUrl: './student-page.css',
})
export class StudentPage implements OnInit {
  students: Student[] = [];

  ngOnInit(): void {
    this.getData();
  }

  constructor(private studentService: StudentService) {}

  private getData(): void {
    this.studentService.getAll().subscribe(res => {
      console.log(res);
      this.students = res;
    });
  }

}
