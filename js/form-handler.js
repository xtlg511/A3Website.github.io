// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Handle the Referral Form button click
    const referralSubmitButton = document.getElementById('submit-btn');
    if (referralSubmitButton) {
        referralSubmitButton.addEventListener('click', function () {
            alert('Referral Form Submitted'); // Show alert message
        });
    }

    // Handle the Contact Form button click
    const contactSubmitButton = document.getElementById('contact-submit-btn');
    if (contactSubmitButton) {
        contactSubmitButton.addEventListener('click', function () {
            alert('Contact Form Submitted'); // Show alert message
        });
    }

});
