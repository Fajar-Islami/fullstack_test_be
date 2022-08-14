import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "@components/dashboard-layout";
import { OrdersForm } from "@template/order";
import * as yup from "yup";
import { useRouter } from "next/router";

const AddOrder = () => {
  const router = useRouter();
  const initData = {
    customer_id: "",
    total_price: 0,
    order_detail: "",
  };
  const handleAdd = (values) => {
    console.log("Order Created");
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
          Create Order
        </Typography>
        <OrdersForm
          data={initData}
          handleFormSubmit={handleAdd}
          schema={travelSchema}
          buttonText="Create Order"
          backPath={() => router.push("/orders")}
        />
      </Container>
    </Box>
  );
};

AddOrder.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

const travelSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
  total_price: yup.number().required("required").positive().integer().moreThan(0),
  order_detail: yup.string().required("${path} is required"),
  // image: yup.string().required("${path} is required"),
});

export default AddOrder;
