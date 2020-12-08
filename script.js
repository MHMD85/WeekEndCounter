let submitBtn = document.getElementById('btn');
let inputField = document.getElementById('username');
let para = document.querySelector('p');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    let username = inputField.value;
    let date = new Date();
    let weekday = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let daysLeft = 5 - date.getDay();
    //let weekday = date.toLocaleDateString('en-EN', {weekday: 'long'});
    let hours = 24 - date.getHours();
    
    if (date.getDay() === 5 || daysLeft === -1) {
        para.innerHTML = `${username}, its already weekend!`
    }
    else if (daysLeft < 1) {
        para.innerHTML = `${username}, only ${hours}  its already weekend!`
    }
    else {
        para.innerHTML = `Hello ${username}. Today is ${weekday[date.getDay()]}. Only ${daysLeft} days left until weekend!`
    }
},)

