import { useNavigate } from "react-router";
import { useAuthStore } from "../../modules/auth";

export default function LoginPage() {
  const nav = useNavigate();
  const updateToken = useAuthStore((state) => state.updateToken);

  const handleLogin = () => {
    updateToken("abc");
    nav("/dashboard");
  };

  return (
    <div className="">
      <h1>Login Page</h1>
      <button onClick={handleLogin} type="button">
        login
      </button>
    </div>
  );
}
