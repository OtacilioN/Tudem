import React from "react";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./Profile.css";
import axios from "axios";

const Profile = props => {
  const [gitHubUser, setGitHubUser] = React.useState("");
  const [name, setName] = React.useState("");
  const [site, setSite] = React.useState("");
  const [bio, setBio] = React.useState("");

  const handleGitHubUserChange = event => {
    setGitHubUser(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSiteChange = event => {
    setSite(event.target.value);
  };

  const handleBioChange = event => {
    setBio(event.target.value);
  };

  const updateGitHub = () => {
    axios
      .get("https://api.github.com/users/OtacilioN")
      .then(function(response) {
        // handle success
        const { data } = response;
        const { name, blog, bio, followers, public_repos } = data;
        setName(name);
        setSite(blog);
        setBio(bio);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  return (
    <div className="Profile-container">
      <Typography>Perfil do Estudante</Typography>
      <div className="Profile-info">
        <div className="Profile-picture-wrapper"></div>
        <form className="Profile-flex-full" noValidate autoComplete="off">
          <div className="Profile-form-wrapper">
            <TextField
              className="Profile-flex-full"
              id="github-username"
              value={gitHubUser}
              onChange={handleGitHubUserChange}
              label="Usuario do GitHub"
            />
            <TextField
              value={name}
              onChange={handleNameChange}
              className="Profile-flex-full"
              id="name"
              label="Nome"
            />
            <TextField
              value={site}
              onChange={handleSiteChange}
              className="Profile-flex-full"
              id="site"
              label="Site"
            />
          </div>
        </form>
      </div>
      <div className="Profile-info">
        <TextField
          multiline
          rowsMax="4"
          onChange={handleBioChange}
          value={bio}
          className="Profile-flex-full"
          id="bio"
          label="bio"
        ></TextField>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-around"
        }}
      >
        <Button onClick={updateGitHub}>Atualizar GitHub</Button>
        <Button color="primary">Salvar</Button>
      </div>
    </div>
  );
};

export default Profile;
