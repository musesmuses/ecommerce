import React, { useEffect, useState } from "react";
import CustomModal from "../../Components/CustomModal";
import Layout from "../../Layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../Store/Actions/ProductListAction";
import Loader from "../../Components/Loader";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {showModal && (
        <CustomModal
          setShowModal={setShowModal}
          path="/cart"
          title="Item Added To Cart"
          body="Go To Cart"
          footer="Continue Shopping"
        />
      )}

      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <h1>Products</h1>
            <Row>
              {products.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <ProductCard product={product} setShowModal={setShowModal} />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </Layout>
    </>
  );
};

export default Home;
