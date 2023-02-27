"use strict";

function changeTheme(secondIcon) {

    const img = document.querySelector('#icon_change');    
    img.addEventListener('click', () => {

        ;
        if (secondIcon) {
            img.src = 'icon/sun.png';
        } else {
            img.src = 'icon/night-mode.png';
        }
        secondIcon = !secondIcon;

        changeBg ()
        changeColor()

    })

}
changeTheme(true);

let secondColor = false;

function changeColor(){

    const orange = document.getElementById('hobbies');
    const blue = document.getElementById('years');
    const yellow = document.getElementById('name');
    const pink = document.getElementById('gf');
    const purple = document.getElementById('pets');
    if (secondColor) {
        orange.style.backgroundColor = 'rgb(204, 85, 0)';
        orange.style.color = '#dbdbdb'
        blue.style.backgroundColor = 'rgb(0 0 128)';
        blue.style.color = '#dbdbdb'
        yellow.style.backgroundColor = '#cc9500';
        yellow.style.color = '#dbdbdb'
        pink.style.backgroundColor = '#d11d53';
        pink.style.color = '#dbdbdb'
        purple.style.backgroundColor = '#4B0082';
        purple.style.color = '#dbdbdb'
    }   else {
        orange.style.backgroundColor = 'lightsalmon';
        orange.style.color = 'black'
        blue.style.backgroundColor = 'lightblue';
        blue.style.color = 'black'
        yellow.style.backgroundColor = '#ffffa0';
        yellow.style.color = 'black'
        pink.style.backgroundColor = 'lightpink';
        pink.style.color = 'black'
        purple.style.backgroundColor = 'rgb(223, 124, 223)';
        purple.style.color = 'black'
    }
    secondColor = !secondColor;
}

let secondBg = false;

    function changeBg() {

    const Bg = document.getElementById('first')

    if(secondBg) {
        Bg.style.backgroundImage = 'url(../img/dark.jpg)';
    } else {
        Bg.style.backgroundImage = 'url(img/light.jpg)';
    }
    secondBg = !secondBg
}

