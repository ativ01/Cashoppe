import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import TableRow from "../Table/TableRow";

const CartList = ({ data, onDelete, onIncrement, onDecrement, onCheckout }) => {
  return (
    <Container className="mb-3">
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.products &&
            data.products.map((product, index) => (
              <TableRow
                key={index}
                number={index + 1}
                url={product.productId.imageUrl}
                title={product.productId.title}
                price={product.productId.price}
                quantity={product.quantity}
                onDelete={() =>
                  onDelete(product.productId._id, product.quantity)
                }
                onIncrement={() => onIncrement(product.productId._id)}
                onDecrement={() => onDecrement(product.productId._id)}
              />
            ))}
          <tr>
            <td colSpan={3} className="text-end fw-bold">
              Total:
            </td>
            <td>
              {data.products &&
                data.products
                  .reduce((total, current) => {
                    return (total +=
                      current.productId.price * current.quantity);
                  }, 0)
                  .toFixed(2)}
            </td>

            <td></td>
            <td>
              <Button onClick={onCheckout}>Checkout</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default CartList;
