  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCW_UIOp2bU3yw7ZJdU6KxzzGDj9LNKwNU",
    authDomain: "classpractice-22c2d.firebaseapp.com",
    databaseURL: "https://classpractice-22c2d.firebaseio.com",
    projectId: "classpractice-22c2d",
    storageBucket: "classpractice-22c2d.appspot.com",
    messagingSenderId: "137209385054"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

  var Name;
  var Role;
  var startDate;
  var monthlyRate;

  $('#add-user').on('click', function() {
    event.preventDefault();

    employeeName = $('#name-input').val().trim();
    employeeRole = $('#role-input').val().trim();
    employeeStartDate = $('#date-input').val().trim();
    employeeMonthlyRate = $('#rate-input').val().trim();

    $('#name-input').val('');
    $('#role-input').val('');
    $('#date-input').val('');
    $('#rate-input').val('');

    database.ref().push({
        name: employeeName,
        role: employeeRole,
        startDate: employeeStartDate,
        monthlyRate: employeeMonthlyRate
    })


  })