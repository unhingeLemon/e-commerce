import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Header = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>Copyright &copy; Tindahan</Col>
      </Row>
    </Container>
  );
};

export default Header;
