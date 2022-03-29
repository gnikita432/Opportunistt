import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: "8px",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
    fontSize: "1.7rem",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "280px",
  },
}));
