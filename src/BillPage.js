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

  // 📋 GET
  const getBills = () => {
    fetch("http://localhost:5000/api/bills")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBills(data);
      });
  };

  // 💾 ADD
  const addBill = () => {
    fetch("http://localhost:5000/api/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        alert("Đã lưu");
        getBills();
      });
  };

  // ❌ DELETE
  const deleteBill = () => {
    if (!form.id) return alert("Chọn dòng trước");

    fetch(`http://localhost:5000/api/bills/${form.id}`, {
      method: "DELETE"
    })
      .then(() => {
        alert("Đã xóa");
        getBills();
      });
  };

  // ✏️ UPDATE
  const updateBill = () => {
    if (!form.id) return alert("Chọn dòng trước");

    fetch(`http://localhost:5000/api/bills/${form.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(() => {
        alert("Đã sửa");
        getBills();
      });
  };

  // 🔄 RESET
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
    <div className="bill-container">

      <h2>NHẬP ĐIỆN NƯỚC CHO PHÒNG</h2>

      <div className="form-grid">

        <label>Mã phòng:</label>
       <input
  name="ma_phong"
  value={form.ma_phong}
  onChange={handleChange}
/>

        <label>Tháng:</label>
        <input
          type="month"
          name="month"
          value={form.month}
          onChange={handleChange}
        />

        <label>Số điện:</label>
        <input
          name="electric"
          value={form.electric}
          onChange={handleChange}
        />

        <label>Số nước:</label>
        <input
          name="water"
          value={form.water}
          onChange={handleChange}
        />

      </div>

      <div className="btn-group">
        <button onClick={addBill}>💾 Lưu</button>
        <button onClick={updateBill}>✏️ Sửa</button>
        <button onClick={deleteBill}>❌ Xóa</button>
        <button onClick={getBills}>📋 Hiển thị</button>
        <button onClick={resetForm}>🔄 Làm mới</button>
      </div>

      <div className="table">
        <table border="1">
          <thead>
            <tr>
              <th>Mã phòng</th>
              <th>Tháng</th>
              <th>Điện</th>
              <th>Nước</th>
            </tr>
          </thead>

          <tbody>
            {bills.map((b) => (
              <tr key={b.id} onClick={() => setForm(b)}>
                <td>{b.ma_phong}</td>
                <td>{b.month}</td>
                <td>{b.electric}</td>
                <td>{b.water}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default BillPage;