import { useState } from "react";
import FeedBackList from "./FeedBackList";

const FeedBackForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [feedBack, setFeedBack] = useState<string>();
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
    alert(`Feed back submitted: ${name}, ${email}, ${rating},${feedBack}`);
    setEmail("");
    setName("");
    setFeedBack("");
  }

  return (
    <div className="flex flex-col justify-center w-full font-serif p-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-left self-center m-10 w-[50%] content-center font-medium border-#ccc rounded-xl shadow-lg"
      >
        <label htmlFor="name" className="text-left w-[50%] m-2 font-semibold">
          Name:
        </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-[50%] rounded-lg p-2"
          required
        />
        <label htmlFor="email" className="text-left w-[50%] m-2 font-semibold">
          Email:
        </label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[50%] border rounded-lg p-2"
        />
        <label htmlFor="rating" className="text-left w-[50%] m-2 font-semibold">
          Rating:
        </label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          className="w-[50%] border rounded-lg p-2 "
        >
          <option value="">Select rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label
          htmlFor="feedBack"
          className="text-left w-[50%] m-2 p-2 font-semibold"
        >
          Feedback:
        </label>
        <textarea
          name="feedBack"
          value={feedBack}
          onChange={(e) => setFeedBack(e.target.value)}
          className="w-[50%] border rounded-lg resize-none p-2"
        />
        <button
          type="submit"
          className="bg-green-300 w-[50%] m-10 rounded-lg p-2 font-semibold border-gray-800"
        >
          Send Feedback
        </button>
      </form>

      {/* <div className="flex justify-center w-[50%] border items-center content-center self-center">
        {data.map((ele, index) => (
          <div
            key={index}
            className="flex justify-center w-[50%] border items-center content-center self-center"
          >
            <p>Name: {ele.name}</p>
            <p>Email: {ele.email}</p>
            <p>Rating: {ele.rating}</p>
            <p>Feedback: {ele.feedBack}</p>
          </div>
        ))}
      </div> */}
      <h1 className="items-center text-center text-xl font-bold">
        Feedback entries
      </h1>
      <FeedBackList feedBack={data} />
    </div>
  );
};

export default FeedBackForm;
