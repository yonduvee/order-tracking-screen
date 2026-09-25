export default function StatusBanner({ type }) {


  if(type === "delayed"){

    return (

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">

        <h2 className="font-bold text-orange-700">
          ⚠ Delivery Delayed
        </h2>

        <p className="text-sm mt-2 text-gray-600">
          Your order is taking longer than expected.
        </p>

        <p className="font-semibold mt-3">
          New estimated delivery:
        </p>

        <p className="text-orange-700">
          28 September
        </p>

      </div>

    )

  }



  if(type === "missing"){

    return (

      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">

        <h2 className="font-bold text-red-700">
          📦 Delivered but not received
        </h2>


        <p className="text-sm mt-2 text-gray-600">
          Our system shows this order was delivered,
          but you have not received it.
        </p>


        <button className="
        mt-4
        bg-red-600
        text-white
        px-5
        py-2
        rounded-xl">

          Report Issue

        </button>


      </div>

    )

  }



  if(type === "tracking"){

    return (

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">


        <h2 className="font-bold text-blue-700">
          🔎 Tracking Information Pending
        </h2>


        <p className="text-sm mt-2 text-gray-600">
          Your order has been confirmed.
          Tracking details will appear soon.
        </p>


        <p className="mt-3 font-medium">
          Expected update:
        </p>

        <p className="text-blue-700">
          Within 24 hours
        </p>


      </div>

    )

  }


  return null;

}