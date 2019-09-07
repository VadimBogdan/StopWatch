function onPauseButtonClick(b) {
  initializePauseButtonTextNodes(b);

  let index;

  if ((index = findCorrectStopwatch()) || stopWatches[index]) {
    if (stopWatches[index].interval) {
      if (pauseUnpauseButtonTextNodeCurrent.textContent.trim() === 'Pause') {
        pauseStopWatch(stopWatches[index]);
      } else {
        unPauseStopWatch(stopWatches[index]);
      }
    }
  }
}

function pauseStopWatch(stopwatch) {
  stopwatch.initialTime = 0;
  clearInterval(stopwatch.interval);

  pauseUnpauseButtonTextNodeCurrent.nodeValue = 'Unpause';
}

function unPauseStopWatch(stopwatch) {
  resumeStopWatch(stopwatch);

  pauseUnpauseButtonTextNodeCurrent.nodeValue = 'Pause';
}

function resumeStopWatch(stopwatch) {
  stopWatchIntervals.setInitialTime(stopwatch);

  stopWatchIntervals.resumeStopWatchInterval(stopwatch);
}
