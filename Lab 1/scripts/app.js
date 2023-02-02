/*
Author: [Menushan Karunakaran]
Student ID: [100709847]
Date Completed: [2023-02-02]
*/

(function () {

    function DisplayHomePage() {
        console.log("Home Page");
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function () {
            location.href = "about.html";
        });

        // Step 1. get an entry point(s) (insertion point / deletion point) reference 
        let DocumentBody = document.body;
        let MainContent = document.getElementsByTagName("main")[0];

        // Step 2. create an element(s) to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class ="mt-3">This is the Article Paragraph</p>`

        // Step 3. configure the new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the Main Paragraph";
        Article.setAttribute("class", "container");

        // Step 4. Add / Insert the new element
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }


    // Display Products Page
    function DisplayProductsPage() {
        // Get the Products link
        var productsLink = document.getElementById("products");

        // Change the text of the Products link to Interests
        productsLink.innerHTML = "Interests";
    }



    // Display Service Page
    function DisplayServicesPage()
    {
        console.log("Services Page");

        const services = [
            {
                title: 'Web Design',
                description: 'I offer professional web design services to help clients establish their online presence. My design services range from simple website layouts to complex e-commerce solutions.',
                image: ''
            },
            {
                title: 'Skilled in (C++, C#, java)',
                description: 'I am proficient in several programming languages, including C++, C#, and Java. I can develop software solutions for clients in these languages to meet their specific needs.',
                image: ''
            },
            {
                title: 'Custom Programming',
                description: 'I offer custom programming services to help clients bring their ideas to life. Whether its a desktop application, a mobile app, or a web-based solution, I have the skills and experience to deliver.',
                image: ''
            }
        ];
        const servicesContainer = document.querySelector('#services-container');

        services.forEach(service => {
            servicesContainer.innerHTML += `
        <h2>${service.title}</h2>
        <p>${service.description}</p>
        <img src="${service.image}" alt="${service.title}">
      `;
        });
    }



    // Display About Page
    function DisplayAboutPage() {
        console.log("About Page");
    }


    /**********************************
                Contact Form  
    **********************************/
    // Display Contact Page
    function DisplayContactPage() {
        console.log("Contact Page");
        document.getElementById("submitBtn").addEventListener("click", function (event) {
            // Variables
            let name = document.getElementById("name").value;
            let contactNumber = document.getElementById("contactNumber").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            let nameError = document.getElementById("nameError");
            let contactNumberError = document.getElementById("contactNumberError");
            let emailError = document.getElementById("emailError");

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


            if (isValid) {
                // Output user information to console
                console.log("Name: " + document.getElementById("name").value);
                console.log("Contact Number: " + contactNumber);
                console.log("Email: " + email);
                console.log("Message: " + document.getElementById("message").value);

                // Start 3 second timer
                setTimeout(function () {
                    // Redirect back to Home Page (index.html)
                    window.location.href = "index.html";
                }, 3000);
            }
        });
    }

    // named function option
    function Start() {
        console.log("App Started!");
        

        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Our Products":
                DisplayProductsPage();
                break;
            case "Our Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
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