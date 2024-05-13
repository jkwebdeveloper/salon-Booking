import React from "react";
import Button from "@/components/ui/button";
import { POST } from "@/app/api/post";
import { useSelector } from "react-redux";
import { Error, Spinner } from "@/components";

const EyeModal = ({ hooks, data }) => {
  const vendor = useSelector((state) => state.vendorAuth.vendor);

  const { setEditDialog, setEditCustomer, setViewCustomer, setCustomers } = hooks;
  const { viewCustomer, customers } = data;

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const deleteCustomer = async () => {
    setLoading(true);
    const resp = await POST.request({ url: '/vendor/delete-customer', form: { customers_id: viewCustomer.id }, token: vendor?.api_token });
    setLoading(false);
    if (resp && resp.code == 200) {
      setCustomers(customers.filter(c => c.id !== viewCustomer.id));
      setViewCustomer('');
      setEditDialog(false);
    }
  };

  return (
    <div className="space-y-3">
      <table className="w-full space-y-3 text-sm text-left">
        <tbody className="w-full space-y-3">
          <tr>
            <th scope="row" className="font-medium text-[#676767]">
              Phone :
            </th>
            <td className="">{viewCustomer.phone_number || 'N/A'}</td>
          </tr>
        </tbody>
        <tbody className="space-y-3">
          <tr>
            <th scope="row" className="font-medium text-[#676767]">
              Email:
            </th>
            <td className="">{viewCustomer.email || 'N/A'}</td>
          </tr>
        </tbody>
        <tbody className="w-full space-y-3">
          <tr>
            <th scope="row" className="font-medium text-[#676767]">
              Gender:
            </th>
            <td className="capitalize">{viewCustomer.gender || 'N/A'}</td>
          </tr>
        </tbody>
        <tbody className="space-y-3">
          <tr>
            <th scope="row" className="font-medium text-[#676767]">
              DOB:
            </th>
            <td className="">{viewCustomer.dob || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center gap-3">
        <Button variant="primary" className="" onClick={e => { setEditCustomer(viewCustomer); setViewCustomer('') }} disabled={loading}>
          Edit Details
        </Button>
        <Button variant="danger" className="" onClick={e => deleteCustomer()} disabled={loading}>
          <Spinner
            show={loading}
            width="25"
            height="25"
            text="Delete"
          />
        </Button>
      </div>
      {error && <Error error={error} />}
      <hr />
      <p className="text-xl font-semibold">History</p>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Service
              </th>
              <th scope="col" className="px-6 py-3">
                Employee
              </th>
              <th scope="col" className="px-6 py-3">
                Amount Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 ">
                03/03/2024
              </th>
              <td className="px-6 py-4">Deep Tissue</td>
              <td className="px-6 py-4">Julia</td>
              <td className="px-6 py-4">£60</td>
              <td className="px-4 py-4 text-sm text-white">
                <p className="bg-[#0AADA4] p-2 rounded-full text-center">
                  Complete
                </p>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 ">
                03/03/2024
              </th>
              <td className="px-6 py-4">Deep Tissue</td>
              <td className="px-6 py-4">Julia</td>
              <td className="px-6 py-4">£60</td>
              <td className="px-4 py-4 text-sm text-white">
                <p className="bg-[#0AADA4] p-2 rounded-full text-center">
                  Complete
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EyeModal;
