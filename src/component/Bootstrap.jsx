import { useEffect, useState } from "react";
import { API_GET_ITEM } from "./Constants";
import "bootstrap/dist/css/bootstrap.min.css";

async function fetchItem(setItems) {
  const res = await fetch(API_GET_ITEM);
  const items = await res.json();
  setItems(items);
  console.log(items);
}

function Bootstrap() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItem(setItems);
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Bootstrap;
