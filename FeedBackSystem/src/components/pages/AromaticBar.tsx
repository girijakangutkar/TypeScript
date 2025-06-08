import { useState } from "react";
import axios from "axios";
import StarRating from "./StarRating";

const AromaticBar = () => {
  const [customerSays, setCustomerSays] = useState({
    id: Date.now().toString(),
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
    foodRate: 0,
    serviceRate: 0,
    cultureRate: 0,
  });

  const URI = import.meta.env.VITE_URI;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCustomerSays((prev) => ({
      ...prev,
      [e.target.name]: e.target.name.includes("Rate")
        ? Number(e.target.value)
        : e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await axios.post(`${URI}`, customerSays);
      setCustomerSays({
        id: Date.now().toString(),
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
        foodRate: 0,
        serviceRate: 0,
        cultureRate: 0,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Feedback Form</h2>

        <div className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={customerSays.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={customerSays.phoneNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customerSays.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Dining Experience..."
            value={customerSays.message}
            onChange={handleChange}
            className="w-full border p-2 rounded resize-none"
          />
        </div>

        <div className="flex mt-4 justify-between self-center items-center content-center text-left m-5">
          <label className="block">Food Rating</label>
          <StarRating
            rating={customerSays.foodRate}
            setRating={(value) =>
              setCustomerSays({ ...customerSays, foodRate: value })
            }
          />
          <label className="block mt-2">Service Rating</label>
          <StarRating
            rating={customerSays.serviceRate}
            setRating={(value) =>
              setCustomerSays({ ...customerSays, serviceRate: value })
            }
          />
        </div>
        <div className="flex mt-4 justify-start self-center items-center content-center text-left m-5">
          <label className="block mt-2 mr-3">Culture Rating</label>
          <StarRating
            rating={customerSays.cultureRate}
            setRating={(value) =>
              setCustomerSays({ ...customerSays, cultureRate: value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default AromaticBar;
