import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './include/Header';
import Syntax from './test/Syntax';
import Variable from './test/Variable';
import State from './test/state';
import Count from './test/Count';
import Loop from './test/loop';
import Summary from './survey/Summary';
import Question from './survey/Question';

function App() {
  console.warn = function no_console() {}; //콘솔창에 경고내용을 보여주지 마라
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 기초 문법 */}
          <Route path="/test" element={<Syntax />} />
          <Route path="/test/variable" element={<Variable />} />
          <Route path="/test/state" element={<State />} />
          <Route path="/test/count" element={<Count />} />
          <Route path="/test/loop" element={<Loop />} />

          {/* 설문 조사 */}
          <Route path="/survey/Question" element={<Question />} />
          <Route path="/survey/Summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
