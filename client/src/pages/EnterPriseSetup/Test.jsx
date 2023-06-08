import React from 'react';
import ManageEnterprise from './ManageEnterprise';

const Test = () => {
    return (
        <div>
    <div className="card  mx-auto my-10 mb-20 bg-base-100 shadow-2xl mt-7">
     
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-1 sm:grid-cols-1  mx-10 pt-10">
        <div className="card shadow-2xl bg-base-100 mt-10 col-span-0 lg:col-span-1 h-min">
            <div className="card-body">
               <form >
                <div className="form-control">
                   <label className="label">
                    <span className="label-text">Tenant Id</span>
                   </label>
                   <input
                    type="number"
                    name="tenantId"
                    placeholder="Tenant Id"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Tenant Name</span>
                  </label>
                  <input
                    type="text"
                    name="tenantName"
                    placeholder="Tenant name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enterprise Name</span>
                  </label>
                  <input
                    type="text"
                    name="enterpriseName"
                    placeholder="Enterprise Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enterprise Type</span>
                  </label>
                  <input
                    type="text"
                    name="enterpriseType"
                    placeholder="Enterprise Type"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
          {/*2nd div */}
          <div className="col-span-0 lg:col-span-2">
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
          {/* <div className="col-span-0 lg:col-span-2">
          <div className=" mt-10 ">
            <table className="min-w-full divide-y divide-gray-200 overflow-x-auto ">
                <thead className="bg-gray-50  ">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field 1
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field 2
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field 3
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field 4
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Field 5
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                    one
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    two
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    three
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    four
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                    five
                    </td>
                </tr>
                </tbody>
            </table>
</div>

          </div> */}
        </div>
      
    </div>
        </div>
    );
};

export default Test;