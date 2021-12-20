




function MonHoc (tenMh, soTc, tiLe, diemQt, diemThi) {
    this.tenMonHoc = tenMh;
    this.soTinchi = soTc*1;
    this.phanTram = tiLe;
    this.diemQuaTrinh = diemQt*1;
    this.DiemThi = diemThi*1;
    this.diemChu = '';
    this.diemH4 = 0;

    this.diemTongket = function () {
        var tongKet = 0;
        if (this.phanTram == '55') {
            tongKet = (this.diemQuaTrinh * 0.5) + (this.DiemThi * 0.5);
        } else if (this.phanTram == '46') {
            tongKet = (this.diemQuaTrinh * 0.4) + (this.DiemThi * 0.6);
        } else if (this.phanTram == '37') {
            tongKet = (this.diemQuaTrinh * 0.3) + (this.DiemThi * 0.7);

        }
        return tongKet.toFixed(2);
    }

    this.convertDiem = function () {
        var diem = this.diemTongket();

        if (diem >= 9.5) {
            this.diemChu = 'A+';
            this.diemH4 = 4;
        }
        else if (diem >= 8.5) {
            this.diemChu = 'A';
            this.diemH4 = 3.8;
        }
        else if (diem >= 8.0) {
            this.diemChu = 'B+';
            this.diemH4 = 3.5;
        }
        else if (diem >= 7) {
            this.diemChu = 'B';
            this.diemH4 = 3;
        }
        else if (diem >= 6) {
            this.diemChu = 'C+';
            this.diemH4 = 2.5;
        }
        else if (diem >= 5.5) {
            this.diemChu = 'C';
            this.diemH4 = 2;
        }
        else if (diem >= 4.5) {
            this.diemChu = 'D+';
            this.diemH4 = 1.5;
        }
        else if (diem >= 4.0) {
            this.diemChu = 'D';
            this.diemH4 = 1;
        }
        else if (diem >= 2.0) {
            this.diemChu = 'F+';
            this.diemH4 = 0.5;
        }
        else  {
            this.diemChu = 'F';
            this.diemH4 = 0;
        }
    }
}



var tenMhNew = '';
var soTcNew = '';
var tiLeNew = '';
var diemQtNew = '';
var diemThiNew = '';
var submit = document.getElementById('submit');
var xemKq = document.getElementById('xemkq');


/* vì sau mỗi lần sử dụng innerHTML nó lại
ghi đè lên cái cũ cho nên phải sử dụng một hàm
getInput với thời gian thực */
var count = 0;

function getInput () {
    var mon = 'mon' + count;
    var tc = 'tc' + count;
    var phanTram = 'phanTram' + count;
    var diemqt = 'diemqt' + count;
    var thi = 'diemThi' + count;
    var tenMh = document.getElementById(mon);
    var soTc = document.getElementById(tc);
    var tiLe = document.getElementById(phanTram);
    var diemQt = document.getElementById(diemqt);
    var diemThi = document.getElementById(thi);

    tenMhNew = tenMh.value;
    soTcNew = soTc.value;
    tiLeNew = tiLe.value;
    diemQtNew = diemQt.value;
    diemThiNew = diemThi.value;
}

