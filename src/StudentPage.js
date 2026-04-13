import "./StudentPage.css";

function StudentPage() {
  return (
    <div className="student-container">

      {/* MENU */}
      <div className="menu">
        <button>Quản lý phòng</button>
        <button>Quản lý sinh viên</button>
        <button>Hóa đơn</button>
        <button>Tìm kiếm</button>
        <button>Tổng quan</button>
      </div>

      <div className="content">

        {/* LEFT */}
        <div className="left-panel">
          <h3>Thông tin</h3>
          <p>Họ tên: Nguyễn Văn A</p>
          <p>Lớp: CNTT1</p>
          <p>Mã SV: 123456</p>
        </div>

        {/* RIGHT */}
        <div className="right-panel">

          <h2>THÊM, XÓA, SỬA SINH VIÊN</h2>

          <div className="form-wrapper">

            {/* THÔNG TIN SV */}
            <div className="form-box">
              <h4>Thông tin sinh viên</h4>

              <div className="form-grid">
                <label>Mã SV:</label><input />
                <label>Họ SV:</label><input />

                <label>Mã KTX:</label><input />
                <label>Tên SV:</label><input />

                <label>CMND:</label><input />
                <label>SĐT:</label><input />

                <label>Ngày sinh:</label><input type="date" />
                <label>Giới tính:</label><input type="checkbox" /> Nam

                <label>Mã phòng:</label><input />
                <label>Quê quán:</label><input />
              </div>
            </div>

            {/* NGƯỜI GIÁM HỘ */}
            <div className="form-box">
              <h4>Thông tin người giám hộ</h4>

              <div className="form-grid">
                <label>Họ tên NGH:</label><input />
                <label>SĐT:</label><input />

                <label>Mối quan hệ:</label><input />
                <label>Nghề nghiệp:</label><input />
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <div className="btn-group">
            <button>➕ Thêm</button>
            <button>❌ Xóa</button>
            <button>✏️ Sửa</button>
            <button>📋 Hiển thị</button>
          </div>

          {/* TABLE */}
          <div className="table">
            (Danh sách sinh viên hiển thị ở đây)
          </div>

        </div>
      </div>
    </div>
  );
}

export default StudentPage;