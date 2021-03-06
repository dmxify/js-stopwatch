/**
 * JS Stopwatch class with start, restart, stop, reset & alarm (AKA execute callback) methods.
 * You can reset the elapsed time before the alarm time is reached as you would with a real stopwatch.
 */
const Stopwatch = class {
  /**
   * @constructor
   * @param options
   * @param {callback} options.alarm - callback function to execute when Stopwatch's elapsed time is reached
   * @param {number} options.timeAlarmMS - time in milliseconds before alarm callback is executed.
   */
  constructor({
    alarm = () => {},
    timeAlarmMS = null
  } = {
    alarm: () => {},
    timeAlarmMS: null
  }) {
    this._timer;
    this._timeElapsedMS = 0;
    this._timeIncrementMS = 50;
    this._alarm = alarm;
    this._timeAlarmMS = timeAlarmMS;
  }

  /**
   * Starts the stopwatch
   */
  start() {
    this._timer = setInterval(this.incrementElapsedTime.bind(this), this._timeIncrementMS);
  }

  /**
   * Stops the stopwatch
   */
  stop() {
    clearInterval(this._timer);
  }

  /**
   * Stops the stopwatch and clears elapsed time
   */
  reset() {
    this.stop();
    this._timeElapsedMS = 0;
  }

  /**
   * Resets (stop and clear elapsed time) and starts the stopwatch again
   */
  restart() {
    this.reset();
    this.start();
  }

  /**
   * @private
   */
  incrementElapsedTime() {
    this._timeElapsedMS += this._timeIncrementMS;
    if (this._timeElapsedMS >= this._timeAlarmMS) {
      this.reset()
      this._alarm();
    }
  }


}


module.exports = Stopwatch;
