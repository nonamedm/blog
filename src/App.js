/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; // 자료 잠깐 저장할 때는 변수에 저장 let var const
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동맛집','파이썬독학']);
  let [logo,setLogo] = useState('ReactBlog');
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(1);
  let [inputVal, setInputVal] = useState('');
  
  function 함수() {
    {따봉+1};
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
          }}>글수정</button>
      {/* <div className="list" onClick={()=>{
        modal == false? setModal(true) : setModal(false)
      }}>
        <h4>{글제목[0]}
        <span onClick={() => {따봉변경(따봉+1)}}>👍🏻</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                modal==false?setModal(true):setModal(false);
                setTitle(i);
              }}>
                { 글제목[i] }
              <span onClick={(e) => {
                e.stopPropagation(); //버블링방지
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}>👍🏻
              </span> {따봉[i]}

              <button onClick={(e)=>{
                e.stopPropagation();
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy);

              }}>삭제</button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      
      <input type="text" onChange={(e)=>{
        setInputVal(e.target.value);
        console.log({inputVal});
      }}/>
      <button onClick={()=>{
        if(inputVal=='') {return false}
        let copy = [...글제목];
        copy.unshift(inputVal);
        글제목변경(copy);

      }}>발행</button>

      {
        modal== true ? <Modal titleCopy = {title} 글제목변경copy = {글제목변경} 글제목copy={글제목}></Modal> : null
      }
      
    </div>
  );
}

const Modal1 = () => {
  return (
    <div>abc</div>
  )
}

function Modal(props) {
  return (
    <div className="modal" >
      <h4>{props.글제목copy[props.titleCopy]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목copy];
        // console.log(copy);
        copy[0] = '여자 코트 추천';
        props.글제목변경copy(copy);
      }}>글수정</button>
    </div>
  )
}


export default App;
