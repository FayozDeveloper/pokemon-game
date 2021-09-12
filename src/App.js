import './App.css';
import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import Footer from "./components/footer/footer";
import firstImg from '../src/image/wp4676574-4k-pc-wallpapers.jpg'
import secondImg from '../src/image/wp4676582-4k-pc-wallpapers.jpg'

function App() {

    const bgColor = 'red'

  return (
    <div>
        <Header title={'This is title'} desc={'This is Description!'}/>
        <Layout title={"First Layout"} desc={'First Layout Desc'} urlBg={firstImg} />
        <Layout colorBg={bgColor} title={'Second Layout'}  desc={'Second Layout Desc'}/>
        <Layout urlBg={secondImg} title={'Third Layout'}  desc={'Third Layout Desc'}/>
        <Footer/>
    </div>
  );
}

export default App
