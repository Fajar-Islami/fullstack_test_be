import { Box, Container } from "@mui/material";
import Toolbar from "@components/toolbar";
import { CustomerListResults, DeleteDialog } from "@template/customer";
import { customers } from "@mocks/customers";
import { useState } from "react";

const ListCustomer = () => {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleDeleteCustomer = () => {
    console.log("Customer deleted");
    setDeleteModal(false);
  };

  return (
    <>
      <DeleteDialog
        handleClose={handleCloseDeleteModal}
        handleOpen={handleOpenDeleteModal}
        handleAction={handleDeleteCustomer}
        deleteModalOpen={deleteModal}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Toolbar title="Customer" route="/customers/add" />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults customers={customers} openDeleteModal={handleOpenDeleteModal} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ListCustomer;
