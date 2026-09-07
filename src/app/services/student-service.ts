import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCKUP_STUDENT_DATA, Student } from '../classes/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  // C: CREATE - add new student
  public create(student: Student): Observable<any> {
    MOCKUP_STUDENT_DATA.push(student);
    return of(MOCKUP_STUDENT_DATA);
  }

  // R: READ - get all student data
  public getAll(): Observable<Student[]> {
    return of(MOCKUP_STUDENT_DATA);
  }

  // U: UPDATE
  public update(student: Student, updatedStudent: Student): Observable<any> {
    // find postion to update
    const updatedPosition = MOCKUP_STUDENT_DATA.indexOf(student);
    console.log('update position: ' + updatedPosition);
    // update data
    MOCKUP_STUDENT_DATA[updatedPosition] = {
      studentId: updatedStudent.studentId,
      studentName: updatedStudent.studentName,
      department: updatedStudent.department,
      faculty: updatedStudent.faculty,
      email: updatedStudent.email,
      tel: updatedStudent.tel,
      picture: updatedStudent.picture,
      password: '*******'
    };
    // return result
    return of({result: true});
  }

}
