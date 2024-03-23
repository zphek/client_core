import Sidebar from "@/components/Sidebar/Sidebar";

function Dashboard() {
    return (<div className="flex justif-around">
    <div className="flex flex-col">
      <Sidebar activeUrl={'perfiles'}/>  
    </div>
    <div className=" bg-blue-500">
      <h2>BUENSAS</h2>
    </div>
  </div>);
}

export default Dashboard;