import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";
const CustomerFormDetail = dynamic(() => import("@container/customer/CustomerDetail"));

const CustomerDetail = () => (
  <>
    <Head>
      <title>Customer | Material Kit</title>
    </Head>
    <CustomerFormDetail />
  </>
);

CustomerDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CustomerDetail;
