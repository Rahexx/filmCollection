class Burger{
    constructor(){
        this.nav = document.querySelector('nav');
        this.bars = document.querySelector('.fa-bars');
        this.times = document.querySelector('.fa-times');
        document.querySelector('.burger').addEventListener('click', this.showBurger.bind(this));
    } 

    showBurger(){
        this.nav.classList.toggle('on');
        this.bars.classList.toggle('on');
        this.times.classList.toggle('on');
    }
}

