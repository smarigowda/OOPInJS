// Stop watch exercise.
function StopWatch() {
    console.log(this);
    let _duration = 0;
    let _interval;
    let _started = false;
    this.start = () => {
        if(_started) {
            throw new Error('Watch is already running, stop it first.');
        }
        _interval = setInterval(() => {
            _duration++;
        }, 1000);
        _started = true;
    }
    this.stop = () => {
        if(!_started) {
            throw new Error('Watch is not yet started. You can can not stop/ reset a watch which is not started yet !');
        }
        clearInterval(_interval);
        console.log('watch stopped.');
        _started = false;
    }
    this.reset = () => {
        this.stop();
        _duration = 0;
        console.log('duration is reset.');
    }
    Object.defineProperty(this, 'duration', {
        get: () => {
            return _duration;
        }
    });
}
const sw = new StopWatch();
sw.start();