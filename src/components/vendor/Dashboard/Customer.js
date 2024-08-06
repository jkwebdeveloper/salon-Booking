import Button from '@/components/ui/button';
import React, { useCallback, useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa6';
import { BsPencilFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import CustomerModal from './Modal/CustomerModal';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from '@/components/ui/dialog';
import EditCustomerModal from './Modal/EditCustomerModal';
import EyeModal from './Modal/EyeModal';
import { GET } from '@/app/api/get';
import { Error, PageLoader, Spinner } from '@/components';
import { v4 } from 'uuid';
import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import { POST } from '@/app/api/post';

const Customer = () => {
    const vendor = useSelector(state => state.vendorAuth.vendor);
    const [addCustomer, setAddCustomer] = useState(false);
    const [editDialog, setEditDialog] = useState(false);
    const [editCustomer, setEditCustomer] = useState('');
    const [viewCustomer, setViewCustomer] = useState('');
    const [customers, setCustomers] = useState('');
    const [loading, setLoading] = useState(false);
    const [importExport, setImportExport] = useState({
        export: false,
        import: false,
    });
    const [selectedFile, setSelectedFile] = useState({ file: null });
    const [importUser, setImportUser] = useState(false);
    const [formState, setFormState] = React.useState({
        loading: false,
        error: '',
        success: '',
    });

    const getCustomers = useCallback(async () => {
        setLoading(true);
        const resp = await GET.request({
            url: '/vendor/get-all-customer',
            token: vendor?.api_token,
        });
        setLoading(false);
        if (resp && resp.code == 200) {
            setCustomers(resp.data);
        }
    }, []);

    const exportCustomers = useCallback(async e => {
        setImportExport({ ...importExport, export: true });
        const resp = await GET.request({
            url: '/vendor/export-customer',
            token: vendor?.api_token,
        });
        setImportExport({ ...importExport, export: false });
        if (resp && resp.code == 200 && resp?.data?.file_path) {
            window.open(resp?.data?.file_path, '_blank');
        }
    }, []);

    const importCustomer = async e => {
        const resp = await POST.request({
            url: '/vendor/import-customer',
            token: vendor?.api_token,
            header: {
                'Content-Type': 'multipart/form-data',
            },
            form: { file: selectedFile },
            rowdata: true,
            formState,
            setFormState,
        });
        if (resp && resp.code == 200 && resp?.data?.file_path) {
        }
    };
    console.log(selectedFile);
    const handleFileChange = e => {
        const allowedFiles = ['xls', 'xlsx', 'csv'];
        if (!allowedFiles.includes(e.target.files[0].name.split('.').pop())) {
            return;
        }
        setSelectedFile(e.target.files[0]);
    };

    useEffect(() => {
        getCustomers();
    }, []);
    return (
        <div className="space-y-4">
            <div className="flex flex-col justify-between md:space-y-3 md:items-center md:flex-row">
                <p className="text-2xl font-semibold">Customers</p>
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <Dialog open={addCustomer}>
                        <DialogTrigger
                            onClick={e => setAddCustomer(true)}
                            className="flex items-center justify-center w-full h-8 px-6 py-5 text-sm font-medium text-center text-white uppercase transition rounded-full focus:outline-none bg-primary hover:bg-primary-hover active:scale-90"
                        >
                            + Add New
                        </DialogTrigger>
                        <DialogContent
                            close={setAddCustomer}
                            className="sm:max-w-[550px]"
                        >
                            <DialogTitle>Add Customer</DialogTitle>
                            <CustomerModal
                                setAddCustomer={setAddCustomer}
                                setCustomers={setCustomers}
                                customers={customers}
                            />
                        </DialogContent>
                    </Dialog>
                    <Dialog open={importUser}>
                        <DialogContent
                            close={e => {
                                setImportUser(false);
                                setSelectedFile(null);
                                setFormState({
                                    loading: false,
                                    error: '',
                                    success: '',
                                });
                            }}
                            className="sm:max-w-[300px] p-3"
                        >
                            <DialogTitle className="mt-0.5">
                                Select File
                            </DialogTitle>
                            <div className="space-y-2">
                                {(selectedFile && (
                                    <div className="mx-auto mb-3 space-y-2 text-center">
                                        <div className="relative w-[150px] h-[150px] mx-auto">
                                            <Image
                                                src="/static/images/excel.png"
                                                width="150"
                                                height="150"
                                                alt="Excel File"
                                                className="p-10 w-full h-full mx-auto shadow-sm aspect-square bg-zinc-50 border-[1px] border-neutral-300 rounded-xl"
                                            />
                                            <IoIosCloseCircle
                                                className="absolute text-2xl cursor-pointer top-1 right-1 text-primary"
                                                onClick={e =>
                                                    setSelectedFile(null)
                                                }
                                            />
                                        </div>
                                        <p className="mb-2 text-sm text-gray-500 capitalize">
                                            {selectedFile.name}
                                        </p>
                                    </div>
                                )) || (
                                    <div className="relative flex items-center justify-center min-h-[150px] border-neutral-300 shadow-sm border-[1px] rounded-md flex-item-center">
                                        <input
                                            type="file"
                                            className="absolute inset-0 w-full opacity-0 cursor-pointer"
                                            accept=".xls,.xlsx,.csv"
                                            onChange={e => {
                                                handleFileChange(e);
                                            }}
                                        />
                                        <div className="space-y-1 text-center">
                                            <p className="text-md text-primary">
                                                Select File To Import
                                            </p>
                                            <p className="text-sm text-neutral-400">
                                                Supported File Format .xls,
                                                xlsx, csv
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="w-full py-2 md:w-full"
                                    onClick={e => importCustomer(e)}
                                    disabled={formState?.loading}
                                >
                                    <Spinner
                                        show={formState?.loading}
                                        width="25"
                                        height="25"
                                        text="Upload"
                                    />
                                </Button>
                                {formState?.error && (
                                    <Error error={formState?.error} />
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Button
                        variant="secondary"
                        type="button"
                        onClick={e => exportCustomers(e)}
                        disabled={importExport.export}
                    >
                        <Spinner
                            show={importExport.export}
                            width="25"
                            height="25"
                            text="Export"
                        />
                    </Button>
                    <Button
                        variant="outline"
                        onClick={e => {
                            setSelectedFile(null);
                            setFormState({
                                loading: false,
                                error: '',
                                success: '',
                            });
                            setImportUser(true);
                        }}
                    >
                        Import
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg">
                {(loading && <PageLoader />) ||
                    (customers?.length == 0 && (
                        <p className="px-2 py-10 text-center">
                            No customers found
                        </p>
                    )) || (
                        <table className="min-w-full rounded-lg font-[sans-serif]">
                            <thead className="border-b-2 whitespace-nowrap">
                                <tr>
                                    <th
                                        className="w-8 pl-6"
                                        onClick={e => {
                                            const checked = e.target
                                                .closest('th')
                                                .querySelector('input').checked;
                                            e.target
                                                .closest('th')
                                                .querySelector(
                                                    'input'
                                                ).checked = !checked;
                                            const allCheckboxes =
                                                document.querySelectorAll(
                                                    'input[type="checkbox"]'
                                                );
                                            allCheckboxes.forEach(checkbox => {
                                                checkbox.checked = !checked;
                                            });
                                        }}
                                    >
                                        <input
                                            id="checkbox"
                                            type="checkbox"
                                            className="hidden peer"
                                        />
                                        <label
                                            htmlFor="checkbox"
                                            className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-primary_color border border-gray-400 rounded overflow-hidden"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-full fill-white"
                                                viewBox="0 0 520 520"
                                            >
                                                <path
                                                    d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                    data-name="7-Check"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </label>
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        User name
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Phone
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Booking
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Last visit
                                    </th>
                                    <th className="px-6 py-3 text-sm font-semibold text-left">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="border-b-2 whitespace-nowrap">
                                {customers?.length > 0 &&
                                    customers?.map(customer => {
                                        return (
                                            <tr
                                                className=""
                                                key={v4()}
                                                onClick={e => {
                                                    const checked = e.target
                                                        .closest('tr')
                                                        .querySelector(
                                                            'input'
                                                        ).checked;
                                                    e.target
                                                        .closest('tr')
                                                        .querySelector(
                                                            'input'
                                                        ).checked = !checked;
                                                }}
                                            >
                                                <td className="w-8 pl-6">
                                                    <input
                                                        id={customer.id}
                                                        type="checkbox"
                                                        className="hidden peer"
                                                    />
                                                    <label
                                                        htmlFor={customer.id}
                                                        className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-primary_color border border-gray-400 rounded overflow-hidden"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-full fill-white"
                                                            viewBox="0 0 520 520"
                                                        >
                                                            <path
                                                                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                                data-name="7-Check"
                                                                data-original="#000000"
                                                            />
                                                        </svg>
                                                    </label>
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    {customer.first_name}{' '}
                                                    {customer.last_name}
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    {customer?.email || '-'}
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    {customer?.phone_number ||
                                                        '-'}
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    {customer?.booking || '-'}
                                                </td>
                                                <td className="px-6 py-4 text-sm">
                                                    {customer?.last_visit ||
                                                        '-'}
                                                </td>
                                                <td className="flex gap-4 px-6 py-4">
                                                    <Button
                                                        variant="icon"
                                                        size="icon"
                                                        className="px-0"
                                                        onClick={e => {
                                                            setEditDialog(true);
                                                            setViewCustomer(
                                                                customer
                                                            );
                                                        }}
                                                    >
                                                        <FaRegEye className="text-[#8E8EA1] text-xl" />
                                                    </Button>
                                                    <Button
                                                        variant="icon"
                                                        size="icon"
                                                        className="px-0"
                                                        onClick={e => {
                                                            setEditDialog(true);
                                                            setEditCustomer(
                                                                customer
                                                            );
                                                        }}
                                                    >
                                                        <BsPencilFill className="text-[#EA2C6D] text-xl" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    )}
                <Dialog open={editDialog}>
                    <DialogContent
                        close={e => {
                            setEditDialog(false);
                            setEditCustomer('');
                            setViewCustomer('');
                        }}
                        className="sm:max-w-[800px]"
                    >
                        {(editCustomer && (
                            <DialogTitle>Edit Customer</DialogTitle>
                        )) || (
                            <>
                                <DialogTitle>John Adam</DialogTitle>
                                <hr />
                            </>
                        )}
                        {(editCustomer && (
                            <EditCustomerModal
                                setEditDialog={setEditDialog}
                                setEditCustomer={setEditCustomer}
                                editCustomer={editCustomer}
                                setCustomers={setCustomers}
                                customers={customers}
                            />
                        )) || (
                            <EyeModal
                                hooks={{
                                    setEditDialog,
                                    setViewCustomer,
                                    setCustomers,
                                    setEditCustomer,
                                }}
                                data={{ viewCustomer, customers }}
                            />
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default Customer;
