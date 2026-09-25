export default function ProductCard({ product }) {

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <h2 className="font-bold text-lg mb-4">
        Order Summary
      </h2>


      <div className="flex gap-4">

        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 rounded-xl object-cover"
        />


        <div>

          <h3 className="font-semibold">
            {product.name}
          </h3>

          <p className="text-sm text-gray-500">
            Quantity: {product.quantity}
          </p>

          <p className="font-bold mt-2">
            {product.price}
          </p>

        </div>


      </div>


      <button
      className="mt-5 w-full py-3 rounded-xl
      bg-gray-100 font-medium">
        View Order Details
      </button>


    </div>
  )
}