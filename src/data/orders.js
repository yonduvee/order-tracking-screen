export const orderData = {
  id: "ORD-20260925",
  product: {
    name: "Wireless Headphones",
    quantity: 1,
    price: "$49.99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },

  status: "out_for_delivery",

  estimatedDelivery:
    "Friday, 26 September • 2:00 PM - 5:00 PM",

  timeline: [
    {
      title: "Order Placed",
      description: "Your order has been confirmed",
      time: "24 Sep, 10:30 AM",
      completed: true
    },
    {
      title: "Processing",
      description: "Seller is preparing your package",
      time: "24 Sep, 12:00 PM",
      completed: true
    },
    {
      title: "Shipped",
      description: "Package left the warehouse",
      time: "25 Sep, 09:15 AM",
      completed: true
    },
    {
      title: "Out for Delivery",
      description: "Delivery partner is nearby",
      time: "Today",
      completed: false
    },
    {
      title: "Delivered",
      description: "Waiting for completion",
      time: "",
      completed: false
    }
  ]
};