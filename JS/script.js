function sumar (value) {
    var total = 0;	
    value = parseInt(value); 
    total = document.getElementById('total').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(value));
    document.getElementById('total').innerHTML = total;
}