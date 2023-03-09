/*
Author: [Menushan Karunakaran]
Student ID: [100709847]
Date Completed: [2023-02-24]
*/

console.log("app.js loaded");
// Imports
import * as userClass from "./user.js";
console.log("user.js loaded");
import * as formValidation from "./form.js";
console.log("form.js loaded");
import * as displayBlog from "./blog.js";
console.log("blog.js loaded");

(function () {
    /**********************************
        Simple DOM Manipulation 3.C) 
    **********************************/
    // Get reference to the ul element
    var navbar = document.querySelector(".navbar-nav");

    // Create the new li element
    var navLi = document.createElement("li");
    navLi.classList.add("nav-item");

    // Create the new a element
    var navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.href = "#";
    navLink.innerHTML = '<i class="fas fa-user-friends"></i> Human Resources';

    // Append the a element to the li element
    navLi.appendChild(navLink);

    // Get reference to the About Us li element
    var aboutUsLi = document.querySelector(".nav-item:nth-child(4)");

    // Insert the new li element after the About Us li element
    navbar.insertBefore(navLi, aboutUsLi.nextSibling);


    //   }
    // Start function to determine which page is currently loaded
    function Start() {
        console.log("App Started!"); // log a message to indicate the start of the app

        // switch statement to determine which page is currently loaded
        switch (document.title) {
            case "Home Page":
                displayHomePage();
                console.log("Register Page loaded");
                break;
            case "Product Page":
                displayProductsPage();
                console.log("Products Page loaded");
                break;
            case "Service Page":
                displayServicesPage();
                console.log("Service Page loaded");
                break;
            case "About Page":
                displayAboutPage();
                console.log("About Page loaded");
                break;
            case "Contact Page":
                displayContactPage();
                console.log("Contact Page loaded");
                break;
            case "Register Page":
                displayRegisterPage();
                console.log("Register Page loaded");
                break;
            case "Login Page":
                displayLoginPage();
                console.log("Login Page loaded");
                break;
            case "Blog":
                displayBlogPage();
                console.log("Blog Loaded");
                break;
        }

        // Footer Nav bar

        // Create a navbar element and add the necessary classes
        const navbar = document.createElement("nav");
        navbar.classList.add("navbar", "fixed-bottom", "bg-dark");

        // Create a container element and add the necessary classes
        const container = document.createElement("div");
        container.classList.add("container-fluid");

        // Create a copyright element and set its text to the current year
        const copyright = document.createElement("p");
        const currentYear = new Date().getFullYear();
        const copyrightText = document.createTextNode(`Copyright © ${currentYear}`);
        copyright.appendChild(copyrightText);

        // Append the copyright element to the container
        container.appendChild(copyright);

        // Append the container to the navbar
        navbar.appendChild(container);

        // Add the navbar to the page
        document.body.appendChild(navbar);
    }
    window.addEventListener("load", Start);
})();








/**********************************
            Home Page  
**********************************/
// The DisplayHomePage function is called when the home page loads
function displayHomePage() {
  
    // Get the About Us button element by its id
    let AboutUsButton = document.getElementById("AboutUsButton");

    // Add a click event listener to the About Us button
    AboutUsButton.addEventListener("click", function () {
        // When the About Us button is clicked, navigate to the about.html page
        location.href = "about.html";
    });

    // Get the element with id "fun-fact" and set its inner HTML to the fun fact message
    document.getElementById("fun-fact").innerHTML =
        "Fun Fact: This is from Sri Lanka [Nuwara Eliya]";
}



