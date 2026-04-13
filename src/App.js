import "./App.css";
import { useState } from "react";
import Login from "./LoginForm";
import RoomPage from "./RoomPage";
import StudentPage from "./StudentPage";
import SearchPage from "./SearchPage";
import BillPage from "./BillPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("room");
console.log({ Login, RoomPage, StudentPage, SearchPage });

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div>
     <div className="top-menu">

  <div className="menu-left">
    <button onClick={() => setPage("room")}>Quản lý phòng</button>
    <button onClick={() => setPage("student")}>Quản lý sinh viên</button>
    <button onClick={() => setPage("bill")}>Hóa đơn</button>
    <button onClick={() => setPage("search")}>Tìm kiếm</button>
  </div>

  <div className="menu-right">
    <button onClick={() => setLoggedIn(false)}>Đăng xuất</button>
  </div>

</div>

      {/* HIỂN THỊ */}
      {page === "room" && <RoomPage />}
      {page === "student" && <StudentPage />}
      {page === "search" && <SearchPage />}  {/* 👈 THÊM */}
     {page === "bill" && <BillPage />}
    </div>
  );
}

export default App;
