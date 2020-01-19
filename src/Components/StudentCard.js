import React, { Fragment, useState } from "react";
import { Fab } from "@material-ui/core";
import { Favorite, Cancel } from "@material-ui/icons";
import "../Screens/FindStudents.css";
import Typography from "@material-ui/core/Typography";

const StudentCard = props => {
  const { image, handleReject, handleLike } = props;
  const [touchedButton, setTouchedButton] = useState();

  const onLike = () => {
    setTouchedButton("like");
    setTimeout(() => {
      setTouchedButton("");
      handleLike();
    }, 500);
  };

  const onReject = () => {
    setTouchedButton("reject");
    setTimeout(() => {
      setTouchedButton("");
      handleReject();
    }, 500);
  };

  return (
    <Fragment>
      {touchedButton && (
        <div
          style={{
            zIndex: 1,
            marginTop: 42,
            marginLeft: 42,
            position: "absolute"
          }}
        >
          <div
            style={{
              border: "2px solid",
              borderColor: touchedButton === "like" ? "#3f51b5" : "#f50057",
              padding: 4
            }}
          >
            <Typography
              color={touchedButton === "like" ? "#3f51b5" : "#f50057"}
              style={{ fontWeight: "bold" }}
            >
              {touchedButton === "like" ? "Like!" : "Próximo"}
            </Typography>
          </div>
        </div>
      )}

      <div
        style={{
          margin: 8,
          borderRadius: 16,
          display: "flex",
          flex: 1,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        {props.children}
      </div>

      <div
        style={{
          zIndex: 1,
          marginTop: -42,
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "5%",
          marginRight: "5%"
        }}
      >
        {touchedButton !== "like" ? (
          <Fab onClick={onReject} color="secondary" aria-label="Cancel">
            <Cancel />
          </Fab>
        ) : (
          <div />
        )}
        {touchedButton !== "reject" ? (
          <Fab onClick={onLike} color="primary" aria-label="favorite">
            <Favorite />
          </Fab>
        ) : (
          <div />
        )}
      </div>
    </Fragment>
  );
};
export default StudentCard;
