class StopWatch {
  constructor(source) {
    this.interval = null;
    this.source = source;
    this.nextTime = 0;
    this.initialTime = 0;
    this.pastTime = 0;
    this.textNode = source.childNodes[1].lastChild.firstChild;
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }
  setNewTime() {
    this.time.hours = Math.floor((this.nextTime / 1000 / 60 / 60) % 60);
    this.time.minutes = Math.floor((this.nextTime / 1000 / 60) % 60);
    this.time.seconds = Math.floor((this.nextTime / 1000) % 60);
    this.time.miliseconds = Math.floor(this.nextTime % 1000);

    this.textNode.nodeValue = ` ${this.time.hours}:${this.time.minutes}:
    ${this.time.seconds}:${this.time.miliseconds}`;
  }
}
