var mail = document.getElementById("mail");
var tel = document.getElementById("telefon");
var wyslij = document.getElementById("wyslij");

function sprawdzForm() {
    if (tel.value.length == 9) {
    }
    else {
        alert("Nieprawidłowy numer telefonu");
    };
    if (mail.value.includes("@") && mail.value.includes(".")) {
    } else {
        alert("Nieprawidłowy email");
    };

    if (tel.value.length == 0) {
        alert("Nie podałeś/aś numeru telefonu");
    };
    if (mail.value.length = 0) {
        alert("Nie podałeś/aś maila");
    };
    if (Imie.value.length == 0) {
        alert("Nie podałeś/aś Imienia");
    };
    if (Nazwisko.value.length == 0) {
        alert("Nie podałeś/aś Nazwiska");
    };
    if (tel.value.length == 9 && mail.value.includes("@") && mail.value.includes(".")) {
        name = document.getElementById('Imie').value;
        last = document.getElementById('Nazwisko').value;
        email = document.getElementById('mail').value;
        mess = document.getElementById("message").value;
        console.log("Imie: " + name + " - Nazwisko: " + last + " - E-mail: " + email);
        console.log("Wiadomość: " + mess);
        form.reset();
    }
}
