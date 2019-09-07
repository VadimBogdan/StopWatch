function clearStopWatch(b) {
  initializeClearButtonTextNodes(b);

  let index;

  if ((index = findCorrectStopwatch()) || stopWatches[index]) {
    if (stopWatches[index].interval) {
      let elem = document.createElement('LI'),
        stopwatch = stopWatches[index];

      elem.textContent = stopwatchTextNodeCurrent.nodeValue;
      document.getElementById('history').childNodes[1].appendChild(elem);

      clearInterval(stopWatches[index].interval);

      let info = {
        source: stopwatch.source,
        textNode: stopwatch.textNode
      };

      stopwatch = {};
      stopwatch = new StopWatch(info.source);
      stopwatch.textNode = info.textNode;
      stopwatch.textNode.nodeValue = '';

      stopWatches[index] = stopwatch;

      if (pauseUnpauseButtonTextNodeCurrent.nodeValue === 'Unpause') {
        pauseUnpauseButtonTextNodeCurrent.nodeValue = 'Pause';
      }
    }
  }
}
