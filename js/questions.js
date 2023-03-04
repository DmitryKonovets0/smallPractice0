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
    textFun()
return answers;
}

function textFun() {

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
memories();