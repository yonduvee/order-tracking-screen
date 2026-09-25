export default function SupportCard(){

  return(

    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <h2 className="font-bold text-lg">
        Need Help?
      </h2>


      <p className="text-sm text-gray-500 mt-1">
        Contact us if you have any delivery issues.
      </p>


      <div className="flex gap-3 mt-4">

        <button
        className="flex-1 bg-blue-600 text-white 
        py-3 rounded-xl text-sm">
          Contact Support
        </button>


        <button
        className="flex-1 bg-gray-100 
        py-3 rounded-xl text-sm">
          Report Issue
        </button>


      </div>


    </div>

  )

}