// Page One
var fname = $("#first_name");
var email = $("#email");
var fnameError = $("#first_name_error");
var emailError = $("#email_error");
var stepOneButton =$("#StepOneNext");

// Page Two
var contact = $('#contact');
var country = $('#country');
var contactError = $('#contact_error');
var countryError = $('#country_error');
var stepTwoPrevious = $('#StepTwoPrevious');
var stepTwoNext = $('#StepTwoNext');

// Page Three
var selectProgram = $('#select_program');
var message = $('#message');
var selectProgramError = $('#select_program_error');
var messageError = $('#message_error');
var StepThreePrevious = $('#StepThreePrevious');
var StepThreeSubmit = $('#StepThreeSubmit');

// Page Id's
var stepOne = $('#StepOneContainer');
var stepTwo = $('#StepTwoContainer');
var stepThree = $('#StepThreeContainer');
var successPage = $('#SuccessContainer');


// Check Value for input text
function checkVal(text){
    let x = false;
    if(text !== null && text !== undefined && text!== "")
        x = true;
    console.log(text," in checkval ",x);
    return x;
}

// Form One
stepOneButton.on("click",stepOneValidation);
function stepOneValidation(){
    console.log("in onclick");
    var namePattern = /^[A-Za-z\s]{1,}[A-Za-z\s]{0,15}$/g;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    var nameValid = true , emailValid = true;

    fnameError.css('display','none');
    emailError.css('display','none');

    //First Name Validation
    let fnameVal = fname.val();
    if(!checkVal((fnameVal).trim())){
        console.log("in if");
        fnameError.css('display','block');
        fnameError.html("This Field can not be empty");
        nameValid = nameValid && false; 
    }
    else if(!namePattern.test(fnameVal)){
        fnameError.css('display','block');
        fnameError.html("Please enter a valid first name");
        nameValid = false; 
    }
    else if(namePattern.test(fnameVal)){
        fnameError.css('display','none');
        nameValid = nameValid && true;    
    }
    
    //Email Validation
    let emailVal = email.val();
    if(!checkVal((emailVal).trim())){
        emailError.css('display','block');
        emailError.html("This Field can not be empty");
        emailValid = emailValid && false;
    }
    else if(!emailPattern.test(emailVal)){
        emailError.css('display','block');
        emailError.html("Please enter a valid Email");
        emailValid = false;
    }
    else if(emailPattern.test(emailVal)){
        emailError.css('display','none');
        emailValid = emailValid && true;
    }
    
    // Validate First Step
    if(nameValid && emailValid){
        stepOne.css('display','none');
        stepTwo.css('display','block');
        stepThree.css('display','none');
    }
}

// Show Page One by Previous Button
stepTwoPrevious.on('click',function(){
    stepOne.css('display','block');
    stepTwo.css('display','none');
    stepThree.css('display','none');
});

// Form Two
stepTwoNext.on("click",stepTwoValidation);
function stepTwoValidation(){
    console.log("in Second Step");
    var countryPattern = /^[A-Za-z\s]{1,}[A-Za-z\s]{0,15}$/g;
    var contactPattern = /^(\+\d{2,4})?\s?(\d{10})$/g;
    var CountryValid = true, ContactValid = true;

    contactError.css('display','none');
    countryError.css('display','none');

    //Contact Validation
    let contactVal = contact.val();
    if(!checkVal((contactVal).trim())){
        contactError.css('display','block');
        contactError.html('This Field can not be empty');
        ContactValid = ContactValid && false;
    }
    else if(!contactPattern.test(contactVal)){
        contactError.css('display','block');
        contactError.html('Please enter a valid Contact Number');
        ContactValid = false;
    }
    else if(contactPattern.test(contactVal)){
        contactError.css('display','none');
        ContactValid = ContactValid && true;
    }

    //country Validation
    let countryVal = country.val();
    if(!checkVal((countryVal).trim())){
        countryError.css('display','block');
        countryError.html('This Field can not be empty');
        CountryValid = ContactValid && false;
    }
    else if(!countryPattern.test(countryVal)){
        countryError.css('display','block');
        countryError.html('Please enter a valid Country');
        CountryValid = false;
    }
    else if(countryPattern.test(countryVal)){
        countryError.css('display','none');
        CountryValid = ContactValid && true;
    }

    //Validating Second Step
    if(ContactValid && CountryValid){
        stepOne.css('display','none');
        stepTwo.css('display','none');
        stepThree.css('display','block');
    }

}

// Show Page Two by Previous Button
StepThreePrevious.on('click',function(){
    stepOne.css('display','none');
    stepTwo.css('display','block');
    stepThree.css('display','none');
});

//Form Three
StepThreeSubmit.on('click',stepThreeValidation);
function stepThreeValidation(){
    messageError.css('display','none');
    selectProgramError.css('display','none');
    var SelectValid = true, MessageValid = true;

    // Select Program Validation
    let selectProgramVal = selectProgram.val();
    if(!checkVal((selectProgramVal).trim())){
        selectProgramError.css('display','block');
        SelectValid = SelectValid && false;
    }
    else{
        selectProgramError.css('display','none');
        SelectValid = SelectValid && true;
    }

    // Message Validation
    let messageVal = message.val();
    if(!checkVal((messageVal).trim())){
        messageError.css('display','block');
        MessageValid = MessageValid && false;
    }
    else{
        messageError.css('display','none');
        MessageValid = MessageValid && true;
    }

    // Validate Third Page
    if(SelectValid && MessageValid){
        stepThree.css('display','none');
        successPage.css('display','block');
    }
}