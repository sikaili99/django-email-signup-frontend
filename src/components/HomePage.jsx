import React from "react";
import Footer from "./Foooter";
import UserCards from "./UserCards";

const HomePage = ({ registration_message }) => (
  <div className="container">
    {registration_message && (
      <div className="alert alert-info text-center mt-4" role="alert">
        <strong>{registration_message}</strong>
      </div>
    )}
    <UserCards />
    <Footer />
  </div>
);

export default HomePage;
