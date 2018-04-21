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
