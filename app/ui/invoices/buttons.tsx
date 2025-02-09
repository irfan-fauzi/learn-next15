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

interface Invoice {
  id: string;
  status: string;
  name: string;
  amount: number;
}

export function DeleteInvoice({ invoice }: { invoice: Invoice }) {
  const { id } = invoice;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='rounded-md border p-2 hover:bg-gray-100'
      >
        <span className='sr-only'>Delete</span>
        <TrashIcon className='w-5' />
      </button>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-lg font-medium mb-4'>Delete Invoice</h2>
            <div className='mb-4 bg-green-200 p-2 rounded-lg border border-green-300'>
              <p className='mb-1 font-semibold'>{invoice.name}</p>
              <p className='mb-1'>{invoice.amount}</p>
              <p className='mb-1'>{invoice.status}</p>
            </div>
            <p>Are you sure you want to delete this invoice?</p>
            <div className='mt-6 flex justify-end gap-4'>
              <button
                onClick={() => setIsOpen(false)}
                className='flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteInvoice(id);
                  setIsOpen(false);
                }}
                className='flex h-10 items-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
