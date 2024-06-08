import { useState } from 'react'
import './App.css'
import { Box } from '@mui/material';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap-grid.min.css'

function App() {
  const [userData, setProduct] = useState<any>([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data[0], "data received");
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };


  return (
    <>
  
  <Box >
    <div className='big'>
      <h1 className="text-info">Click the Button Below <br /> To See the Products</h1>
     <button className="button" onClick={getData}>Button</button>

      {userData.length && userData.map((e: any) => {
        return (
          <div className="div " >
            <div className="Second">
           <div className="img" > <img  src={e.image} alt="" /></div>
          
          <div className="third ">
          
            <p><span className="fs-2" ><b className="text-info"> Title: </b></span>   <b className="fs-4">   {e.title}</b></p>
            <h6><span className="fs-4" ><b className="text-info">  Discription: </b></span> {e.description}</h6>
            <h5><span className="fs-4" ><b className="text-info"> Price: </b></span> {e.price}</h5>
            <h5><span className="fs-4" ><b className="text-info"> Rate: </b></span>{e.rating.rate}</h5>
            <h5><span className="fs-4 " ><b className="text-info"> Count: </b></span>{e.rating.count}</h5>
            </div>
            </div>
          </div>
                
        )
      })}
</div>

    </Box>
    </>
  )
}

export default App
