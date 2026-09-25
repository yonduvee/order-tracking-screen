import { CheckCircle } from "lucide-react";


export default function OrderTimeline({ timeline }) {

  return (

    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <h2 className="font-bold text-lg mb-6">
        Delivery Progress
      </h2>


      {
        timeline.map((item,index)=>(

          <div 
          key={index}
          className="flex gap-4"
          >

            <div className="flex flex-col items-center">


              <CheckCircle
              size={24}
              className={
                item.completed
                ? "text-blue-600"
                : "text-gray-300"
              }
              />


              {
                index !== timeline.length-1 &&
                <div className="
                w-[2px]
                h-14
                bg-gray-200
                mt-1
                "/>
              }


            </div>



            <div className="pb-6">


              <h3 className="font-semibold">
                {item.title}
              </h3>


              <p className="text-sm text-gray-500">
                {item.description}
              </p>


              <p className="text-xs text-gray-400 mt-1">
                {item.time}
              </p>


            </div>


          </div>


        ))
      }


    </div>

  )
}