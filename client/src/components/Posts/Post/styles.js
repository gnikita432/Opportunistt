import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px",
    height: "100%",
    position: "relative",
    padding: "15px",
  },
  grid1: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid2: {
    display: "flex",
    alignItems: "center",
  },
  cardActions: {
    padding: "20px 0px 0px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    margin: "0px 20px 0px 0px",
  },
});
