
class Clock {
    
    constructor(timer) {
        this.showFullTime = true;
        this.time = document.querySelector(timer);
    }
    render() { 
        this.now = new Date();
        this.hours = this.now.getHours() < 10 ? '0' + this.now.getHours() : this.now.getHours();
        this.minutes = this.now.getMinutes() < 10 ? '0' + this.now.getMinutes() : this.now.getMinutes();
        this.seconds = this.now.getSeconds() < 10 ? '0' + this.now.getSeconds() : this.now.getSeconds(); 
        this.time.innerHTML = this.showFullTime ? `${this.hours}:${this.minutes}:${this.seconds}`: `${this.hours}:${this.minutes}`;
       
    }
    switchTimeFormat () {
        this.time.addEventListener('click', () =>{
            this.showFullTime = !this.showFullTime;
        });
    }
}

      
let clock = new Clock('.time');
setInterval(() =>
    clock.render()
, 100);

clock.switchTimeFormat()
