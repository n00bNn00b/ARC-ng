import React, { useEffect, useState } from 'react';
import TanentTable from './TanentTable';
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteEnterpriseModal from '../EnterPriseSetup/DeleteEnterpriseModal';

const TenantTab = ({onItemClick}) => {
    const [modal, setModal] = useState(null);
    const [deletemodal, setDeleteModal] = useState(null);
    const [tenants, setTenants] = useState([]);
    useEffect(() => {
        const url = "/enterprise";
        axios.get(url).then((res) => {
          setTenants(res.data);
          // console.log(res.data);
        });
      }, [tenants]);
      const deleteHandler = (TENANT_ID) => {
        console.log(TENANT_ID);
        axios.delete(`/enterprise/${TENANT_ID}`).then((res) => {
          if (res.status === 200) {
            const newTenants = tenants.filter(
              (entr) => entr.TENANT_ID !== TENANT_ID
            );
            setTenants([...newTenants]);
            toast.success(res.data.message);
          } else {
            toast.warning(res.data.message);
          }
        });
      };
    return (
        <div className="card  mx-auto my-10 mb-20 bg-base-100 shadow-2xl">
            
            <TanentTable
              onItemClick={ onItemClick}
              tenants = {tenants} 
              modal={modal}
              setModal={setModal}
              deletemodal={deletemodal}
              setDeleteModal={setDeleteModal} 
              deleteHandler ={deleteHandler } />
        
            
      </div>
    );
};

export default TenantTab;