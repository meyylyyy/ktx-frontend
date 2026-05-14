import "./StudentPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

function StudentPage() {

  const [students, setStudents] = useState([]);

  const [studentCode, setStudentCode] = useState("");
  const [name, setName] = useState("");
  const [cmnd, setCmnd] = useState("");
  const [sdt, setSdt] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [queQuan, setQueQuan] = useState("");

  const [editId, setEditId] = useState(null);

  // HIỂN THỊ

  const fetchStudents = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/students"
      );

      setStudents(res.data);

    } catch (err) {

      console.log(err);

      alert("Lỗi hiển thị dữ liệu");
    }
  };

  // THÊM

  const handleAdd = async () => {

    try {

      const formatDate = ngaySinh
        .split("/")
        .reverse()
        .join("-");

      await axios.post(
        "http://localhost:5000/api/students",
        {
          student_code: studentCode,
          name: name,
          cmnd: cmnd,
          sdt: sdt,
          ngay_sinh: formatDate,
          que_quan: queQuan
        }
      );

      alert("Thêm thành công");

      fetchStudents();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi thêm dữ liệu");
    }
  };

  // XÓA

  const handleDelete = async () => {

    if (!editId) {

      alert("Hãy chọn sinh viên");

      return;
    }

    try {

      await axios.delete(
        `http://localhost:5000/api/students/${editId}`
      );

      alert("Xóa thành công");

      fetchStudents();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi xóa dữ liệu");
    }
  };

  // CHỌN DỮ LIỆU

  const handleSelect = (sv) => {

    setEditId(sv.id);

    setStudentCode(sv.student_code);
    setName(sv.name);
    setCmnd(sv.cmnd);
    setSdt(sv.sdt);

    const formatDate = new Date(sv.ngay_sinh)
      .toLocaleDateString("vi-VN");

    setNgaySinh(formatDate);

    setQueQuan(sv.que_quan);
  };

  // SỬA

  const handleUpdate = async () => {

    if (!editId) {

      alert("Hãy chọn sinh viên");

      return;
    }

    try {

      const formatDate = ngaySinh
        .split("/")
        .reverse()
        .join("-");

      await axios.put(
        `http://localhost:5000/api/students/${editId}`,
        {
          student_code: studentCode,
          name: name,
          cmnd: cmnd,
          sdt: sdt,
          ngay_sinh: formatDate,
          que_quan: queQuan
        }
      );

      alert("Sửa thành công");

      fetchStudents();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi sửa dữ liệu");
    }
  };

  // RESET FORM

  const clearForm = () => {

    setStudentCode("");
    setName("");
    setCmnd("");
    setSdt("");
    setNgaySinh("");
    setQueQuan("");

    setEditId(null);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (

    <div className="main-container student-page">

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

        <h2>QUẢN LÝ SINH VIÊN</h2>

        {/* FORM */}

        <div className="form-grid">

          <input
            className="input-dark"
            placeholder="Mã SV"
            value={studentCode}
            onChange={(e) =>
              setStudentCode(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Họ tên"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="CMND"
            value={cmnd}
            onChange={(e) =>
              setCmnd(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="SDT"
            value={sdt}
            onChange={(e) =>
              setSdt(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Ngày sinh DD/MM/YYYY"
            value={ngaySinh}
            onChange={(e) =>
              setNgaySinh(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Quê quán"
            value={queQuan}
            onChange={(e) =>
              setQueQuan(e.target.value)
            }
          />

        </div>

        {/* BUTTON */}

        <div className="btn-group">

          <button onClick={handleAdd}>
            Thêm
          </button>

          <button onClick={handleDelete}>
            Xóa
          </button>

          <button onClick={handleUpdate}>
            Sửa
          </button>

        </div>

        {/* TABLE */}

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

              {students.map((sv) => (

                <tr
                  key={sv.id}
                  onClick={() => handleSelect(sv)}
                  style={{ cursor: "pointer" }}
                >

                  <td>{sv.student_code}</td>

                  <td>{sv.name}</td>

                  <td>{sv.cmnd}</td>

                  <td>{sv.sdt}</td>

                  <td>
                    {
                      new Date(sv.ngay_sinh)
                        .toLocaleDateString("vi-VN")
                    }
                  </td>

                  <td>{sv.que_quan}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default StudentPage;