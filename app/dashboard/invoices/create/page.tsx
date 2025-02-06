import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";
import React from "react";

const Page = async () => {
  const costumers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Invoices",
            href: "Create Invoices",
          },
          {
            label: "Create Invoices",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={costumers} />
    </main>
  );
};

export default Page;
