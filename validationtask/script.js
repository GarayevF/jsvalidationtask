let btn = document.querySelector('#submit')
let icon = document.querySelector('#icon')
let warning = document.querySelector('#warning')

let username;
let email;
let password;

let isIconActive = 0

let specialCharacterString = ",.!@#$%^&*{}[]_ ";
let mailExtensionsArr = ['gmail.com', 'mail.ru', 'code.edu.az']

btn.addEventListener('click', function(){
    username = document.querySelector('#userinp').value
    email = document.querySelector('#mailinp').value
    password = document.querySelector('#passinp').value
    
    warning.style.color = "#F1C40F"
    if(usernameCheck() && emailCheck() && passwordCheck()){
        warning.innerHTML = "Validasiya uğurlu oldu"
        warning.style.color = "#2ECC71"
    }else{
        warning.style.color = "#F1C40F"
    }
})

icon.addEventListener('click', function(){
    if (isIconActive) {
        document.querySelector('#passinp').setAttribute('type', 'password')
        icon.className = "fa-regular fa-eye";
        isIconActive = 0
    }else{
        document.querySelector('#passinp').setAttribute('type', 'text')
        icon.className = "fa-regular fa-eye-slash";
        isIconActive = 1
    }
})


function usernameCheck(){
    console.log(username)
    if (username.length < 6) {
        warning.innerHTML = "Username uzunlugu 6dan kicik ola bilmez"
        return false;
    }

    for (const i of username) {
        if (specialCharacterString.includes(i)) {
            warning.innerHTML = "Usernamedə special character ola bilmez"
            return false;
        }
    }

    if (username[0] != username[0].toUpperCase()) {
        warning.innerHTML = "Usernamein ilk herfi boyuk olmalidir"
        return false;
    }

    return true;
}

function emailCheck() {
    console.log(email)
    if(email.includes(' ') || !email.includes('@') || !email.includes('.')) {
        warning.innerHTML = "Emaili duzgun daxil edin"
        return false;
    }

    if (email.split('@').length > 2) {
        warning.innerHTML = "Yalniz bir eded @ isharesi islede bilersiniz"
        return false;
    }

    let left = email.split('@')[0];
    let right = email.split('@')[1];

    if (left.length < 3) {
        warning.innerHTML = "@ isharesinden evvel minimum 3 character olmalidir"
        return false;
    }

    if (!mailExtensionsArr.some(x => x == right)) {
        warning.innerHTML = "Mail extensionu duzgun daxil etmemisiniz"
        return false;
    }

    return true;
}

function passwordCheck() {
    console.log(password)

    if (password.length < 6 || password.length > 10) {
        warning.innerHTML = "Shifre minimum 6, maksimum 10 characterden ibaret olmalidir"
        return false;
    }

    let hasUpperCase = false;
    let hasNumber = false;
    let hasSpecialCharacter = false;

    for (const i of password) {
        if (i == i.toUpperCase()) {
            hasUpperCase = true;
        }
        if(!isNaN(Number(i))){
            hasNumber = true;
        }
        if (specialCharacterString.includes(i)) {
            hasSpecialCharacter = true;
        }
    }

    if(hasNumber && hasSpecialCharacter && hasUpperCase) {
        return true;
    }

    warning.innerHTML = "Shifrede minimum 1 reqem, minimum 1 special character ve 1 boyuk herf olmalidir"
    return false;
}





document.querySelector('#userinp').addEventListener('focus', function(){
    document.querySelector('.all .body :nth-child(1) input').style.border = '2px solid #0014FF'
})

document.querySelector('#userinp').addEventListener('blur', function(){
    document.querySelector('.all .body :nth-child(1) input').style.border = '2px solid gray'
})


document.querySelector('#mailinp').addEventListener('focus', function(){
    document.querySelector('.all .body :nth-child(2) input').style.border = '2px solid #0014FF'
})

document.querySelector('#mailinp').addEventListener('blur', function(){
    document.querySelector('.all .body :nth-child(2) input').style.border = '2px solid gray'
})


document.querySelector('#passinp').addEventListener('focus', function(){
    document.querySelector('.password-div').style.border = '2px solid #0014FF'
})

document.querySelector('#passinp').addEventListener('blur', function(){
    document.querySelector('.password-div').style.border = '2px solid gray'
})


