
class Clock {
    
    constructor() {
        this.showFullTime = true;
        this.time = document.querySelector('.time');
    }
    render() { 
        this.now = new Date();
        this.hours = this.now.getHours() < 10 ? '0' + this.now.getHours() : this.now.getHours();
        this.minutes = this.now.getMinutes() < 10 ? '0' + this.now.getMinutes() : this.now.getMinutes();
        this.seconds = this.now.getSeconds() < 10 ? '0' + this.now.getSeconds() : this.now.getSeconds(); 
        // this.time.innerHTML=`${this.hours}:${this.minutes}:${this.seconds}`;
        this.showFullTime ? this.time.innerHTML=`${this.hours}:${this.minutes}:${this.seconds}`: this.time.innerHTML=`${this.hours}:${this.minutes}`;
       
    }
    switchTimeFormat () {
        this.time.addEventListener('click', () =>{
            this.showFullTime = !this.showFullTime;
        });
    }
}


let clock = new Clock;
setInterval(() =>
    clock.render()
, 100);

clock.switchTimeFormat()
