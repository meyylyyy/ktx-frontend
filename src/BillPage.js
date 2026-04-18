import "./BillPage.css";

function BillPage() {
  return (
    <div className="main-container bill-page">

      
      <div className="sidebar">
        <h3>Thông tin</h3>
        <div className="info-item"> Nguyễn Văn A</div>
        <div className="info-item"> CNTT1</div>
        <div className="info-item"> 123456</div>
      </div>

      
      <div className="content">
        <h2>NHẬP ĐIỆN NƯỚC</h2>

        <div className="form-grid">
          <input className="input-dark" placeholder="Mã phòng" />
          <input className="input-dark" placeholder="Tháng" />

          <input className="input-dark" placeholder="Điện cũ" />
          <input className="input-dark" placeholder="Điện mới" />

          <input className="input-dark" placeholder="Nước cũ" />
          <input className="input-dark" placeholder="Nước mới" />
        </div>

        <div className="btn-group">
          <button className="btn-primary">Lưu</button>
          <button className="btn-warning">Sửa</button>
          <button className="btn-danger">Xóa</button>
          <button className="btn-secondary">Hiển thị</button>
          <button className="btn-secondary">Làm mới</button>
        </div>

        <div className="table-box">
          <p className="empty">Chưa có dữ liệu</p>
        </div>

      </div>

    </div>
  );
}

export default BillPage;