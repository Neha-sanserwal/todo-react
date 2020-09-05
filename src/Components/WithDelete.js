import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";
export default function (ComponentToAdd, onDelete) {
  return (props) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
      <div
        className="box"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <ComponentToAdd {...props} />
        {isHovering && <DeleteBtn onClick={() => onDelete(props.id)} />}
      </div>
    );
  };
}
