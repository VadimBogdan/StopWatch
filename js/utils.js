class StopWatchEventHadler {
  constructor() {
    this.stopwatchTextNodeCurrent = null;
    this.pauseUnpauseButtonTextNodeCurrent = null;
  }
  initializeStartButtonTextNodes(b) {
    this.stopwatchTextNodeCurrent =
      b.parentElement.previousElementSibling.lastChild.firstChild;
  }
  initializePauseButtonTextNodes(b) {
    this.stopwatchTextNodeCurrent =
      b.parentElement.previousElementSibling.lastChild.firstChild;
    this.pauseUnpauseButtonTextNodeCurrent = b.firstChild;
  }
  initializeClearButtonTextNodes(b) {
    this.stopwatchTextNodeCurrent =
      b.parentElement.previousElementSibling.lastChild.firstChild;
    this.pauseUnpauseButtonTextNodeCurrent =
      b.previousElementSibling.firstChild;
  }
  findCorrectStopwatch(stopWatchList) {
    let index, val;
    index = stopWatchList._stopWatches.findIndex(stopwatch => {
      return (val =
        stopwatch.source ===
        this.stopwatchTextNodeCurrent.parentElement.parentElement
          .parentElement);
    });
    return index;
  }
}
