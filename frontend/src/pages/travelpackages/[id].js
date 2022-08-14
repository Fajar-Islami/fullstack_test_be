import Head from "next/head";
import { DashboardLayout } from "@components/dashboard-layout";
import dynamic from "next/dynamic";
const DetailTravelPacakge = dynamic(() => import("@container/travelpacakge/DetailTravelPacakge"));

const TravelPacakgesDetail = () => (
  <>
    <Head>
      <title>Detail Travel Package | AFI Travel</title>
    </Head>
    <DetailTravelPacakge />
  </>
);

TravelPacakgesDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default TravelPacakgesDetail;
