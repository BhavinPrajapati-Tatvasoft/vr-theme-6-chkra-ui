import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <section className="main-content">Dashborad Content</section>
        <Button>lorem</Button>
      </div>
    </>
  );
};
export default Dashboard;
