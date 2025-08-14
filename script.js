document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll("button");

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let buttonText = e.target.innerText;

            if (buttonText === "AC") {
                expression = "";
                display.value = "";
            } else if (buttonText === "DEL") {
                expression = expression.slice(0, -1);
                display.value = expression;
            } else if (buttonText === "=") {
                try {
                    expression = eval(expression).toString();
                    display.value = expression;
                } catch (error) {
                    display.value = "Error";
                    expression = "";
                }
            } else {
                expression += buttonText;
                display.value = expression;
            }
        });
    });
});
