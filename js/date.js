var today = new Date();
var curHr = today.getHours();

if (curHr < 12) {
  greeting = "Good Morning";
} else if (curHr < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

function date() {
  let today = document.getElementById('greeting');
  today.innerHTML = greeting;
}

function actualDate() {
    let todayDate = document.getElementById('todays-date');
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    todayDate.innerHTML = new Date().toLocaleDateString('en-EN', options);
  }

date();
actualDate();