// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        $('#get-student-btn').click(getStudents);
    };

    function getStudents() {
        const baseSurviceUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students";
        const kinveyUsername = "guest";
        const kinveyPassword = "guest";
        const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);

        $.ajax({
            type: "GET",
            url: baseSurviceUrl,
            headers: {
                "Authorization": "Basic " + base64Auth
            },
            success: function (results) {
                showStudentData(results);

            },
            error: function (jqXHR) {
                $('#error-msg').show();
                $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
            }
        });
        return false;
    }

    function showStudentData(students) {
        const studentName = $('#student-name').val();
        const result = students.filter(st => st.FirstName == studentName)[0];
        if (result == undefined) {
            alert("There is no data for " + studentName);
            return false;
        }
        console.log(result);

        $("#error-msg").hide();
        $("#student-data").show();

        $("#firstName").text(result.FirstName);
        $("#lastName").text(result.LastName);
        $("#facultyNumber").text(result.FacultyNumber);
        $("#grade").text(result.Grade);
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();