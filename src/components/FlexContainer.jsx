import React, { useContext } from 'react';
import AppContext from '../data/AppContext';
import { Container, Row, Col } from 'react-bootstrap';

function FlexContainer({ element: Element }) {
  const { items, dispatch } = useContext(AppContext); // Pobieramy dane i funkcję dispatch z kontekstu

  return (
    <Container className="d-flex justify-content-center my-4">
      <Row className="justify-content-center" style={{ width: '100%' }}>
        {items.map((item) => (
          <Col
            key={item.id}
            xs={12}
            sm={6}
            md={4}
            lg={3} // Responsywne kolumny
            className="d-flex justify-content-center mb-4"
          >
            <Element {...item} dispatch={dispatch} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FlexContainer;
