import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "@components/dashboard-layout";
import { CustomerForm } from "@template/customer";
import * as yup from "yup";
import constant from "@common/constant";
import { useRouter } from "next/router";

const CustomerDetail = () => {
  const router = useRouter();
  const initData = {
    name: "Fajar",
    email: "fajar@mail.com",
    phone: "08914222",
    address: "Jakarta",
  };
  const handleAdd = (values) => {
    console.log("Customer Updated");
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
          Update Customer
        </Typography>
        <CustomerForm
          data={initData}
          handleFormSubmit={handleAdd}
          schema={addProductSchema}
          buttonText="Tambah Customer"
          backPath={() => router.push("/customers")}
        />
      </Container>
    </Box>
  );
};

CustomerDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

const addProductSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
  email: yup.string().email("invalid email").required("${path} is required"),
  phone: yup
    .string()
    .required("${path} is required")
    .matches(constant.phoneRegExp, "No Telepon tidak valid"),
  address: yup.string().required("${path} is required"),
});

export default CustomerDetail;
