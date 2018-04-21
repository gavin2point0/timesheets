  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8wocc44m8SPDLmqkzbLYKqp6Q-hDTGI0",
    authDomain: "timesheets-demo.firebaseapp.com",
    databaseURL: "https://timesheets-demo.firebaseio.com",
    projectId: "timesheets-demo",
    storageBucket: "",
    messagingSenderId: "983750965131"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

  var Name;
  var Role;
  var startDate;
  var monthlyRate;

  $('#submit').on('click', function() {
    event.preventDefault();

    employeeName = $('#name').val().trim();
    employeeRole = $('#role').val().trim();
    employeeStartDate = $('#start-date').val().trim();
    employeeMonthlyRate = $('#monthly-rate').val().trim();

    database.rel().push({
        name: employeeName,
        role: employeeRole,
        startDate: employeeStartDate,
        monthlyRate: employeMonthlyRate
    })


  })