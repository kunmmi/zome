function copyToClipboard(event) {
    /* Get the SVG element and its parent */
    var svgElement = event.target;
    var parentDiv = svgElement.parentNode;

    /* Find the input field within the parent div */
    var copyText = parentDiv.querySelector('input');

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
    copyText.blur();
    /* Change the SVG icon */
    var originalSVG = svgElement.innerHTML; // Save the original SVG

    svgElement.innerHTML = '<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>'; // New SVG path

    /* Change the SVG icon back to the original after 2 seconds */
    setTimeout(function() {
        svgElement.innerHTML = originalSVG;
    }, 2000);
}

window.onload = function() {
    // Select all images with class 'commerce'
    var images = document.querySelectorAll('.commerce');

    // Loop through each image
    for (var i = 0; i < images.length; i++) {
        // Add click event listener to each image
        images[i].addEventListener('click', function(event) {
            // Redirect to the URL specified in the 'data-url' attribute of the clicked image
            window.location.href = event.target.getAttribute('data-url');
        });
    }
}