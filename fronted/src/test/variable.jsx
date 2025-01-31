import { Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function Variable() {
  let name = '제우스';
  let message = '안녕하세요';
  return (
    <Container className="mt-3">
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          {name}
        </Button>
        <Button variant="secondary" size="lg">
          {message}
        </Button>
      </div>
    </Container>
  );
}
export default Variable;
