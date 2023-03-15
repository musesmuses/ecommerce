import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import Rating from "../Components/Rating";
import { addToCart } from "../Store/Actions";

const ProductCard = ({ product, setShowModal }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product.id));
  };
  const setShowModalHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.image} variant="top" />
          {/* <p>aduhfa</p> */}
        </Link>

        <Card.Body>
          <Link to={`/product/${product.id}`}>
            <Card.Title as="div">
              <strong className="link-dark">{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating value={product.rating} />
          </Card.Text>

          <Row>
            <Col>
              <h3>${product.price}</h3>
              <Button
                className="btn btn-dark"
                onClick={() => {
                  addToCartHandler();
                  setShowModalHandler();
                }}
                variant="primary"
                disabled={product.countInStock === 0}
                // showModalHandler={showModalHandler()}
              >
                {product.countInStock === 0 ? "Out of Stock" : "Add To Cart"}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
