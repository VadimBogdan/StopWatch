// function setStopWatchInterval(stopwatch) {
//   stopwatch.interval = setInterval(() => {
//     stopwatch.nextTime = Date.now() - stopwatch.initialTime;

//     setNewTime(stopwatch);
//   });
// }

// function resumeStopWatchInterval() {
//   pastTime = nextTime;
//   stopwatch.interval = setInterval(() => {
//     nextTime = Date.now() - stopwatch.initialTime + pastTime;

//     setNewTime();
//   });
// }

// function isIntialTime(stopwatch) {
//   if (!stopwatch.initialTime) {
//     stopwatch.initialTime = Date.now();
//   }
// }

// function setNewTime(stopwatch) {
//   stopwatch.time.hours = Math.floor((stopwatch.nextTime / 1000 / 60 / 60) % 60);
//   stopwatch.time.minutes = Math.floor((stopwatch.nextTime / 1000 / 60) % 60);
//   stopwatch.time.seconds = Math.floor((stopwatch.nextTime / 1000) % 60);
//   stopwatch.time.miliseconds = Math.floor(stopwatch.nextTime % 1000);

//   stopwatchTextNodeCurrent.nodeValue = ` ${stopwatch.time.hours}:${stopwatch.time.minutes}:
//   ${stopwatch.time.seconds}:${stopwatch.time.miliseconds}`;
// }
