import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";
const CustomerFormAdd = dynamic(() => import("@container/customer/AddCustomer"));

const AddCustomer = () => (
  <>
    <Head>
      <title>Add Customer | AFI Travel</title>
    </Head>
    <CustomerFormAdd />
  </>
);

AddCustomer.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddCustomer;
