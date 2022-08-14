import Head from "next/head";
import { Box, Container } from "@mui/material";
import { CustomerListResults } from "@component/customer/customer-list-results";
import { CustomerListToolbar } from "@component/customer/customer-list-toolbar";
import { DashboardLayout } from "@component/dashboard-layout";
import { customers } from "@mocks/customers";

const TravelPackages = () => (
  <>
    <Head>
      <title>Travel Package | AFI Travel</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);
TravelPackages.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default TravelPackages;
