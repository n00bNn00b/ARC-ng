import { useState } from "react";
import TenantTab from "../Tabs/TenantTab";
import EnterpriseTab from "../Tabs/EnterpriseTab";
import { Link } from "react-router-dom";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);
  const [selectedRowData, setSelectedRowData] = useState("");

  const handleItemClick = (data) => {
    setSelectedRowData(data);
  };

  return (
    <div>
      <div className="container mx-auto mt-20">
      <Link to="/addTenant" className="btn btn-primary flex mx-auto text-white w-48  my-9" >
        Add New Tenant
      </Link>
        <div className="flex flex-col  justify-center ">
          <ul className="flex space-x-2">
            <li
              onClick={() => setOpenTab(1)}
              className={` ${
                openTab === 1 ? "bg-purple-600 text-blue-500" : ""
              } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
            >
             Tenats
            </li>
            <li
              onClick={() => setOpenTab(2)}
              className={` ${
                openTab === 2 ? "bg-purple-600 text-blue-500" : ""
              } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
            >
             Enterprise
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {" "}
              <TenantTab onItemClick={handleItemClick} />
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              <EnterpriseTab rowData={selectedRowData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
