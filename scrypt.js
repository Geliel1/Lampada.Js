const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');
const restart = document.getElementById ('restaurar');

function isLampBroker () {
    return lamp.src.indexOf ('quebrada') >-1
}



function lampOn(){
    if (!isLampBroker ()) {
        lamp.src = './img/ligada.jpg';
    }
}

function restal() {
    lamp.src = './img/desligada.jpg';
}

function lampOff(){
    if (!isLampBroker ()) {
        lamp.src = './img/desligada.jpg';
    }
}

function quebrarLampada() {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
restart.addEventListener ('click', restal);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', quebrarLampada);

