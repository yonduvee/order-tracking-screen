import { useState } from "react";

import OrderHeader from "./components/OrderHeader";
import OrderTimeline from "./components/OrderTimeline";
import ProductCard from "./components/ProductCard";
import SupportCard from "./components/SupportCard";
import StatusBanner from "./components/StatusBanner";
import { motion } from "framer-motion";
import { orderData } from "./data/orders";


function App() {


  const [state,setState] = useState("normal");


  return (
    

<motion.div

initial={{opacity:0,y:20}}

animate={{opacity:1,y:0}}

transition={{duration:0.4}}

className="
min-h-screen
bg-gray-100
p-4
flex
justify-center
"
>


      <div className="
      w-full
      max-w-md
      space-y-4
      ">


        <div className="bg-white p-4 rounded-2xl">


          <p className="font-semibold mb-3">
            Demo Order Status
          </p>


          <select
          value={state}
          onChange={(e)=>setState(e.target.value)}
          className="
          w-full
          border
          rounded-xl
          p-3">

            <option value="normal">
              Normal Delivery
            </option>

            <option value="delayed">
              Delayed Order
            </option>

            <option value="missing">
              Delivered but Not Received
            </option>

            <option value="tracking">
              Tracking Not Available
            </option>


          </select>


        </div>



        {
          state !== "normal" &&
          <StatusBanner type={state}/>
        }



        <OrderHeader />


        <OrderTimeline
        timeline={orderData.timeline}
        />



        <ProductCard
        product={orderData.product}
        />



        <SupportCard />


      </div>


    </motion.div>

  )

}


export default App;