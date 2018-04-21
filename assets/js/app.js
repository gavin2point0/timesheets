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


  $('#add-user').on('click', function() {
    event.preventDefault();

    let employeeName = $('#name-input').val().trim();
    let employeeRole = $('#role-input').val().trim();
    let employeeStartDate = $('#date-input').val().trim();
    let employeeMonthlyRate = $('#rate-input').val().trim();

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

database.ref().on('child_added', function(childSnapshot){

  let snapName = childSnapshot.val().name;
  let snapRole = childSnapshot.val().role;
  let snapStartDate = childSnapshot.val().startDate;
  let currentDate = moment().format('YYYY-MM-DD');
  let monthsWorked = moment(currentDate).diff(snapStartDate, 'months');
  let snapMonthlyRate = childSnapshot.val().monthlyRate;
  let billableHours = (monthsWorked * snapMonthlyRate);
  
  let newRow = $('<tr>')

  let nameCell = $('<td class="employee-name">').text(snapName)
  let roleCell = $('<td class="employee-role">').text(snapRole)
  let startCell = $('<td class="employee-start-date">').text(snapStartDate)
  let workedCell = $('<td class="employee-months-worked">').text(monthsWorked)
  let rateCell = $('<td class="employee-monthly-rate">').text(snapMonthlyRate)
  let billableCell = $('<td class="employee-billable-hours">').text(billableHours)

  
  newRow.append(nameCell).append(roleCell).append(startCell).append(workedCell).append(rateCell).append(billableHours)
  $('#current-employees').append(newRow);

  
})
