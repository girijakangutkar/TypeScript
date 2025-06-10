const FeedBackList = ({ feedBack }: { feedBack: any[] }) => {
  return (
    <div className="grid grid-cols-3 justify-center w-full items-start content-center self-center shadow-lg p-10 rounded-xl border-gray-300">
      {feedBack.length > 0 ? (
        feedBack.map((ele, index) => (
          <div
            key={index}
            className="m-5 bg-gray-200 p-4 text-justify border-#ccc rounded-xl shadow-xl"
          >
            <p>
              <b>Name: </b>
              {ele.name}
            </p>
            <p>
              <b>Email: </b>
              {ele.email}
            </p>
            <p>
              <b>Star: </b>
              {ele.rating}
            </p>
            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-black">
              {ele.name} says, "{ele.feedBack}"
            </blockquote>
          </div>
        ))
      ) : (
        <p>No feedback</p>
      )}
    </div>
  );
};

export default FeedBackList;
