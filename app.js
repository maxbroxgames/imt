function imt() {
    let w = document.getElementById('w') .value;
    let h = document.getElementById('h') .value;
    let imt = w / (h/100) ** 2;
    if (imt < 18.5){
        document.getElementById('status').innerText = 'Недостаточная масса тела';
    }
    else if (imt < 24.9){
        document.getElementById('status').innerText = 'Нормально';
    }
    else if (imt < 29.9){
        document.getElementById('status').innerText = 'Избыточная';
    }
    else if (imt < 34.9 ){
        document.getElementById('status').innerText = '1 степени';
    }  
    else if (imt < 39.9){
        document.getElementById('status').innerText = '2 степени';
    }
    else if (imt > 39.9){
        document.getElementById('status').innerText = '3 степени';
    }
    document.getElementById("result").innerText = imt;

}