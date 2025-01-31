import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function Count() {
  let [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  return (
    <Container className="mt-3">
      <Button
        className="btn btn-outline-white btn-danger me-3"
        onClick={increase}
      >
        좋아요
      </Button>
      {count}
    </Container>
  );
}
export default Count;
