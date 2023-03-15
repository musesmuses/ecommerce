import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Image, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Rating from "../../Components/Rating";
import Loader from "../../Components/Loader";
import Layout from "../../Layout/Layout";
import { detailProduct } from "../../Store/Actions/index";
import { addToCart } from "../../Store/Actions/index";

const ProductDetail = () => {
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailProduct(id));
  }, [dispatch]);

  const addItem = () => {
    dispatch(addToCart(id));
  };

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <Container className="mt-2">
          <Link className="btn btn-dark my-3" to="/">
            Go Back
          </Link>
          <Row>
            <Col className="mt-4" md={6}>
              <Image
                className="border border-dark img-thumbnail"
                src={product.image}
                fluid
                rounded
              />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>{product.name}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>{product.price}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>{product.description}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <ListGroup>
                <ListGroup.Item className="d-flex">
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex">
                  <Col>Status:</Col>
                  <Col>{product.countInStock ? "InStock" : "out of stock"}</Col>
                </ListGroup.Item>

                <Button
                  className="btn-block"
                  type="button"
                  variant="dark"
                  disabled={product.countInStock === 0}
                  onClick={addItem}
                >
                  Add To Cart
                </Button>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </Layout>
  );
};

export default ProductDetail;