/* Ghi đè lên phần input cũ nhằm xóa dữ liệu
trong ô nhập trước đó để nhập ô tiếp theo */
var setInput = document.querySelector('.input-table');
function reset () {
    setInput.innerHTML = `
    <div class="row no-gutters first-row" style="border-radius: 6px 6px 0 0;">
        <div class="col l-3 m-3 c-3 th"><label for="mon${count}">Tên môn học</label></div>
        <div class="col l-2 m-2 c-2 th"><label for="tc${count}">Số tín chỉ</label></div>
        <div class="col l-3 m-3 c-3 th"><label for="phanTram${count}">Tỉ lệ phần trăm</label></div>
        <div class="col l-2 m-2 c-2 th"><label for="diemqt${count}">Điểm quá trình</label></div>
        <div class="col l-2 m-2 c-2 th"><label for="diemThi${count}">Điểm thi</label></div>
    </div>

    <div class="row no-gutters">
        <div class="col l-3 m-3 c-3 td"><input type="text" name="mon" id="mon${count}" value="" autofocus></div>
        <div class="col l-2 m-2 c-2 td"><input type="text" name="tc" id="tc${count}" value=""></div>
        <div class="col l-3 m-3 c-3 td"><input type="text" name="phanTram" id="phanTram${count}" value="" placeholder="(55 hoặc 46 hoặc 37)"></div>
        <div class="col l-2 m-2 c-2 td"><input type="text" name="diemqt" id="diemqt${count}" value=""></div>
        <div class="col l-2 m-2 c-2 td"><input type="text" name="diemThi" id="diemThi${count}" value=""></div>
    </div>
    `
}

function check () {
    console.log (tenMhNew, soTcNew, tiLeNew, diemQtNew, diemThiNew)
    if (tenMhNew == '' || soTcNew == '' || tiLeNew == '' || diemQtNew == '' || diemThiNew == '') {
        alert('Không được bỏ trống');
        return false;
    }
    else {
        if (tiLeNew == '55' || tiLeNew == '46' || tiLeNew == '37') {
            
            return true;
        } else {
            alert('Ô "Tỷ lệ phần trăm" phải nhập trong ba số 55 hoặc 46 hoặc 37');
            return false;
        }
    }
}

var n = 0;
var a = [];
// Thực hiện khi nhấn nút Submit
function DSMonHoc () {
    getInput();
    if (check()) {
        
        var tmp = new MonHoc(tenMhNew, soTcNew, tiLeNew, diemQtNew, diemThiNew);
        n = a.push(tmp);
        count++;
        reset();
    }
}



function diemTBHK () {
    var tongTC = 0;
    var tongDiem = 0;
    for (var i = 0; i < n; i++) {
        a[i].convertDiem();
        tongDiem += a[i].diemH4 * a[i].soTinchi;
        tongTC += a[i].soTinchi;
    }
    return (tongDiem/tongTC).toFixed(2);
}

// Thực hiện khi click nút Xem KQ
var getOutput = document.querySelector('.sub-row');
var getTbhk = document.querySelector('.tbhk');
function print () {
    var diemTb = diemTBHK();
    var codes = '';
    for (var i = 0; i < n; i++) {
        codes += `
        <div class="row no-gutters tr">
            <div class="col l-1 m-1 c-1 td"><p>${i+1}</p></div>
            <div class="col l-2 m-2 c-2 td"><p>${a[i].tenMonHoc}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${a[i].soTinchi}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${a[i].phanTram}</p></div>
            <div class="col l-2 m-2 c-2 td"><p>${a[i].diemQuaTrinh}</p></div>
            <div class="col l-2 m-2 c-2 td"><p>${a[i].DiemThi}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${a[i].diemTongket()}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${a[i].diemH4}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${a[i].diemChu}</p></div>               
        </div>
        `
    }
    getOutput.innerHTML = codes;
    getTbhk.innerHTML = `
    <h2 class="noti-text">Điểm trung bình học kỳ: ${diemTb}</>
    `
}


var removeInput = document.getElementById('input-remove');
var removeBtn = document.getElementById('remove-btn');
var removeLabel = document.getElementById('remove-label');
/* Hàm xóa 1 phần tử của mảng */
function remove () {
    var index = removeInput.value*1;
    console.log(`index = ${index}`);
    if (index <= n && index > 0) {
        a.splice(index - 1, 1);
        n--;
        removeLabel.innerText = 'Xóa thành công!';
        print();
    } else removeLabel.innerText = 'Không có phần tử này!';
    
    setTimeout (function () {
        removeLabel.innerText = 'Nhập hàng muốn xóa';
    }, 1500);
}


submit.addEventListener('click', DSMonHoc);
submit.addEventListener('click', print);

removeBtn.addEventListener('click', remove);