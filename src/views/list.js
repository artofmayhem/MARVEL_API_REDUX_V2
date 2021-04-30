import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
  type: {
    fontSize: "3vh",
    margin: "3vh 0",
  },
  h6: {
    fontSize: ".7rem",
  },
  p: {
    fontSize: "1.5vh",
    color: "white !important",
    marginTop: "1vh",
  },
  cards: {
    backgroundColor: "#444",
    opacity: "0.6",
  },
});

const List = (props) => {
  const classes = useStyles();

  const data = props.fetchedItem;
  console.log("received props from List renderer", data);

  console.log(props);

  if (props.loading) {
    return (
      <>
        <LinearProgress style={{ alignSelf: "center" }} />
      </>
    );
  }
  return (
    <div className={"d-flex justify-content-center flex-row flex-wrap"}>
      {data &&
        data.map((item, idx) => {
          return (
            <Card className={"cards"} key={idx}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`${data[idx].thumbnail.path}.${data[idx].thumbnail.extension}`}
                  title={data[idx.name]}
                />
                <CardContent className={classes.cards}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    className={classes.type}
                  >
                    {data[idx].name}
                  </Typography>
                  <h6 className={classes.h6}>
                    last seen:
                    <br />
                    <br />
                    {data[idx].modified}
                  </h6>
                  <p className={classes.p}>{data[idx].description}</p>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    fetchedItem: state.fetchedItem,
  };
};

const mapDispatchToProps = fetchData;

export default connect(mapStateToProps, mapDispatchToProps)(List);
