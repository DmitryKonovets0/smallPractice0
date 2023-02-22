"use strict";

const question = [
    'what is your favorite hobby?',
    'how are you old?',
    'what is your name?',
    'do you have a gf?',
];

let answers =[]

function memories() {


    for ( let i = 0; i < question.length; i++ ){

       answers[i] = prompt(question[i])
        if(answers[i] != '' && answers[i].length < 30){
            console.log('+');
        } else {
            i--
            console.log('-');
        }
    }

return answers;

}
console.log(memories());

function text() {
    

    let animal = ''
    let animals = confirm('do you have animal?');

    for(let i = 0; i < 1; i++) {

        if(animals === true){
            animal = prompt('Which animal you have?')

        }
            if(animal !== '') {
                console.log('+');
            } else {
                console.log('-');
                i--
            }
    }
    document.write(`Hello ${answers[2]}, you are ${answers[1]} years`)

}
text()
