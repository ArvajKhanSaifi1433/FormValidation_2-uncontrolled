import React from "react";

function Selected({
  label,
  id,
  name,
  value,
  onchange,
  defaultVal,
  Arr,
  error,
}) {
  return (
    <>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select id={id} name={name} value={value} onChange={onchange}>
          {defaultVal && <option value="" >{defaultVal}</option>}
          {Arr.map((val, ind) => {
            return <option key={ind}>{val}</option>;
          })}
        </select>
        {error !== undefined && <p className="error">{error}</p>}
      </div>
    </>
  );
}

export default Selected;
