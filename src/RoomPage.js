import "./RoomPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

function RoomPage() {

  const [rooms, setRooms] = useState([]);

  const [maPhong, setMaPhong] = useState("");
  const [tenPhong, setTenPhong] = useState("");
  const [maKhu, setMaKhu] = useState("");
  const [loaiPhong, setLoaiPhong] = useState("");
  const [hienTai, setHienTai] = useState("");
  const [toiDa, setToiDa] = useState("");

  const [editId, setEditId] = useState(null);

  // HIỂN THỊ

  const fetchRooms = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/rooms"
      );

      setRooms(res.data);

    } catch (err) {

      console.log(err);

      alert("Lỗi hiển thị dữ liệu");
    }
  };

  // THÊM

  const handleAdd = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/rooms",
        {
          ma_phong: maPhong,
          ten_phong: tenPhong,
          ma_khu: maKhu,
          loai_phong: loaiPhong,
          so_nguoi_hien_tai: hienTai,
          so_nguoi_toi_da: toiDa
        }
      );

      alert("Thêm thành công");

      fetchRooms();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi thêm dữ liệu");
    }
  };

  // CHỌN DỮ LIỆU

  const handleSelect = (room) => {

    setEditId(room.id);

    setMaPhong(room.ma_phong);
    setTenPhong(room.ten_phong);
    setMaKhu(room.ma_khu);
    setLoaiPhong(room.loai_phong);
    setHienTai(room.so_nguoi_hien_tai);
    setToiDa(room.so_nguoi_toi_da);
  };

  // SỬA

  const handleUpdate = async () => {

    if (!editId) {

      alert("Hãy chọn phòng");

      return;
    }

    try {

      await axios.put(
        `http://localhost:5000/api/rooms/${editId}`,
        {
          ma_phong: maPhong,
          ten_phong: tenPhong,
          ma_khu: maKhu,
          loai_phong: loaiPhong,
          so_nguoi_hien_tai: hienTai,
          so_nguoi_toi_da: toiDa
        }
      );

      alert("Sửa thành công");

      fetchRooms();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi sửa dữ liệu");
    }
  };

  // XÓA

  const handleDelete = async () => {

    if (!editId) {

      alert("Hãy chọn phòng");

      return;
    }

    try {

      await axios.delete(
        `http://localhost:5000/api/rooms/${editId}`
      );

      alert("Xóa thành công");

      fetchRooms();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi xóa dữ liệu");
    }
  };

  // RESET

  const clearForm = () => {

    setMaPhong("");
    setTenPhong("");
    setMaKhu("");
    setLoaiPhong("");
    setHienTai("");
    setToiDa("");

    setEditId(null);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (

    <div className="main-container room-page">

      <div className="sidebar">

        <h3>Thông tin</h3>

        <div className="info-item">
          Nguyễn Văn A
        </div>

        <div className="info-item">
          CNTT1
        </div>

        <div className="info-item">
          123456
        </div>

      </div>

      <div className="content">

        <h2>QUẢN LÝ PHÒNG</h2>

        <div className="form-grid">

          <input
            className="input-dark"
            placeholder="Mã phòng"
            value={maPhong}
            onChange={(e) =>
              setMaPhong(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Tên phòng"
            value={tenPhong}
            onChange={(e) =>
              setTenPhong(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Mã khu"
            value={maKhu}
            onChange={(e) =>
              setMaKhu(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Loại phòng"
            value={loaiPhong}
            onChange={(e) =>
              setLoaiPhong(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Hiện tại"
            value={hienTai}
            onChange={(e) =>
              setHienTai(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Tối đa"
            value={toiDa}
            onChange={(e) =>
              setToiDa(e.target.value)
            }
          />

        </div>

        <div className="btn-group">

          <button onClick={handleAdd}>
            Thêm
          </button>

          <button onClick={handleUpdate}>
            Sửa
          </button>

          <button onClick={handleDelete}>
            Xóa
          </button>

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

              {rooms.map((room) => (

                <tr
                  key={room.id}
                  onClick={() => handleSelect(room)}
                  style={{ cursor: "pointer" }}
                >

                  <td>{room.ma_phong}</td>

                  <td>{room.ten_phong}</td>

                  <td>{room.ma_khu}</td>

                  <td>{room.loai_phong}</td>

                  <td>{room.so_nguoi_hien_tai}</td>

                  <td>{room.so_nguoi_toi_da}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default RoomPage;