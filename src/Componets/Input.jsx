import React from "react";

function Input({ label, id, name, value, onchange, error }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          /* value={title}
          onChange={(e) => setTitle(e.target.value)} */
          value={value || ""}
          onChange={onchange}
        />
        {error !== undefined && <p className="error">{error}</p>}
      </div>
    </>
  );
}

export default Input;
