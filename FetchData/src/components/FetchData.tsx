import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetchIt();
  }, []);

  async function fetchIt() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // const data = await response.json();
      const users: User[] = await response.json();
      setData(users);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="userDiv">
      {data.map((user) => (
        <div key={user.username} className="userData">
          <p>
            <h1>{user.username}</h1>
            <p style={{ color: "gray" }}>{user.email}</p>
          </p>
          <b style={{ color: "#f7f7f7" }}>Address:</b>
          <p>
            {user.address.street}, {user.address.city}, {user.address.zipcode}.
          </p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;

export type User = {
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
};
