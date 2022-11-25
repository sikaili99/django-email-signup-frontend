import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 3
    },
    paper: {
      padding: theme.spacing(4),
      margin: "auto",
      width: "50%",
    },
    image: {
      width: 150,
      height: 150
    },
    img: {
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%"
    }
  }));

  export default useStyles;
  