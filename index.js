const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function checkBirthDateIsLucky() {
    const birthdate = dateOfBirth.value;
    const sum = calculateSum(birthdate);
    if(sum&&birthdate)
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText="Please enter both  the fields"
}

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber === 0){
        outputBox.innerText="Your birthday is lucky🎉🎉";
    } else {
        outputBox.innerText="Your birthday is not lucky";
    }
}

function calculateSum(birthdate) {
    birthdate = birthdate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < birthdate.length; i++) {
        sum = sum + Number(birthdate.charAt(i));
    }
    return sum;
}


checkNumberButton.addEventListener('click', checkBirthDateIsLucky)