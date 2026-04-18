import "./App.css";
import { useState } from "react";
import Login from "./LoginForm";
import RoomPage from "./RoomPage";
import StudentPage from "./StudentPage";
import SearchPage from "./SearchPage";
import BillPage from "./BillPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [page, setPage] = useState("room");

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="app-wrapper">

      {/* TOP MENU */}
      <div className="top-menu">
        <div className="menu-left">

          {/* ❌ ลบ active ออก */}
          <button onClick={() => setPage("room")}>
            Quản lý phòng
          </button>

          <button onClick={() => setPage("student")}>
            Quản lý sinh viên
          </button>

          <button onClick={() => setPage("bill")}>
            Hóa đơn
          </button>

          <button onClick={() => setPage("search")}>
            Tìm kiếm
          </button>

        </div>

        <div className="menu-right">
          <button onClick={() => setLoggedIn(false)}>Đăng xuất</button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="page-center">
        {page === "room" && <RoomPage />}
        {page === "student" && <StudentPage />}
        {page === "search" && <SearchPage />}
        {page === "bill" && <BillPage />}
      </div>

    </div>
  );
}

export default App;