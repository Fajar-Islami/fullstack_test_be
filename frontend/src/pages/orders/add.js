import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";
const AddOrder = dynamic(() => import("@container/order/AddOrder"));

const CreateOrder = () => (
  <>
    <Head>
      <title>Create Order | AFI Travel</title>
    </Head>
    <AddOrder />
  </>
);

CreateOrder.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CreateOrder;
