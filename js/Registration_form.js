function check() {
    var inputs = document.getElementsByClassName('for-js-check');
    for(var i = 0; i < inputs.length; i++) {
        if (inputs[i].value &&
            (document.getElementById('form-male').checked || document.getElementById('form-female').checked) &&
            document.getElementById('form-checkbox').checked) {
            document.getElementById('submit').disabled = false;
        } else {
            document.getElementById('submit').disabled = true;
            return;
        }
    }
}

function valid () {
    var inputs = document.getElementsByClassName('for-js-check');
    var p = document.getElementsByClassName('notice');
    let patterns = [/^[a-zA-Z]+([-_]?[a-zA-Z0-9]+){0,2}$/i , /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/ , /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/ , /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i , /^[+]{1}[0-9]{12}$/];
    //REfACTOR !!!!!!
    for (var i = 0; i < inputs.length-3; i++) {
        if (patterns[i].test(inputs[i].value) === false) {
            p[i].classList.add('notice-display');
            inputs[i].classList.add('checking-mistake');
        }

        else {
          p[i].classList.remove('notice-display');
          inputs[i].classList.remove('checking-mistake');
        }
    }
}
 /*   var form = document.getElementById('registrationForm');
    var login = form.login.value;
    var pd = form.pd.value;
    var cpd = form.cpd.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var adr_pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var phone_pattern = /^[+]{1}[0-9]{12}$/;
    var pd_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    var login_pattern = /^[a-zA-Z]+([-_]?[a-zA-Z0-9]+){0,2}$/i;



    if (pd_pattern.test(pd) === false)
        document.getElementById("appear-password-notice").classList.add('notice-display');

    else if (pd_pattern.test(pd) === true)
        document.getElementById("appear-password-notice").classList.remove('notice-display');



    if (login_pattern.test(login) === false)
        document.getElementById("appear-login-notice").classList.add('notice-display');

    else if (login_pattern.test(login) === true)
        document.getElementById("appear-login-notice").classList.remove('notice-display');



   if (cpd !== pd)
       document.getElementById("appear-confirmPassword-notice").classList.add('notice-display');

   else if (cpd === pd)
       document.getElementById("appear-confirmPassword-notice").classList.remove('notice-display');



   if (adr_pattern.test(email) === false)
       document.getElementById("appear-email-notice").classList.add('notice-display');

   else if (adr_pattern.test(email) === true)
       document.getElementById("appear-email-notice").classList.remove('notice-display');



   if (phone_pattern.test(phone) === false)
       document.getElementById("appear-phone-notice").classList.add('notice-display');

   else if (phone_pattern.test(phone) === true)
       document.getElementById("appear-phone-notice").classList.remove('notice-display');

 }
*/

var elements = document.getElementsByClassName('for-js-check');
var submit = document.getElementById('submit');

submit.addEventListener('click', function () {
    valid();
});

for(var k = 0; k < elements.length; k++) {

    //-----------------FIRST----//
    //elements[k].addEventListener('change', check); check - name of function without brackets
    //-------//


    //--------SECOND----//
    elements[k].addEventListener('change', function () { // two parameters 1)string name of event 2)anonimus function without name
        check();
        //do something
        //......
    });
    //---------//


    elements[k].addEventListener('keyup', function () {
        check();
    });
}



