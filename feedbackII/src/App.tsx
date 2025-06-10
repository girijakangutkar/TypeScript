import { Route, Routes } from "react-router-dom";
import FeedBackForm from "./components/FeedBackForm";
import Summary from "./components/Summary";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedBackForm />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default App;
