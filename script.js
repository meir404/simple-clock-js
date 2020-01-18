
setInterval(setClock, 1000);
const secondsHandElm = document.querySelector('[data-hand-second]');
const minutesHandElm = document.querySelector('[data-hand-minute]');
const hoursHandElm = document.querySelector('[data-hand-hour]');

function setClock() {
    const currenDate = new Date();

    const secondsRatio = currenDate.getSeconds() / 60;

    const minutesRatio = (secondsRatio + currenDate.getMinutes()) / 60;

    const hoursRatio = (minutesRatio + currenDate.getHours()) / 12;

    setDegreesHand(secondsHandElm, secondsRatio);
    setDegreesHand(minutesHandElm, minutesRatio);
    setDegreesHand(hoursHandElm, hoursRatio);
}

function setDegreesHand(element, deg) {
    element.style.setProperty('--hand-degrees', deg * 360);
}

setClock();

