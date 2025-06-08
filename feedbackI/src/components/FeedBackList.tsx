const FeedBackList = ({ feedBack }: { feedBack: any[] }) => {
  return (
    <div>
      <h3>Feedback entries</h3>
      {feedBack.length > 0 ? (
        feedBack.map((ele, index) => (
          <div key={index}>
            <p>{ele.name}</p>
            <p>{ele.email}</p>
          </div>
        ))
      ) : (
        <p>No feedback</p>
      )}
    </div>
  );
};

export default FeedBackList;
