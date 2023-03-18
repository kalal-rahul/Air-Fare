console.log("YES JS is working")
const addButton = document.getElementById("add-passenger")
addButton.addEventListener("click", addInputField)


function addInputField() {
    // Container 
    const newDiv = document.createElement("div");
    newDiv.classList.add("input-container");
    newDiv.classList.add("input-flex");

    // input fields
    const nameField = document.createElement("input")
    nameField.classList.add("input-field");
    nameField.type = "text"
    nameField.placeholder = "Name"

    const ageField = document.createElement("input")
    ageField.classList.add("input-field");
    ageField.type = "text";
    ageField.placeholder = "Age";

    const seatTypeField = document.createElement("input")
    seatTypeField.classList.add("input-field");
    seatTypeField.type = "text";
    seatTypeField.placeholder = "Seat Type";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("remove-passenger")
    deleteButton.innerText = "Remove Passenger";

    //Add Event listener for the created Remove Button
    deleteButton.addEventListener("click", removeInputField) //By default an eventObj will be passed as an argument

    // Add fields to wrapper
    newDiv.appendChild(nameField);
    newDiv.appendChild(ageField);
    newDiv.appendChild(seatTypeField);
    newDiv.appendChild(deleteButton);


    // Add to main Div
    const mainDiv = document.querySelector(".wrapper")
    mainDiv.appendChild(newDiv);

}


// Whichever Element is being clicked Remove that parent Element 
function removeInputField(eventObj) {
    const clickedButton = eventObj.target;
    // console.log(clickedButton.innerText)
    clickedButton.parentElement.remove();
} 
