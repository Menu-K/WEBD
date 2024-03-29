/**
 * validateFirst - validated user first name entry through registration form
 * @param {string} first
 * @returns html element for error message
 */
export function validateFirst(first) {
    if (first.length === 0) {
        return "<p>First name is required.</p>"
    }
    else if (first.length < 2) {
        return "<p>First name must be at least 2 characters long.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validateLast- validated user last name entry through registration form
 * @param {string} last
 * @returns html element for error message
 */
export function validateLast(last) {
    if (last.length === 0) {
        return "<p>Last name is required.</p>"
    }
    else if (last.length < 2) {
        return "<p>Last name must be at least 2 characters long.</p>"
    }
    else {
        return "<p></p>";
    }
};


/**
 * validateUsername- validated user username entry through registration form
 * @param {string} username
 * @returns html element for error message
 */
export function validateUsername(username) {
    if (username.length < 2) {
        return "<p>You have entered a username that is too short.</p>"
    }
    else {
        return "<p></p>";
    }
};

/**
 * validateEmail- validated user email entry through registration form
 * @param {string} email
 * @returns html element for error message
 */
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length < 8) {
        return "<p>Email must be at least 8 characters long.</p>"
    }
    else if (!emailRegex.test(email)) {
        return "<p>You have entered an invalid email format.</p>";
    }
    else {
        return "<p></p>";
    }
};

/**
 * validatePassword- validated user password entries 1 and 2 are the same through registration form
 * @param {string} passord1
 * @param {string} password2
 * @returns html element for error message
 */
export function validatePassword(pass1, pass2) {
    if (pass1 !== pass2) {
        return "<p>Your passwords do not match.</p>";
    } else if (pass1.length < 6) {
        return "<p>Password must be at least 6 characters long.</p>";
    } else {
        return "<p></p>";
    }
};