/**********************************
        Products Page  
**********************************/
// This function creates a product section and displays the information of each product in it.
function displayProductsPage() {
    // Get the Products link
    var productsLink = document.getElementById("products");

    // Change the text of the Products link to Interests
    productsLink.innerHTML = "Interests";

    // An array that holds the information of each product.
    const products = [
        {
            title: "Harry Potter",
            description: ` Harry Potter is a series of seven fantasy novels written by British author J.K. Rowling. The story follows a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, who are students at Hogwarts School of Witchcraft and Wizardry. Together, they explore the magical world, fight against the evil Lord Voldemort and his followers, the Death Eaters, and uncover the truth about Harry's past. The series has become one of the best-selling book series in history and has been adapted into a successful film franchise.`,
            image: "./images/harryPotter.jpg"

        },
        {
            title: "The Last of Us",
            description: `The Last of Us is a post-apocalyptic action-adventure game developed by Naughty Dog. The game follows Joel and Ellie, two survivors in a world that has been devastated by a fungal infection that has turned most of the human population into aggressive creatures. As they journey across the country, they must rely on each other to survive and overcome various obstacles, both human and infected. The game received widespread critical acclaim for its story, characters, and gameplay, and has since been remastered for newer consoles.`,
            image: "./images/lastOfUs.jpg",
        },
        {
            title: "Only Murders in the Building",
            description: `Only Murders in the Building is an American mystery comedy-drama television series created by Steve Martin, John Strauss, and Martin Short. The series follows three strangers who share an obsession with true crime and suddenly find themselves wrapped up in one. The unlikely trio of amateur sleuths navigate their way through the twists and turns of the murder investigation, using their unique skills and knowledge to try to solve the crime. The series is a witty and entertaining take on the classic murder mystery genre.`,
            image: "./images/murderInTheBuilding.jpg",
        },
    ];

    // Select the product section in the HTML file
    const productSection = document.querySelector("#product-section");

    // Loop through the products array
    for (let i = 0; i < products.length; i++) {
        let product = products[i];

        // Append each product to the product section
        productSection.innerHTML += `
            <div class="product">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.title}">
            </div>
            `;
    }
}


/**********************************
        Services Page  
**********************************/
// DisplayServicesPage() - A function that displays information about the services
function displayServicesPage() {

    // Array of service objects with title, description and image properties
    const services = [
        {
            title: "Web Design",
            description:
                "I offer professional web design services to help clients establish their online presence. My design services range from simple website layouts to complex e-commerce solutions.",
            image: "./images/webDesign.jpg",
        },
        {
            title: "Skilled in (C++, C#, java)",
            description:
                "I am proficient in several programming languages, including C++, C#, and Java. I can develop software solutions for clients in these languages to meet their specific needs.",
            image: "./images/language.jpg",
        },
        {
            title: "Custom Programming",
            description:
                "I offer custom programming services to help clients bring their ideas to life. Whether its a desktop application, a mobile app, or a web-based solution, I have the skills and experience to deliver.",
            image: "./images/customProg.jpg",
        },
    ];
    // Selecting the element with ID "service-section"
    const servicesContainer = document.querySelector("#service-section");

    // Loop through the services array and add the service title, description, and image to the services container
    for (let i = 0; i < services.length; i++) {
        let service = services[i];
        servicesContainer.innerHTML += `
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <img src="${service.image}" alt="${service.title}">
        `;
    }
}


/**********************************
            About us Page  
**********************************/
// displayAboutPage() - A function to display information about the "About Us" page
function displayAboutPage() {
    const aboutUsContainer = document.querySelector("#about-us-container");

    // First section HTML
    const section1 = `
    <div id="section-1">
        <div class="images-container">
            <img src="./images/you.jpg" alt="Image 1">
            <img src="./images/you2.jpg" alt="Image 2">
            <img src="./images/pet.jpg" alt="Image 3">
        </div>
        <p>My name is Menushan Karunakaran, due to reasons, studying for Computer Programmer Diploma. I live all the way in Markham while I go to school at Durham College, Oshawa. As you can see with the pictures above, 
         I seem to be in to fashion when I just like to wear clothes that I believe look nice. The other picture you see is my brat of a sister of a dog named "Fanta". I am the only boy of 3 (4 including my dog) girl siblings.
         I have got a older sister named "Thanusha", a twin sister "Minusha" and a baby sister named "Risza". My parents are Sri Lankan, born there and all of us kids were born here in Canada </p>
    </div>
    `;

    // Second section HTML
    const section2 = `
    <div id="section-2">
        <p>As you can see from the logo below, I love soccer and I spent a good part of my life playing it. My favourite sports are Soccer, Volleyball, Badminton, Ultimate frisbee and table tennis. I have the physique for basketball 
        but I don't like it and despise it. I spent from grade 4 to grade 10 playing for Unionville Milliken Soccer Club for House League, but I also had the opportunity to play in REP(Representative) and train players
        in that and All Star league. I also love to play video games and use it to relax which is very unhealthy. I am using the term video games vaguely because I love to play all types of games from Minecraft to 
        horror games to pokemon etc. I grew up with pokemon and have a soft spot with it as well as Mario bros. As I grew older I had the opportunity to play semi pro for CounterStrike Global Offensive (CSGO) and 
        the Call of Duty franchise. Growing older as come with its drawbacks and I now play games to enjoy myself and I can't keep up with these young'uns (old man joke). </p>
        <div class="images-container">
            <img src="./images/UMSC.png" alt="Image 4">
            <img src="./images/csgo.jpg" alt="Image 5">
            <img src="./images/fanta.jpg" alt="Image 6">
        </div>
    </div>
    `;
    // Inject the HTML into the aboutUsContainer element
    aboutUsContainer.innerHTML = section1 + section2;
}




