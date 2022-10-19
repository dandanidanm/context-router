import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="container text-center mt-5">
      <h2>About</h2>
      {!user ? (
        <h2 className="text-danger">Por Favor ingresa...</h2>
      ) : (
        <div>
          <img src={user.data.avatar} alt={user.data.first_name} />
          <p>
            {user.data.first_name} {user.data.last_name}
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
