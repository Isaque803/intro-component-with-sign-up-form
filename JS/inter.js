const FORM = document.getElementById("form-container")
const FIRST_NAME = document.getElementById("first-name")
const LAST_NAME = document.getElementById("last-name")
const EMAIL = document.getElementById("email")
const PASSWORD = document.getElementById("password")

FORM.addEventListener("submit", function(event){
    event.preventDefault()
    checkInputs()   
})

function checkInputs(){
    if (FIRST_NAME.value.trim() === ""){  
        FIRST_NAME.parentElement.className = "field-form error"
        FIRST_NAME.placeholder = ""
    }else{
        FIRST_NAME.parentElement.className = "field-form success"
    }

    if (LAST_NAME.value.trim() === ""){  
        LAST_NAME.parentElement.className = "field-form error"
        LAST_NAME.placeholder = ""
    }else{
        LAST_NAME.parentElement.className = "field-form success"
    }

    if (EMAIL.value.trim() === ""){  
        EMAIL.parentElement.className = "field-form error"
        EMAIL.placeholder = "email@example/com"
    }else{
        EMAIL.parentElement.className = "field-form success"
    }

    if (PASSWORD.value.trim() === ""){  
        PASSWORD.parentElement.className = "field-form error"
        PASSWORD.placeholder = ""
    }else{
        PASSWORD.parentElement.className = "field-form success"
    }
}

