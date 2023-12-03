import React from "react";

function ContextMenu({
  menuPosition,
  setMenuPosition,
  rowId,
  setData,
  setAllData,
  data,
  setEditId,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={(e) => {
          const { title, category, amount } = data.find(
            (ele) => ele.id === rowId
          );
          setAllData({ title, category, amount });
          setEditId(rowId);
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={(e) => {
          setData((preS) => {
            return preS.filter((ele) => ele.id !== rowId);
          });
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default ContextMenu;
