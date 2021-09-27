import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
const useStyles = makeStyles({
  header: {
    background: "#fff",
    height: 70,
  },
  logo: {
    height: 69,
    width: 250,
    margin: "auto",
  },
  menu: {
    color: "blue",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Menu className={classes.menu} />
        <img
          src="https://i1.wp.com/static.free-logo-design.net/uploads/2020/06/free-falcon-logo-design.jpg"
          alt="logo"
          className={classes.logo}
        />
      </Toolbar>
    </AppBar>
  );
}
