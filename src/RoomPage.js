import "./RoomPage.css";

function RoomPage() {
  return (
    <div className="main-container">

     
      <div className="sidebar">
        <h3>Thông tin</h3>
        <div className="info-item"> Nguyễn Văn A</div>
        <div className="info-item"> CNTT1</div>
        <div className="info-item"> 123456</div>
      </div>

      
      <div className="content">
        <h2>QUẢN LÝ PHÒNG</h2>

       
        <div className="form-grid">
          <input className="input-dark" placeholder="Mã phòng" />
          <input className="input-dark" placeholder="Tên phòng" />
          <input className="input-dark" placeholder="Mã khu" />
          <input className="input-dark" placeholder="Loại phòng" />
          <input className="input-dark" placeholder="Hiện tại" />
          <input className="input-dark" placeholder="Tối đa" />
        </div>

       
        <div className="btn-group">
          <button>Thêm</button>
          <button>Sửa</button>
          <button>Xóa</button>
          <button>Hiển thị</button>
          <button>Làm mới</button>
        </div>

       
        <div className="table-box">
          <table className="modern-table">
            <thead>
              <tr>
                <th>Mã phòng</th>
                <th>Tên phòng</th>
                <th>Khu</th>
                <th>Loại</th>
                <th>Hiện tại</th>
                <th>Tối đa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="empty">
                  Chưa có dữ liệu
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default RoomPage;