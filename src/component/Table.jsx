import { MdDelete } from "react-icons/md";
import { API_GET_ITEM } from "../component/Constants";

function Table({ items }) {

  async function handleDelete(id) {
    console.log(`${API_GET_ITEM}/${id}`);
    const response = await fetch(`${API_GET_ITEM}/${id}`, {
      method: "DELETE",
    });

    if(!response.ok) {
      throw new Error("eeeeeerror");
    };
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <MdDelete
                  onClick={() => handleDelete(item.id)}
                  style={{ cursor: "pointer", marginLeft: "15px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
