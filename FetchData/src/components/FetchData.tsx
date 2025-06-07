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
    <div>
      {data.map((user) => (
        <div key={user.username}>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
          <br />
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
