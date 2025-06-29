function sendEmail() {
    const templateParams = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#message').value
    };
    emailjs
        .send("service_cvi7mxs","template_07dx9pc", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
        });
}