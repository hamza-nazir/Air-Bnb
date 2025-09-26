"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark border-top py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">About Us</h6>
            <p className="small text-muted mb-0">
              We provide top-quality services tailored to your needs. Customer
              satisfaction and trust are at the core of what we do.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-muted small">Home</a></li>
              <li><a href="/about" className="text-decoration-none text-muted small">About</a></li>
              <li><a href="/services" className="text-decoration-none text-muted small">Services</a></li>
              <li><a href="/contact" className="text-decoration-none text-muted small">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small text-muted mb-1">📧 info@example.com</p>
            <p className="small text-muted mb-1">📞 +92 123 456789</p>
            <p className="small text-muted">📍 Lahore, Pakistan</p>
          </div>
        </div>

        <hr />
        <div className="text-center">
          <p className="small text-muted mb-0">
            © {new Date().getFullYear()} Your Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
