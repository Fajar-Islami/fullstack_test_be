import { Box, Container } from "@mui/material";
import Toolbar from "@components/toolbar";
import { OrdersListResults } from "@template/order";
import { customers } from "@mocks/customers";

const OrderList = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Toolbar title="Order List" route="/orders/add" />
          <Box sx={{ mt: 3 }}>
            <OrdersListResults datas={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OrderList;
