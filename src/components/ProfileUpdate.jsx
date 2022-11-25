import React, { useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Divider,
  TextField,
  FilledInput,
  Paper,
  Typography
} from "@material-ui/core";
import useStyles from "../theme";


const ProfileSettings = () => {

    const classes = useStyles();

  const [values, setValues] = useState({
    firstName: "Mathews",
    lastName: "Musukuma",
    email: "sikaili99@gmail.com",
    phone: "0966468776",
    state: "Lusaka",
    country: "Zambia",
    isPublic: "False",
    canHire: "No",
    jobtitle: "Developer",
    name: "JD"
  });

  const handleChange = event => {
    event.persist();

    setValues({
      ...values,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  function PasswordMgmt({ id }) {
    const [currPassword, setCurrPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [correctPassword, setCorrectPassword] = useState(false);
    const [change, setChange] = useState(false);
    const [submittable, setSubmittable] = useState(false);
    const classes = useStyles();
    const correctPW = "password";
  
    function validateNewPassword() {
      var check =
        currPassword === correctPW && newPassword === confirmNewPassword;
      console.log(check);
      setSubmittable(check);
    }
  
    return (
        <CardContent>
          <Grid container direction="column" spacing={2}>
          <Typography variant="h6">Password Mangement</Typography>
          <Grid item md={6} xs={12}>
            <TextField
              label="Current Password"
              variant="outlined"
              type="password"
              fullWidth
              onChange={(e) => setCurrPassword(e.target.value)}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              disabled={currPassword.length == 0}
              label="New Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              disabled={currPassword.length == 0}
              onChange={() => validateNewPassword()}
              label="Confirm New Password"
              variant="outlined"
              type="password"
              fullWidth
            />
          </Grid>
          <Grid container justifyContent="flex-end">
            <Button disabled={submittable} variant="contained" color="primary">
              Update
            </Button>
          </Grid>
        </Grid>
        </CardContent>
    );
  }

  return (
    <Paper className={classes.paper}>
    <Card >
      <form onSubmit={handleSubmit}>
        <CardHeader title="Profile" />
        <Divider />
        <CardContent>
          <Grid container justifyContent="space-between" spacing={2}>
            <Grid item md={6} xs={12}>
              <FilledInput
                fullWidth
                label="Full Name"
                name="name"
                onChange={handleChange}
                required
                type="file"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                onChange={handleChange}
                required
                value={values?.name}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                value={values?.email}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
            <TextField
                fullWidth
                label="Full Name"
                name="name"
                onChange={handleChange}
                required
                value={values?.name}
                variant="outlined"
              />
            </Grid>

            <Grid item md={9} xs={12}>
              <TextField
                fullWidth
                label="Notes"
                name="note"
                onChange={handleChange}
                multiline
                rows="4"
                rowsMax="4"
                value={values?.note}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            className="float-ri"
          >
            Save Changes
          </Button>
        </CardActions>
      </form>
    </Card>
    <PasswordMgmt />
    </Paper>
  );
};
export default ProfileSettings;
