class StopWatchIntervals {
  static setInitialTime(stopwatch) {
    if (!stopwatch.initialTime) {
      stopwatch.initialTime = Date.now();
    }
  }

  static resumeStopWatchInterval(stopwatch) {
    stopwatch.pastTime = stopwatch.nextTime;
    stopwatch.interval = setInterval(() => {
      stopwatch.nextTime =
        Date.now() - stopwatch.initialTime + stopwatch.pastTime;

      stopwatch.setNewTime();
    });
  }

  static InitializeRootStopWatchInverval(stopwatch) {
    stopwatch.interval = setInterval(() => {
      stopwatch.nextTime = Date.now() - stopwatch.initialTime;

      stopwatch.setNewTime();
    });
  }
}
