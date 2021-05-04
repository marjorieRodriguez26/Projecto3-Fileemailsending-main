// Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');
// Event Listeners

eventListeners();

function eventListeners() {
  
    document.addEventListener('DOMContentLoaded', appInit);

 
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    email.addEventListener('blur', validateField);

   
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}
//Functions 

// App Initialization
function appInit() {
    // disable the send button on load
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();

 
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

 
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    
    setTimeout(function() {
        
        spinner.style.display = 'none';

        
    document.querySelector('#loaders').appendChild( sendEmailImg );
    

