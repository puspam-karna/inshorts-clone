import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  image: {
    height: 200,
    width: "88%",
    borderRadius: 5,
    objectFit: "cover",
  },
  component: {
    marginBottom: 20,
    boxShadow: "0 2px 5px 0 rgb(0 0 0 /16%),0 2px 10px 0 rgb(0 0 0 /12%)",
  },
  container: {
    padding: 8,
    paddingBottom: "4px !important",
  },
  rightContainer: {
    margin: "5px 0px 0 -25px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      margin: "5px 0",
    },
  },
  title: {
    fontSize: 22,
    lineHeight: "27px",
  },
  author: {
    color: "#808290",
    fontSize: "12px",
    lineHeight: "22px",
  },
  description: {
    lineHeight: "22px",
    marginTop: 3,
    fontSize: 13,
  },
  publisher: {
    fontSize: 12,
    marginTop: "auto",
    "&>*": {
      textDecoration: "none",
      color: "#000",
      fontWeight: 900,
    },
  },
}));

export default function Article({ article }) {
  const classes = useStyles();
  return (
    <Card className={classes.component}>
      <CardContent className={classes.container}>
        <Grid container>
          <Grid item lg={5} md={5} xs={12}>
            <img src={article.url} alt="im" className={classes.image} />
          </Grid>
          <Grid item lg={7} md={7} xs={12} className={classes.rightContainer}>
            <Typography className={classes.title}>{article.title}</Typography>
            <Typography className={classes.author}>
              <b>falcone</b>by{article.author}/
              {new Date(article.timestamp).toDateString()}
            </Typography>
            <Typography className={classes.description}>
              {article.description}
            </Typography>
            <Typography className={classes.publisher}>
              read more at...
              <a href={article.link} target="_blank" rel="noreferrer">
                {article.publisher}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
