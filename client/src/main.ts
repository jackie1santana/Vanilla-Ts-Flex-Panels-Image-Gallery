import '../public/style.css';

const panels = document.querySelectorAll('.panel') as NodeListOf<HTMLElement>;

const div = document.querySelectorAll('.div') as NodeListOf<HTMLElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toggleOpen(this: any): any {
    this.classList.toggle('open')
    console.log(this)
}

// this is gonna tell us what is transitioning (which css is changing?)
// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line max-len
//  * If the event property name includes the word 'flex', then toggle the class 'open-active' on the
//  * element that triggered the event.

function toggleActive(this: any, e: any): any {
    console.log(e.propertyName)
    
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))