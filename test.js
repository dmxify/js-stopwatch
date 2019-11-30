// require the module
const Stopwatch = require('./index'); // this will be 'js-stopwatch' in dependant modules

// create an instance of the Stopwatch class
let myStopwatch = new Stopwatch({
  alarm: alarmCallback, // callback to execute...
  timeAlarmMS: 2000 // ... when stopwatch reaches 2 seconds
});

// we expect this to be called after 2 seconds
function alarmCallback() {
  console.log('Alarm callback has been executed');
}

// start the stopwatch
myStopwatch.start();

// lets delay the alarm by restarting the stopwatch every second, 5 times in a row:
restartFiveTimes();

function restartFiveTimes() {
  let numRestarts = 0;
  const interval = setInterval(() => {
    myStopwatch.restart(); // restart the stopwatch, delaying the alarm.
    numRestarts++;
    console.log(`Stopwatch restarted. Alarm delayed. [total restarts: ${numRestarts}]`);
    if (numRestarts == 5) {
      clearInterval(interval);
    }
  }, 1000);
}
