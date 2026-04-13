import "./BillPage.css";
import { useState } from "react";

function BillPage() {
  const [form, setForm] = useState({
    maPhong: "",
    thang: "",
    chiSoDienCu: "",
    chiSoDienMoi: "",
    chiSoNuocCu: "",
    chiSoNuocMoi: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bill-container">

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

          <h2>NHẬP ĐIỆN NƯỚC CHO PHÒNG</h2>

          <div className="form-grid">

            <label>Mã phòng:</label>
            <input name="maPhong" onChange={handleChange} />

            <label>Tháng:</label>
            <input type="month" name="thang" onChange={handleChange} />

            <label>Chỉ số điện cũ:</label>
            <input name="chiSoDienCu" onChange={handleChange} />

            <label>Chỉ số điện mới:</label>
            <input name="chiSoDienMoi" onChange={handleChange} />

            <label>Chỉ số nước cũ:</label>
            <input name="chiSoNuocCu" onChange={handleChange} />

            <label>Chỉ số nước mới:</label>
            <input name="chiSoNuocMoi" onChange={handleChange} />

          </div>

          {/* BUTTON */}
          <div className="btn-group">
            <button>💾 Lưu</button>
            <button>✏️ Sửa</button>
            <button>❌ Xóa</button>
            <button>📋 Hiển thị</button>
            <button>🔄 Làm mới</button>
          </div>

          {/* TABLE */}
          <div className="table">
            (Danh sách hóa đơn hiển thị ở đây)
          </div>

        </div>
      </div>
    </div>
  );
}

export default BillPage;