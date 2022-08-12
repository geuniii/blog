/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '중계 우동 맛집';
  let [글제목, 글제목변경] = useState(['2.이름', '1.나이', '3.사는곳']);
  let logo = 'GEUNII BLOG';
  let [따봉, 따봉변경] = useState(0);
  let [버튼, 버튼변경] = useState('안녕');

  [1, 2, 3].map(function (a) {
    return '12345'
  });

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'pink', fontSize: 16 }}>{logo}</h4>
      </div>
      <button onClick={() => {
        let copy = [...글제목]
        copy.sort();
        글제목변경(copy);

      }}>가나다순정렬</button>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '2.내 이름이 뭐게!'
        글제목변경(copy)
      }}>이거 누르면 글자 바뀌어</button>
      <p>{버튼}</p>
      {/* <div className="li st">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>💗</span> {따봉} </h4>
        <p>8월 7일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 7일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>8월 7일 발행</p>
      </div> */}
      {
        글제목.map(function (a,i) {
          return (
            <div className="list">
              <h4 onClick={()=>(Modal(true))}>{글제목[i]}</h4>
              <p>8월 7일 발행</p>
            </div>)
        })
      }
      
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
