"use client";
import { deleteInvoice } from "@/app/lib/actions";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export function CreateInvoice() {
  return (
    <Link
      href='/dashboard/invoices/create'
      className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
    >
      <span className='hidden md:block'>Create Invoice</span>{" "}
      <PlusIcon className='h-5 md:ml-4' />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className='rounded-md border p-2 hover:bg-gray-100'
    >
      <PencilIcon className='w-5' />
    </Link>
  );
}

type Invoice = {
  id: string;
  name: string;
  customer_id: string;
  amount: number;
  status: string;
  date: string;
};
export function DeleteInvoice({ invoice }: { invoice: Invoice }) {
  const [isOpen, setIsOpen] = useState(false);
  const deleteInvoiceWithId = async () => {
    await deleteInvoice(invoice.id);
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='rounded-md border p-2 hover:bg-gray-100'
      >
        <span className='sr-only'>Delete</span>
        <TrashIcon className='w-4' />
      </button>
      {isOpen && (
        <div className='fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-4 rounded-lg fixed z-50'>
            <h2 className='text-lg font-semibold'>
              You want to delete this invoice?
            </h2>
            <div className="flex gap-2 mt-4 flex-col bg-green-200 p-3 rounded-lg">
              <p>Name: {invoice.name}</p>
              <p>Amount: $.{invoice.amount}</p>
              <p>Status: <span className="bg-green-500 text-white px-[5px] py-[2px] text-xs rounded-md">{invoice.status}</span></p>
            </div>
            <div className='flex justify-end gap-4 mt-4'>
              <button
                onClick={() => setIsOpen(false)}
                className='rounded-md border p-2 hover:bg-gray-100'
              >
                Cancel
              </button>
              <form action={deleteInvoiceWithId}>
                <button
                  type='submit'
                  className='rounded-md border p-2 bg-red-500 text-white'
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
