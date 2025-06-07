import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../lib/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../lib/ui/popover";

export type feedBack = {
  id: string;
  name: string;
  phoneNumber: string;
  message: string;
  email: string;
  foodRate: number;
  serviceRate: number;
  cultureRate: number;
};

const UserFeedBack = () => {
  const [data, setData] = useState<feedBack[]>([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const URI = import.meta.env.VITE_URI;

  async function fetchFeedback() {
    try {
      const res = await axios.get<feedBack[]>(`${URI}`);
      const info = Object.values(res.data);
      setData(info);
    } catch (err) {
      console.error("Error fetching feedback:", err);
    }
  }

  return (
    <div className="feedbackInfo">
      <table className="formTable">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>FeedBack</th>
            <th>Food Rating</th>
            <th>Culture Rate</th>
            <th>Service Rate</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((feed, index) => (
              <tr key={feed.id}>
                <td>{index + 1}</td>
                <td>{feed.name}</td>
                <td>{feed.email}</td>
                <td>{feed.phoneNumber}</td>
                {/* <td>{feed.message}</td> */}
                <td>
                  {" "}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        Show feedBack
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          {feed.message.length > 0 ? (
                            <p style={{ color: "green" }}>{feed.message}</p>
                          ) : (
                            <p style={{ color: "red" }}>No feedback</p>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>
                <td>{feed.foodRate}</td>
                <td>{feed.cultureRate}</td>
                <td>{feed.serviceRate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserFeedBack;
