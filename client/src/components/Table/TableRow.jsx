import React from "react";
import { Plus, Dash } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const TableRow = ({
  number,
  url,
  title,
  price,
  quantity,
  onDelete,
  onIncrement,
  onDecrement,
}) => {
  return (
    <tr>
      <td>{number}</td>
      <td>
        <img src={url} alt="product" className="shopping-cart-image" />
      </td>
      <td className="my-auto">{title}</td>
      <td>{price}</td>
      <td style={{ minWidth: "90px" }}>
        <Button onClick={onDecrement} size="sm" className="p-0 mx-2">
          <Dash />
        </Button>
        {quantity}
        <Button onClick={onIncrement} size="sm" className="p-0 mx-2">
          <Plus />
        </Button>
      </td>
      <td>
        <Button onClick={onDelete} size="sm" variant="danger">
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
