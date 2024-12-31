let a = Number(prompt("Enter a number"));
let b = parseInt(prompt("Enter another number"));

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("It is not Allowed");
    //script paused whenever the error is thrown
}

function main() {
    try {
        alert(`Sum = ${(a + b) * x}`);
        return true;
    } catch (error) {
        alert("Error aa gya bhai");
        alert(error.name);
        alert(error.message);
        alert(error.stack);
        return false;
    }
    finally {
        alert("Files are being closed and db connection is being closed");
    }
    alert("Files are being closed and db connection is being closed");
}

main();
