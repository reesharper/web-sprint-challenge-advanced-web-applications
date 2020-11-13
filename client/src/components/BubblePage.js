import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get("/colors")
    .then(req=>{
      setColorList(req.data)
    }).catch(err=>{
      console.log(err);
    })
  },[]);

  const updateColors = (colorIn) => {
    const idx = colorList.findIndex(el => el.id === colorIn.id);
    if (idx === -1) {
    } else {
      setColorList([...colorList, colorList[idx] = { ...colorIn }]);
    }
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
