const form = document.getElementById("form");

//NAME
let txt_CardName = document.querySelector(".nameCard");
let txt_NameImput = document.getElementById("nameImput");
let nameImputError = document.querySelector(".nameImput_error");

//NUMBER
let txt_CardNumber = document.querySelector(".numberCard");
let txt_NumberImput = document.getElementById("numberImput");
let numberImputError = document.querySelector(".numberImput_error");

//MONTH
let txt_CardMonth = document.querySelector(".dateMonth");
let txt_MonthInput = document.getElementById("month");
let monthImputError = document.querySelector(".monthInput_error");

//YEAR
let txt_CardYear = document.querySelector(".dateYear");
let txt_YearInput = document.getElementById("year");
let yearImputError = document.querySelector(".yearInput_error");

//CVC
let txt_cardPassword = document.getElementById("cvcCard");
let txt_PasswordImput = document.getElementById("password");
let passwordImputError = document.querySelector(".cvcInput_error");

//Boton Confirm
const btn_ConfirmBox = document.getElementById("confirmBox");

const parrafo = document.getElementById("warnings");

//FUNCTION CARD NAME
txt_NameImput.addEventListener('input', ()=>{
    if(txt_NameImput.value == ''){
       txt_CardName.innerText = 'JANE APPLESED'
    } else{
        txt_CardName.innerText = txt_NameImput.value;
    }
});

//FUNCTION CARD NUMBER
txt_NumberImput.addEventListener('input', (event)=>{
    txt_CardNumber.innerText = txt_NumberImput.value;
    let inputValue = event.target.value.slice(0,18)
    let onlyString = /[A-z]/g;
    
    if(onlyString.test(txt_NumberImput.value)){
        
        mostrarError(txt_NumberImput, numberImputError, 'Sorry, Numbers only', true)

    } else{
        txt_NumberImput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        mostrarError(txt_NumberImput, numberImputError, '', false)
    }
        
    // Mostrando ceros por defecto
    if(txt_NumberImput.value == ''){ 
        txt_CardNumber.innerText = '0000 0000 0000 0000'
     }
});

//FUNCION DE MES CARD
txt_MonthInput.addEventListener('input', ()=>{
        txt_CardMonth.innerText = txt_MonthInput.value;

    // Mostrando ceros por defecto
    if(txt_MonthInput.value == ''){ 
        txt_CardMonth.innerText = '00'
     }
})

//FUNCION DE AÑO CARD
txt_YearInput.addEventListener('input', ()=>{
    txt_CardYear.innerText = txt_YearInput.value;

    // Mostrando ceros por defecto
    if(txt_YearInput.value == ''){ 
        txt_CardYear.innerText = '00'
     }
})

//FUNCION DE PASSWORD (CVC)
txt_PasswordImput.addEventListener('input', ()=>{
    txt_cardPassword.innerText = "***"; // CONTRASEÑA DE LA CARD NO SE VE

    // Mostrando ceros por defecto
    if(txt_PasswordImput.value == ''){ 
        txt_cardPassword.innerText = '000'
     }
})

//Boton Confirmar
btn_ConfirmBox.addEventListener("click", event=>{
    event.preventDefault();

    // NAME
     /* TO DO */

    // NUMBER
     /* TO DO */

    // MONTH
    if (parseInt(txt_MonthInput.value) > 0 && parseInt(txt_MonthInput.value) <= 12){
        mostrarError(txt_MonthInput, monthImputError, '', false)
    } else{
        errorForm(txt_MonthInput, monthImputError)
    }

    // YEAR
    if (parseInt(txt_YearInput.value) > 0){
        mostrarError(txt_YearInput, yearImputError, '', false)}
     else {errorForm(txt_YearInput, yearImputError)}

    // CVC
    if (parseInt(txt_PasswordImput.value) > 0 && parseInt(txt_PasswordImput.value) <= 999 ){
        mostrarError(txt_PasswordImput, passwordImputError, '', false)}
    else{errorForm(txt_PasswordImput, passwordImputError)}


    if(txt_NameImput.value && txt_NumberImput.value && txt_MonthInput.value && txt_YearInput.value && txt_PasswordImput.value){
        alert("Campos completados.")
    }else {
        alert("Completa todos los datos de forma correcta!")
    }
});

//FUNCION DE ERRORES
    function mostrarError(input, error, msgError, mostrar){
    if(mostrar){
        error.innerText = msgError;
        input.style.borderColor = 'red';
    }else {
        error.innerText = msgError;
        input.style.borderColor = 'grey'
    }}
    
//FUNCION DE VERIFICAR ERRORES
    function errorForm (input, error) {
    if(input.value.lenght > 0){
        mostrarError(input, error, "", false)
    }else{
        mostrarError(input, error, "Check invalid field", true)
    }}