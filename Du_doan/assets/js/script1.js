


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
                    <div class="col l-12 m-12 c-12 label-container">
                        <label for="input-term">Nhập số học kỳ đã học</label>
                    </div>
                    <div class="col l-12 m-12 c-12 label-container">
                        <input type="number" id="input-term" name="" value="">
                    </div>
                    <div class="col l-12 m-12 c-12 label-container">
                        <input class="button" type="button" id="submit-term" value="Nhập ngay">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    var submitTermBtn = document.getElementById('submit-term');
    submitTermBtn.addEventListener('click',getInputTerm);

}
// Sau khi set ô nhập thì thực hiện lấy dữ liệu
// Lấy dữ liệu Số học kỳ đã học
var soHK = 0;
function getInputTerm () {
    var termLabel = document.querySelector('.label-container');
    var inputTerm = document.getElementById('input-term');
    soHK = inputTerm.value * 1;
    
    if (inputTerm.value != "") {
        if (Number.isInteger(soHK) && soHK >= 0) {
            termLabel.innerHTML = `
            <i style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
            <label style="color: #4AA96C;" for="input-term">Nhập thành công</label>
            `;
            setTimeout(function () {
                setDiemHKGoc ();
            },1000);
        }
        else {
            termLabel.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color:#F55C47;" for="input-term">Số học kỳ phải là số nguyên dương</label>
            `;
        }
    }else {
        termLabel.innerHTML = `
        <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
        <label style="color:#F55C47;" for="input-term">Chưa nhập thông tin</label>
        `;
    }

    setTimeout(function () {
        termLabel.innerHTML = `
        <label for="input-term">Nhập số học kỳ đã học</label>
        `;
    },1000);
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
                            <div class="col l-12 m-12 c-12">
                                <div class="label-container" id="label-point${count}">
                                    <label for="term-point${count}">Nhập điểm tổng kết học kỳ <span class="high-light">${count}</span> (hệ 4)</label>
                                </div>
                                <div class="center">
                                    <input type="number" name="" id="term-point${count}" value="">
                                </div>
                            </div>
                            <div class="col l-12 m-12 c-12">
                                <div class="label-container" id="label-tc${count}">
                                    <label for="term-number${count}">Nhập tổng tín chỉ học kỳ <span class="high-light">${count}</span></label>
                                </div>
                                <div class="center">
                                    <input type="number" name="" id="term-number${count}" value="">
                                </div>
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
    <div class="col l-12 m-12 c-12">
        <div class="label-container" id="label-point${count}">
            <label for="term-point${count}">Nhập điểm tổng kết học kỳ <span class="high-light">${count}</span> (hệ 4)</label>
        </div>
        <div class="center">
            <input type="number" name="" id="term-point${count}" value="">
        </div>
    </div>
    <div class="col l-12 m-12 c-12">
        <div class="label-container" id="label-tc${count}">
            <label for="term-number${count}">Nhập tổng tín chỉ học kỳ <span class="high-light">${count}</span></label>
        </div>
        <div class="center">
            <input type="number" name="" id="term-number${count}" value="">
        </div>
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

    var labelPointWrap = document.getElementById(`label-point${count}`);
    var labelTCWrap = document.getElementById(`label-tc${count}`);

    var result = false;
    if (getDiemHK.value == "" || getSoTC.value == "") {
        if (getDiemHK.value == "" && getSoTC.value == "") {
            labelPointWrap.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color:#F55C47;">Chưa nhập thông tin</label>
            `;
            labelTCWrap.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color:#F55C47;">Chưa nhập thông tin</label>
            `;
        }
        if (getDiemHK.value == "") {
            labelPointWrap.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color:#F55C47;">Chưa nhập thông tin</label>
            `;
        } else if (getSoTC.value == "") {
            labelTCWrap.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color:#F55C47;">Chưa nhập thông tin</label>
            `;
        }
        result = false;
    }
    else {
        if (diemHK < 0 || diemHK > 4) {
            if (diemHK < 0) {
                labelPointWrap.innerHTML = `
                <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
                <label style="color:#F55C47;">Điểm không thể âm</label>
                `;
            }
            if (diemHK > 4) {
                labelPointWrap.innerHTML = `
                <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
                <label style="color:#F55C47;">Điểm không thể lớn hơn 4</label>
                `;
            }
            result = false;
        }
        else if (Number.isInteger(soTC) && soTC > 0) {
            labelPointWrap.innerHTML = `
            <i style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
            <label style="color: #4AA96C;">Nhập thành công</label>
            `;
            labelTCWrap.innerHTML = `
            <i style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
            <label style="color: #4AA96C;">nhập thành công</label>
            `;
            result = true;
        } else {
            labelTCWrap.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color:#F55C47;">Số tín chỉ phải là số nguyên dương</label>
            `;
            result = false;
        }
        
    }

    if (result == false) {
        setTimeout(function() {
            labelPointWrap.innerHTML = `
            <label for="term-point${count}">Nhập điểm tổng kết học kỳ <span class="high-light">${count}</span> (hệ 4)</label>
            `;
            labelTCWrap.innerHTML = `
            <label for="term-number${count}">Nhập tổng tín chỉ học kỳ <span class="high-light">${count}</span></label>
            `;
        },1000);
    }
    return result;
}

