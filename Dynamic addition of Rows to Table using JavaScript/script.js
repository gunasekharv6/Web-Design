//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");



const downArrowChecks = [true, true, true];
const checkedList = [];
const checkBoxChecks = [true, true, true];

const approvalStatus = ["Approved", "On Hold", "Not Approved", "Sent for further evaluation"];
const semester = ["Fall", "Spring", "Summer"];
const jobType = ["TA", "RA", "Lab Assistant"]

// Down arrow functionality

function downArrow(x) {
  const rowElement = x.parentElement.parentElement;
  console.log(rowElement);
  const rowIndex = rowElement.rowIndex;
  const flagIndex = (rowIndex - 1) / 2;
  let exRow = null;
  if (downArrowChecks[flagIndex]) {
    console.log("true");
    console.log(rowElement);
    if (rowElement.classList.contains("newrow"))
      exRow = rowElement.nextSibling;
    else exRow = rowElement.nextSibling.nextSibling;
    // exRow.classList.remove("hidden");
    exRow.classList.toggle("dropDownTextArea");
    downArrowChecks[flagIndex] = false;
  } else {
    console.log("false");
    if (rowElement.classList.contains("newrow"))
      exRow = rowElement.nextSibling;
    else exRow = rowElement.nextSibling.nextSibling;
    // exRow.classList.add("hidden");
    exRow.classList.toggle("dropDownTextArea");
    downArrowChecks[flagIndex] = true;
  }
}

const imgs = document.querySelectorAll('img');
for (let im of imgs) {
  im.addEventListener('click', function () {
    console.log(im.parentElement.parentElement);
    im.parentElement.parentElement.nextElementSibling.classList.toggle('dropDownTextArea');
  })
}




//Add New Row functionality

const newStudentbtn = document.querySelector('#add');
newStudentbtn.addEventListener('click', addButton);


let counter = 3, budget = 34567;

function addButton() {
  counter++;
  budget++;
  const table = document.querySelector("#myTable");

  try {
    //create and add Edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("hidden");



    //create and add delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onclick", "deleteRow(this)");
    deleteButton.classList.add("hidden");
    const row = table.insertRow();
    row.setAttribute("class", "newrow");
    const c1 = row.insertCell(0);
    c1.innerHTML =
      '<input type="checkbox" onclick="Checked(this)" /><br /><br /><img src="down.png" width="25px" onclick="downArrow(this)" />';
    const c2 = row.insertCell(1);
    const c3 = row.insertCell(2);
    const c4 = row.insertCell(3);
    const c5 = row.insertCell(4);
    const c6 = row.insertCell(5);
    const c7 = row.insertCell(6);
    const c8 = row.insertCell(7);
    const c9 = row.insertCell(8);
    const c10 = row.insertCell(9);
    c2.innerHTML = `Student ${counter}`;
    c3.innerHTML = `Teacher ${counter}`;
    c4.innerHTML = `${approvalStatus[Math.floor(Math.random() * approvalStatus.length)]}`;
    c5.innerHTML = `${semester[Math.floor(Math.random() * semester.length)]}`;
    c6.innerHTML = `${jobType[Math.floor(Math.random() * jobType.length)]}`;
    c7.innerHTML = `${budget}`;
    c8.innerHTML = `${Math.floor(Math.random() * 100)}%`;
    c9.appendChild(editButton);
    c10.appendChild(deleteButton);
    alert("Record added Succesfully");

    checkBoxChecks.push("true");
    downArrowChecks.push("true");

    const row2 = table.insertRow();
    row2.classList.add("dropDownTextArea");
    row2.innerHTML =
      '<tr><td colspan="8"> Advisor:<br /><br /> Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /></td></tr>';
  }

  catch {
    alert("Record addition failed");
  }
}


//Delete Row functionality

function deleteRow(x) {
  let retdelconfirm = confirm("Are you sure you want to Delete this Record?")
  if (retdelconfirm) {
    const rowElement = x.parentElement.parentElement;
    const rowIndex = rowElement.rowIndex;
    document.querySelector("#myTable").deleteRow(rowIndex + 1);
    document.querySelector("#myTable").deleteRow(rowIndex);
    const flagIndex = (rowIndex - 1) / 2;
    downArrowChecks.splice(flagIndex, 1);
    checkBoxChecks.splice(flagIndex, 1);
    checkedList.pop();
    if (checkedList.length == 0) {
      document.querySelector("#button").disabled = true;
      console.log(document.querySelector("#button").disabled);
    }
    alert("Record deleted successfully");
  }

  else {
    alert("Record Deletion Aborted");
  }
}


// Check-box funcitonality

function Checked(x) {
  console.log(x);
  const rowElement = x.parentElement.parentElement;

  const rowIndex = rowElement.rowIndex;
  const flagIndex = (rowIndex - 1) / 2;
  console.log(rowElement);
  const lastcolumn = rowElement.lastElementChild;
  const editcolumn = lastcolumn.previousElementSibling;
  // console.log(editcolumn);
  const button = lastcolumn.children[0];
  const editbutton = editcolumn.children[0];
  if (checkBoxChecks[flagIndex]) {
    rowElement.style.backgroundColor = "yellow";
    checkBoxChecks[flagIndex] = false;
    button.classList.remove("hidden");
    editbutton.classList.remove("hidden");
    checkedList.push(flagIndex);
    alert("Edit the details");
  } else {
    checkBoxChecks[flagIndex] = true;
    rowElement.style.backgroundColor = "white";
    button.classList.add("hidden");
    editbutton.classList.add("hidden");
    const toDeleteRowIndex = checkedList.indexOf(flagIndex);
    checkedList.splice(toDeleteRowIndex, 1);
  }

  console.log(checkedList);

  if (checkedList.length == 0) {
    document.querySelector("#button").disabled = true;
  } else {
    document.querySelector("#button").disabled = false;
  }
}
