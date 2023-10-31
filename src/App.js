import Content from "./component/Content";
import Content2 from "./component/Content2";
import Title from "./component/Title";


function App() {
  return (

    <>
    <Title 작명='뉴스' 서브='뉴스타이틀'/>
    <Content type="news"/>

    <Title 작명='인기순위'서브='인기타이틀'/>
    <Content type="popluar"/>

    <Title 작명='Editors clip'서브='매일매일이 즐거워~에버랜드 이야기'/>
    <Content2 />
   </>
  );
}

export default App;
