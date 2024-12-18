import { useEffect, useState } from "react";
import { API_GET_ITEM } from "../component/Constants";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "../component/List";
import Submit from "../component/Submit";
import Table from "../component/Table";


function Bootstrap() {
  const [items, setItems] = useState([]);

  async function fetchItem() {
    const res = await fetch(API_GET_ITEM);
    const items = await res.json();
    setItems(items);
  }

  useEffect(() => {
    fetchItem();
  }, [items]);

  return (
    <>
    <List />
    <Submit 
      fetchItem={fetchItem}
    />
    <Table 
      items={items}
      fetchItem={fetchItem}
    />
    </>
  );
}

export default Bootstrap;
