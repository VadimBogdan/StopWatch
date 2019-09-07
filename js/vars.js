var stopWatchEventHandler = new StopWatchEventHadler();
var stopWatchList = new StopWatchList();

stopWatchList._stopWatches.push(
  new StopWatch(document.getElementById('stopwatches').childNodes[1])
);
