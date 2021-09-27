import { Box, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    background: "#1520A6",
    height: 48,
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  text: {
    marginLeft: 50,
    fontSize: 14,
  },
  logo: {
    height: 100,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
}));

export default function InfoHeader() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>
        For the best <b>Falcon</b> experience using app on your smartphone
      </Typography>
      <Box style={{ marginLeft: "auto" }}>
        <img
          src="https://www.freepnglogos.com/uploads/app-store-logo-png/available-the-app-store-badge-vector-11.png"
          alt="img"
          className={classes.logo}
        />
        <img
          src="https://www.freepnglogos.com/uploads/google-play-png-logo/get-it-on-google-play-google-play-badge-png-logos-23.png"
          alt="img"
          className={classes.logo}
        />
      </Box>
    </Box>
  );
}
