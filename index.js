function bmiCalculator() {
    var yourWeight = parseFloat(document.querySelector("#weight").value);
    var yourHeight = parseFloat(document.querySelector("#height").value);
    var heightIncm = yourHeight / 100; // Convert height to meters

    var bmi = Math.floor(yourWeight / Math.pow(heightIncm, 2));
    document.querySelector(".result p").innerText = bmi;
    document.querySelector(".score").innerText = "⬇Result⬇";

    if (yourWeight === 20 && yourHeight === 24) {
        document.querySelector(".statement").innerText = "🎉Happy Birthday🎉";
        document.querySelector(".statement").style.fontSize="20px";
        document.querySelector(".statement").style.fontSize = "25px";
        document.querySelector(".shaktiSaha").style.display = "block"; // Make image visible
        document.querySelector(".buttonResult").addEventListener("click", happyBirthday);
    } else {
        document.querySelector(".shaktiSaha").style.display = "none"; // Hide image otherwise
        if (bmi <= 18.5) {
            document.querySelector(".statement").innerText = "Under weight";
        } else if (bmi <= 25) {
            document.querySelector(".statement").innerText = "Normal weight";
            document.querySelector(".statement").style.fontSize = "40px";
        } else if (bmi <= 30) {
            document.querySelector(".statement").innerText = "Over weight";
        } else if (bmi <= 35) {
            document.querySelector(".statement").innerText = "Obese";
        } else {
            document.querySelector(".statement").innerText = "No Input";
            document.querySelector(".result").innerText = "??";
        }
    }
}

function happyBirthday() {
    var audio = new Audio("./happyBirthday.mp3");
    audio.play();
}

document.querySelector(".buttonResult").addEventListener("click", bmiCalculator);
