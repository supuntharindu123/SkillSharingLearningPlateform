import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const NavBar = () => {
  const [notificationCount, setNotificationCount] = useState(0); // State to track notifications

  useEffect(() => {
    const fetchProductNotifications = async () => {
      try {
        // Fetch products from the API
        const res = await axios.get("http://localhost:5000/api/store/get_all_products");

        // Log the full response from the API to ensure the structure is correct
        console.log("API response:", res);

        const products = res.data;

        // Log the products to check if we're getting the correct data
        console.log("Fetched products:", products);

        // Get current date and calculate the range
        const currentDate = new Date();
        const tenDaysFromNow = new Date(currentDate);
        tenDaysFromNow.setDate(currentDate.getDate() + 10);

        // Count products with expiry date within the next 10 days
        let count = 0;
        products.forEach((product) => {
          const expiryDate = new Date(product.expiryDate);
          if (expiryDate >= currentDate && expiryDate <= tenDaysFromNow) {
            count++;
          }
        });

        // Log the count of products with expiry dates near
        console.log("Products with expiry within 10 days:", count);

        // Set the notification count
        setNotificationCount(count);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductNotifications(); // Fetch product data when the component mounts
  }, []);

  // Log the notification count after state update
  useEffect(() => {
    console.log("Notification count updated:", notificationCount);
  }, [notificationCount]);

  // Determine the color for the "Notifications" link
  const notificationLinkColor = notificationCount > 0 ? "text-danger" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Store Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/suppliers">
                Suppliers
              </Link>
            </li>
            {/* Notifications link with dynamic color */}
            <li className="nav-item">
              <Link className={`nav-link ${notificationLinkColor}`} to="/notifications">
                Notifications
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
