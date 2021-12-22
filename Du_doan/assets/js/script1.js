


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
    <div class="target-wrap">
        <div class="row">
            <div class="col l-5 m-5 c-12 sticker-container">
                <h2>Bạn đã học bao nhiêu học kỳ?</h2>
                <div class="sticker-wrap">
                    <img class="sticker" src="./assets/img/unicorn (4).png" alt="">
                </div>
            </div>
            <div class="col l-7 m-7 c-12 target-container">
                <div class="row target-row">
                    <div class="col l-12 m-12 c-12 term-container">
                        <label for="input-term">Nhập số học kỳ đã học</label>
                    </div>
                    <div class="col l-12 m-12 c-12 term-container">
                        <input type="number" id="input-term" name="" value="">
                    </div>
                    <div class="col l-12 m-12 c-12 term-container">
                        <input class="button" type="button" id="submit-term" value="Nhập ngay">
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    <div class="target-wrap">
        <div class="row">
            <div class="col l-5 m-5 c-12 sticker-container">
                <h2>Nhập tổng điểm và tổng tín chỉ từng kỳ của bạn</h2>
                <div class="sticker-wrap">
                    <img class="sticker" src="./assets/img/unicorn (2).png" alt="">
                </div>
            </div>
            <div class="col l-7 m-7 c-12 target-container">
                <div class="row target-row">
                    <div class="col l-12 m-12 c-12">
                        <div class="row point-wrap">
                            <div class="col l-12 m-12 c-12 center">
                                <label for="term-point">Nhập điểm tổng kết học kỳ ${count} (hệ 4)</label><br>
                                <input type="number" name="" id="term-point${count}">
                            </div>
                            <div class="col l-12 m-12 c-12 center">
                                <label for="term-number">Nhập tổng tín chỉ học kỳ ${count}</label><br>
                                <input type="number" name="" id="term-number${count}">
                            </div>
                        </div>
                    </div>
                    <div class="col l-12 m-12 c-12 center ">
                        <input type="button" class="button" id="submit-point" value="Nhập ngay">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    var getSubmitPoints = document.getElementById('submit-point');
    
    getSubmitPoints.addEventListener('click',DanhSach);
}

function setDiemHKVaTinChi () {
    var getPointsWrap = document.querySelector('.point-wrap');
    getPointsWrap.innerHTML = `
    <div class="col l-12 m-12 c-12 center">
        <label for="term-point">Nhập điểm tổng kết học kỳ ${count} (hệ 4)</label><br>
        <input type="number" name="" id="term-point${count}">
    </div>
    <div class="col l-12 m-12 c-12 center">
        <label for="term-number">Nhập tổng tín chỉ học kỳ ${count}</label><br>
        <input type="number" name="" id="term-number${count}">
    </div>
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
    <div class="target-wrap">
        <div class="row">
            <div class="col l-5 m-5 c-12 sticker-container">
                <h2>Nhập tổng số tín chỉ trong toàn khóa học</h2>
                <div class="sticker-wrap">
                    <img class="sticker" src="./assets/img/unicorn (1).png" alt="">
                </div>
            </div>
            <div class="col l-7 m-7 c-12 target-container">
                <div class="row target-row">
                    <div class="col l-12 m-12 c-12 center">
                        <label for="full-tc">Nhập số tín chỉ toàn khóa học</label><br>
                        <input type="number" name="" id="full-tc"> <br>
                        <input type="button" class="button" value="Nhập ngay" id="submit-full-tc">
                    </div>
                </div>
            </div>
        </div>
    </div>
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
    <div class="target-wrap">
        <div class="row">
            <div class="col l-5 m-5 c-12 sticker-container">
                <h2>Đây rồi kết quả của bạn nè</h2>
                <div class="sticker-wrap">
                    <img class="sticker" src="./assets/img/success.png" alt="">
                </div>
            </div>
            <div class="col l-7 m-7 c-12 target-container">
                <div class="row target-row">
                    <div class="col l-12 m-12 c12 center">
                        <h2>Điểm của bạn hiện tại ${diemHienTai.toFixed(2)}</h2>
                        <h2>Cần đạt tối thiểu ${diemCanDat.toFixed(2)} để được bằng giỏi!</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

