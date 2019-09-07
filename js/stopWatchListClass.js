class StopWatchList {
  constructor() {
    this._stopWatches = [];
  }

  clear(b, stopWatchEventHandler) {
    stopWatchEventHandler.initializeClearButtonTextNodes(b);

    let index;

    if (
      (index = stopWatchEventHandler.findCorrectStopwatch(this)) ||
      this._stopWatches[index]
    ) {
      if (this._stopWatches[index].interval) {
        let elem = document.createElement('LI'),
          stopwatch = this._stopWatches[index];

        elem.textContent =
          stopWatchEventHandler.stopwatchTextNodeCurrent.nodeValue;
        document.getElementById('history').childNodes[1].appendChild(elem);

        clearInterval(this._stopWatches[index].interval);

        let info = {
          source: stopwatch.source,
          textNode: stopwatch.textNode
        };

        stopwatch = {};
        stopwatch = new StopWatch(info.source);
        stopwatch.textNode = info.textNode;
        stopwatch.textNode.nodeValue = '';

        this._stopWatches[index] = stopwatch;

        if (
          stopWatchEventHandler.pauseUnpauseButtonTextNodeCurrent.nodeValue ===
          'Unpause'
        ) {
          stopWatchEventHandler.pauseUnpauseButtonTextNodeCurrent.nodeValue =
            'Pause';
        }
      }
    }
  }

  addNew() {
    let item = document.getElementsByClassName('stopwatch')[0];
    let clone = item.cloneNode(true);

    clone.childNodes[1].lastChild.textContent = 'hi';
    clone.childNodes[3].children[1].firstChild.textContent = 'Pause';

    document.getElementById('stopwatches').appendChild(clone);

    this._stopWatches.push(
      new StopWatch(document.getElementById('stopwatches').lastChild)
    );
  }

  start(b, stopWatchEventHandler) {
    stopWatchEventHandler.initializeStartButtonTextNodes(b);

    let index;
    if (
      (index = stopWatchEventHandler.findCorrectStopwatch(this)) ||
      this._stopWatches[index]
    ) {
      if (this._stopWatches[index].interval) {
        return;
      }

      StopWatchIntervals.setInitialTime(this._stopWatches[index]);

      StopWatchIntervals.InitializeRootStopWatchInverval(
        this._stopWatches[index]
      );
    }
  }

  pause(b, stopWatchEventHandler) {
    stopWatchEventHandler.initializePauseButtonTextNodes(b);

    let index;

    if (
      (index = stopWatchEventHandler.findCorrectStopwatch(this)) ||
      this._stopWatches[index]
    ) {
      if (this._stopWatches[index].interval) {
        if (
          stopWatchEventHandler.pauseUnpauseButtonTextNodeCurrent.textContent.trim() ===
          'Pause'
        ) {
          pauseStopWatch(this._stopWatches[index], stopWatchEventHandler);
        } else {
          unPauseStopWatch(this._stopWatches[index], stopWatchEventHandler);
        }
      }
    }

    function pauseStopWatch(stopwatch, stopWatchEventHandler) {
      stopwatch.initialTime = 0;
      clearInterval(stopwatch.interval);

      stopWatchEventHandler.pauseUnpauseButtonTextNodeCurrent.nodeValue =
        'Unpause';
    }

    function unPauseStopWatch(stopwatch, stopWatchEventHandler) {
      resumeStopWatch(stopwatch);

      stopWatchEventHandler.pauseUnpauseButtonTextNodeCurrent.nodeValue =
        'Pause';
    }

    function resumeStopWatch(stopwatch) {
      StopWatchIntervals.setInitialTime(stopwatch);

      StopWatchIntervals.resumeStopWatchInterval(stopwatch);
    }
  }
}
