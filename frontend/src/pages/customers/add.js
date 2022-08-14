import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";
const CustomerFormAdd = dynamic(() => import("@container/customer/CustomerAdd"));

const AddCustomer = () => (
  <>
    <Head>
      <title>AddCustomer | Material Kit</title>
    </Head>
    <CustomerFormAdd />
  </>
);

AddCustomer.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddCustomer;
