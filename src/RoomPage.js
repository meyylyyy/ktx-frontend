import "./RoomPage.css";
import { useState } from "react";

function RoomPage() {
  const [rooms, setRooms] = useState([]);

  const [form, setForm] = useState({
    id: "",
    ma_phong: "",
    ten_phong: "",
    ma_khu: "",
    loai_phong: "",
    so_nguoi_hien_tai: "",
    so_nguoi_toi_da: ""
  });

  // INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // GET
  const getRooms = () => {
    fetch("http://localhost:5000/api/rooms")
      .then(res => res.json())
      .then(data => setRooms(data));
  };

  // ADD
  const addRoom = () => {
    fetch("http://localhost:5000/api/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        alert("Thêm thành công");
        getRooms();
      });
  };

  // DELETE (chỉ dùng nút trên)
  const deleteRoom = () => {
    if (!form.id) {
      alert("Chọn phòng trước khi xóa");
      return;
    }

    fetch(`http://localhost:5000/api/rooms/${form.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        alert("Đã xóa");
        setForm({
          id: "",
          ma_phong: "",
          ten_phong: "",
          ma_khu: "",
          loai_phong: "",
          so_nguoi_hien_tai: "",
          so_nguoi_toi_da: ""
        });
        getRooms();
      });
  };

  // UPDATE
  const updateRoom = () => {
    if (!form.id) {
      alert("Chọn phòng trước khi sửa");
      return;
    }

    fetch(`http://localhost:5000/api/rooms/${form.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        alert("Đã sửa");
        getRooms();
      });
  };

  return (
    <div className="room-container">
      <div className="content">

        {/* LEFT */}
        <div className="left-panel">
          <h3>Thông tin</h3>
          <p>Họ tên: Nguyễn Văn A</p>
        </div>

        {/* RIGHT */}
        <div className="right-panel">
          <h2>QUẢN LÝ PHÒNG</h2>

          {/* FORM */}
          <div className="form-grid">

            <label>Mã phòng:</label>
            <input name="ma_phong" value={form.ma_phong} onChange={handleChange} />

            <label>Tên phòng:</label>
            <input name="ten_phong" value={form.ten_phong} onChange={handleChange} />

            <label>Mã khu:</label>
            <input name="ma_khu" value={form.ma_khu} onChange={handleChange} />

            <label>Loại phòng:</label>
            <input name="loai_phong" value={form.loai_phong} onChange={handleChange} />

            <label>Hiện tại:</label>
            <input name="so_nguoi_hien_tai" value={form.so_nguoi_hien_tai} onChange={handleChange} />

            <label>Tối đa:</label>
            <input name="so_nguoi_toi_da" value={form.so_nguoi_toi_da} onChange={handleChange} />

          </div>

          {/* BUTTON */}
          <div className="btn-group">
            <button onClick={addRoom}>➕ Thêm</button>
            <button onClick={updateRoom}>✏️ Sửa</button>
            <button onClick={deleteRoom}>❌ Xóa</button>
            <button onClick={getRooms}>📋 Hiển thị</button>
          </div>

          {/* TABLE */}
          <div className="table">
            <table border="1">
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
                {rooms.map((r) => (
                  <tr key={r.id} onClick={() => setForm(r)}>
                    <td>{r.ma_phong}</td>
                    <td>{r.ten_phong}</td>
                    <td>{r.ma_khu}</td>
                    <td>{r.loai_phong}</td>
                    <td>{r.so_nguoi_hien_tai}</td>
                    <td>{r.so_nguoi_toi_da}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RoomPage;