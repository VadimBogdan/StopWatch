class StopWatchList {
  constructor() {
    var _stopWatches = [];
    this.addStopWatch = function(stopwatch) {
      _stopWatches.push(stopwatch);
    };
    this.getStopWatchByIndex = function(index) {
      return _stopWatches[index];
    };
    this.setStopWatchByIndex = function(stopwatch, index) {
      _stopWatches[index] = stopwatch;
    };
    this.findCorrectStopwatch = function(stopWatchEventHandler) {
      let index, val;
      index = _stopWatches.findIndex(stopwatch => {
        return (val =
          stopwatch.source ===
          stopWatchEventHandler.stopwatchTextNodeCurrent.parentElement
            .parentElement.parentElement);
      });

      return index;
    };
  }

  clear(button, stopWatchEventHandler) {
    stopWatchEventHandler.initializeClearButtonTextNodes(button);

    let index;

    index = this.findCorrectStopwatch(stopWatchEventHandler);
    if (index === 0 || index !== undefined) {
      if (this.getStopWatchByIndex(index).interval) {
        let elem = document.createElement('LI'),
          stopwatch = this.getStopWatchByIndex(index);

        elem.textContent =
          stopWatchEventHandler.stopwatchTextNodeCurrent.nodeValue;
        document.getElementById('history').childNodes[1].appendChild(elem);

        clearInterval(this.getStopWatchByIndex(index).interval);

        let info = {
          source: stopwatch.source,
          textNode: stopwatch.textNode
        };

        stopwatch = {};
        stopwatch = new StopWatch(info.source);
        stopwatch.textNode = info.textNode;
        stopwatch.textNode.nodeValue = '';

        this.setStopWatchByIndex(stopwatch, index);

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

    this.addStopWatch(
      new StopWatch(document.getElementById('stopwatches').lastChild)
    );
  }

  start(button, stopWatchEventHandler) {
    stopWatchEventHandler.initializeStartButtonTextNodes(button);

    let index;
    if (
      (index = this.findCorrectStopwatch(stopWatchEventHandler)) ||
      this.getStopWatchByIndex(index)
    ) {
      if (this.getStopWatchByIndex(index).interval) {
        return;
      }

      StopWatchIntervals.setInitialTime(this.getStopWatchByIndex(index));

      StopWatchIntervals.InitializeRootStopWatchInverval(
        this.getStopWatchByIndex(index)
      );
    }
  }

  pause(button, stopWatchEventHandler) {
    stopWatchEventHandler.initializePauseButtonTextNodes(button);

    let index;

    if (
      (index = this.findCorrectStopwatch(stopWatchEventHandler)) ||
      this.getStopWatchByIndex(index)
    ) {
      if (this.getStopWatchByIndex(index).interval) {
        if (
          stopWatchEventHandler.pauseUnpauseButtonTextNodeCurrent.textContent.trim() ===
          'Pause'
        ) {
          pauseStopWatch(
            this.getStopWatchByIndex(index),
            stopWatchEventHandler
          );
        } else {
          unPauseStopWatch(
            this.getStopWatchByIndex(index),
            stopWatchEventHandler
          );
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
