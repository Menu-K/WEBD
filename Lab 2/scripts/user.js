/*
Author: [Menushan Karunakaran]
Student ID: [100709847]
Date Completed: [2023-02-09]

*/

class User {

    /**
     * 
     * @param {*} firstName 
     * @param {*} lastName 
     * @param {*} username 
     * @param {*} email 
     * @param {*} password 
     */
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    /**
     *
     *
     * @return {*} 
     * @memberof User
     */
    displayUser() {
        return `Name: ${this.firstName}${this.lastName}
        Username: ${ this.username }
        Email: ${ this.email }
        Password: ${ this.password }`
    }
}

