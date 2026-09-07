export interface Student {
    studentId: string;
    studentName: string;
    department: string;
    faculty: string;
    email: string;
    tel: string;
    picture: string;
    password: string;
}

export const MOCKUP_STUDENT_DATA: Student[] = [
    {
        studentId: '671103001', 
        studentName: 'Ant',
        department: 'Software Engineering',
        faculty: 'Engineering and Technology',
        email: 'student1@mail.com',
        tel: '0812345678',
        picture: '',
        password: 'student1'
    },
    {
        studentId: '671103002', 
        studentName: 'Bat',
        department: 'Electrical Engineering',
        faculty: 'Engineering and Technology',
        email: 'student2@mail.com',
        tel: '0898765432',
        picture: '',
        password: 'student2'
    },
    {
        studentId: '671103003', 
        studentName: 'Cat',
        department: 'Industrial Engineering',
        faculty: 'Engineering and Technology',
        email: 'student3@mail.com',
        tel: '0823412233',
        picture: '',
        password: 'student1'
    },
];
