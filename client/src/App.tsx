import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HallsView from "./components/HallsView";
import Hallinfo from "./components/Hallinfo";
import HallCustomer from "./components/HallCustomer";

const Index = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<HallsView />}></Route>
          <Route path="/Hallinfo/:id" element={<Hallinfo />}></Route>
          <Route path="/bookings" element={<HallCustomer />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Index;
