import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function State() {
  //멤버변수(기본타입, 객체타입) 멤버함수(계산함수, 이벤트 핸들러 함수)
  const [name, setName] = useState(['mjb', 'zeus', 'hgd']);
  return (
    <Container className="mt-3">
      <div className="d-grid gap-2">
        <Button action variant="primary" size="lg">
          {name[0]}
        </Button>
        <Button action className="text-bg-warning" size="lg">
          {name[1]}
        </Button>
        <Button action className="text-bg-secondary" size="lg">
          {name[2]}
        </Button>
      </div>
    </Container>
  );
}
