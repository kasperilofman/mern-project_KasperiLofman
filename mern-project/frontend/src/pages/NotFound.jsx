// 404 page for unmatched routes
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="page">
      <div className="not-found fade-in">
        <h1 className="not-found-code">404</h1>
        <p className="not-found-text">Oops! This page doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
