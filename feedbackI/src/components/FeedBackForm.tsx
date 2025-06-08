import { useState } from "react";
import FeedBackList from "./FeedBackList";

const FeedBackForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [feedBack, setFeedBack] = useState<number>(null);
  const [data, setData] = useState<any[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // const target = e.target as HTMLInputElement;
    // setData([
    //   ...data,
    //   target.name === "rating" ? Number(target.value) : target.value,
    // ]);
    setData([
      ...data,
      {
        name,
        email,
        rating,
        feedBack,
      },
    ]);

    setEmail("");
    setName("");
    setFeedBack("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="rating">Rating:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="feedBack">Feedback:</label>
        <textarea
          name="feedBack"
          value={feedBack}
          onChange={(e) => setFeedBack(e.target.value)}
        />
        <button type="submit">Send Feedback</button>
      </form>
      <div>
        {data.map((ele, index) => (
          <div key={index}>
            <p>Name: {ele.name}</p>
            <p>Email: {ele.email}</p>
            <p>Rating: {ele.rating}</p>
            <p>Feedback: {ele.feedBack}</p>
          </div>
        ))}
      </div>
      <FeedBackList feedBack={data} />
    </div>
  );
};

export default FeedBackForm;
