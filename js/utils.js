class StopWatchEventHadler {
  constructor() {
    this.stopwatchTextNodeCurrent = null;
    this.pauseUnpauseButtonTextNodeCurrent = null;
  }
  initializeStartButtonTextNodes(button) {
    this.stopwatchTextNodeCurrent =
      button.parentElement.previousElementSibling.lastChild.firstChild;
  }
  initializePauseButtonTextNodes(button) {
    this.stopwatchTextNodeCurrent =
      button.parentElement.previousElementSibling.lastChild.firstChild;
    this.pauseUnpauseButtonTextNodeCurrent = button.firstChild;
  }
  initializeClearButtonTextNodes(button) {
    this.stopwatchTextNodeCurrent =
      button.parentElement.previousElementSibling.lastChild.firstChild;
    this.pauseUnpauseButtonTextNodeCurrent =
      button.previousElementSibling.firstChild;
  }
}
