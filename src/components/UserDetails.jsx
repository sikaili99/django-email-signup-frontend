import { useState } from "react";

import {
  TextField,
  Grid,
  Typography,
  Button,
  Paper
} from "@material-ui/core";
import useStyles from "../theme";

var sampleAccount = {
  image: "https://i.kym-cdn.com/entries/icons/original/000/031/727/cover10.jpg",
  name: "Juanaton Gongsaulress",
  email: "6ang_6ang70@hotmail.com",
  title: "El Jefe",
  role: ["Administrator"],
  password: "password"
};



function Account({ id }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={6}>
        <Grid item xs={12} container justifyContent="flex-start">
          <Typography variant="h4">Account Info</Typography>
        </Grid>
        <Grid item xs={12} container>
          <Grid item container direction="column" align="start" spacing={1}>
            <Typography gutterBottom variant="h5">
              {id.name}
            </Typography>
            <Typography variant="body1" gutterBottom color="textSecondary">
              Title: {id.title}
            </Typography>
            {id.role.length == 1 ? (
              <Typography variant="body2" color="textSecondary">
                Role: {id.role[0]}
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary">
                Roles: {id.role.toString()}
              </Typography>
            )}
            <Typography variant="body2" color="textSecondary">
              Email: {id.email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

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
    var check = currPassword === correctPW && newPassword === confirmNewPassword;
    console.log(check);
    setSubmittable(check);
  }

  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" spacing={8}>
        <Grid container justifyContent="flex-start">
          <Typography variant="h4">Password Mangement</Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Current Password"
            variant="outlined"
            type="password"
            fullWidth
            onChange={(e) => setCurrPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            disabled={currPassword.length == 0}
            label="New Password"
            variant="outlined"
            type="password"
            fullWidth
          />
        </Grid>
        <Grid item>
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
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function UserDetails({ id = sampleAccount }) {
  return (
    <Grid container direction="column" justifyContent="center" spacing={5}>
      <Grid item>
        <Account id={id} />
      </Grid>
    </Grid>
  );
}
