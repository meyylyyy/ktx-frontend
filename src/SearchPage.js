import "./SearchPage.css";
import axios from "axios";
import { useState } from "react";

function SearchPage() {

  const [studentCode, setStudentCode] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const [studentResult, setStudentResult] = useState(null);
  const [roomResult, setRoomResult] = useState(null);

  // TÌM SINH VIÊN

  const handleSearchStudent = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/students/search/${studentCode}`
      );

      setStudentResult(res.data);

    } catch (err) {

      console.log(err);

      alert("Không tìm thấy sinh viên");
    }
  };

  // TÌM PHÒNG

  const handleSearchRoom = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/rooms/search/${roomCode}`
      );

      setRoomResult(res.data);

    } catch (err) {

      console.log(err);

      alert("Không tìm thấy phòng");
    }
  };

  // RESET

  const resetStudent = () => {

    setStudentCode("");
    setStudentResult(null);
  };

  const resetRoom = () => {

    setRoomCode("");
    setRoomResult(null);
  };

  return (

    <div className="main-container">

      {/* SIDEBAR */}

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

      {/* CONTENT */}

      <div className="content">

        <h2>TÌM KIẾM</h2>

        {/* TÌM SINH VIÊN */}

        <div className="search-group">

          <label>Tìm theo Mã SV</label>

          <input
            className="input-dark"
            placeholder="Nhập mã SV..."
            value={studentCode}
            onChange={(e) =>
              setStudentCode(e.target.value)
            }
          />

          <div className="btn-group">

            <button onClick={handleSearchStudent}>
              Tìm
            </button>

            <button onClick={resetStudent}>
              Reset
            </button>

          </div>

        </div>

        {/* KẾT QUẢ SINH VIÊN */}

        {
          studentResult && (

            <div className="table-box">

              <table className="modern-table">

                <thead>

                  <tr>

                    <th>Mã SV</th>
                    <th>Họ tên</th>
                    <th>CMND</th>
                    <th>SDT</th>
                    <th>Ngày sinh</th>
                    <th>Quê quán</th>

                  </tr>

                </thead>

                <tbody>

                  <tr>

                    <td>{studentResult.student_code}</td>

                    <td>{studentResult.name}</td>

                    <td>{studentResult.cmnd}</td>

                    <td>{studentResult.sdt}</td>

                    <td>
                      {
                        new Date(studentResult.ngay_sinh)
                          .toLocaleDateString("vi-VN")
                      }
                    </td>

                    <td>{studentResult.que_quan}</td>

                  </tr>

                </tbody>

              </table>

            </div>
          )
        }

        {/* TÌM PHÒNG */}

        <div className="search-group">

          <label>Tìm theo Mã phòng</label>

          <input
            className="input-dark"
            placeholder="Nhập mã phòng..."
            value={roomCode}
            onChange={(e) =>
              setRoomCode(e.target.value)
            }
          />

          <div className="btn-group">

            <button onClick={handleSearchRoom}>
              Tìm
            </button>

            <button onClick={resetRoom}>
              Reset
            </button>

          </div>

        </div>

        {/* KẾT QUẢ PHÒNG */}

        {
          roomResult && (

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

                    <td>{roomResult.ma_phong}</td>

                    <td>{roomResult.ten_phong}</td>

                    <td>{roomResult.ma_khu}</td>

                    <td>{roomResult.loai_phong}</td>

                    <td>{roomResult.so_nguoi_hien_tai}</td>

                    <td>{roomResult.so_nguoi_toi_da}</td>

                  </tr>

                </tbody>

              </table>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default SearchPage;