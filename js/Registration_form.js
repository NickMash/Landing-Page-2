function check() {
    var login = document.getElementById('form-login'),
    pd = document.getElementById('form-pswrd'),
    cpd = document.getElementById('form-confirm-pswrd'),
    email = document.getElementById('form-email'),
    phone = document.getElementById('form-phone'),
//    male = document.getElementById('form-male'),
 //   female = document.getElementById('form-female'),
    checkbox = document.getElementById('form-checkbox');

    document.getElementById('submit').disabled = login.value && pd.value && cpd.value && email.value && phone.value && checkbox.value ? false : "disabled";

}

function valid (form) {
    var fail = false;
    var login = form.login.value;
    var pd = form.pd.value;
    var cpd = form.cpd.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var Agree = document.querySelector('#form-checkbox');
    var Adr_pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var phone_pattern = /^[+]{1}[0-9]{12}$/;
    var pd_pattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g;
    var login_pattern = /^[a-zA-Z]+([-_]?[a-zA-Z0-9]+){0,2}$/i;

    if (login_pattern.test(login) === false)
        fail = "Incorrect Login";
    else if (pd_pattern.test(pd) === false)
        fail = "Incorrect Password";
    else if (cpd === "" || cpd === " " || cpd !== pd)
        fail = "Passwords do not match";
    else if (Adr_pattern.test(email) === false)
        fail = "Incorrect Email";
    else if (phone_pattern.test(phone) === false)
        fail = "Incorrect phone";
    /*
        else if(document.getElementById('form-Male').checked)

         else
            fail = "Choose your gender";

        else if(document.getElementById('form_Female').checked)

        else
            fail = "Choose your gender";
           */
    else if (Agree.checked) ;
    else
        fail = "Pidor! Check the mark!";

    if (fail)
        alert(fail);
}


