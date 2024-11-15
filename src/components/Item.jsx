import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import RatingBar from './RatingBar';

const Item = ({ name, id, rating = 0, dispatch }) => {
  const [localRating, setLocalRating] = useState(rating);

  const handleEdit = () => {
    dispatch({
      type: "edit",
      id: id
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      id: id
    });
  };

  const handleRate = () => {
    const newRating = localRating === 10 ? 0 : localRating + 1;
    setLocalRating(newRating);
    dispatch({
      type: "rate",
      id: id,
      rating: newRating
    });
  };

  return (
    <Card style={{ width: '18rem' }} className="border mb-3 p-3 ms-3" key={id}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <RatingBar rate={localRating} />
        <Button variant="primary" onClick={handleEdit} className="me-2 mt-2 ml-2">Edit</Button>
        <Button variant="danger" onClick={handleDelete} className="me-2 mt-2 ml-2">Delete</Button>
        <Button variant="success" onClick={handleRate} className="me-2 mt-2 ml-2">Rate</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
