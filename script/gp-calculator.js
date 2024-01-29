const studentEntry = [];
let gradePointAv = '';


function addCourse(){
  let addHTML = '';
  let totalCreditUnit = 0;
  let totalGradepoint = 0;
  let courseNumber = 0;

  studentEntry.forEach(function(gpObject, index){
    const {courseName, grade, creditUnit, gradepoint} = gpObject;
    const html = `
      <div>${courseName.toUpperCase()}</div>
      <div>${grade}</div>
      <div>${creditUnit}</div>
      <div>${gradepoint}</div>
      <button onclick="
        studentEntry.splice(${index}, 1);
        addCourse();
      ">Remove</button>`;
    addHTML += html; 
    totalCreditUnit += eval(creditUnit);
    totalGradepoint += gradepoint;
    courseNumber += 1;
  });

  document.querySelector('.js-display-added')
    .innerHTML = addHTML;
  document.querySelector('.js-course-number')
    .innerHTML = `Total course: ${courseNumber}`;
  document.querySelector('.js-total-unit')
    .innerHTML = `Total credit unit: ${totalCreditUnit}`;
  document.querySelector('.js-total-credit')
    .innerHTML = `Total grade point: ${totalGradepoint}`;
    
  gradePointAv = totalGradepoint / totalCreditUnit;

  console.log(totalCreditUnit);
  console.log(totalGradepoint);
  return gradePointAv;
}


function addStudentEntry(){
  let courseName = document.querySelector('.js-course-code').value;
  const grade = document.querySelector('.js-grade').value;
  const creditUnit = document.querySelector('.js-credit-unit').value;

  let getgrade = 0;
  if(grade ==='A'){
    getgrade = 5;
  } else if (grade === 'B'){
    getgrade = 4;
  } else if (grade === 'C'){
    getgrade = 3;
  } else if(grade ==='D'){
    getgrade = 2;
  } else if (grade === 'E'){
    getgrade = 1;
  } else if (grade === 'F'){
    getgrade = 0;
  } else{
    getgrade = 0;
  }

  if(creditUnit === 'Credit Unit'){
    alert('credit unit not specified.)
    getgrade = 0;
  }

  const gradepoint = getgrade * creditUnit
  studentEntry.push({
    courseName,
    grade,
    creditUnit,
    gradepoint
  });
  document.querySelector('.js-course-code').value = '';
  document.querySelector('.js-grade').value = 'Grade';
  document.querySelector('.js-credit-unit').value = 'Credit Unit';
  addCourse();
  console.log(studentEntry)
}

function getgp(){
  document.querySelector('.js-gpa')
    .innerHTML = `Grade point average(GPA): ${gradePointAv.toFixed(2)}`;
   
}

