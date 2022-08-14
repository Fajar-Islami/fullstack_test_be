import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";

const ListOrder = dynamic(() => import("@container/order/ListOrder"));

const OrderList = () => (
  <>
    <Head>
      <title>Detail Travel Package | AFI Travel</title>
    </Head>
    <ListOrder />
  </>
);
OrderList.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default OrderList;
