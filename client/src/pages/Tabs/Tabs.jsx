import React, { useState } from 'react';
import "./Tabs.css";
import TenantTab from './TenantTab';
import { Link } from 'react-router-dom';
import EnterpriseTab from './EnterpriseTab';
const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);
    const [selectedRowData, setSelectedRowData] = useState('');

    const handleItemClick = (data) => {
      setSelectedRowData(data);
    };

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return (
        <div className="px-5 mt-20">
     <Link to="/addTenant" className="btn btn-primary flex mx-auto text-white w-48  my-9" >
        Add New Tenant
      </Link>
        <div className="bloc-tabs ">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Tenants
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
           Enterprise
          </button>
         
        </div>
  
        <div className="content-tabs p-2 mt-2">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Manage Tanents</h2>
            <hr />
            <div>
             <TenantTab  onItemClick={handleItemClick} />
            </div>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Enterprise Table</h2>
            <hr />
            <p>
              <EnterpriseTab rowData={selectedRowData}/>
            </p>
          </div>
  
         
        </div>
      </div>
    );
};

export default Tabs;