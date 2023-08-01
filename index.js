// TÍNH LƯƠNG NHÂN VIÊN

var luongmotngay = 100000;

console.log("Lương một ngày", luongmotngay);

var songaylam = 20;

console.log("Số ngày làm việc", songaylam);

var tongluong = luongmotngay * songaylam;

console.log("Tổng lương nhận được", tongluong);

// TÍNH GIÁ TRỊ TRUNG BÌNH

var number1 = 1;

console.log("Giá Trị : ", number1)

var number2 = 2;

console.log("Giá Trị : ", number2)

var number3 = 3;

console.log("Giá Trị : ", number3)

var number4 = 4;

console.log("Giá Trị : ", number4)

var number5 = 5;

console.log("Giá Trị : ", number5)

var trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;

console.log("Giá Trị Trung Bình : ", trungbinh)

// QUY ĐỔI TIỀN

var tienviet = 23500 ;

console.log('Tiền Việt', tienviet)

var sodolar = 2 ;

console.log('Số dolar cần đổi', sodolar)

var doiduoc = tienviet * sodolar;

console.log('Số tiền Việt đổi được', doiduoc)


// TÍNH DIỆN TÍCH VÀ CHU VI HÌNH CHỮ NHẬT

var chieudai = 5;
var chieurong = 3;
var chuvi = (chieudai + chieurong) * 2;
var dientich = chieudai * chieurong;

console.log('Chiều dài', chieudai); 'Chiều rộng', chieurong; ; 
console.log('Chiều rộng', chieurong);
console.log('Chu Vi', chuvi);
console.log('Diện Tích', dientich);


// TÍNH TỔNG HAI KÝ SỐ

var sotunhien = 99;
console.log('Số Tự Nhiên', sotunhien);
var hangdonvi = sotunhien % 10;
console.log('Hàng đơn vị', hangdonvi);
var hangchuc = (sotunhien - hangdonvi) / 10;
console.log('Hàng chục', hangchuc);
var kyso = hangdonvi + hangchuc;
console.log('Ký số = ', kyso);
