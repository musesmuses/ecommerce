import React, { useState } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CustomModal from "../../Components/CustomModal";
import Layout from "../../Layout/Layout";
import {
  checkOut,
  deleteItem,
  addToCart,
  removeFromCart,
} from "../../Store/Actions/index";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.cart);

  const totalPrice = cart.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.totalPrice;
  }, 0);

  const handlerCheckout = () => {
    setShowModal(true);
    dispatch(checkOut());
  };

  return (
    <>
      {showModal && (
        <CustomModal
          setShowModal={setShowModal}
          path="/"
          title="Checkout Completed"
          body="Continue Shopping"
          footer="Close"
        />
      )}
      <Layout>
        <Container className="mt-2">
          <Row>
            <Col md={8}>
              <h1>Shopping Cart</h1>
              {cart.length === 0 ? (
                <Row className="h1">
                  Your cart is empty{" "}
                  <Link to="/" className="link-dark">
                    Go Back
                  </Link>
                </Row>
              ) : (
                <ListGroup variant="flush">
                  {cart.map((item) => (
                    <ListGroup.Item key={item.id}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col md={3}>
                          <Link
                            to={`/product/${item.id}`}
                            className="link-dark"
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={2}>${item.price}</Col>
                        <Col md={3}>
                          <Button
                            className="btn-dark"
                            onClick={() => {
                              dispatch(addToCart(item.id));
                            }}
                          >
                            +
                          </Button>
                          <Button className="btn-light">{item.quantity}</Button>
                          <Button
                            className="btn-dark"
                            onClick={() => {
                              dispatch(removeFromCart(item.id));
                            }}
                          >
                            -
                          </Button>
                        </Col>
                        <Col md={2}>
                          <Button
                            type="button"
                            variant="light"
                            onClick={() => {
                              dispatch(deleteItem(item.id));
                            }}
                          >
                            <i className="fas fa-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Subtotal</h2>$
                    {(Math.round(totalPrice * 100) / 100).toFixed(2)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn-block btn-dark"
                      disabled={cart.length === 0}
                      onClick={handlerCheckout}
                    >
                      Proceed To Checkout
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Cart;
