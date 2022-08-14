import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Delete as DeleteIcon, RemoveRedEye as RemoveRedEyeIcon } from "@mui/icons-material";
import { useRouter } from "next/router";

export const TravelPacakgeListResults = ({ datas, openDeleteModal, ...rest }) => {
  const router = useRouter();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Harga</TableCell>
                <TableCell>Tanggal Terdaftaar</TableCell>
                <TableCell align="center">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.slice(0, limit).map((data) => (
                <TableRow hover key={data.id}>
                  <TableCell>
                    <Typography color="textPrimary" variant="body1">
                      {data.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{format(data.createdAt, "dd/MM/yyyy")}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2} p={1} justifyContent="center">
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={<RemoveRedEyeIcon />}
                        onClick={() => router.push("/travelpackages/1")}
                      >
                        Lihat
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={openDeleteModal}
                      >
                        Hapus
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={datas.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

TravelPacakgeListResults.propTypes = {
  datas: PropTypes.array.isRequired,
  openDeleteModal: PropTypes.func.isRequired,
};
