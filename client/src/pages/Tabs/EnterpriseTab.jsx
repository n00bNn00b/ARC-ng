import React from 'react';

const EnterpriseTab = ({rowData}) => {
    return (
        <div>
            <table className="table z-0 w-full text-center">
            <thead>
          <tr>
           
            <th>Tenant Id</th>
            <th>Tenant Name</th>
            <th>Enterprise Name</th>
            <th>Enterprise Type</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}

        
            <tr key={rowData._id}>
              <td>{rowData.TENANT_ID}</td>
              <td>{rowData.TENANT_NAME}</td>
              <td>{rowData.ENTERPRISE_NAME}</td>
              <td>{rowData.ENTERPRISE_TYPE}</td>
       
            
            </tr>
          
        </tbody>
            </table>
        </div>
    );
};

export default EnterpriseTab;