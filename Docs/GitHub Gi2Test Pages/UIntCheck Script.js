document.addEventListener("DOMContentLoaded", function () {
    const Text_NotInt = document.getElementById("NotInt").textContent;
    const Text_NotUint = document.getElementById("NotUint").textContent;
    const Text_IsUint = document.getElementById("IsUint").textContent;
    const inputField = document.getElementById("input");
    const outputDiv = document.getElementById("output");
    function writeOutput(message) {
        outputDiv.innerHTML += message + "\n";
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
    writeOutput(document.getElementById("Project").textContent);
    writeOutput("");
    writeOutput(document.getElementById("AppDesc").textContent);
    writeOutput("");
    writeOutput(document.getElementById("EnterIn").textContent);
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const input = inputField.value.trim();
            if (input !== "") {
                if (!( /^[+-]?\d+$/.test(input) )) {
                    writeOutput(Text_NotInt.replace("${}", input));
                } else {
                    const noplusinput = input.replace(/^[+]/, "");
                    const number = parseInt(noplusinput, 10);
                    if (number < 0 || number > 4294967295) {
                        writeOutput(Text_NotUint.replace("${}", input));
                    } else {
                        writeOutput(Text_IsUint.replace("${}", input));
                    }
                }
                inputField.value = "";
            }
        }
    });
});
