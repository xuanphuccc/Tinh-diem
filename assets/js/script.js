




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
        console.log('Tổng kết tlt = ' + tongKet);
        tongKet = tongKet.toFixed(2)*1;

        if (tongKet == 1.95 || tongKet == 3.95 || tongKet == 4.45 
            || tongKet == 5.45 || tongKet == 5.95 || tongKet == 6.95 
            ||tongKet == 7.95 || tongKet == 8.45 || tongKet ==9.45) {
            tongKet = tongKet + 0.05;
        }
        return tongKet.toFixed(1);
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


var submit = document.getElementById('submit');


var tenMh = document.getElementById('mon');
var soTc = document.getElementById('tc');
var tiLe = document.getElementById('phanTram');
var diemQt = document.getElementById('diemqt');
var diemThi = document.getElementById('diemThi');

var tenMhNew = '';
var soTcNew = '';
var tiLeNew = '';
var diemQtNew = '';
var diemThiNew = '';

function getInput () {
    

    tenMhNew = tenMh.value;
    soTcNew = soTc.value;
    tiLeNew = tiLe.value;
    diemQtNew = diemQt.value;
    diemThiNew = diemThi.value;
}

/* Xóa giá trị trong ô input sau mỗi lần nhập */
function resetInput () {
    tenMh.value = '';
    soTc.value = '';
    // tiLe.value = '';
    diemQt.value = '';
    diemThi.value = '';

}

function check () {
    var alertText = document.querySelector('.alert-text');
    var result = false;
    console.log (tenMhNew, soTcNew, tiLeNew, diemQtNew, diemThiNew)
    if (tenMhNew == '' || soTcNew == '' || diemQtNew == '' || diemThiNew == '') {
        alertText.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <p style="color:#F55C47;">Chưa nhập đủ thông tin</p>
        `;
        
        result = false;
    }
    else if (soTcNew*1 <= 0 || diemQtNew*1 < 0 || diemThiNew*1 < 0) {
        if (soTcNew*1 <= 0) {
            alertText.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <p style="color:#F55C47;">Số tín chỉ không thể nhỏ hơn 1</p>
            `;
        } else if (diemQtNew*1 < 0 || diemThiNew*1 < 0) {
            alertText.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <p style="color:#F55C47;">Điểm không thể là số âm</p>
            `;
        }

        result = false;
    }
    else if (diemQtNew*1 > 10 || diemThiNew*1 > 10) {
        alertText.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <p style="color:#F55C47;">Điểm không thể lớn hơn 10</p>
            `;
    }
    else {
        alertText.innerHTML = `
        <i style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
        <p style="color: #4AA96C;">Lưu thành công</p>
        `;

        result = true;
    }

    setTimeout (function () {
        alertText.innerHTML = "";
    }, 2000);
    return result;
}

var n = 0;
var a = [];
// Thực hiện khi nhấn nút Submit
function DSMonHoc () {
    getInput();
    if (check()) {
        
        var tmp = new MonHoc(tenMhNew, soTcNew, tiLeNew, diemQtNew, diemThiNew);
        n = a.push(tmp);
        console.table(a);
        // count++;
        resetInput();
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
        var phanTramText = '';
        if (a[i].phanTram == '55') {
            phanTramText = '50/50';
        } else if (a[i].phanTram == '46') {
            phanTramText = '40/60';
        } else phanTramText = '30/70';
        codes += `
        <div class="row no-gutters tr">
            <div class="col l-1 m-1 c-1 td"><p>${i+1}</p></div>
            <div class="col l-2 m-2 c-2 td"><p>${a[i].tenMonHoc}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${a[i].soTinchi}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${phanTramText}</p></div>
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
    <h3 class="noti-text">Điểm trung bình học kỳ: ${diemTb}</h3>
    `
}


var removeInput = document.getElementById('input-remove');
var removeBtn = document.getElementById('remove-btn');
var removeLabel = document.querySelector('.label-wrap');
/* Hàm xóa 1 phần tử của mảng */
function remove () {
    var index = removeInput.value*1;
    if (index > 0 && index <= n) {
        a.splice(index - 1, 1);
        n--;
        removeLabel.innerHTML = `
        <i  style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
        <label style="color: #4AA96C;" id="remove-label" for="input-remove">Xóa thành công!</label>
        `;
        print();
        removeInput.value = '';
    } else {
        removeLabel.innerHTML = `
        <i style="color: #F05454;" class="material-icons-outlined">highlight_off</i>
        <label style="color: #F05454;" id="remove-label" for="input-remove">Không có dòng này!</label>
        `;
        removeInput.value = '';
    }
    
    setTimeout (function () {
        removeLabel.innerHTML = `
        <label id="remove-label" for="input-remove">Nhập dòng muốn xóa</label>
        `;
    }, 2000);
}


submit.addEventListener('click', DSMonHoc);
submit.addEventListener('click', print);

removeBtn.addEventListener('click', remove);
