/* nav bar for mobile
*/ 
function myFunction() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Mixitup */

var mixerProjects = mixitup(".projects__container", {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((element) => element.classList.remove('active-work'));
    this.classList.add('active-work')
}

linkWork.forEach((ele) => ele.addEventListener('click', activeWork));


/* Contact Form */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (ele) => {
    ele.preventDefault();

    //check if the field has value
    if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show message
        contactMessage.textContent = 'Write all the input fields';
    } else {
        //serviceID - templateID - #form - public key

        emailjs.sendForm('service_rcqhj4u', 'template_j32uzij', '#contact-form', 'O0vD_KxqfDOJFTg4t').then(()=>{
            //show message and add color
            contactMessage.classList.add('color-light');
            contactMessage.textContent='Message sent ✔';

            //remove message after 5sec
            setTimeout(()=>{
                contactMessage.textContent='';
            },3000);
        },
        (error)=>{
            alert('OOPs! Something went wrong...',error);
        });
    }

    //clear input fields
    contactName.value='';
    contactEmail.value='';
    message.value='';
};

contactForm.addEventListener('submit', sendEmail);