

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

    function DisplayProductsPage() {
        console.log("Products Page");

        // Step 1. get an entry point(s) (insertion point / deletion point) reference 
        let DocumentBody = document.body;
        let MainContent = document.getElementsByTagName("main")[10];

        // Step 2. create an element(s) to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class ="mt-3"></p>`

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

    function DisplayServicesPage() {
        console.log("Services Page");
    }

    function DisplayAboutPage() {
        console.log("About Page");
    }

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

    }


    window.addEventListener("load", Start);

})();