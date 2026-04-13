import { useState } from "react";
import "./SearchPage.css";

function SearchPage() {
  const [maSV, setMaSV] = useState("");
  const [maPhong, setMaPhong] = useState("");

  const [students, setStudents] = useState([]);
  const [rooms, setRooms] = useState([]);

  // 🔍 search sinh viên
  const searchStudent = () => {
    fetch(`http://localhost:5000/api/students/${maSV}`)
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  // 🔍 search phòng
  const searchRoom = () => {
    fetch(`http://localhost:5000/api/rooms/${maPhong}`)
      .then(res => res.json())
      .then(data => setRooms(data));
  };

  return (
    <div className="search-container">

      <div className="content">

        {/* LEFT */}
        <div className="left-panel">
          <h3>Thông tin</h3>
          <p>Họ tên: Nguyễn Văn A</p>
        </div>

        {/* RIGHT */}
        <div className="right-panel">

          <h2>TÌM KIẾM</h2>

          <div className="search-box">

            {/* SEARCH SV */}
            <div className="box">
              <h4>Tìm theo Mã SV</h4>
              <input
                placeholder="Nhập mã SV"
                value={maSV}
                onChange={(e) => setMaSV(e.target.value)}
              />
              <div className="btn-group">
                <button onClick={searchStudent}>🔍 Tìm kiếm</button>
                <button onClick={() => setStudents([])}>🔄 Làm mới</button>
              </div>
            </div>

            {/* SEARCH ROOM */}
            <div className="box">
              <h4>Tìm theo Mã phòng</h4>
              <input
                placeholder="Nhập mã phòng"
                value={maPhong}
                onChange={(e) => setMaPhong(e.target.value)}
              />
              <div className="btn-group">
                <button onClick={searchRoom}>🔍 Tìm kiếm</button>
                <button onClick={() => setRooms([])}>🔄 Làm mới</button>
              </div>
            </div>

          </div>

          {/* TABLE */}
          <div className="table-wrapper">

            <div className="table">
              <h4>Sinh viên</h4>
              {students.map(s => (
                <p key={s.id}>{s.name} - {s.phone}</p>
              ))}
            </div>

            <div className="table">
              <h4>Phòng</h4>
              {rooms.map(r => (
                <p key={r.id}>{r.ten_phong}</p>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default SearchPage;
