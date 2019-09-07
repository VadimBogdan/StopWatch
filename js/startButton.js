function startStopWatch(b) {
  initializeStartButtonTextNodes(b);

  let index;

  if ((index = findCorrectStopwatch()) || stopWatches[index]) {
    if (stopWatches[index].interval) {
      return;
    }

    stopWatchIntervals.setInitialTime(stopWatches[index]);

    stopWatchIntervals.InitializeRootStopWatchInverval(stopWatches[index]);
  }
}
