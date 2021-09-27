import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box, makeStyles } from "@material-ui/core";
import Articles from "./components/Articles";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 30,
    width: "59%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <>
        <Header />
        <Box className={classes.container}>
          <InfoHeader />
          <Articles />
        </Box>
      </>
    </div>
  );
}

export default App;
