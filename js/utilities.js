
// Calling value of input field
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
};


// Calling value of any html element
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
};

// Donation and History show/hide or toggle
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};



// Function to get formatted current date and time
function getCurrentFormattedDate() {
    const now = new Date();
    const timezoneOffset = now.getTimezoneOffset();
    const offsetHours = String(Math.abs(Math.floor(timezoneOffset / 60))).padStart(2, '0');
    const offsetMinutes = String(Math.abs(timezoneOffset % 60)).padStart(2, '0');
    const offsetSign = timezoneOffset > 0 ? '-' : '+';

    const output = `Date : ${now.toString().replace(/GMT.*/, `GMT ${offsetSign}${offsetHours}${offsetMinutes}, (Bangladesh Standard Time)`)}`;

    return output;
};
    