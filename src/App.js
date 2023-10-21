import Content from "./component/Content";
import Title from "./component/Title";


function App() {
  return (

    <>
    <Title 작명='뉴스' 서브='뉴스타이틀'/>
    <Content/>
    <Title 작명='인기순위'서브='인기타이틀'/>
   </>
  );
}

export default App;
