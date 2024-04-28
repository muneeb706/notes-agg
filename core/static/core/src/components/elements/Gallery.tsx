import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

interface CardObject {
  name: string;
  url: string;
}

interface GalleryProps {
  cards: CardObject[];
}

const Gallery: React.FC<GalleryProps> = ({ cards }) => (
  <Row xs={1} md={3} lg={4} xl={4} className="g-4 m-3">
    {cards.map((card, index) => (
      <Col key={index}>
        <Card className="lift">
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Gallery;
