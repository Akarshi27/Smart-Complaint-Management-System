import RegisterComplaint from "./RegisterComplaint";
import Complaints from "./Complaints";
import ChatBot from "../components/ChatBot";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>
        Smart Complaint Management System
      </h1>

      <div className="dashboardGrid">
        <div className="left">
          <RegisterComplaint />
        </div>

        <div className="right">
          <ChatBot />
          <Complaints />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;