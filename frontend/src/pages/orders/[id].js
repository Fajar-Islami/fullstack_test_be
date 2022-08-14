import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";
const DetailOrder = dynamic(() => import("@container/order/DetailOrder"));

const OrderDetail = () => (
  <>
    <Head>
      <title>Order Detail | AFI Travel</title>
    </Head>
    <DetailOrder />
  </>
);

OrderDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default OrderDetail;
