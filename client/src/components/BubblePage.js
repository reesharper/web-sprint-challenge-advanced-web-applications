import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const updateColors = (colorIn) => {
    const idx = colorList.findIndex(el => el.id === colorIn.id);
    if (idx !== -1) {
      setColorList([...colorList, colorList[idx] = {...colorIn}]);
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
