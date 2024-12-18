import { useState } from "react";
import { API_GET_ITEM } from "../component/Constants";

async function postItem({ itemName }){
  const response = await fetch(API_GET_ITEM, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name:itemName }),
  });

  if(!response.ok) {
    throw new Error("error");
  }
  const result = await response.json();
  console.log("success:", result);
}

function Submit() {
  const [itemName, setItemName] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    postItem({itemName});
    setItemName("");
  }

  return (
    <form onSubmit={handlesubmit}>
      <input
        className="input"
        type="text"
        placeholder="Please Enter Your Name"
        value={itemName}
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      ></input>
      <button className="button">Submit</button>
    </form>
  );
}

export default Submit;
