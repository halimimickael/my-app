import React, { useEffect, useState } from "react";
import Btn from "./btn";
import Foot from "./foot";

export default function Home() {
  const [ar, setAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);
  
//calls an API and saves its data in an array
  const doApi = async () => {
    const url = "https://monkeys.co.il/api2/currency.php";
    const resp = await fetch(url);
    const data = await resp.json();

    const temp_ar = [];
    for (let key in data.quotes) {
      let item = {
        state: key,
        argent: data.quotes[key]
      };
      temp_ar.push(item);
    }

    setAr(temp_ar);
    console.log(ar);
  };

  return (
    <div>
      <div className="d-flex flex-column justify-content-center w-100 h-100">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3 fw-light text-white m-5">Exchange Rate Calculator</h1>
          <Btn items={ar} />
          <hr />
          <Foot  />
          <hr />
        </div>
      </div>
    </div>
  );
}