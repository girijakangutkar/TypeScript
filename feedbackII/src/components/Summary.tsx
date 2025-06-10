import { useContext } from "react";
import { FeedBackContext } from "./context/FormContext";

const Summary = () => {
  const { data } = useContext(FeedBackContext);
  return (
    <div className="grid grid-cols-3 m-20 gap-4">
      {data.map((ele, index) => (
        <div
          key={index}
          className="p-2 border-2 border-[#ccc] rounded-xl shadow-2xl p-5"
        >
          <p>
            <b>Name: </b> {ele.name}
          </p>
          <p>
            <b>Email: </b> {ele.email}
          </p>
          <p>
            <b>FeedBack: </b>
            {ele.feedBack}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Summary;
