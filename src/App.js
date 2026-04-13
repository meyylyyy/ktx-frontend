import { useState } from "react";
import Login from "./LoginForm";
import RoomPage from "./RoomPage";
import StudentPage from "./StudentPage";
import SearchPage from "./SearchPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("room");
console.log({ Login, RoomPage, StudentPage, SearchPage });

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div>
      {/* MENU */}
     <div style={{ background: "#4ade80", padding: 10 }}>
  <button onClick={() => setPage("room")}>Quản lý phòng</button>
  <button onClick={() => setPage("student")}>Quản lý sinh viên</button>
  <button onClick={() => setPage("search")}>Tìm kiếm</button> {/* 👈 THÊM */}
  <button onClick={() => setLoggedIn(false)}>Đăng xuất</button>
</div>

      {/* HIỂN THỊ */}
      {page === "room" && <RoomPage />}
      {page === "student" && <StudentPage />}
      {page === "search" && <SearchPage />}  {/* 👈 THÊM */}
    </div>
  );
}

export default App;
