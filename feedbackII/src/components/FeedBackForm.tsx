import { useContext } from "react";
import { FeedBackContext } from "./context/FormContext";

const FeedBackForm = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    feedBack,
    setFeedBack,
    handleSubmit,
  } = useContext(FeedBackContext);

  return (
    <div className="flex flex-cols m-10 justify-center p-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[40%] shadow-xl p-10 rounded-xl"
      >
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded-sm p-2 m-2 ml-0"
        />
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded-sm p-2 m-2 ml-0"
        />
        <label htmlFor="feedBack">FeedBack Message:</label>
        <input
          name="feedBack"
          type="text"
          value={feedBack}
          onChange={(e) => setFeedBack(e.target.value)}
          required
          className="border rounded-sm p-2 m-2 ml-0"
        />
        <button
          type="submit"
          className="rounded bg-green-600 p-2 w-50 text-sm font-semibold text-[#eee] mt-4"
        >
          Send feedBack
        </button>
      </form>
    </div>
  );
};

export default FeedBackForm;
