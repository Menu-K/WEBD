console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */

/* function ValidateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
} */

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
/* function ValidateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
} */

//TODO:
// Make all fields required  [COMPLETE]
// Add a pattern attribute in the telephone element (HTML) [COMPLETE]
// Ensure the password is redacted into dots on screen when typed in  [COMPLETE]
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)  [COMPLETE]
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)  [COMPLETE]
// Validate the username when the form is submitted  [COMPLETE]
// Clear any additional error message and highlighting when the form is reset  [COMPLETE]
// COMMENT EVERYTHING :D
// Pop your .js file into the meeting chat when you're done and we'll have a look at some examples! (Feel free to leave your name off)

function validUsername(usernameString) 
{
    console.log('in validUsername');
    // reference variables
    let genErE1 = document.getElementById('generalError')
    let usernameInputE1 = document.getElementById('usernameInput');
    let usernameErrorE1 = document.getElementById('usernameError');
    let backgroundColor = "#ffffff";
    let genErMsg = "";
    let usernameErMsg = "";
    let usernameRegex = /^\S*$/;

    // username validation as well as error output message
    if (usernameString.length < 5)
    {
        genErMsg = "Username must be at least 5 characters long";
        usernameErMsg = "Username must be at least 5 characters long";
        backgroundColor = "#e5989b"
    }
    else if (usernameString.length > 20)
    {
        genErMsg = "Username must be less than 20 characters long";
        usernameErMsg = "Username must be less than 20 characters long";
        backgroundColor = "#e5989b"
    }
    else if (!usernameString.match(usernameRegex))
    {
        genErMsg = "Username cannot contain spaces";
        usernameErMsg = "Username cannot contain spaces";
        backgroundColor = "#e5989b"
    }
    
    genErE1.innerHTML = genErMsg;
    usernameErrorE1.innerHTML = usernameErMsg;
    usernameInputE1.style.backgroundColor = backgroundColor;
}

function clearMessage()
{
    let errorOutput = document.getElementById('error');
    for (let i = 0; i < errorOutput.length; i++)
    {
        errorOutput[i].innerHTML = "";
    }
  
}



// Validate the username when the form is submitted

let submitButton = document.getElementById('submit-reg-form');
if (submitButton)
{
    // Creates a event listener to track user "click" to go through function
    submitButton.addEventListener('click', function (e)
    {
        e.preventDefault();
        let username = document.getElementById('usernameInput').value;
        validUsername(username);
    })
};

// Clear any additional error message and highlighting when the form is reset

let resetButton = document.getElementById('reset-reg-form');
if (resetButton)
{
    // Creates a event listener to track user "click" to go through function
    resetButton.addEventListener('click', function (e)
    {
        clearMessage();
    });
}



