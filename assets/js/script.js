
function MonHoc (tenMh, soTc, tiLe, diemQt, diemThi) {
    this.tenMonHoc = tenMh;
    this.soTinchi = soTc*1;
    this.phanTram = tiLe;
    this.diemQuaTrinh = diemQt*1;
    this.DiemThi = diemThi*1;
    this.diemChu = '';
    this.diemH4 = 0;
    this.diemH10 = 0;

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
        return tongKet.toFixed(1)*1;
    }

    this.convertDiem = function () {
        var diem = this.diemTongket();
        this.diemH10 = diem;

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
        submit.classList.add('button-warning');
        
        result = false;
    }
    else if (soTcNew*1 <= 0 || diemQtNew*1 < 0 || diemThiNew*1 < 0) {
        if (soTcNew*1 <= 0) {
            alertText.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <p style="color:#F55C47;">Số tín chỉ không thể nhỏ hơn 1</p>
            `;
            submit.classList.add('button-warning');

        } else if (diemQtNew*1 < 0 || diemThiNew*1 < 0) {
            alertText.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <p style="color:#F55C47;">Điểm không thể là số âm</p>
            `;
            submit.classList.add('button-warning');
        }

        result = false;
    }
    else if (diemQtNew*1 > 10 || diemThiNew*1 > 10) {
        alertText.innerHTML = `
            <i style="color:#F55C47;" class="material-icons-outlined">highlight_off</i>
            <p style="color:#F55C47;">Điểm không thể lớn hơn 10</p>
            `;
            submit.classList.add('button-warning');
    }
    else {
        alertText.innerHTML = `
        <i style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
        <p style="color: #4AA96C;">Lưu thành công</p>
        `;
        submit.classList.add('button-success');
        result = true;
    }

    setTimeout (function () {
        alertText.innerHTML = "";
        submit.classList.remove('button-warning');
        submit.classList.remove('button-success');
    }, 2000);
    return result;
}


var a = [];
// Thực hiện khi nhấn nút Submit
function DSMonHoc () {
    getInput();
    if (check()) {
        var tmp = new MonHoc(tenMhNew, soTcNew, tiLeNew, diemQtNew, diemThiNew);
        
        a.push(tmp);
        console.table(a);
        resetInput();
    }
}



function diemTBHK () {
    var tongTC = 0;
    var tongDiem = 0;
    for (var i = 0; i < a.length; i++) {
        a[i].convertDiem();
        tongDiem += a[i].diemH4 * a[i].soTinchi;
        tongTC += a[i].soTinchi;
    }
    return (tongDiem/tongTC).toFixed(2); // Kiểm tra lại đoạn chia số thực cho số nguyên
}

// Thực hiện khi click nút Lưu
var diemTb = 0;
function print (arr) {
    var getOutput = document.querySelector('.sub-row');
    var getTbhk = document.querySelector('.tbhk');
    var pointWaterMark = document.getElementById('dtb');
    var codes = '';

    for (var i = 0; i < a.length; i++) {
        var phanTramText = '';
        if (arr[i].phanTram == '55') {
            phanTramText = '50/50';
        } else if (arr[i].phanTram == '46') {
            phanTramText = '40/60';
        } else phanTramText = '30/70';
        codes += `
        <div class="row no-gutters tr">
            <div class="col l-1 m-1 c-1 td"><p>${i+1}</p></div>
            <div class="col l-2 m-2 c-2 td"><p>${arr[i].tenMonHoc}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${arr[i].soTinchi}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${phanTramText}</p></div>
            <div class="col l-2 m-2 c-2 td"><p>${arr[i].diemQuaTrinh}</p></div>
            <div class="col l-2 m-2 c-2 td"><p>${arr[i].DiemThi}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${arr[i].diemH10}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${arr[i].diemH4}</p></div>
            <div class="col l-1 m-1 c-1 td"><p>${arr[i].diemChu}</p></div>               
        </div>
        `
    }
    getOutput.innerHTML = codes;
    // Fix lỗi chưa nhập thông tin sẽ hiện điểm trung bình là NaN
    getTbhk.innerHTML = `
    <h3 class="noti-text">Điểm trung bình học kỳ: ${diemTb}</h3>
    `;
    pointWaterMark.innerText = `Điểm TB: ${diemTb}`;
}


var removeInput = document.getElementById('input-remove');
var removeBtn = document.getElementById('remove-btn');
var removeLabel = document.querySelector('.label-wrap');
/* Hàm xóa 1 phần tử của mảng */
function remove () {
    var index = removeInput.value*1;
    if (index > 0 && index <= a.length) {
        a.splice(index - 1, 1);
        removeLabel.innerHTML = `
        <i  style="color: #4AA96C;" class="material-icons-outlined">check_circle</i>
        <label style="color: #4AA96C;" id="remove-label" for="input-remove">Xóa thành công!</label>
        `;
        removeBtn.style.backgroundColor = '#4AA96C';
        print(a);
        removeInput.value = '';
    } else {
        removeLabel.innerHTML = `
        <i style="color: #F05454;" class="material-icons-outlined">highlight_off</i>
        <label style="color: #F05454;" id="remove-label" for="input-remove">Không có dòng này!</label>
        `;
        removeBtn.style.backgroundColor = '#F05454';
        removeInput.value = '';
    }
    
    setTimeout (function () {
        removeLabel.innerHTML = `
        <label id="remove-label" for="input-remove">Nhập dòng muốn xóa</label>
        `;
        removeBtn.style.backgroundColor = 'var(--purple)';
    }, 2000);
}


function sorting (arr) {
    for(var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].diemH10 < arr[j].diemH10) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.table(a);
}

function run () {
    diemTb = diemTBHK();
    sorting(a);
    print(a);
}



submit.addEventListener('click', DSMonHoc);
submit.addEventListener('click', run);

removeBtn.addEventListener('click', remove);



/* =========== Screenshot =========== */

var photoBtn = document.getElementById('photo-btn');
var photo = document.getElementById('photo');



function takePhoto () {
    /* var width = photo.clientWidth*10;
    var height = photo.clientHeight*10;
    var fileName = 'xuanphuc'; */
    
    html2canvas(photo).then(function(canvas) {
        // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas);
        // Canvas2Image.saveAsPNG(canvas, width, height, fileName);
    });
}

photoBtn.addEventListener('click', takePhoto);
