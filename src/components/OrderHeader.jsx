export default function OrderHeader() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <p className="text-sm text-gray-500">
        Order #ORD-20260925
      </p>

      <h1 className="text-xl font-bold mt-2">
        Your order is on the way 🚚
      </h1>

      <div className="mt-4 bg-blue-50 rounded-xl p-4">

        <p className="text-sm text-gray-600">
          Estimated Delivery
        </p>

        <p className="font-semibold text-blue-600">
          Friday, 26 September
        </p>

        <p className="text-sm">
          2:00 PM - 5:00 PM
        </p>

      </div>

    </div>
  )
}