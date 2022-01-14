import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Profile</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the Home
      </button>
    </>
  );
}

export default Profile;
