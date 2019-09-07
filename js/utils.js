function initializeStartButtonTextNodes(b) {
  stopwatchTextNodeCurrent =
    b.parentElement.previousElementSibling.lastChild.firstChild;
}
function initializePauseButtonTextNodes(b) {
  stopwatchTextNodeCurrent =
    b.parentElement.previousElementSibling.lastChild.firstChild;
  pauseUnpauseButtonTextNodeCurrent = b.firstChild;
}
function initializeClearButtonTextNodes(b) {
  stopwatchTextNodeCurrent =
    b.parentElement.previousElementSibling.lastChild.firstChild;
  pauseUnpauseButtonTextNodeCurrent = b.previousElementSibling.firstChild;
}
function findCorrectStopwatch() {
  let index, val;
  index = stopWatches.findIndex(stopwatch => {
    return (val =
      stopwatch.source ===
      stopwatchTextNodeCurrent.parentElement.parentElement.parentElement);
  });
  return index;
}
