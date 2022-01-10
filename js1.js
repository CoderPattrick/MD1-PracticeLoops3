let value = null;
do{
    value = +prompt("Nhập số từ 1 đến 10 xem lào");
    alert("Bạn vưởi nhập cái số: " + value);
}
while(value<1 || value>10);