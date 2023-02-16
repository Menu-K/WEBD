/*
Author: [Menushan Karunakaran]
Student ID: [100709847]
Date Completed: [2023-02-09]

*/

export class User {

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} username
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
       // this.username = username;
        this.email = email;
        this.password = password;
    }

    /**
     * @property {function} displayUser Prints users details: user name, username, email, and password
     * @returns {string}
     */
    displayUser() {
        return `Name: ${this.firstName}${this.lastName}
         Email: ${this.email}
         Password: ${this.password}`
    }
}
