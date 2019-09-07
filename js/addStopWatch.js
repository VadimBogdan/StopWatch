function addOneStopWatch() {
  let item = document.getElementsByClassName('stopwatch')[0];
  let clone = item.cloneNode(true);

  clone.childNodes[1].lastChild.textContent = 'hi';
  clone.childNodes[3].children[1].firstChild.textContent = 'Pause';

  document.getElementById('stopwatches').appendChild(clone);

  stopWatches.push(
    new StopWatch(document.getElementById('stopwatches').lastChild)
  );
}
