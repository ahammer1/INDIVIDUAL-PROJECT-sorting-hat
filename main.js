const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    expel: "flase",
  }, 
  {
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    expel: "flase",
  },
  {
    id: 3,
    name: "Ron Weasley",
    house: "Gryffindor",
    expel: "true",
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
    expel: "true",
  },
  {
    id: 5,
    name: "Severus Snape",
    house: "Slytherin",
    expel: "true",
  },
  {
    id: 6,
    name: "Albus Potter",
    house: "Slytherin",
    expel: "flase",
  },
  {
    id: 7,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    expel: "flase",
  },
  {
    id: 8,
    name: "Pamona Sprout",
    house: "Hufflepuff",
    expel: "flase",
  },
  {
    id: 9,
    name: "Helga Hufflepuff",
    house: "Hufflepuff",
    expel: "flase",
  },
  {
    id: 10,
    name: "Luna Love Good",
    house: "Ravenclaw",
    expel: "flase",
  },
  {
    id: 11,
    name: "Sybill Trelawney",
    house: "Ravenclaw",
    expel: "flase",
  },
  {
    id: 3,
    name: "Myrtle Warren",
    house: "Ravenclaw", 
    expel: "flase",
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
      <button class="btn btn-danger" id="delete--${student.id}">Expel
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
  

  //create form 
  const form = document.querySelector('form')
  
  const addStudentObj = (event) => {
    event.preventDefault();
  const name =document.querySelector("#name");

  const housesToSort = [
    "Gryfindor",
    "Slytherin",
    "Hufflepuff",
    "Ravenclaw"
  ];
const sortedHouse = housesToSort[Math.floor(Math.random()*housesToSort.length)];
//console.log(sortedHouse);

    //create an object from values
    const addStudentObj = {
      name: name.value,
      house: sortedHouse,    
    };
    
      //push to student array
      students.push(addStudentObj);
    
      //rerender with new student 
      cardsOnDom(students);
      form.reset();
  };
    
    //add eventlistner
    
    const submitButton = document.querySelector("#form-submit");
    submitButton.addEventListener('click',addStudentObj);
    cardsOnDom(students)

// Expelling a student to volde army 
const appDiv = document.querySelector("#hat");
const armyDiv = document.querySelector("#army");
const army = [];

// 2. Add an event listener to capture clicks
appDiv.addEventListener('click', (event) => {
  // 3. check e.target.id includes "delete"
if(event.target.id.includes('delete')) {

  //4. add logic to remove from array
const [, studentId] = event.target.id.split("--");

const indexOfStudents = students.findIndex((event) => event.id === Number(studentId)
); 
const expelled = students.splice(indexOfStudents, 1);
}
army.push(expelled);
//expelled.house = "army"

// 5. Repaint the DOM with the updated array
cardsOnDom(students);
cardsOnDom(army);
}); 

const startApp = () =>{
  cardsOnDom(students);
}
startApp();
