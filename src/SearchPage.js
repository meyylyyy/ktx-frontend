import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="main-container search-page">

      
      <div className="sidebar">
        <h3>Thông tin</h3>
        <div className="info-item">👤 Nguyễn Văn A</div>
        <div className="info-item">🎓 CNTT1</div>
        <div className="info-item">🆔 123456</div>
      </div>

      
      <div className="content">
        <h2>TÌM KIẾM</h2>

        <div className="search-grid">

         
          <div className="search-box">
            <h4> Tìm theo Mã SV</h4>
            <input className="input-dark" placeholder="Nhập mã SV..." />
            <div className="btn-group">
              <button className="btn-primary">Tìm</button>
              <button className="btn-secondary">Reset</button>
            </div>
          </div>

          
          <div className="search-box">
            <h4> Tìm theo Mã phòng</h4>
            <input className="input-dark" placeholder="Nhập mã phòng..." />
            <div className="btn-group">
              <button className="btn-primary">Tìm</button>
              <button className="btn-secondary">Reset</button>
            </div>
          </div>

        </div>

        
        <div className="table-box">
          <p className="empty">Kết quả sẽ hiển thị ở đây</p>
        </div>

      </div>

    </div>
  );
}

export default SearchPage;