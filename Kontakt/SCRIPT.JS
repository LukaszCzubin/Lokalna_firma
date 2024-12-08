function formularz(){
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let numer = document.getElementById("Numer").value; 
    let email = document.getElementById("email").value;
    let pesel = document.getElementById("pesel").value;

    if (imie == "") {
        alert("Imie nie zostało podane");
        return;
    }

    if (nazwisko === "") {
        alert("Nazwisko nie zostało podane");
        return;
    }
    if (numer === "") {
        alert("Numer telefonu nie został podany");
        return;
    }

    if (numer.length !== 9) {
        alert("Numer telefonu musi mieć 9 cyfr");
        return;
    }

    if (email === "") {
        alert("Adres e-mail nie zostało podane");
        return;
    }

    if (pesel === "") {
        alert("Pesel nie zostało podane");
        return;
    }
    if (pesel.length !== 11) {
        alert("Pesel musi mieć 11 cyfr");
        return;
    }



    alert("Formularz został wysłany!");

    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("Numer").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pesel").value = "";

}