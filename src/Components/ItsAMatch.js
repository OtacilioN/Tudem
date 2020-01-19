import React from "react";
import Typography from "@material-ui/core/Typography";
import "../Screens/FindStudents.css";

const ItsAMatch = props => {
  return (
    <div className="Find-text-container">
      <Typography className="Find-text-style" color="primary">
        <span role="img" aria-label="Cone de Festa">
          🎉
        </span>{" "}
        Parabéns, você conseguiu um match!{" "}
        <span role="img" aria-label="Cone de Festa">
          🎉
        </span>{" "}
        Acesse agora a aba de Matches e encontre o contato deste estudante para
        que vocês possam juntos nunca parar de aprender!
      </Typography>
    </div>
  );
};
export default ItsAMatch;
