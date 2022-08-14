import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";

const TravelPackageList = dynamic(() => import("@container/travelpacakge/ListTravelPackage"));

const Customers = () => (
  <>
    <Head>
      <title>Detail Travel Package | AFI Travel</title>
    </Head>
    <TravelPackageList />
  </>
);
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
