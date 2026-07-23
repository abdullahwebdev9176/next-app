import React from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child Render");

  return (
    <button className="py-2 px-4 bg-green-500 text-white rounded-md" onClick={onClick}>
      Say Hello
    </button>
  );
});

export default Child;