import { React, useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";

const client_id = "3b478512-7f9b-4d41-9dbe-c873673a13d0";
const client_secret = "*xXiTzR!v16>SG:OHJRVyWsUP(9nNf/@@Iu_XEkp";

function ProductsListComponent(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getData(props.jenisCitra);
  }, [props.jenisCitra]);

  async function getData(jenisCitra) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    };

    const body = qs.stringify({
      client_id,
      client_secret,
      grant_type: "client_credentials",
    });

    const responses = await axios.post(
      "https://services.sentinel-hub.com/oauth/token",
      body,
      config
    );
    const data = await responses.data;

    const instance = axios.create({
      baseURL: "https://services.sentinel-hub.com",
    });

    await Object.assign(instance.defaults, {
      headers: { authorization: `Bearer ${data.access_token}` },
    });

    const resultData = await fetch(
      "https://services.sentinel-hub.com/api/v1/catalog/search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.access_token,
        },

        body: JSON.stringify({
          bbox: [10, 10, 20, 20],
          datetime: "2015-12-10T00:00:00Z/2020-12-10T23:59:59Z",
          collections: [jenisCitra],
          
        }),
      }
    );

    const finalResult = await resultData.json();
    setProductList(finalResult.features);
    console.log(finalResult.features);
  }

  return (
    <div className="row mt-2">
      {productList.map((item) => (
        <div key={item.id} className="card mb-2" id="card-products">
          <div className="row">
            <div className="col">
              <img
                src={item["assets"]["thumbnail"]["href"]}
                class="img-thumbnail"
                alt=""
    
              />
            </div>
            <div className="col">
                <p className="card-title mt-1">{item["properties"]["platform"]}</p><br/>
                <p className="card-text">Date : {item["properties"]["datetime"]}</p><br/>
                <p className="card-text">Resolution : {item["properties"]["resolution"]}</p><br/>            
            </div>
          </div>
          <div className="card-footer w-100 text-muted">
            <p className="card-text">Index : <strong>{item["id"]}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsListComponent;
