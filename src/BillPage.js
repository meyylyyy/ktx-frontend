import "./BillPage.css";
import axios from "axios";
import { useEffect, useState } from "react";

function BillPage() {

  const [bills, setBills] = useState([]);

  const [maPhong, setMaPhong] = useState("");
  const [month, setMonth] = useState("");
  const [electric, setElectric] = useState("");
  const [water, setWater] = useState("");

  const [editId, setEditId] = useState(null);

  // HIỂN THỊ

  const fetchBills = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/bills"
      );

      setBills(res.data);

    } catch (err) {

      console.log(err);

      alert("Lỗi hiển thị dữ liệu");
    }
  };

  // THÊM

  const handleAdd = async () => {

    try {

      await axios.post(
        "http://localhost:5000/api/bills",
        {
          ma_phong: maPhong,
          month: month,
          electric: electric,
          water: water
        }
      );

      alert("Lưu thành công");

      fetchBills();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi thêm dữ liệu");
    }
  };

  // CHỌN DỮ LIỆU

  const handleSelect = (bill) => {

    setEditId(bill.id);

    setMaPhong(bill.ma_phong);
    setMonth(bill.month);
    setElectric(bill.electric);
    setWater(bill.water);
  };

  // SỬA

  const handleUpdate = async () => {

    if (!editId) {

      alert("Hãy chọn hóa đơn");

      return;
    }

    try {

      await axios.put(
        `http://localhost:5000/api/bills/${editId}`,
        {
          ma_phong: maPhong,
          month: month,
          electric: electric,
          water: water
        }
      );

      alert("Sửa thành công");

      fetchBills();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi sửa dữ liệu");
    }
  };

  // XÓA

  const handleDelete = async () => {

    if (!editId) {

      alert("Hãy chọn hóa đơn");

      return;
    }

    try {

      await axios.delete(
        `http://localhost:5000/api/bills/${editId}`
      );

      alert("Xóa thành công");

      fetchBills();

      clearForm();

    } catch (err) {

      console.log(err);

      alert("Lỗi xóa dữ liệu");
    }
  };

  // RESET

  const clearForm = () => {

    setMaPhong("");
    setMonth("");
    setElectric("");
    setWater("");

    setEditId(null);
  };

  useEffect(() => {
    fetchBills();
  }, []);

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

        <h2>NHẬP ĐIỆN NƯỚC</h2>

        {/* FORM */}

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
            type="month"
            className="input-dark"
            value={month}
            onChange={(e) =>
              setMonth(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Điện"
            value={electric}
            onChange={(e) =>
              setElectric(e.target.value)
            }
          />

          <input
            className="input-dark"
            placeholder="Nước"
            value={water}
            onChange={(e) =>
              setWater(e.target.value)
            }
          />

        </div>

        {/* BUTTON */}

        <div className="btn-group">

          <button onClick={handleAdd}>
            Lưu
          </button>

          <button onClick={handleUpdate}>
            Sửa
          </button>

          <button onClick={handleDelete}>
            Xóa
          </button>

        </div>

        {/* TABLE */}

        <div className="table-box">

          <table className="modern-table">

            <thead>

              <tr>

                <th>Mã phòng</th>
                <th>Tháng</th>
                <th>Điện</th>
                <th>Nước</th>

              </tr>

            </thead>

            <tbody>

              {bills.map((bill) => (

                <tr
                  key={bill.id}
                  onClick={() => handleSelect(bill)}
                  style={{ cursor: "pointer" }}
                >

                  <td>{bill.ma_phong}</td>

                  <td>{bill.month}</td>

                  <td>{bill.electric}</td>

                  <td>{bill.water}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default BillPage;