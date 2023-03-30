console.log("YES JS is working");
const addButton = document.getElementById("add-passenger");
addButton.addEventListener("click", addInputField);

let existingRemovePassengerBtns = Array
.from(document.getElementsByClassName("default-remove-btn"))
.forEach((removeBtn) => {
    removeBtn.addEventListener("click", removeInputField);
})

function addInputField() {
    // Container 
    const newDiv = document.createElement("div");
    newDiv.classList.add("input-container");
    newDiv.classList.add("input-flex");

    // input fields
    const nameField = document.createElement("input");
    nameField.classList.add("input-field");
    nameField.type = "text";
    nameField.placeholder = "Name";

    const ageField = document.createElement("input");
    ageField.classList.add("input-field");
    ageField.type = "text";
    ageField.placeholder = "Age";

    const seatTypeField = document.createElement("select");
    seatTypeField.classList.add("input-field");

    const selectClassOption = document.createElement("option");
    selectClassOption.value = "Select class";
    selectClassOption.text = "Select class";
    selectClassOption.selected;
    seatTypeField.appendChild(selectClassOption);

    // Add options to select
    const seatClass = ["Business class", "First class", "Economy"];
    seatClass.map((eachElem) => {
        const createdOption = document.createElement("option");
        createdOption.value = eachElem;
        createdOption.innerText = eachElem;
        seatTypeField.appendChild(createdOption);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("remove-passenger");
    deleteButton.innerText = "Remove Passenger";

    //Add Event listener for the created Remove Button
    deleteButton.addEventListener("click", removeInputField); //By default an eventObj will be passed as an argument

    // Add fields to wrapper
    newDiv.appendChild(nameField);
    newDiv.appendChild(ageField);
    newDiv.appendChild(seatTypeField);
    newDiv.appendChild(deleteButton);


    // Add to main Div
    const mainDiv = document.querySelector(".wrapper");
    mainDiv.appendChild(newDiv);

}


// Whichever Element is being clicked Remove that parent Element 
function removeInputField(eventObj) {
    const clickedButton = eventObj.target;
    // console.log(clickedButton.innerText)
    clickedButton.parentElement.remove();
}


//Show Modal
const proceedToPaymentBtn = document.getElementById("proceed-payment");
proceedToPaymentBtn.addEventListener("click", handlePaymentClick);

//Show Passenger details
let totalFare = 0;
function handlePaymentClick() {
    let allPassengerDetails = Array.from(document.getElementsByClassName("input-container"));
    console.log(allPassengerDetails);

    if (allPassengerDetails.length === 0) {
        alert("Please enter passenger details");
        return;
    }

    allPassengerDetails.map((eachPassenger, index) => {
        const passengerName = eachPassenger.children[0].value;
        const age = eachPassenger.children[1].value;
        const seatType = eachPassenger.children[2].value;

        //Generate table content
        const tableRow = document.createElement("tr");

        const slNodata = document.createElement("td");
        slNodata.innerText = index + 1;
        const nameData = document.createElement("td");
        nameData.innerText = passengerName;
        const seatData = document.createElement("td");
        seatData.innerText = seatType;

        const fareData = document.createElement("td");
        let ticketFare;
        if (seatType === "Business class") {
            ticketFare = 8695;
        }
        else if (seatType === "First class") {
            ticketFare = 4795;
        }
        else if (seatType === "Economy") {
            ticketFare = 3995;
        }
        else {
            ticketFare = 0;
        }

        fareData.innerText = "\u20B9 " + ticketFare;
        totalFare += ticketFare;

        tableRow.appendChild(slNodata);
        tableRow.appendChild(nameData);
        tableRow.appendChild(seatData);
        tableRow.appendChild(fareData);

        const passengerDetailsTable = document.getElementsByTagName("table")[0];
        passengerDetailsTable.appendChild(tableRow);


    });

    document.getElementById("total-fare").innerText = "\u20B9 " + totalFare;
    const modal = document.getElementsByTagName("dialog");
    modal[0].showModal();
}

//Close Modal
const closeModalBtn = document.getElementById("close-modal");
closeModalBtn.addEventListener("click", () => {

    const getAllTableRows = document.getElementsByTagName("tr");
    let count = getAllTableRows.length;

    while (getAllTableRows.length !== 1) {
        getAllTableRows[count - 1].remove();
        count--;
    }

    totalFare = 0;
    const modal = document.getElementsByTagName("dialog");
    modal[0].close();
})

