import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="">
      <h1>Home page</h1>
      <Link to="/login">Go to login</Link>
      <Link to="/playground">Go to playground</Link>
    </div>
  );
}
