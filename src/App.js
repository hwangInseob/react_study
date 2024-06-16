import logo from './logo.svg';
import './App.css';
import Header from './component/Header';

function Logo() {
  return (
    <img src={logo} className="App-logo" alt="logo" /> 
  );
}

function App() {
  return (
    <div className="App">
      {/**
       * <tagName propsName="data"></tagName>
       * 이런식으로 쓰면
       * 
       * 해당 tagName 컴포넌트에서 
       * tagName(props) {
       *  <div>
       *    {props.data}
       *  </div>
       * }       * 
       * 방식으로 쓸 수 있다.
       *
       * 추가로 변수 자체를 넘기려면
       * <tagName propsName={varName}></tagName>
       * 이런식으로 쓰면된다
       * 
       */}
      <Header header="good"></Header>
    </div>
  );
}

export default App;
