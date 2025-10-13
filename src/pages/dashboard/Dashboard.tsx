import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../../modules/auth";

export default function DashboardPage() {
  const removeToken = useAuthStore((state) => state.removeToken);
  const nav = useNavigate();

  const handleLogout = () => {
    removeToken();
    nav("/login", {
      replace: true,
    });
  };

  return (
    <div className="">
      <Link to="/">Goto</Link>
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
