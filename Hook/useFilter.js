import { useState } from "react";

export default function useFilter(datalist, callback) {
  const [query, setQuery] = useState("");
  const filterData = datalist.filter((ele) =>
    callback(ele).toLowerCase().includes(query)
  );
  return [filterData, setQuery];
}
