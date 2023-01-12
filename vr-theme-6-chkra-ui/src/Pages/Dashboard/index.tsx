import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <section className="main-content">Dashborad Content</section>
      </div>
    </>
  );
};
export default Dashboard;
