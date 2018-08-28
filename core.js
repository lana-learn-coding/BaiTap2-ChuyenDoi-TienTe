function start() {
    let fromcurrency = document.getElementById("from")[document.getElementById("from").selectedIndex].value;//get value from select
    fromcurrency = parseFloat(fromcurrency);//chuyen sang dang float de tinh toan
    let tocurrency = document.getElementById("to")[document.getElementById("to").selectedIndex].value;//get value from select
    tocurrency = parseFloat(tocurrency);//chuyen sang float de tinh toan

    // lay amount tu input
    let amount = document.getElementById("amount").value;
    amount = parseFloat(amount);

    //tinh toan dau ra
    let dapan = (amount*tocurrency)/fromcurrency;
    document.getElementById("output").innerHTML = dapan;
}