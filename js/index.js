// For Noakhali
document.getElementById('noakhali-submit-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputValue = getInputFieldValueById('noakhali-input-value');
        const myBalence = getTextFieldValueById('my-balence');

        if (isNaN(inputValue) || inputValue>myBalence){
            alert('Invalid Donate Amount');
            return;
        }

        const updatedDonateBalence = getTextFieldValueById('noakhali-donate-balence') + inputValue;
        const updatedMyBalence = myBalence - inputValue;

        document.getElementById('noakhali-donate-balence').innerText = updatedDonateBalence;
        document.getElementById('my-balence').innerText = updatedMyBalence;

        // create a history
        const div = document.createElement('div');
        div.classList.add('mb-6', 'bg-gray-100','border', 'rounded', 'shadow-lg', 'p-6', 'space-y-2');
        div.innerHTML = `
        <h3 class="text-xl font-bold">${inputValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
        <p class="text-base font-light">${getCurrentFormattedDate()}</p>
        `
        document.getElementById('history-section').appendChild(div);
        showModalById('confirmation-modal');
    });


// For Feni
document.getElementById('feni-submit-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputValue = getInputFieldValueById('feni-input-value');
        const myBalence = getTextFieldValueById('my-balence');

        if (isNaN(inputValue) || inputValue>myBalence){
            alert('Invalid Donate Amount');
            return;
        }

        const updatedDonateBalence = getTextFieldValueById('feni-donate-balence') + inputValue;
        const updatedMyBalence = myBalence - inputValue;

        document.getElementById('feni-donate-balence').innerText = updatedDonateBalence;
        document.getElementById('my-balence').innerText = updatedMyBalence;

        // create a history
        const div = document.createElement('div');
        div.classList.add('mb-6', 'bg-gray-100','border', 'rounded', 'shadow-lg', 'p-6', 'space-y-2');
        div.innerHTML = `
        <h3 class="text-xl font-bold">${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
        <p class="text-base font-light">${getCurrentFormattedDate()}</p>
        `
        document.getElementById('history-section').appendChild(div);
    });



// For Quota Protest
document.getElementById('quota-protest-submit-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const inputValue = getInputFieldValueById('quota-protest-input-value');
        const myBalence = getTextFieldValueById('my-balence');

        if (isNaN(inputValue) || inputValue>myBalence){
            alert('Invalid Donate Amount');
            return;
        }

        const updatedDonateBalence = getTextFieldValueById('quota-protest-donate-balence') + inputValue;
        const updatedMyBalence = myBalence - inputValue;

        document.getElementById('quota-protest-donate-balence').innerText = updatedDonateBalence;
        document.getElementById('my-balence').innerText = updatedMyBalence;

        // create a history
        const div = document.createElement('div');
        div.classList.add('mb-6', 'bg-gray-100','border', 'rounded', 'shadow-lg', 'p-6', 'space-y-2');
        div.innerHTML = `
        <h3 class="text-xl font-bold">${inputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
        <p class="text-base font-light">${getCurrentFormattedDate()}</p>
        `
        document.getElementById('history-section').appendChild(div);
    });


// For Donation Section show
document.getElementById('donation-btn')
    .addEventListener('click', function(){
        showSectionById('donation-section');
        selectedBtn('donation-btn');
});

// For History Section show
document.getElementById('history-btn')
    .addEventListener('click', function(){
        showSectionById('history-section');
        selectedBtn('history-btn');
});


// For Modal show
document.getElementById('modal-close-btn').addEventListener('click', function(){
    hiddenTheModalById('confirmation-modal');
})
