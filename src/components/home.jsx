import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Go to the Profile
      </button>
    </>
  );
}

export default Home;
