//=======================
//  Date in footer
//=======================
var today = new Date();
var dateElement = document.getElementById('dateElement');
dateElement.innerHTML = today.getFullYear();


//=======================
//  Scroll
//=======================
function scrollRound(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 650);
}
var scrollTopBtn = document.querySelector(".scrollTopBtn");
if(scrollTopBtn){
  scrollTopBtn.addEventListener('click', scrollRound, false);
}

// Show/Hide scroll btn
window.addEventListener('scroll', function(){
    
    if(window.pageYOffset < 160){
        //scrollTopBtn.classList.remove('scrollTopBtn');
        scrollTopBtn.style.opacity = '0';
        
    } else {
        //scrollTopBtn.classList.add('scrollTopBtn');
        scrollTopBtn.style.opacity = '1';
    }
});

//=======================
//  Menu scroll effect
//=======================
window.addEventListener('scroll',function(e){
    var header = document.getElementById('mainHeader'),
        positionY = window.pageYOffset || document.documentElement.scrollTop;
    if(window.innerWidth > 1023){        
        if(positionY > 250){
            header.classList.add("smaller");

        } else {
            header.classList.remove("smaller");
        }
    }
});


//=======================
//  Hamburger
//=======================
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function() {
    document.getElementById('mainHeader').classList.toggle('nav-open');
    this.classList.toggle('hamburger-close');
}, false);


//=======================
//  Form
//=======================
//Checking if name contains appropriate quantity of characters
function checkName(e,minLength){
    var el, elMsg, elUsername;
    if(!e){
       e = window.event;
    }
    el = e.target || e.srcElement;
    elMsg = document.querySelector('.elMsg');
    elUsername = document.getElementById('elUsername');
    if(el.value.length < minLength){
        console.log('Name works!');
        elUsername.style.borderColor = '#ff1a1a';
        elMsg.innerHTML = 'Your name must contains at least '+minLength+' characters.';
    } else {
        elUsername.style.borderColor = '#cc8500';
        elMsg.innerHTML = '';
    }
    
    var submit = document.getElementById('submit');
    submit.disabled = true;
    submit.className = 'disable';
    
     if(submit.disabled || submitted){
            e.preventDefault();
            return;
    }
}

if(elUsername.addEventListener){
    
    elUsername.addEventListener('blur', function(e){
        checkName(e, 2);
    },false);
} else {
    elUsername.attachEvent('onblur', function(e){
        checkName(e, 2);
    });
}

//Checking E-Mail Address
function validateEmail(e){
    var mailMarks, newsEmail, msgEmail; 
    e.preventDefault();
    mailMarks = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    newsEmail = document.getElementById('newsEmail');
    newsEmailValue = document.getElementById('newsEmail').value;
    msgEmail = document.querySelector('.msgEmail');
    
    var submit = document.getElementById('submit');
    submit.disabled = true;
    submit.className = 'disable';
      
    var re = new RegExp(mailMarks);
    if(!(re.test(newsEmailValue))){
        console.log('E-Mail works!');
        newsEmail.style.borderColor = '#ff1a1a';
        msgEmail.innerHTML = 'E-Mail Address is incorrect';
        submit.disabled = true;
        submit.className = 'disable';
    } else {
        msgEmail.innerHTML = '';
        newsEmail.style.borderColor = '#cc8500';
        submit.disabled = false;
        submit.className = 'btn';
    }
 
 }
var newsEmail = document.getElementById('newsEmail');
newsEmail.addEventListener('blur', validateEmail,false);


//Submit

(function(){
    var form = document.getElementById('register'), 
        username = document.getElementById('elUsername'), 
        email = document.getElementById('newsEmail'), 
        submit = document.getElementById('submit'),
        submitted = false;
    
    submit.disabled = true;
    submit.className = 'disable';
    
    username.addEventListener('input',function(e){
        var target = e.target || e.srcElement;
        submit.disabled = submitted || !target.value;
        
       submit.className = (!target.value || submitted) ? 'disable' : 'btn';
    },false);
    
    email.addEventListener('input',function(e){
        var target = e.target || e.srcElement;
        submit.disabled = submitted || !target.value;
        
        submit.className = (!target.value || submitted) ? 'disable' : 'btn';
    },false);
    
    submit.addEventListener('submit',function(e){
        if(submit.disabled || submitted){
            e.preventDefault();
            return;
        }
         submit.disabled = true;
         submitted = true;
         submit.className = 'disable';
         
         e.preventDefault();
         
    },false);
        
}());

/*var show = document.getElementById('message');
function afterSumbit(e) {
    e.preventDefault();
    var user = document.getElementById('elUsername').value;
    var msg = 'Hello '+user+', your E-Mail Address has been sent!';
    show.innerHTML = msg;
    show.style.display = "block";
    setTimeout(function(){
        show.style.display = "none";
    },3500);

}
var submit = document.getElementById('submit');
submit.addEventListener('click',afterSumbit,false);*/

    


