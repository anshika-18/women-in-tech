import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./notFound.scss";

export default function NotFound() {
  return (
    <div>
      <div className="not-head">
        <div>Ooops!</div>
        <div>Page Not Found</div>
      </div>
      <div className="not-main">
        <div>
          <Link to="/">
            <Button>Go Back to Home</Button>
          </Link>
        </div>
        <div></div>
      </div>
      <div className="fourzerofour">404</div>
    </div>
  );
}
