/*
Author: [Menushan Karunakaran]
Student ID: [100709847]
Date Completed: [2023-02-02]

Image Courtesy to unsplash.com
Images relating to my interest, was taken from the weeb
*/

(function () {

    // The DisplayHomePage function is called when the home page loads
    function displayHomePage() {
        console.log("Home Page"); // log to the console that the home page has loaded

        // Get the About Us button element by its id
        let AboutUsButton = document.getElementById("AboutUsButton");

        // Add a click event listener to the About Us button
        AboutUsButton.addEventListener("click", function () {
            // When the About Us button is clicked, navigate to the about.html page
            location.href = "about.html";
        });

        // Get the element with id "fun-fact" and set its inner HTML to the fun fact message
        document.getElementById("fun-fact").innerHTML = "Fun Fact: This is from Sri Lanka [Nuwara Eliya]";
    }


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
                image: "./images/lastOfUs.jpg"

            },
            {
                title: "Only Murders in the Building",
                description: `Only Murders in the Building is an American mystery comedy-drama television series created by Steve Martin, John Strauss, and Martin Short. The series follows three strangers who share an obsession with true crime and suddenly find themselves wrapped up in one. The unlikely trio of amateur sleuths navigate their way through the twists and turns of the murder investigation, using their unique skills and knowledge to try to solve the crime. The series is a witty and entertaining take on the classic murder mystery genre.`,
                image: "./images/murderInTheBuilding.jpg"
            }
        ];

        // Select the product section in the HTML file
        const productSection = document.querySelector("#product-section");

        // Loop through the products array
        products.forEach(product => {
            // Append each product to the product section
            productSection.innerHTML += `
        <div class="product">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <img src="${product.image}" alt="${product.title}">
        </div>
        `;
        });
    }


    // DisplayServicesPage() - A function that displays information about the services
    function displayServicesPage() {
        console.log("Services Page");

        // Array of service objects with title, description and image properties
        const services = [
            {
                title: 'Web Design',
                description: 'I offer professional web design services to help clients establish their online presence. My design services range from simple website layouts to complex e-commerce solutions.',
                image: './images/webDesign.jpg'
            },
            {
                title: 'Skilled in (C++, C#, java)',
                description: 'I am proficient in several programming languages, including C++, C#, and Java. I can develop software solutions for clients in these languages to meet their specific needs.',
                image: './images/language.jpg'

            },
            {
                title: 'Custom Programming',
                description: 'I offer custom programming services to help clients bring their ideas to life. Whether its a desktop application, a mobile app, or a web-based solution, I have the skills and experience to deliver.',
                image: './images/customProg.jpg'

            }
        ];
        // Selecting the element with ID "services-container"
        const servicesContainer = document.querySelector('#services-container');

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



    // Display About Page
    function displayAboutPage() {
        console.log("About Page");
    }


    /**********************************
                Contact Form  
    **********************************/
    // Function to display contact page
    function displayContactPage() {
        console.log("Contact Page");
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
            if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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


    // Start function to determine which page is currently loaded
    function Start() {
        console.log("App Started!"); // log a message to indicate the start of the app

        // switch statement to determine which page is currently loaded
        switch (document.title) {
            case "Home":
                displayHomePage();
                break;
            case "Our Products":
                displayProductsPage();
                break;
            case "Our Services":
                displayServicesPage();
                break;
            case "About Us":
                displayAboutPage();
                break;
            case "Contact Us":
                displayContactPage();
                break;
        }
        // Footer Nav bar
        // set the navbar to be fixed to the bottom of the page
        document.getElementById("footNav").style.position = "fixed";
        document.getElementById("footNav").style.bottom = "0";

        // set the width and background color of the navbar
        document.getElementById("footNav").style.width = "100%";
        document.getElementById("footNav").style.backgroundColor = "#333";

        // set the text color and font size of the copyright statement
        document.getElementById("footNav").style.color = "#fff";
        document.getElementById("footNav").style.fontSize = "16px";

        // create and display the current date for the copyright statement
        const currentDate = new Date();
        const copyrightStatement = "Copyright " + currentDate.getFullYear();
        document.getElementById("footNav").innerHTML = copyrightStatement;


        /**********************************
            Simple DOM Manipulation 3.C) 
        **********************************/
        // Get reference to the ul element
        var navbar = document.querySelector(".navbar-nav");

        // Create the new li element
        var navLi = document.createElement("li");
        navLi.classList.add("nav-item");

        // Create the new a element
        var navLink = document.createElement('a');
        navLink.classList.add('nav-link');
        navLink.href = "#";
        navLink.innerHTML = '<i class="fas fa-user-friends"></i> Human Resources';

        // Append the a element to the li element
        navLi.appendChild(navLink);

        // Get reference to the About Us li element
        var aboutUsLi = document.querySelector('.nav-item:nth-child(4)');

        // Insert the new li element after the About Us li element
        navbar.insertBefore(navLi, aboutUsLi.nextSibling);
    }
    window.addEventListener("load", Start);
})();