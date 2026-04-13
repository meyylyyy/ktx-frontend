import "./RoomPage.css";

function RoomPage() {
  return (
    <div className="room-container">
      
      {/* MENU */}
      <div className="menu">
        <button>Quản lý phòng</button>
        <button>Quản lý sinh viên</button>
        <button>Hóa đơn</button>
        <button>Tìm kiếm</button>
        <button>Tổng quan</button>
      </div>

      <div className="content">
        
        {/* BÊN TRÁI */}
        <div className="left-panel">
          <h3>Thông tin</h3>
          <p>Họ tên: Nguyễn Văn A</p>
          <p>Lớp: CNTT1</p>
          <p>Mã SV: 123456</p>
        </div>

        {/* BÊN PHẢI */}
        <div className="right-panel">
          <h2>THÊM, XÓA, SỬA PHÒNG</h2>

          <div className="form-grid">
            <label>Mã phòng:</label>
            <input />

            <label>Loại phòng:</label>
            <input />

            <label>Mã khu:</label>
            <input />

            <label>Số người hiện tại:</label>
            <input />

            <label>Tên phòng:</label>
            <input />

            <label>Số người tối đa:</label>
            <input />
          </div>

          <div className="btn-group">
            <button>➕ Thêm</button>
            <button>❌ Xóa</button>
            <button>✏️ Sửa</button>
            <button>📋 Hiển thị</button>
          </div>

          <div className="table">
            (Danh sách phòng sẽ hiển thị ở đây)
          </div>
        </div>

      </div>
    </div>
  );
}

export default RoomPage;