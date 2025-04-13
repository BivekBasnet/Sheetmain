import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-des1',
  imports: [CommonModule, FormsModule],
  templateUrl: './des1.component.html',
  styleUrls: ['./des1.component.css']
})
export class Des1Component {
  school = {
    name: "MANMOHAN SECONDORY SCHOOL",
    location: "BIRTAMODE-02,JHAPA",
    estd:"2024",
    phone:"023-543652",
    workingDays: 223,
    schoolDays: 212,
    presentDays: 201,
    preparedBy: "Saurav Neupane",
    checkedBy: "JAYARAM TIMSINA",
    headTeacher: "SHER BAHADUR SHRESTHA",
    issueDate: "2080-12-23",

  };

  student = {
    name: "RAM KHADKA",
    dob: "2066-04-05",
    regn: "2203",
    symboln: "8011234",
    grade: "NINE",
    section: "B",
    gpa: 3.45,
    result: "PASSED",
  };

  marksheet = [
    {
      subject_code: "1011",
      subjects: [
        {
          name: "COMP ENGLISH [TH]",
          creditHour: 3.75,
          gradePoint: 1.6,
          grade: "D"
        },
        {
          name: "COMP ENGLISH [IN]",
          creditHour: 1.25,
          gradePoint: 3.6,
          grade: "A"
        }
      ],
      finalGrade: 2.10,
      remarks: ""
    },
    {
      subject_code: "1021",
      subjects: [
        {
          name: "COMP NEPALI [TH]",
          creditHour: 3.75,
          gradePoint: 2.8,
          grade: "B"
        },
        {
          name: "COMP NEPALI [IN]",
          creditHour: 1.25,
          gradePoint: 3.4,
          grade: "A"
        }
      ],
      finalGrade: 3.0,
      remarks: ""
    },
    {
      subject_code: "1021",
      subjects: [
        {
          name: "COMP NEPALI [TH]",
          creditHour: 3.75,
          gradePoint: 2.8,
          grade: "B"
        },
        {
          name: "COMP MATHEMATICS [IN]",
          creditHour: 1.25,
          gradePoint: 3.4,
          grade: "A"
        }
      ],
      finalGrade: 3.0,
      remarks: ""
    },
    {
      subject_code: "1011",
      subjects: [
        {
          name: "COMP ENGLISH [TH]",
          creditHour: 3.75,
          gradePoint: 1.6,
          grade: "D"
        },
        {
          name: "COMP ENGLISH [IN]",
          creditHour: 1.25,
          gradePoint: 3.6,
          grade: "A"
        }
      ],
      finalGrade: 2.10,
      remarks: ""
    },
    {
      subject_code: "1011",
      subjects: [
        {
          name: "COMP ENGLISH [TH]",
          creditHour: 3.75,
          gradePoint: 1.6,
          grade: "D"
        },
        {
          name: "COMP ENGLISH [IN]",
          creditHour: 1.25,
          gradePoint: 3.6,
          grade: "A"
        }
      ],
      finalGrade: 2.10,
      remarks: ""
    },{
      subject_code: "1011",
      subjects: [
        {
          name: "COMP ENGLISH [TH]",
          creditHour: 3.75,
          gradePoint: 1.6,
          grade: "D"
        },
        {
          name: "COMP ENGLISH [IN]",
          creditHour: 1.25,
          gradePoint: 3.6,
          grade: "A"
        }
      ],
      finalGrade: 2.10,
      remarks: ""
    },{
      subject_code: "1011",
      subjects: [
        {
          name: "COMP ENGLISH [TH]",
          creditHour: 3.75,
          gradePoint: 1.6,
          grade: "D"
        },
        {
          name: "COMP ENGLISH [IN]",
          creditHour: 1.25,
          gradePoint: 3.6,
          grade: "A"
        }
      ],
      finalGrade: 2.10,
      remarks: ""
    },
  ];
}
