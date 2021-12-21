


function DiemHocKy (diemHK, soTc) {
    this.diemHocKy = diemHK;
    this.soTinChi = soTc;

    this.tongDiemGoc = function () {
        return this.diemHocKy * this.soTinChi;
    }
}

var targetGioi = document.getElementById('target-gioi');
var targetKha = document.getElementById('target-kha');
// Mục tiêu là bằng Giỏi hoặc Khá
var target = 0;
function setTargetGioi () {
    target = 3.20;
}
function setTargetKha () {
    target = 2.50;
}


targetGioi.addEventListener('click', setTargetGioi);
targetKha.addEventListener('click', setTargetKha);
targetGioi.addEventListener('click', setInputTerm);
targetKha.addEventListener('click', setInputTerm);


//  Chứa tất cả các thẻ con bên trong
var inputWrap = document.querySelector ('.input-wrap');


// Hiện ô nhập số học kỳ đã học ghi đè lên bằng giỏi bằng khá
function setInputTerm () {
    inputWrap.innerHTML = `
    <label for="input-term">Nhập số học kỳ đã học</label> <br>
    <input type="text" id="input-term" name="" value="">
    <input type="button" id="submit-term" value="Submit">
    `
    var submitTermBtn = document.getElementById('submit-term');
    submitTermBtn.addEventListener('click',getInputTerm);
    submitTermBtn.addEventListener('click',setDiemHKGoc);
}
// Sau khi set ô nhập thì thực hiện lấy dữ liệu
// Lấy dữ liệu Số học kỳ đã học
var soHK = 0;
function getInputTerm () {
    var inputTerm = document.getElementById('input-term');
    soHK = inputTerm.value * 1;
}



var count = 1;
function setDiemHKGoc () {
    inputWrap.innerHTML = `
    <div class="point-wrap">
        <label for="term-point">Nhập điểm tổng kết học kỳ thứ ${count} (hệ 4)</label>
        <input type="text" name="" id="term-point${count}">
        <label for="term-number">Nhập tổng tín chỉ học kỳ thứ ${count}</label>
        <input type="text" name="" id="term-number${count}">
    </div>
    <input type="button" class="button" id="submit-point" value="Submit">
    `
    var getSubmitPoints = document.getElementById('submit-point');
    
    getSubmitPoints.addEventListener('click',DanhSach);
}

function setDiemHKVaTinChi () {
    var getPointsWrap = document.querySelector('.point-wrap');
    getPointsWrap.innerHTML = `
    <label for="term-point">Nhập điểm tổng kết học kỳ thứ ${count} (hệ 4)</label>
    <input type="text" name="" id="term-point${count}">
    <label for="term-number">Nhập tổng tín chỉ học kỳ thứ ${count}</label>
    <input type="text" name="" id="term-number${count}">
    `
}

var diemHK = 0;
var soTC = 0;
var a = [];
function getDiemHKVaTinChi () {
    var getDiemHK = document.getElementById(`term-point${count}`);
    var getSoTC = document.getElementById(`term-number${count}`);
    diemHK = getDiemHK.value * 1;
    soTC = getSoTC.value * 1;
}

function DanhSach () {
    getDiemHKVaTinChi();
    var tmp = new DiemHocKy (diemHK, soTC);
    a.push(tmp);
    // console.table(a);
    count++;
    var ok = true;
    if (count > soHK) {
        ok = false;
        inputFullTC();
    }
    if (ok) {
        setDiemHKVaTinChi();
    }
}

function inputFullTC () {
    inputWrap.innerHTML = `
    <label for="full-tc">Nhập số tín chỉ toàn khóa học</label>
    <input type="text" name="" id="full-tc">
    <input type="button" value="Submit" id="submit-full-tc">
    `
    var getSubmitFull = document.getElementById('submit-full-tc');
    getSubmitFull.addEventListener('click',getFullTC);
}

var fullTc = 0;
function getFullTC () {
    var getFull = document.getElementById('full-tc');
    fullTc = getFull.value * 1;
    tinhDiem();
}

function tinhDiem () {
    var tongDaHoc = 0;
    var tongTCDaHoc = 0;
    for (var i = 0; i < soHK; i++) {
        tongDaHoc += a[i].tongDiemGoc();
        tongTCDaHoc += a[i].soTinChi;
    }

    var diemHienTai = tongDaHoc/tongTCDaHoc;
    var diemCanDat = ((target * fullTc) - tongDaHoc) / (fullTc - tongTCDaHoc);

    inputWrap.innerHTML = `
    <h2>Điểm của bạn hiện tại ${diemHienTai.toFixed(2)}</h2>
    <h2>Cần đạt tối thiểu ${diemCanDat.toFixed(2)} để được bằng giỏi!</h2>
    `
}

