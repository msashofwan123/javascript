/*
// Coding Agak Laen

var h1 = document.createElement("h1");
var h1Text = document.createTextNode("Judul Utama");
h1.appendChild(h1Text);

var judul2 = document.getElementById("judul2");
var parent = judul2.parentNode;
parent.insertBefore(h1, judul2);

console.log(parent);


// Coding Ust Purnomo
var h1Node = document.createElement("h1");
var textH1 = document.createTextNode("Ini Coding Ust Purnomo");
h1Node.appendChild(textH1);

var bodyDocument = document.querySelector("body");
var p1Hallo2 = document.querySelectorAll('p');
bodyDocument.insertBefore(h1Node, p1Hallo2[1]);

console.log(p1Hallo2);


// GANTI WARNA UNTUK LIST GENAP
var pilihGenap = document.querySelectorAll('li:nth-child(even)')
// console.log(pilihGenap)

for (const pilih of pilihGenap) {
    // console.log(pilih);
    pilih.style.color = "Red";
    pilih.style.fontWeight = "Bold";
    pilih.style.fontSize = "40px";
    
}
*/

// Event Saat Button di Klik
var h1Click = document.querySelector('h1');
h1Click.onclick = () => {
    // h1Click.className = "merah";
    // h1Click.style.color = "red";
}

var btnRed = document.getElementById('btnred');
btnRed.onclick = () => {
    h1Click.className = "merah";
}

var btnGreen = document.getElementById('btngreen');
btnGreen.onclick = () => {
    h1Click.className = "hijau";
}


/* PEMBELAJARAN FORM Kamis, 16 Oktober 2023 */
// Mencari element Node Dengan DOM
// var formku, fullname, address, gender, religi, submit, result;

// formku = document.getElementById('formku');
// fullname = document.getElementById('fullname');
// address = document.getElementById('address');
// gender = document.getElementById('gender');
// religi = document.getElementById('religi');
// submit = document.getElementById('submit');
// result1 = document.getElementById('result');

// // console.log(fullname);
// // console.log(address);
// // console.log(gender);
// // console.log(religi);
// // console.log(submit);

// function actionForm(e) {
//     e.preventDefault();
//     // console.log("Proses Pengolahan Data Sedang Berlangsung");
//     console.log('Name : ' + fullname.value);
//     console.log('Address : ' + address.value);
//     console.log('Gender : ' + gender.value);
//     console.log('Religi : ' + religi.value);
//     result1.innerHTML = gender.value + ' Dari ' + religi.value;
// }

// function focusForm(e) {
//     e.target.style.border = "2px solid green";
// }
// fullname.addEventListener("focus", focusForm);
// address.addEventListener("focus", focusForm);

// formku.addEventListener("submit", actionForm);

/* PEMBELAJARAN Dropdown Dinamis Kamis, 16 Februari 2023 */
var choice;

choice = document.getElementById('choice');
subchoice = document.getElementById('subchoice');
yourChoice = document.getElementById('yourChoice');

console.log(choice);
console.log(subchoice);
console.log(yourChoice);

var foodChoice, drinkChoice, snackChoice;



function actionMenu(e) {
    yourChoice.innerHTML = 'Kategori Anda : ' + choice.value + '<br>';
    yourChoice.innerHTML += 'Pilihan Anda : ' + subchoice.value;
}

function showMenu() {
    if (choice.value === "Makanan") {
        foodChoice = "<option value=''>Pilih Menu</option>";
        foodChoice += "<option value='Nasi Goreng'>Nasi Goreng</option>";
        foodChoice += "<option value='Nasi Uduk'>Nasi Uduk</option>";
        foodChoice += "<option value='Ayam Geprek'>Ayam Geprek</option>";
        subchoice.innerHTML = foodChoice;
    } else if (choice.value === "Minuman") {
        drinkChoice = "<option value=''>Pilih Menu</option>";
        drinkChoice += "<option value='Boba'>Boba</option>";
        drinkChoice += "<option value='Es Dugan'>Es Dugan</option>";
        drinkChoice += "<option value='Kopi Hitam'>Kopi Hitam</option>";
        subchoice.innerHTML = drinkChoice;
    } else if (choice.value === "Snack Ringan") {
        snackChoice = "<option value=''>Pilih Menu</option>";
        snackChoice += "<option value='Chitato'>Chitato</option>";
        snackChoice += "<option value='Gorengan'>Gorengan</option>";
        snackChoice += "<option value='Taro'>Taro</option>";
        subchoice.innerHTML = snackChoice;
    }
}

window.addEventListener('load', showMenu);
choice.addEventListener('change', showMenu);
subchoice.addEventListener('change', actionMenu);
