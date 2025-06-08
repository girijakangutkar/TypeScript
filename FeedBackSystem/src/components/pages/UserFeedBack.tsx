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
    <div className="w-full flex justify-center mt-[5%]">
      {/* Scrollable wrapper */}
      <div className="overflow-auto max-w-4xl w-full border border-gray-300 rounded-md shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Sr No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">FeedBack</th>
              <th className="px-4 py-2">Food Rating</th>
              <th className="px-4 py-2">Culture Rate</th>
              <th className="px-4 py-2">Service Rate</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((feed, index) => (
              <tr key={feed.id} className="border-b border-gray-300">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{feed.name}</td>
                <td className="px-4 py-2">{feed.email}</td>
                <td className="px-4 py-2">{feed.phoneNumber}</td>
                <td className="px-4 py-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        Show Feedback
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          {feed.message.length > 0 ? (
                            <p className="text-green-600">{feed.message}</p>
                          ) : (
                            <p className="text-red-600">No feedback</p>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>
                <td className="px-4 py-2 text-center">{feed.foodRate}</td>
                <td className="px-4 py-2 text-center">{feed.serviceRate}</td>
                <td className="px-4 py-2 text-center">{feed.cultureRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFeedBack;
