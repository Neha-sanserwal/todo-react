import React from "react";
export default (props) => {
  const { id, onClick } = props;
  return (
    <div className="delete-btn" onClick={() => onClick(id)}>
      X
    </div>
  );
};
