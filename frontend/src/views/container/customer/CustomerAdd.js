import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "@components/dashboard-layout";
import { CustomerForm } from "@template/customer";
import * as yup from "yup";
import constant from "@common/constant";
import { useRouter } from "next/router";

const CustomerAdd = () => {
  const router = useRouter();
  const initData = {
    name: "",
    email: "",
    phone: "",
    address: "",
  };
  const handleAdd = (values) => {
    console.log("Customer Created");
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
          Add Customer
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

CustomerAdd.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

const addProductSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
  email: yup.string().email("invalid email").required("${path} is required"),
  phone: yup
    .string()
    .required("${path} is required")
    .matches(constant.phoneRegExp, "No Telepon tidak valid"),
  address: yup.string().required("${path} is required"),
});

export default CustomerAdd;
