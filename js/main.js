const contactForm = document.getElementById('contact_form');
const contactFormName = document.getElementById('name');
const contactFormEmail = document.getElementById('email');
const contactFormMessage = document.getElementById('message');
const contactFormContactMessage = document.getElementById('contact_message');




const sendMail = (e) => {   
    e.preventDefault();
   


    if(contactFormName.value === '' || contactFormEmail.value === '' || contactFormMessage.value === '') {

        // show message error
        contactFormContactMessage.innerHTML = 'Please fill out all the fields';
        contactFormContactMessage.style.color = 'red';    
    }
    else{
        // service id - template id - #form  - publish key

        emailjs.sendForm('Your Service id', 'templateid', '#contact_form', 'Publishkey')
        .then(() =>{
        
            contactFormContactMessage.innerHTML = 'Message sent successfully';
            contactFormContactMessage.style.color = 'green';


           

            setTimeout(() => {  
                contactFormContactMessage.innerHTML = '';
            }, 5000);
        })
    }
};


contactForm.addEventListener('submit', sendMail);