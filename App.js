import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목,b] = useState('여자 코트 추천');
  let [글제목1,c] = useState('강남 우동맛집');
  let [글제목2,d] = useState('파이썬독학');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list1'>
        <h4>{글제목1}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list2'>
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
