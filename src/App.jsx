
import classes from "./App.module.css"
import Navbar from './layouts/Navbar';
import MatchList from './components/MatchList';
import { useState } from "react";
import SaleItem from "./components/SaleItem";
import img from "./assets/curva.png"
import img2 from "./assets/general.png"
function App() {
  const [metele, setMetele] = useState(false);
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const gg = [
    {
      id:randomNumber,
      pic: "https://scontent.fsrz4-1.fna.fbcdn.net/v/t39.30808-6/417109944_848439660620967_5300743322186524453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JMbY_fNjhiwQ7kNvgF4kfDZ&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYDBE23aKvr_vvTz22U4bDZT7PkMIAwUdqx9IVJteWtnVA&oe=66BD9AA6",
      descrip: "Oriente Petrolero"
    },
    {
      id:randomNumber,
      pic: "https://scontent.fsrz4-1.fna.fbcdn.net/v/t39.30808-6/429962708_804211628417112_4149952792562966490_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9t5WT2MCgg8Q7kNvgH8GzZw&_nc_ht=scontent.fsrz4-1.fna&oh=00_AYCZkKu8SJIkDZ30DKFLUIE63GQBbBGf81xLmfKcSd5kZQ&oe=66BD7B9F",
      descrip: "Blooming"
    },
    {
      id:randomNumber,
      pic: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/2681.png&h=200&w=200",
      descrip: "Bolivar"
    }
  ];

  const diosQueSuenho = () => {
    setMetele(false)
  }

  const setOfCop = <>
    <MatchList arr={gg} gitgut={setMetele}/>
    <MatchList arr={gg} gitgut={setMetele}/>
    <MatchList arr={gg} gitgut={setMetele}/>
  </>;
  const setOfComps2 = <>
  <h1 style={{marginLeft:"10rem"}}>ELIJE LA CATEGORIA</h1>
    <SaleItem img={img} avax={5}/>
    <SaleItem img={img2} avax={10}/>
    <button onClick={diosQueSuenho} style={{marginLeft:"10rem"}}>back</button>
  </>
  return (
    <>
      <Navbar/>
      <main className={classes.mmm}>

        {metele ? setOfComps2 : setOfCop}

      </main>
    </>
  )
}

export default App
