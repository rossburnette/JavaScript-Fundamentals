//CREDENTIALS
const baseSurviceUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students";
const kinveyUsername = "guest";
const kinveyPassword = "guest";
const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);

function students() {
    loadStudents();
}

function loadStudents() {
    const request = {
        url: baseSurviceUrl,
        method: "GET",
        headers: {
            "Authorization": "Basic " + base64Auth
        }
    };

    $.get(request)
        .then(displayStudents);
}

function displayStudents(students) {
    $('#results').find('tr').nextAll().remove();
    for (let student of students) {
        $("#results")
            .append($('<tr>')
                .append($('<td>').text(student.ID))
                .append($('<td>').text(student.FirstName))
                .append($('<td>').text(student.LastName))
                .append($('<td>').text(student.FacultyNumber))
                .append($('<td>').text(student.Grade))
            );
    }
}

$("#addStudent").click(() => {
    //CONSTANTS
    const id = Number($('#ID').val());
    const firstName = $('#FirstName').val().trim();
    const lastName = $('#LastName').val().trim();
    const facultyNumber = $('#FacultyNumber').val();
    const grade = Number($('#Grade').val());

    const requestData = {
        ID: id,
        FirstName: firstName,
        LastName: lastName,
        FacultyNumber: facultyNumber,
        Grade: grade
    };

    const request = {
        url: baseSurviceUrl,
        method: "POST",
        headers: {
            "Authorization": "Basic " + base64Auth,
            "Content-type": "application/json"
        },
        data: JSON.stringify(requestData)
    };
    
    //TODO: ADD validation
    $.ajax(request)
        .then(loadStudents)
        .then(alert("Successful POST request!"));
});