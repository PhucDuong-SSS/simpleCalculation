let getOldResult = () => { return document.getElementById('old-result').innerText; };

let displayOldResult = oldResult => { return document.getElementById('old-result').innerText = oldResult; };

let getResult = () => { return document.getElementById('result').innerText; }

let displayResult = result => {
    if (result == "") {
        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = formatString(result);
    }
}

let formatString = result => {
    if (result == '-') {
        return "";
    }

    let number = Number(result);

    let value = number.toLocaleString('en');
    return value;
}

let deleteFormatString = result => Number(result.replace(/,/g, ''));

var operators = document.getElementsByClassName('key--operator');
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        console.log(this.id)
        if (this.id == 'delete_all') {
            displayOldResult("");
            displayResult("");
        } else if (this.id == "reverse") {
            let result = formatString(getResult()).toString();
            if (result) {
                result = -result;
                displayResult(result);
            }

        } else {
            var result = getResult();
            var oldResult = getOldResult();
            if (result !== " ") {
                result = deleteFormatString(result);
                oldResult += result;
                if (this.id == "=") {
                    let finalResult = eval(oldResult);
                    console.log(finalResult);
                    displayResult(finalResult);
                    displayOldResult(' ');
                } else {
                    oldResult += this.id;
                    displayOldResult(oldResult);
                    displayResult(' ');
                }
            }
        }
    })
}

var numbers = document.getElementsByClassName('key--number');
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        console.log(this.id)
        let result = deleteFormatString(getResult());
        if (result !== NaN) {
            result += this.id;
            displayResult(result);
        }
    })
}