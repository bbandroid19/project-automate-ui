import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import njcicon from '../../assets/icons/njclogo'
import CustomHeader from "../../components/header";
import './project.scss';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

class Projects extends Component{
    state = {
        step: 1,
        username: "",
        password: "",
        organization: "",
        projectName: "",
        projectDescription: "",
        pipeline_folder: "",
        pipeline_name: "",
        pipeline_description: "",
        git_service_connection_name: "",
        github_repo_url: "",
        github_pat: "",
        resource_group_name: "",
        azure_container_registry_name: "",
        containerRepository: "",
        azLocation: "",
        contract: "",
        service: "",
        dockerServiceConnection:""
      };
      handleChange = input => event => {
        this.setState({ [input]: event.target.value });
        }
     onSUbmit = () =>{
         var obj={};
         obj= this.state;
         console.log(this.state);
     } 
  render(){
    return (
        <div className="root">
            <CustomHeader></CustomHeader>
      <main className="content">
      <Grid container className="grid-container">
              <Grid item xs={12}>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Azure username"
             onChange={(event)=>this.handleChange('username')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Azure password" onChange={(event)=>this.handleChange('password')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="organization"
            label="Azure Organization" onChange={(event)=>this.handleChange('organization')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="projectname"
            label="Project Name" onChange={(event)=>this.handleChange('projectName')}></TextField>
                  <TextField   variant="outlined"
            margin="normal"
            required
            fullWidth
            id="projectdescr"
            label="Project Description" onChange={(event)=>this.handleChange('projectDescription')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"onChange={(event)=>this.handleChange('pipeline_folder')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"onChange={(event)=>this.handleChange('pipeline_name')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"onChange={(event)=>this.handleChange('pipeline_description')}></TextField>
                  <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email" onChange={(event)=>this.handleChange('git_service_connection_name')}></TextField>
                  <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email" onChange={(event)=>this.handleChange('github_repo_url')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"onChange={(event)=>this.handleChange('github_pat')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"onChange={(event)=>this.handleChange('resource_group_name')}></TextField>
                  <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email" onChange={(event)=>this.handleChange('azure_container_registry_name')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"onChange={(event)=>this.handleChange('dockerServiceConnection')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"onChange={(event)=>this.handleChange('containerRepository')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email" onChange={(event)=>this.handleChange('azLocation')}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email" onChange={(event)=>this.handleChange()}></TextField>

            <Grid item xs={12}>
                <Button>Submit</Button>
            </Grid>
              </Grid>
          </Grid>
      </main>
            </div>
         
      );
  }
 
}
export default Projects;