/**********************************
            Contact Form  
**********************************/
// Function to display contact page
function displayContactPage() {
    // Event listener for submit button click
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        // Variables to store user inputs
        let name = document.getElementById("name").value;
        let contactNumber = document.getElementById("contactNumber").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Variables to store error elements
        let nameError = document.getElementById("nameError");
        let contactNumberError = document.getElementById("contactNumberError");
        let emailError = document.getElementById("emailError");

        // Variable to store validation status
        let isValid = true;

        // Name Validation
        if (!name) {
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }
        // Contact Number Validation
        if (isNaN(contactNumber) || contactNumber.length !== 10) {
            contactNumberError.style.display = "block";
            isValid = false;
        } else {
            contactNumberError.style.display = "none";
        }
        // Email Validation
        if (
            !email ||
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        ) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // If all user inputs are valid
        if (isValid) {
            // Output user information to console
            console.log("Name: " + document.getElementById("name").value);
            console.log("Contact Number: " + contactNumber);
            console.log("Email: " + email);
            console.log("Message: " + document.getElementById("message").value);

            // Courtesy to [https://stackoverflow.com/questions/10312963/difference-between-settimeout-with-and-without-quotes-and-parentheses]
            // Start 3 second timer
            setTimeout(function () {
                // Redirect back to Home Page (index.html)
                window.location.href = "index.html";
            }, 3000);
        }
    });
}

/**********************************
            Blog Page  
**********************************/

function displayBlogPage(){
    // Display Blog Page
}





/**********************************
            Register Page  
**********************************/
function displayRegisterPage() {

    // https://stackoverflow.com/questions/4113965/css-selector-for-text-input-fields
    // thanks overflow
    // Select all text fields and password fields using the attribute selector
    $("input[type='text'], input[type='password'], input[type='email']").each(function() {
        // Insert a new div element after the current text field element
        $(this).after("<div id='errorMessage'></div>");
      });
      
    if ($("#btnRegSubmit")) {
        $("#btnRegSubmit").click(function (e) {
            e.preventDefault();
            const unvalidated_user = new userClass.User(
                // get the first name input
                $("#inputFirst").val(),

                // get the last name input
                $("#inputLast").val(),

                // get the email input
                $("#inputEmail").val(),

                // get the password input
                $("#inputPassword").val()
            );
            // debug statement for object
            console.log(`UserDetails: ${unvalidated_user.displayUser()}`)

            // validate first name
            $("#first-group").children("#errorMessage").html(formValidation.validateFirst(unvalidated_user.firstName));
            // validate last name
            $("#last-group").children("#errorMessage").html(formValidation.validateLast(unvalidated_user.lastName));

            // validate email
            $("#email-group").children("#errorMessage").html(formValidation.validateEmail(unvalidated_user.email));
            // validate confirm password
            let error = formValidation.validatePassword(unvalidated_user.password, $("#inputPassword2").val());
            $("#pass1-group").children("#errorMessage").html(error);
            $("#pass2-group").children("#errorMessage").html(error);


        });
    }
}




/**********************************
            Login Page  
**********************************/
function displayLoginPage() {

    // Add a click event listener to the Login button
    if ($("#btnLogin")) {
        $("#btnLogin").click(function (e) {
            e.preventDefault(); // prevent the default form submission behavior

            var username = $("#username").val()
            // check if the username input is empty
            if (username === "") {
                alert("Please enter a username."); 
                return;
            }

            // create the navbar text element with the username value
            let navbarText = '<li class="nav-item navbar-text mx-3">' + username + '</li>';

            // insert the navbar text after the "Contact Us" link
            $("#navLoginName").after(navbarText);
        });
    }
}



