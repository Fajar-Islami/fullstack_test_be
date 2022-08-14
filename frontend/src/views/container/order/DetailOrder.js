import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "@components/dashboard-layout";
import { OrdersForm } from "@template/order";
import * as yup from "yup";
import { useRouter } from "next/router";

const DetailTravelPacakge = () => {
  const router = useRouter();
  const initData = {
    customer_id: "1",
    total_price: 0,
    order_detail: "1111",
  };
  const handleAdd = (values) => {
    console.log("Orders Updated");
    console.log(values);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          View Order Detail
        </Typography>
        <OrdersForm
          disabled={true}
          data={initData}
          handleFormSubmit={handleAdd}
          schema={travelSchema}
          buttonText=""
          backPath={() => router.push("/orders")}
        />
      </Container>
    </Box>
  );
};

DetailTravelPacakge.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

const travelSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
  description: yup.string().required("${path} is required"),
  price: yup.number().required("required").positive().integer().moreThan(0),
  // image: yup.string().required("${path} is required"),
});
export default DetailTravelPacakge;
