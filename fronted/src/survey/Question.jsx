import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Question() {
  const url = 'http://localhost:8080/survey/view/1';
  const url_insert = 'http://localhost:8080/survey/insert';
  const [item, setItem] = useState([]);
  const [rdo, setRdo] = useState();
  const navigate = useNavigate();

  // 이벤트 멤버 함수.
  // 서버에게 요청하는 방식 (fetch)
  function getItem(url) {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItem(data);
      });
  }

  const handleOptionChange = (event) => {
    setRdo(event.target.value);
  };

  //서버로부터 데이터 로딩, 전송 (Component가 mount될때 즉 화면이 렌더링 될 때 처음으로 값을 요청 *useEffect)
  useEffect(() => {
    //get방식으로 해당 url에게 요청.
    getItem(url);
  }, []);

  // 화면 렌더링 (item), map, filter
  return (
    <Container className="mt-3 text-center">
      <h2 className="text-center">{item.QUESTION}문제</h2>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="1"
          checked={rdo === '1'}
          onChange={handleOptionChange}
        />
        {item.ANS1}1
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="2"
          checked={rdo === '2'}
          onChange={handleOptionChange}
        />
        {item.ANS3}2
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="3"
          checked={rdo === '3'}
          onChange={handleOptionChange}
        />
        {item.ANS3}3
      </label>
      <label>
        <input
          className="ms-3"
          name="answer"
          type="radio"
          value="4"
          checked={rdo === '4'}
          onChange={handleOptionChange}
        />
        {item.ANS4}4
      </label>
      {/* 이벤트로 현 정보를 서버에 전송 (post) */}
      <Button
        className="btn btn-outline-white btn-danger ms-3"
        onClick={() => {
          const form = new FormData();
          form.append('survey_idx', item.survey_idx);
          form.append('num', rdo);
          fetch('http://localhost:8080/survey/insert', {
            method: 'post',
            body: form,
          }).then(() => {
            navigate('/survey/summary');
          });
        }}
      >
        전송
      </Button>
    </Container>
  );
}
