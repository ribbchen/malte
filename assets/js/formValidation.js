
var form = document.getElementById('contact-form');
form.addEventListener("focusout", isValid);


//sets final state class for better design
function setFillState(el) {
    if (el.target.value !== "" && el.target.type !== "textarea") {
        addClassToLbl(el, 'is-filled');
    }
}

function addClassToLbl(el, className) {
    if (el.target.nextElementSibling.tagName === "LABEL") {
        el.target.nextElementSibling.classList.add(className);
    }
}

function removeClassFromLbl(el, className) {
    if (el.target.nextElementSibling.tagName === "LABEL") {
        el.target.nextElementSibling.classList.remove(className);
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateNumber(email) {
    var re = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    return re.test(String(email).toLowerCase());
}

function isValid(el) {
    var type = el.target.type;
    var value = el.target.value;
    switch (type) {
        case "text":
            if (value !== "") {
                setFillState(el);
                addClassToLbl(el, 'is-valid');
            } else {
                removeClassFromLbl(el, 'is-valid');
            }
            break;
        case "email":
            if (value !== "") {
                setFillState(el);
                if (validateEmail(value)) {
                    removeClassFromLbl(el, 'is-invalid');
                    addClassToLbl(el, 'is-valid');
                } else {
                    addClassToLbl(el, 'is-invalid');
                }
            }
            break;
        case "tel":
            if (value !== "") {
                setFillState(el);
                if (validateNumber(value)) {
                    removeClassFromLbl(el, 'is-invalid');
                    addClassToLbl(el, 'is-valid');
                } else {
                    addClassToLbl(el, 'is-invalid');
                }
            }
            break;
        default:
            break;
    }
}


