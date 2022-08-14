import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";
const AddTravelPackage = dynamic(() => import("@container/travelpacakge/AddTravelPackage"));

const TravelPacakgeAdd = () => (
  <>
    <Head>
      <title>Add Travel Package | AFI Travel</title>
    </Head>
    <AddTravelPackage />
  </>
);

TravelPacakgeAdd.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default TravelPacakgeAdd;
