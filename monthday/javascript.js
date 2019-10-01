function getMonth() {
    let month=parseInt(document.getElementById('month').value);
    switch (month) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("thang "+month+" co 31 ngay");
            break;
        case 11:
        case 9:
        case 6:
            alert("thang "+month+" co 30 ngay");
            break;
        case 2:
            alert("thang "+month+" co 28 hoac 29 ngay");
            break;
        default:
                alert("so ban nhap khong chinh xac!");
                break;

    }
}