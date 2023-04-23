function calculate(type, value) {
    if(type === 'action') {
        if(value === 'clear') {
            document.getElementById("output").value = '';
        }
        if(value === '/' || value === '*' || value === '-' || value === '+') {
            document.getElementById("output").value += value;
        }

        if(value === '=') {
            var result = eval(document.getElementById("output").value);
            document.getElementById("output").value = result;
        }

    } else if(type === 'value') {
        document.getElementById("output").value += value;
    }
}