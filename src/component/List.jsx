import { Link } from "react-router-dom";

function List() {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="text">Home</Link>
        </li>
        <li>
          <Link to="/Bootstrap" className="text">Bootstrap</Link>
        </li>
      </ul>
    </>
  );
}

export default List;
