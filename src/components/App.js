import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import DisplayData from "./DisplayData";

function App() {
  const [data, setData] = useState({ loading: true, data: null });

  const getData = async endpoint => {
    let response = await axios.get(endpoint);
    setData({ loading: false, data: response.data });
  };

  useEffect(() => {
    getData(`https://api.exchangeratesapi.io/latest`);
  }, []);

  console.log(data);

  return (
    <MainWrapper>
      <h1>Foreign exchange rates</h1>
      {data.loading ? "Loading..." : <DisplayData />}
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  font-family: "PT Sans", sans-serif;
  box-sizing: border-box;
`;

//https://api.exchangeratesapi.io/latest
