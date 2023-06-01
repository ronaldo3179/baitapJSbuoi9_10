function layGiaTriInput() {
  // lấy dữ liệu người dùng
  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCB = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value * 1;
  var _gioLam = document.getElementById("gioLam").value * 1;

  var valid = true;
  valid =
    kiemTraRong(_taiKhoan, "tbTKNV") &
    kiemTraRong(_hoTen, "tbTen") &
    kiemTraRong(_email, "tbEmail") &
    kiemTraRong(_matKhau, "tbMatKhau") &
    kiemTraRong(_ngayLam, "tbNgay") &
    kiemTraRong(_luongCB, "tbLuongCB") &
    kiemTraRong(_chucVu, "tbChucVu") &
    kiemTraRong(_gioLam, "tbGiolam");

  valid &= kiemTraTaiKhoan(_taiKhoan, "tbTKNV");
  valid &= kiemTraEmail(_email, "tbEmail");
  valid &= kiemTraPassword(_matKhau, "tbMatKhau");
  valid &= kiemTraDinhDangNgay(_ngayLam, "tbNgay");
  valid &= kiemTraLuong(_luongCB, "tbLuongCB");
  valid &= kiemTraChucVu(_chucVu, "tbChucVu");
  valid &= kiemTraGioLam(_gioLam, "tbGiolam");

  if (valid != 0) {
    return;
  }

  var nhanVien = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  );
  return nhanVien;
}

function timViTriNhanVien(taiKhoan) {
  var viTri = -1;
  arrNhanVien.forEach(function (item, index) {
    if (item.taiKhoan == taiKhoan) {
      viTri = index;
    }
  });
  return viTri;
}

function ganGiaTriChoInput(
  taiKhoan,
  hoTen,
  email,
  pass,
  ngayLam,
  luongCB,
  chucVu,
  gioLam
) {
  document.getElementById("tknv").value = taiKhoan;
  document.getElementById("name").value = hoTen;
  document.getElementById("email").value = email;
  document.getElementById("password").value = pass;
  document.getElementById("datepicker").value = ngayLam;
  document.getElementById("luongCB").value = luongCB;
  document.getElementById("chucvu").value = chucVu;
  document.getElementById("gioLam").value = gioLam;
}

function saveStorage(arrNhanVien) {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

function getStorage() {
  var arrNhanVienLocal = JSON.parse(localStorage.getItem("arrNhanVien"));

  if (arrNhanVienLocal != null) {
    arrNhanVien = arrNhanVienLocal;
  }
}
