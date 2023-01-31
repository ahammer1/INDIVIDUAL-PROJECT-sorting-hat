const students = [
{
  id: 1,
  name: "Harry Potter",
  house: "Gryffindor",
}, 
{
  id: 2,
  name: "Hermione Granger",
  house: "Gryffindor",
},
{
  id: 3,
  name: "Ron Weasley",
  house: "Gryffindor",
},
{
  id: 4,
  name: "Draco Malfoy",
  house: "Slytherin",
},
{
  id: 5,
  name: "Severus Snape",
  house: "Slytherin",
},
{
  id: 6,
  name: "Albus Potter",
  house: "Slytherin",
},
{
  id: 7,
  name: "Cedric Diggory",
  house: "Hufflepuff",
},
{
  id: 8,
  name: "Pamona Sprout",
  house: "Hufflepuff",
},
{
  id: 9,
  name: "Helga Hufflepuff",
  house: "Hufflepuff",
},
{
  id: 10,
  name: "Luna Love Good",
  house: "Ravenclaw",
},
{
  id: 11,
  name: "Sybill Trelawney",
  house: "Ravenclaw",
},
{
  id: 3,
  name: "Myrtle Warren",
  house: "Ravenclaw",
},

];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv =document.querySelector(divId);
  
  selectedDiv.innerHTML=htmlToRender
};
  
 const hat = document.querySelector("#hat"); 

 const cardsOnDom = (array) => {
    let domString = "";
    for (const student of array) {  
    domString += 
`<div class="card" style="width: 14rem;">
  <div class="card-header">
    First Year Student
  </div>
  <div class="card-body">
    <h5 class="card-title">${student.name}</h5>
    <p class="card-text">${student.house}</p>
  </div>
</div>`
    }
    renderToDom("#hat",domString);
  };
  cardsOnDom(students);

  const filter = (students, studentsHouse) => {
    const studentArray = [];
  
  
    for (const student of students) {
      if (student.house === studentsHouse) {
        studentArray.push(student);
      }
    }
    return studentArray;
  }
const showGryffindor = document.querySelector("#Gryffindor");
const showRavenclaw = document.querySelector("#Ravenclaw");
const showSlytherin = document.querySelector("#Slytherin");
const showHufflepuff = document.querySelector("#Hufflepuff");
const showAllButton =document.querySelector("#All");

showGryffindor.addEventListener("click", () => {
  const Gryffindor = filter(students, "Gryffindor");
  cardsOnDom(Gryffindor); 
})
showRavenclaw.addEventListener("click", () => {
  const Ravenclaw = filter(students, "Ravenclaw");
  cardsOnDom(Ravenclaw);
})
  showSlytherin.addEventListener("click", () => {
  const Slytherin = filter(students, "Slytherin");
  cardsOnDom(Slytherin);
}) 
showHufflepuff.addEventListener("click", () => {
  const Hufflepuff = filter(students, "Hufflepuff");
  cardsOnDom(Hufflepuff);
}) 
  showAllButton.addEventListener("click", () => {;
  cardsOnDom(students);
});

const form = document.querySelector('form')

const addStudentObj = (event) => {
  event.preventDefault();
  // grabs values from form
const name =document.querySelector("#name");
const house =document.querySelector("#house");

  //create an object from values
  const addStudentObj = {
    name: name.value,
    house: "".value,    
  };
  
    //push to student array
    students.push(addStudentObj);
  
    //rerender with new student 
    cardsOnDom(students);
    form.reset();
  
  
  //add eventlistner
  
  const submitButton = document.querySelector("#form-submit");
  submitButton.addEventListener('click',addStudentObj);
  cardsOnDom(students)
}
