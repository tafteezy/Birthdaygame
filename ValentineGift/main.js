window.onload = function () {
    // Remove the container class
    document.body.classList.remove("container");

    // Redirect to the next page after 10 seconds
    setTimeout(() => {
        window.location.href = '/level19.html'; // Make sure this page exists
    }, 10000); // 10-second delay
};



