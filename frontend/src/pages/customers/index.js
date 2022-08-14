import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";

const CustomerList = dynamic(() => import("@container/customer/CustomerList"));

const Customers = () => (
  <>
    <Head>
      <title>Customers | AFI Travel</title>
    </Head>
    <CustomerList />
  </>
);
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
