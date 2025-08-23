var d =false;
function marktext() {
    /* mark text */
    if(!d){

        let section = document.getElementById("section1");
        section.classList.add("markSection");
        section.classList.remove("section");
        d=true; //switch back to marked

    }
    /* un mark text */
    else{

        let section = document.getElementById("section1");
        section.classList.add("section");
        section.classList.remove("markSection");
        d=false; //switch back to unmarked

    }
}
function addstudentdata() 
 {
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;
    let grade = document.getElementById("gradeInput").value;
    
    addstudent(name, age, grade);
   
}

function showData(){
    const users = [
      { name: "Ali Ahmed", email: "ali@example.com" },
      { name: "Sara Mostafa", email: "sara@example.com" },
      { name: "Omar Khalid", email: "omar@example.com" },
      { name: "Lina Hussein", email: "lina@example.com" }
    ];

    const userList = document.querySelector("#UserTable tbody");

    for(let i = 0; i < users.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
        `;
        userList.appendChild(row);
    }
}
showData();

function addstudent( name, age, grade){
    let table = document.getElementById("studentTable");
    let row = table.insertRow(-1);
    let nameCell = row.insertCell(0);
    let ageCell = row.insertCell(1);
    let gradeCell = row.insertCell(2);
    nameCell.innerHTML = name;
    ageCell.innerHTML = age;
    gradeCell.innerHTML = grade;
}
