let currentIndex = 0;
const images = document.querySelectorAll('.image');

pokazProdukt();
function toggleText(button) {
    const extraText = button.nextElementSibling; 
    if (extraText.style.display == "none") {
        extraText.style.display = "block"; 
    } else {
        extraText.style.display = "none"; 
    }
}

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});


function showSubscriptionAlert() {
    alert("Dziękujemy za subskrypcję naszego newslettera!");
    emailInput.value = '';
}

