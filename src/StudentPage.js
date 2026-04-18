import "./StudentPage.css";

function StudentPage() {
  return (
    <div className="main-container student-page">

      
      <div className="sidebar">
        <h3>Thông tin</h3>

        <div className="info-item"> Nguyễn Văn A</div>
        <div className="info-item"> CNTT1</div>
        <div className="info-item"> 123456</div>
      </div>

      
      <div className="content">
        <h2>QUẢN LÝ SINH VIÊN</h2>

        <div className="form-grid">

          <input className="input-dark" placeholder="Mã SV" />
          <input className="input-dark" placeholder="Họ tên" />

          <input className="input-dark" placeholder="CMND" />
          <input className="input-dark" placeholder="SĐT" />

          <input className="input-dark" placeholder="Ngày sinh" />
          <input className="input-dark" placeholder="Quê quán" />

        </div>

        <div className="btn-group">
          <button>Thêm</button>
          <button>Xóa</button>
          <button>Sửa</button>
          <button>Hiển thị</button>
        </div>

        <div className="table-box">
          <p className="empty">Chưa có dữ liệu</p>
        </div>

      </div>
    </div>
  );
}

export default StudentPage;