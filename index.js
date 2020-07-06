let shifts = new Array(
    "12AM - 1AM", //0
    "1AM - 2AM",  //1
    "2AM - 3AM",  //2
    "3AM - 4AM",  //3
    "4AM - 5AM",  //4
    "5AM - 6AM",  //5
    "6AM - 7AM",  //6
    "7AM - 8AM",  //7
    "8AM - 9AM",  //8
    "9AM - 10AM", //9
    "10AM - 11AM",//10
    "11AM - 12PM",//11
    "12PM - 1PM", //12
    "1PM - 2PM",  //13
    "2PM - 3PM",  //14
    "3PM - 4PM",  //15
    "4PM - 5PM",  //16
    "5PM - 6PM",  //17
    "6PM - 7PM",  //18
    "7PM - 8PM",  //19
    "8PM - 9PM",  //20
    "9PM - 10PM",  //21
    "10PM - 11PM",  //22
    "11PM - 12AM",  //23
);

function drawAll() {

    // let theDiv = document.getElementById("data");

    // let test = document.createElement("H3");
    // let testText = document.createTextNode("Test");
    // test.appendChild(testText);
    // theDiv.appendChild(test);
    createHeaders();
    console.log(shifts);
    
    let dayIndex = 1;

    // Add TL Shifts
    
    let tlNum = 1;
    let guardNum = 1;

    for(let j = 1; j <= 7; j++) {
        for(let i = 0; i < shifts.length; i++, tlNum++, guardNum++) {
            let tl = "Team Lead #" + tlNum;
            let grd = "Guard #" + guardNum;
            addShift(tl, shifts[i], j);
            addShift(grd, shifts[i], j);
        }
    }

}


function createHeaders() {
    console.log("Hello from the ting man");
    // draw the table lol
    let theTable = document.getElementById("schedule");

    // draw the table row section
    let labelRow = document.createElement("tr");
    labelRow.setAttribute("id", "headerRow");
    theTable.appendChild(labelRow);

    addHeader("Name", "headerRow");
    addHeader("Friday", "headerRow");   //1
    addHeader("Saturday", "headerRow"); //2
    addHeader("Sunday", "headerRow");   //3
    addHeader("Monday", "headerRow");   //4
    addHeader("Tuesday", "headerRow");  //5
    addHeader("Wednesday", "headerRow");//6
    addHeader("Thursday", "headerRow"); //7
    
    return;
}

function addHeader(value, rowName) {

    let theRow = document.getElementById(rowName);
    let nameTH = document.createElement("th");
    let nameText = document.createTextNode(value);
    nameTH.appendChild(nameText);
    theRow.appendChild(nameTH);
    return;
}

function addShift(name, shift, day) {

    let uniqueId = name+shift+day;
    let theTable = document.getElementById("schedule");
    let shiftRow = document.createElement("tr");    

    shiftRow.setAttribute("id", uniqueId);
    theTable.appendChild(shiftRow);

    addCell(name, uniqueId);

    for(let i = 1; i <= 7; i++) {
        if (day == i) {
            addCell(shift, uniqueId);
        } else {
            addBlankCell(uniqueId);
        }
    }
    return;
}

function addCell(value, row) {

    let theRow = document.getElementById(row);
    let cellData = document.createElement("td");  
    let cellP = document.createElement("p");       
    let cellText = document.createTextNode(value);

    cellP.appendChild(cellText);
    cellData.appendChild(cellText);
    theRow.appendChild(cellData); 
    
    return;
}

function addBlankCell(row) {
    let theRow = document.getElementById(row);
    let cellData = document.createElement("td");  
    let cellP = document.createElement("p");       
    let cellText = document.createTextNode("");
    cellP.appendChild(cellText);
    cellData.appendChild(cellText);
    theRow.appendChild(cellData);     
    return;
}