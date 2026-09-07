import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { Student } from '../../classes/student';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-student-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-page.html',
  styleUrl: './student-page.css',
})
export class StudentPage implements OnInit {
  studentForm!: FormGroup;

  students: Student[] = [];
  student: Student | undefined;
  isEdit: boolean = false;

  ngOnInit(): void {
    this.getData();
    this.initForm();
  }

  constructor(private studentService: StudentService, private fb: FormBuilder) { }

  private initForm(): void {
    this.studentForm = this.fb.group({
      studentId: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
      studentName: ['', Validators.required],
      department: ['', Validators.required],
      faculty: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      picture: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  get f() {
    return this.studentForm.controls;
  }

  private getData(): void {
    this.studentService.getAll().subscribe(res => {
      console.log(res);
      this.students = res;
    });
  }

  onSubmit(): void {
    const studentData: Student = this.studentForm.value;
    console.log(studentData);
    if (this.isEdit) { // update
      this.studentService.update(this.student!, studentData).subscribe(res => {
        if (res.result) {
          this.getData();
          alert('OK');
        } else {
          alert('ERROR');
        }
      });
    } else { // add
      this.studentService.create(studentData).subscribe(res => {
        this.students = res;
        this.resetForm();
      });
    }
  }

  selectStudent(selectedStudent: Student): void {
    this.isEdit = true; // change to edit mode
    this.student = selectedStudent;
    this.studentForm.patchValue({
      studentId: selectedStudent.studentId,
      studentName: selectedStudent.studentName,
      department: selectedStudent.department,
      faculty: selectedStudent.faculty,
      email: selectedStudent.email,
      tel: selectedStudent.tel,
      picture: selectedStudent.picture
    });
  }

  resetForm(): void {
    this.isEdit = false;
    this.studentForm.reset();
    this.getData();
  }

  deleteStudent(deletedStudent: Student): void {
    if (confirm('Are you sure to delete ' + deletedStudent.studentId)) {
      // DELETE STUDENT DATA
      this.studentService.delete(deletedStudent).subscribe(res => {
        if (res.result) {
          this.resetForm();
        }
      });
    }
  }

}
