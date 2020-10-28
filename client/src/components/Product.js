import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <a href={`./products/${product._id}`}>
          <Card.Img src={product.image} variant='top'></Card.Img>
        </a>
        <Card.Body>
          <a href={`./products/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>

          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as='h3'>
            <h3>₱{product.price * 50}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Product;
