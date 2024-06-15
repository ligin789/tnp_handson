import React, { useEffect, useState } from "react";
import LandingPage from "./screens/LandingPage";
import Loader from "./components/Loader";
import Routes from "./components/Routes";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(()=>
  {
    setTimeout(()=>
    {
      setLoader(false)
    },2000)
  },[])

  return loader ? <Loader /> : <Routes />;
}

export default App;
