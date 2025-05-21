function makeCake(Health) {
    setTimeout(() => {
        if (Health) {
            document.getElementById('result').innerHTML = "I have 1 cake(s) and I am happy <br>";
        } else {
            document.getElementById('result').innerHTML = "There is no cake and I am sad <br> ";
        }
        document.getElementById('finally').innerHTML = " <br> I still have a party 🎉";
    }, 1000);
}

document.getElementById('yes').addEventListener('click', () => { makeCake(true) });

document.getElementById('no').addEventListener('click', () => { makeCake(false) });
