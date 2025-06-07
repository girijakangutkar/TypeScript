import { useState } from "react";
import axios from "axios";

const AromaticBar = () => {
  const [customerSays, setCustomerSays] = useState<{
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    message: string;
    foodRate: number;
    serviceRate: number;
    cultureRate: number;
  }>({
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setCustomerSays((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "phoneNumber"
          ? e.target.value // Keep as string, don't convert to number
          : e.target.name.includes("Rate")
          ? Number(e.target.value) // Convert rating values to numbers
          : e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post(`${URI}`, customerSays);
      console.log(response.data);
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
      console.log(error);
    }
  }

  return (
    <div className="userDetails">
      <form onSubmit={handleSubmit}>
        <div className="feedbackForm">
          <div className="col1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={customerSays.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={customerSays.phoneNumber}
              onChange={handleChange}
              minLength={10}
              maxLength={10}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={customerSays.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Dining Experience:</label>
            <textarea
              name="message"
              id="message"
              value={customerSays.message}
              onChange={handleChange}
            />
            <button type="submit" className="subBtn">
              Submit
            </button>
          </div>

          <div className="col2">
            <label htmlFor="foodRate">Food rating:</label>
            <select
              name="foodRate"
              id="foodRate"
              value={customerSays.foodRate}
              onChange={handleChange}
              required
            >
              <option value={0}>Select rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <label htmlFor="serviceRate">Service rating:</label>
            <select
              name="serviceRate"
              id="serviceRate"
              value={customerSays.serviceRate}
              onChange={handleChange}
              required
            >
              <option value={0}>Select rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <label htmlFor="cultureRate">Culture rating:</label>
            <select
              name="cultureRate"
              id="cultureRate"
              value={customerSays.cultureRate}
              onChange={handleChange}
              required
            >
              <option value={0}>Select rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AromaticBar;
