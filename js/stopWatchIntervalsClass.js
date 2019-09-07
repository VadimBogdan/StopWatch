class StopWatchIntervals {
  setInitialTime(stopwatch) {
    if (!stopwatch.initialTime) {
      stopwatch.initialTime = Date.now();
    }
  }

  resumeStopWatchInterval(stopwatch) {
    stopwatch.pastTime = stopwatch.nextTime;
    stopwatch.interval = setInterval(() => {
      stopwatch.nextTime =
        Date.now() - stopwatch.initialTime + stopwatch.pastTime;

      stopwatch.setNewTime();
    });
  }

  InitializeRootStopWatchInverval(stopwatch) {
    stopwatch.interval = setInterval(() => {
      stopwatch.nextTime = Date.now() - stopwatch.initialTime;

      stopwatch.setNewTime();
    });
  }
}
