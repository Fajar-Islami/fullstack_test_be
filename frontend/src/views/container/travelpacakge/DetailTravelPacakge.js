import { Box, Container, Typography } from "@mui/material";
import { DashboardLayout } from "@components/dashboard-layout";
import { TravelPackageForm } from "@template/travelpackage";
import * as yup from "yup";
import { useRouter } from "next/router";

const DetailTravelPacakge = () => {
  const router = useRouter();
  const initData = {
    name: "Paketan bali",
    description: "Jalan-jalan kebali",
    price: 1,
    image: "",
  };
  const handleAdd = (values) => {
    console.log("Travel Package Updated");
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
          Update Travel Package
        </Typography>
        <TravelPackageForm
          data={initData}
          handleFormSubmit={handleAdd}
          schema={travelSchema}
          buttonText="Edit Travel Package"
          backPath={() => router.push("/customers")}
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
