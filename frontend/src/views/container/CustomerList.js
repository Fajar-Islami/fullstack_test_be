import { Box, Container } from "@mui/material";
import Toolbar from "@components/toolbar";
import { CustomerListResults } from "@components/list-table/customer-list";
import { customers } from "@mocks/customers";

const CustomersList = () => (
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8,
    }}
  >
    <Container maxWidth={false}>
      <Toolbar title="Customer" />
      <Box sx={{ mt: 3 }}>
        <CustomerListResults customers={customers} />
      </Box>
    </Container>
  </Box>
);

export default CustomersList;
