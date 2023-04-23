function calculate(type, value) {
    if(type === 'action') {
        switch (value) {
            case 'clear':
                document.getElementById("output").value = '';
                break;
            case '/':
            case '*':
            case '-':
            case '.':
            case '+':
                document.getElementById("output").value += value;
                break;
            case '=':
                var result = eval(document.getElementById("output").value);
                document.getElementById("output").value = result;
                break;
        }

    } else if(type === 'value') {
        document.getElementById("output").value += value;
    }
}