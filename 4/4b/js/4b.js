var i = 2;

function validateForm() {

    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var alerts = document.getElementById("alerts");
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/;

    while (alerts.hasChildNodes()) {
        alerts.removeChild(alerts.lastChild);
    }

    if (fname === "" || lname === "" || email === "") {
        var ulAlertText = document.createTextNode("Wymagane pola muszą być uzupełnione");
        var li = document.createElement("li");
        li.appendChild(ulAlertText);
        alerts.appendChild(li);
        return false;
    }
    else if ( isNaN(fname) === false || isNaN(lname) === false ) {
        var ulAlertText = document.createTextNode("Imię / Nazwisko nie może być cyfrą");
        var li = document.createElement("li");
        li.appendChild(ulAlertText);
        alerts.appendChild(li);
        return false;
    }
    else if ( (fname.length > 10 || lname.length > 10) && (fname.length <= 2 || lname.length <= 2) ) {
        var ulAlertText = document.createTextNode("Wpisana fraza musi mieć od 2 do 10 znaków");
        var li = document.createElement("li");
        li.appendChild(ulAlertText);
        alerts.appendChild(li);
        return false;
    }
    else if ( !email.match(emailFormat) ) {
        var ulAlertText = document.createTextNode("Podany email jest nieprawidłowy");
        var li = document.createElement("li");
        li.appendChild(ulAlertText);
        alerts.appendChild(li);
        return false;
    }
    else {
        var ulAlertText = document.createTextNode("Dodano element");
        var li = document.createElement("li");
        li.appendChild(ulAlertText);
        alerts.appendChild(li);
        addStudent(fname, lname, email);
        return true;
    }

}

function addStudent(fname, lname, email) {
    var table = document.getElementById("students");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    i++;
}

function removeStudent() {
    // TODO
}