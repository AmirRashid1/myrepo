import { Component } from '@angular/core';
// import { Test } from './srvc.service';
@Component({
  selector: 'course',
  template:`
    <h1>
      {{course.title}}
      {{course.code}}
      {{course.credits}}
    </h1>
  `

})

export class CourseComponent{
  // object=new Test();
  course={
    title:"XYZ",
    code:12,
    credits:4
  }
  // data=new object.course_test();

}
