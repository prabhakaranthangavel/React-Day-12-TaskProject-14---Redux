import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { addToCart, removeItem, updateQuantity } from '../redux/actions';

function CartPage({ addToCart, removeItem, updateQuantity, products }) {
    const calculateTotal = () => {
      console.log(products.reduce((total, item) => total + item.price * item.quantity, 0));
      console.log(products);
      return products.reduce((total, item) => total + item.price * item.quantity, 0);
    };
  
    return (
      <div>
        <Table>
          <tbody>
            {products.map((item) => (
              <React.Fragment key={item.id}>
                <tr>
                  <td>
                    <img src={item.images[0]} alt={item.title} />
                  </td>
                  <td>
                    <strong>{item.title}</strong>
                  </td>
                  <td colSpan="2"></td>
                  <td>
                    <label htmlFor={`quantity-${item.id}`}></label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      name={`quantity-${item.id}`}
                      min="0"
                      max="10"
                      value={item.quantity !== undefined ? item.quantity : 0}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    />
                  </td>
                  <td>${item.price}</td>
                  <td>
                    {item.quantity > 0 ? (
                      <Button variant="danger" onClick={() => removeItem(item.id)}>
                        Remove
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={() => addToCart(item.id)}>
                        Add
                      </Button>
                    )}
                  </td>
                </tr>
                <tr>
                  <td colSpan="7">{item.description}</td>
                </tr>
              </React.Fragment>
            ))}
            <tr>
              <td>
                <strong>Subtotal:</strong>
              </td>
              <td colSpan="5"></td>
              <td>${calculateTotal()}</td>
            </tr>
            <tr>
              <td>
                <strong>Shipping:</strong>
              </td>
              <td colSpan="5"></td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>
                <strong>Total:</strong>
              </td>
              <td colSpan="5"></td>
              <td>${calculateTotal()}</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td>Get Daily Cash with One-Card</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
  
  const mapStateToProps = (state) => ({
    products: state.products,
  });
  
  const mapDispatchToProps = {
    addToCart,
    removeItem,
    updateQuantity,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
  