// The class that supports the event on the burger
class Burger {
    constructor() {
        this.nav = document.querySelector('nav');
        this.bars = document.querySelector('.fa-bars');
        this.times = document.querySelector('.fa-times');
        document.querySelector('.burger').addEventListener('click', this.showBurger.bind(this));
    }

    // Function that changes the appearance of the burger and the appearance or disappearance of navigation
    showBurger() {
        this.nav.classList.toggle('on');
        this.bars.classList.toggle('on');
        this.times.classList.toggle('on');
    }
}
