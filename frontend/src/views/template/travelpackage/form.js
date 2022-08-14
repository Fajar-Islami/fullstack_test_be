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

export const TravelPackageForm = ({
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
        description: data.description,
        price: data.price,
        image: data.image,
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
                label="Harga"
                name="price"
                onChange={handleChange}
                value={values.price}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.price && errors.price}
                helperText={touched.price && errors.price}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                multiline
                rows={4}
                fullWidth
                label="Deskripsi"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
                onBlur={handleBlur}
                error={touched.description && errors.description}
                helperText={touched.description && errors.description}
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

TravelPackageForm.propTypes = {
  data: PropTypes.object,
  schema: PropTypes.object,
  buttonText: PropTypes.string,
  handleFormSubmit: PropTypes.func,
  backPath: PropTypes.func,
};
