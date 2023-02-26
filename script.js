"use strict";

const question = [
    'what is your favorite hobby?',
    'How old are you?',
    'what is your name?',
    'do you have a girlfriend?',
];

let answers = []

function memories() {

    for ( let i = 0; i < question.length; i++ ){

       answers[i] = prompt(question[i]);

        if(answers[i] != '' && answers[i].length < 30){
            console.log('+');
        } else {
            i--
            console.log('-');
        }
    }
    let hobby = document.getElementById('my_hobbies').innerHTML = `${answers[0]}`
    let years = document.getElementById('my_years').innerHTML = `${answers[1]}`
    let name = document.getElementById('my_name').innerHTML = `${answers[2]}`
    let gf = document.getElementById('my_gf');
    let my_gf = document.getElementById('gf_text');
    
    if(answers[3] === 'no' || answers[3] === 'No'){
        gf.innerHTML = ``
        my_gf.innerHTML = `You dont have girlfriend`
    } else {
        let gf_answer = prompt('What is your girlfriends name?')
        gf.innerHTML = `${gf_answer}`
        my_gf.innerHTML = `You girlfriend's name:`
    }
    text()
return answers;
}

function text() {

    let pets = document.getElementById('my_pets')

    let animal = ''
    let animals = confirm('do you have pet(s)?');
    let animals_answer = document.getElementById('pets_text')
    if(animals == false) {

        animals_answer.innerHTML = `You dont have pet(s)`
        }else {
            animals_answer.innerHTML = `You have:`
            animal = prompt(`what pets you have?`)
            pets.innerHTML = `${animal}`;
            
        }
    }
// memories();


function changeTheme () {

    let icon = document.getElementById('Theme');
    let secondIcon = true
    icon.addEventListener('click', () => {

        const img = icon.querySelector('#icon_change')
        changeBg()
        if(secondIcon) {
            img.src = 'icon/sun.png'
        } else {
            img.src = 'icon/night-mode.png'
        }
        secondIcon = !secondIcon;

        changeColor()

    })

}
changeTheme()

let secondColor = false

function changeColor(){

    const orange = document.getElementById('hobbies')
    const blue = document.getElementById('years')
    const yellow = document.getElementById('name')
    const pink = document.getElementById('gf')
    const purple = document.getElementById('pets')
    if(secondColor) {
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
secondColor = !secondColor
}

let secondBg = false

    function changeBg() {

    let Bg = document.getElementById('first')

    if(secondBg) {
        Bg.style.backgroundImage = 'url(../img/dark.jpg)'
    } else {
        Bg.style.backgroundImage = 'url(img/light.jpg)'
    }
    secondBg = !secondBg
}

