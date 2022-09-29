import React from "react";

function About() {
  return (
    <div className="w-full py-5 px-5 mb-6 rounded-lg shadow-md bg-base-100">
      <p className="text-3xl font-bold font-sgRegular mb-10">Git Stalk</p>
      <p className="text-xl font-bold font-sgRegular">
        React app to search Github profiles. This app uses the Context API along
        with the useContext and useReducer hooks for state management
      </p>
    </div>
  );
}

export default About;
