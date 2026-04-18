import "./BillPage.css";
import { useState } from "react";

function BillPage() {
  const [bills, setBills] = useState([]);

  const [form, setForm] = useState({
    id: "",
    ma_phong: "",
    month: "",
    electric: "",
    water: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  
  const getBills = () => {
    fetch("http://localhost:5000/api/bills")
      .then(res => res.json())
      .then(data => setBills(data));
  };

  
  const addBill = () => {
    fetch("http://localhost:5000/api/bills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      alert("Đã lưu");
      getBills();
    });
  };

 
  const deleteBill = () => {
    if (!form.id) return alert("Chọn dòng trước");

    fetch(`http://localhost:5000/api/bills/${form.id}`, {
      method: "DELETE"
    }).then(() => {
      alert("Đã xóa");
      getBills();
    });
  };

  // UPDATE
  const updateBill = () => {
    if (!form.id) return alert("Chọn dòng trước");

    fetch(`http://localhost:5000/api/bills/${form.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      alert("Đã sửa");
      getBills();
    });
  };

  
  const resetForm = () => {
    setForm({
      id: "",
      ma_phong: "",
      month: "",
      electric: "",
      water: ""
    });
  };

  return (
    <div className="main-container">

      
      <div className="sidebar">
        <h3>Thông tin</h3>
        <div className="info-item"> Nguyễn Văn A</div>
        <div className="info-item"> CNTT1</div>
        <div className="info-item"> 123456</div>
      </div>

     
      <div className="content">
        <h2>NHẬP ĐIỆN NƯỚC</h2>

        <div className="form-grid">
          <input
            className="input-dark"
            name="ma_phong"
            placeholder="Mã phòng"
            value={form.ma_phong}
            onChange={handleChange}
          />

          <input
            className="input-dark"
            type="month"
            name="month"
            value={form.month}
            onChange={handleChange}
          />

          <input
            className="input-dark"
            name="electric"
            placeholder="Điện"
            value={form.electric}
            onChange={handleChange}
          />

          <input
            className="input-dark"
            name="water"
            placeholder="Nước"
            value={form.water}
            onChange={handleChange}
          />
        </div>

        <div className="btn-group">
          <button onClick={addBill}>Lưu</button>
          <button onClick={updateBill}>Sửa</button>
          <button onClick={deleteBill}>Xóa</button>
          <button onClick={getBills}>Hiển thị</button>
          <button onClick={resetForm}>Làm mới</button>
        </div>

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
              {bills.length === 0 ? (
                <tr>
                  <td colSpan="4" className="empty">
                    Chưa có dữ liệu
                  </td>
                </tr>
              ) : (
                bills.map((b) => (
                  <tr key={b.id} onClick={() => setForm(b)}>
                    <td>{b.ma_phong}</td>
                    <td>{b.month}</td>
                    <td>{b.electric}</td>
                    <td>{b.water}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default BillPage;