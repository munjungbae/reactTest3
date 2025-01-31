import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

export default function Loop() {
  return (
    <div>
      <Item></Item>
    </div>
  );
}
function Item() {
  //컴포넌트 함수
  const items = [
    { name: '사과', price: 5000 },
    { name: '포도', price: 4000 },
    { name: '망고', price: 3000 },
  ];
  return (
    <Container className="mt-3 text-center">
      <h2 className="text-center">상품목록</h2>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th className="text-bg-primary">번호</th>
            <th className="text-bg-primary">상품이름</th>
            <th className="text-bg-primary">상품가격</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.name}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
