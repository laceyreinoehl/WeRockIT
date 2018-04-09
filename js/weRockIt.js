$(function () {
    // Initialize Firebase
    var config = {
        apiKey : "AIzaSyB07JqijHmGDtlGrR4mxJ7FWpGdKuXqGG4",
        authDomain: "werockit-conf-website.firebaseapp.com",
        databaseURL: "https://werockit-conf-website.firebaseio.com",
        projectId: "werockit-conf-website",
        storageBucket: "werockit-conf-website.appspot.com",
        messagingSenderId: "801649081419"
    };
    firebase.initializeApp(config);

//Reference messages collection
    var messagesRef = firebase.database().ref("messages");

    var sponsorshipEmailForm = document.getElementById("sponsorshipEmailForm");
    sponsorshipEmailForm.addEventListener("submit", submitSponsorshipForm);

    /**
     * Submit Sponsorship Email form
     * @param event
     */
    function submitSponsorshipForm(event){
        event.preventDefault();

        //Get values
        var firstName = getInputValues("firstName");
        var lastName = getInputValues("lastName");
        var email = getInputValues("email");
        var company = getInputValues("company");
        var message = getInputValues("message");

        saveMessage(firstName, lastName, email, company, message);
    }

    /**
     * Get values from form
     * @param id
     * @returns {*}
     */
    function getInputValues(id){
        return document.getElementById(id).value;
    }

    /**
     * Save message to firebase
     * @param firstName
     * @param lastName
     * @param email
     * @param company
     * @param message
     */
    function saveMessage(firstName, lastName, email, company, message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            firstName : firstName,
            lastName: lastName,
            email: email,
            company: company,
            message: message
        });
    }
});
