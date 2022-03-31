let counter = 0;
function onSelect(object) {
    const drinks = document.getElementById("drinks").value;
    const addontext = document.getElementById("addontext");
    const checkbx = document.getElementById("addon");
    checkbx.style.display = "inline-block";
    addontext.style.display = "inline-block";
    let msg = "";
    switch (drinks) {
        case "Mocha":
            msg = "Large Drink $0.75 extra";
            addontext.innerHTML = msg;
            checkbx.value = msg;
            break;
        case "CocoCola":
            msg = "Regular size Drink $0.50 extra";
            addontext.innerHTML = msg;
            checkbx.value = msg;
            break;
        case "Cappucino":
            msg = "Extra Large Drink $1.0 extra";
            addontext.innerHTML = msg;
            checkbx.value = msg;
            break;
        case "HotChocolate":
            msg = "Regular Drink $0.50 extra";
            addontext.innerHTML = msg;
            checkbx.value = msg;
            break;
        case "VanillaShake":
            msg = "Large Drink $0.50 extra";
            addontext.innerHTML = msg;
            checkbx.value = msg;
            break;
        case "":
            checkbx.style.display = "none";
            addontext.style.display = "none";
            break;
        default:
            msg = "";
            checkbx.style.display = "none";
            addontext.style.display = "none";
            addontext.innerHTML = msg;
            checkbx.value = msg;
            break;
    }
}

function onchecked(object) {
    // console.log("in oncheck");
    if (object.checked) {
        // console.log("checked");
        ischecked = true;
        document.getElementById("suggest").style.display = "block";
        document.getElementById("suggestion").style.display = "block";
        document.getElementById("suggestion").required = "required";
    } else {
        ischecked = false;
        document.getElementById("suggest").style.display = "none";
        // document.getElementById("suggestion").value = "";
        document.getElementById("suggestion").style.display = "none";
        document.getElementById("suggestion").removeAttribute('required');// required = "required";
    }
}

function Validate(object, type) {
    const regexName = /^[a-zA-Z]+$/;
    const regexEmail = /([\w\.]+)@northeastern.edu/;         //  /([\w\.]+)@([\w\.]+)\.(\w+)/;
    const regexPhone = /^[0-9]{10}$/;
    const regexZipCode = /^[0-9]{5}$/;

    switch (type) {
        case 1:
            if (!object.value.trim().match(regexName)) {
                console.log("print");
                object.style.border = "2px solid red";
                document.getElementById("errorMsgName").style.display = "inline-block";
                // object.value = "";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgName").style.display = "none";
            }
            break;

        case 2:
            if (!object.value.trim().match(regexEmail)) {
                object.style.border = "2px solid red";
                document.getElementById("errorMsgEmailid").style.display = "inline-block";
                // object.value = "";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgEmailid").style.display = "none";
            }
            break;

        case 3:
            if (!object.value.trim().match(regexPhone)) {
                object.style.border = "2px solid red";
                document.getElementById("errorMsgphoneNumber").style.display = "inline-block";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgphoneNumber").style.display = "none";
            }
            break;

        case 4:
            if (!object.value.trim().match(regexZipCode)) {
                object.style.border = "2px solid red";
                document.getElementById("errorMsgZipcode").style.display = "inline-block";
                // object.value = "";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgZipcode").style.display = "none";
            }
            break;

        case 5:
            if (!object.value.trim().match(regexName)) {
                console.log("print");
                object.style.border = "2px solid red";
                document.getElementById("errorMsgLastName").style.display = "inline-block";
                // object.value = "";
            } else {
                object.style.border = "";
                document.getElementById("errorMsgLastName").style.display = "none";
            }
            break;

    }
}

let form1 = document.getElementById('btnsubmit');
form1.addEventListener('click', (e) => {
    e.preventDefault();
    // atleastOneCheckbox();
    if (!document.getElementById('myform').checkValidity()) {
        document.getElementById('myform').reportValidity();
        return;
    }
    if (atleastOneCheckbox()) {
        e.target.parentElement.submit();
        e.target.parentElement.reset();
    }
});





function atleastOneCheckbox() {
    const checkboxes = document.querySelectorAll('.hearhow:checked');
    const errorsourceinfo = document.querySelector('#errorsourceinfo');
    let hiddeninput = document.querySelector('input[name="source_Actual"]');
    let s = [];
    checkboxes.forEach((box) => {
        s.push(box.value);
    });
    hiddeninput.value = s.toString();
    // console.dir(hiddeninput.value);
    // console.log(s);


    // const form2 = document.querySelector('#myform');
    // console.dir(form2);
    // console.dir(form2.querySelectorAll('input.hearhow'));
    // console.dir(`querying the form : ${form2}`);
    // console.log(form2.find('input.hearhow'));

    if (checkboxes.length == 0) {
        errorsourceinfo.style.display = "inline-block";
        return false;
    }
    else {

        errorsourceinfo.style.display = "none";
        return true;
    }
}




// function addFormResetEvent() {
//     let form = document.getElementById('btnsubmit');
//     form.addEventListener('click', (e) => {
//         e.preventDefault();
//         e.target.parentElement.submit();
//         e.target.parentElement.reset();
//     });
// }
// addFormResetEvent()