function DanhSach () {
    var check = getDiemHKVaTinChi();

    if (check) {
        setTimeout (function() {
            var tmp = new DiemHocKy (diemHK, soTC);
            a.push(tmp);
            console.log('hello4');
            // console.table(a);
            count++;
            if (count > soHK) {
                setFullTC();
            }
            else {
                setDiemHKVaTinChi();
            }
        },1000);
    }
}

function setFullTC () {
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
                    <div class="col l-12 m-12 c-12">
                        <div class="label-container" id="full-tc-wrap">
                            <label for="full-tc">Nhập số tín chỉ toàn khóa học</label>
                        </div>
                        <div class="center">
                            <input type="number" name="" id="full-tc"> <br>
                            <input type="button" class="button" value="Nhập ngay" id="submit-full-tc">
                        </div>
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
    var fullTCWrap = document.getElementById('full-tc-wrap');

    fullTc = getFull.value * 1;
    var check = false;

    if (getFull.value != "") {
        if (Number.isInteger(fullTc) && fullTc > 0) {
            fullTCWrap.innerHTML = `
            <i style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
            <label style="color: #4AA96C;">Nhập thành công</label>
            `;

            check = true;
            setTimeout(function() {
                tinhDiem();
            },1000);
        } else {
            fullTCWrap.innerHTML =`
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color: #F55C47;" for="full-tc">Số tín chỉ phải là số nguyên dương</label>
            `;
        }
    } else {
        fullTCWrap.innerHTML =`
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <label style="color: #F55C47;" for="full-tc">Chưa nhập thông tin</label>
        `;
    }

    if(check == false) {
        setTimeout(function() {
            fullTCWrap.innerHTML =`
            <label for="full-tc">Nhập số tín chỉ toàn khóa học</label>
            `;
        },1000);
    }
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
                    <div class="col l-12 m-12 c12 center" id="result-wrap">
                        <!-- JS -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    var resultWrap = document.getElementById('result-wrap');
    if (target == 3.20) {
        if (diemHienTai < 3.20) {
            resultWrap.innerHTML = `
            <h2>Điểm của bạn hiện tại <span class="high-light">${diemHienTai.toFixed(2)}</span></h2>
            <h2>Các học kỳ tiếp theo cần tối thiểu <span class="high-light">${diemCanDat.toFixed(2)}</span> điểm để đạt mục tiêu Bằng giỏi!</h2>
            `;
        } else {
            resultWrap.innerHTML = `
            <h2>Điểm của bạn hiện tại <span class="high-light">${diemHienTai.toFixed(2)}</span></h2>
            <h2>Bạn đã đủ điểm để đạt Bằng giỏi</h2>
            <h2>Cần tối thiểu <span class="high-light">${diemCanDat.toFixed(2)}</span> điểm để duy trì mục tiêu Bằng giỏi!</h2>
            `;
        }
    }
    
    if (target == 2.50) {
        if (diemHienTai < 2.50) {
            resultWrap.innerHTML = `
            <h2>Điểm của bạn hiện tại <span class="high-light">${diemHienTai.toFixed(2)}</span></h2>
            <h2>Các học kỳ tiếp theo cần tối thiểu <span class="high-light">${diemCanDat.toFixed(2)}</span> điểm để đạt mục tiêu Bằng khá!</h2>
            `;
        } else {
            resultWrap.innerHTML = `
            <h2>Điểm của bạn hiện tại <span class="high-light">${diemHienTai.toFixed(2)}</span></h2>
            <h2>Bạn đã đủ điểm đạt Bằng khá!</h2>
            <h2>Cần tối thiểu <span class="high-light">${diemCanDat.toFixed(2)}</span> điểm để duy trì mục tiêu Bằng khá!</h2>
            `;
        }
    }
}

