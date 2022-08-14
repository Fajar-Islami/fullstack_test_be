import { Box, Container } from "@mui/material";
import Toolbar from "@components/toolbar";
import { TravelPacakgeListResults, DeleteDialog } from "@template/travelpackage";
import { customers } from "@mocks/customers";
import { useState } from "react";

const TravelPackageList = () => {
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
          <Toolbar title="Travel Package" route="/travelpackages/add" />
          <Box sx={{ mt: 3 }}>
            <TravelPacakgeListResults datas={customers} openDeleteModal={handleOpenDeleteModal} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default TravelPackageList;
