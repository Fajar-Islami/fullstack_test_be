import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";

export const OrdersForm = ({ data, handleFormSubmit, schema, buttonText, backPath, ...props }) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setValues } = useFormik({
    initialValues: data,
    validationSchema: schema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    if (data) {
      setValues({
        customer_id: data.customer_id,
        total_price: data.total_price,
        order_detail: data.order_detail,
      });
    }
  }, [data, setValues]);

  return (
    <form autoComplete="off" onSubmit={handleSubmit} {...props}>
      <Card>
        <CardHeader subheader="Informasi paket travel dapat dirubah" title="Data Customer" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nama"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Order Detail"
                name="order_detail"
                onChange={handleChange}
                required
                value={values.order_detail}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.order_detail && errors.order_detail}
                helperText={touched.order_detail && errors.order_detail}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Total Harga"
                name="total_price"
                onChange={handleChange}
                value={values.total_price}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.total_price && errors.total_price}
                helperText={touched.total_price && errors.total_price}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Stack direction="row" spacing={2} padding={2} justifyContent="flex-end">
          {buttonText != "" && (
            <Button color="primary" variant="contained" type="submit">
              {buttonText}
            </Button>
          )}

          <Button color="primary" variant="contained" onClick={backPath}>
            Kembali
          </Button>
        </Stack>
      </Card>
    </form>
  );
};

OrdersForm.propTypes = {
  data: PropTypes.object,
  schema: PropTypes.object,
  buttonText: PropTypes.string,
  handleFormSubmit: PropTypes.func,
  backPath: PropTypes.func,
};
