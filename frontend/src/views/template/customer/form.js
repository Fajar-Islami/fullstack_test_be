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

export const CustomerForm = ({
  data,
  handleFormSubmit,
  schema,
  buttonText,
  backPath,
  ...props
}) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, setValues } = useFormik({
    initialValues: data,
    validationSchema: schema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    if (data) {
      setValues({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
      });
    }
  }, [data, setValues]);

  return (
    <form autoComplete="off" onSubmit={handleSubmit} {...props}>
      <Card>
        <CardHeader subheader="Informasi Customer dapat dirubah" title="Data Customer" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nama"
                name="name"
                onChange={handleChange}
                // required
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
                label="Alamat Email"
                name="email"
                onChange={handleChange}
                // required
                value={values.email}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nomor HP"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.phone && errors.phone}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                multiline
                rows={4}
                fullWidth
                label="Alamat"
                name="address"
                onChange={handleChange}
                // required
                value={values.address}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.address && errors.address}
                helperText={touched.address && errors.address}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Stack direction="row" spacing={2} padding={2} justifyContent="flex-end">
          <Button color="primary" variant="contained" type="submit">
            {buttonText}
          </Button>
          <Button color="primary" variant="contained" onClick={backPath}>
            Kembali
          </Button>
        </Stack>
      </Card>
    </form>
  );
};

CustomerForm.propTypes = {
  data: PropTypes.object,
  schema: PropTypes.object,
  buttonText: PropTypes.string,
  handleFormSubmit: PropTypes.func,
  backPath: PropTypes.func,
};
