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
import { w3cwebsocket as W3CWebSocket } from "websocket";
import CustomizedTimeline from '../../components/project-timeline';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import BuildIcon from '@material-ui/icons/Build';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CircularProgress from '@material-ui/core/CircularProgress';
const client = new W3CWebSocket('ws://127.0.0.1:3000');
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
  postSubmit=true;
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
        dockerServiceConnection:"",
        loginsuccess:false,
        rgcreate:false,
        acrcreate:false,
        devopscreate:false,
        buildvar:false,
        buildpipeline:false,
        projectStarted:true

      };
      handleChange = input => event => {
        console.log(input);
        console.log(event.target.value);
        this.setState({ [input]: event.target.value });
        }
     onSUbmit = () =>{
         var obj={};
         obj= this.state;
         console.log(this.state);
     } 
     postCall =() =>{
        var obj={};
        obj= this.state;
        client.send(JSON.stringify({
            data:obj,
            type: "userevent"
          }));
          this.setState({projectStarted:false});
        console.log(this.state);
       
          
     }
     componentWillMount() {
        client.onopen = () => {
          console.log('WebSocket Client Connected');
        };
        
        client.onmessage = (message) => {
            const dataFromServer = message.data;
            const stateToChange = {};
            console.log(dataFromServer);
            switch(message.data){
              case '1': console.log('login success');
                        const login= this.state.loginsuccess;
                        this.setState({loginsuccess:!login});
                        break;
              case '2': console.log('login success');
                        const rg= this.state.rgcreate;
                        this.setState({rgcreate:!rg});
                        break
              case '3': console.log('login success');
                        const acr= this.state.acrcreate;
                        this.setState({acrcreate:!acr});
                        break
              case '4': console.log('login success');
              const devops= this.state.devopscreate;
              this.setState({devopscreate:!devops});
                        break
              case '5': console.log('login success');
              const bv= this.state.buildvar;
              this.setState({buildvar:!bv});
                        break
              case '6': console.log('login success');
              const pipeline= this.state.buildpipeline;
              this.setState({buildpipeline:!pipeline});
                        break
              default : 
                        break          

            }
            this.setState({
              ...stateToChange
            });
          };
      }
      
      logInUser = () => {
        const username = this.username.value;
        if (username.trim()) {
          const data = {
            username
          };
          this.setState({
            ...data
          }, () => {
            client.send(JSON.stringify({
              ...data,
              type: "userevent"
            }));
          });
        }
      }
      
      /* When content changes, we send the
      current content of the editor to the server. */
      onEditorStateChange = (text) => {
       client.send(JSON.stringify({
         type: "contentchange",
         username: this.state.username,
         content: text
       }));
      };
  render(){
    return (
        <div className="root">
            <CustomHeader></CustomHeader>
      <main className="content">
        {this.state.projectStarted? <Grid container className="grid-container">
              <Grid item xs={12}>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            defaultValue="manuthomas314@gmail.com"
            label="Azure username"
            onChange={(event)=>this.setState({username:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            defaultValue="Harrier1406"
            label="Azure password" onChange={(event)=>this.setState({password:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="organization"
            defaultValue="https://dev.azure.com/manuthomas314"
            label="Azure Organization" onChange={(event)=>this.setState({organization:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="projectname"
            label="Project Name" onChange={(event)=>this.setState({projectName:event.target.value})}></TextField>
                  <TextField   variant="outlined"
            margin="normal"
            required
            fullWidth
            id="projectdescr"
            label="Project Description"  onChange={(event)=>this.setState({projectDescription:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pipelinefolder"
            label="Pipeline folder name"
            name="foldername"
            defaultValue="build-pipeline"
            autoComplete="email" onChange={(event)=>this.setState({pipeline_folder:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pipelinename"
            label="Pipeline name"
            defaultValue="Build"
            name="pipelinename"
            autoComplete="email" onChange={(event)=>this.setState({pipeline_name:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pipelinedesc"
            label="Pipeline Description"
            name="pipelinedesc"
            defaultValue="Description"
            autoComplete="email" onChange={(event)=>this.setState({pipeline_description:event.target.value})}></TextField>
                  <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            id="gitscname"
            label="Git service connection name"
            name="gitscname"
            defaultValue="GitSC1"
            autoComplete="email"  onChange={(event)=>this.setState({git_service_connection_name:event.target.value})}></TextField>
                  <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            id="gitrepo"
            label="Git repo"
            name="gitrepo"
            autoComplete="email" onChange={(event)=>this.setState({github_repo_url:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="gitpat"
            label="Git Pat"
            name="gitpat"
            autoComplete="email" onChange={(event)=>this.setState({github_pat:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="rgname"
            label="Resource Group"
            name="rgname"
            autoComplete="email" onChange={(event)=>this.setState({resource_group_name:event.target.value})}></TextField>
                  <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            id="acrname"
            label="Acr name"
            name="acrname"
            autoComplete="email"  onChange={(event)=>this.setState({azure_container_registry_name:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dockerscname"
            label="Docker Service connection name"
            name="dockerscname"
            autoComplete="email"  onChange={(event)=>this.setState({dockerServiceConnection:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="containerrepo"
            label="Container repo name"
            name="containerrepo"
            autoComplete="email"  onChange={(event)=>this.setState({containerRepository:event.target.value})}></TextField>
                  <TextField  variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Location"
            name="email"
            autoComplete="email"  onChange={(event)=>this.setState({azLocation:event.target.value})}></TextField>
                  

            <Grid item xs={12}>
                <Button type="button"
            fullWidth
            variant="contained"
            color="primary" onClick={() => this.postCall()}>Submit</Button>
            </Grid>
              </Grid>
          </Grid> : <Grid container className="grid-container">
            <Grid item xs={12}>
            <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           Azure Login
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
    {this.state.loginsuccess?<LockOpenIcon className={this.state.loginsuccess ? 'success': null}/> : <CircularProgress />} 
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className="paper">
            <Typography variant="h6" component="h1">
              {this.state.loginsuccess?'Logged':'Log'} in to azure
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          {this.state.rgcreate?'Created':'Creating'} resource group
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot >
          {this.state.rgcreate?<LaptopMacIcon className='success' /> : <CircularProgress />}  
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className="paper">
            <Typography variant="h6" component="h1">
            {this.state.rgcreate?'Created':'Creating'} resource group {this.state.resource_group_name}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           Acr creation
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          {this.state.acrcreate?<LaptopMacIcon className='success' /> : <CircularProgress />}  
          </TimelineDot>
          <TimelineConnector className="secondaryTail" />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className="paper">
            <Typography variant="h6" component="h1">
            {this.state.acrcreate?'Created':'Creating'} ACR {this.state.azure_container_registry_name}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           Devops Project creation
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          {this.state.devopscreate?<AccountTreeIcon className='success' /> : <CircularProgress />}  
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className="paper">
            <Typography variant="h6" component="h1">
            {this.state.devopscreate?'Created':'Creating'} Devops project {this.state.projectName}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           Variable group creation
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          {this.state.buildvar?<AccountTreeIcon className='success' /> : <CircularProgress />}  
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className="paper">
            <Typography variant="h6" component="h1">
            {this.state.buildvar?'Created':'Creating'} variable group for build pipeline
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           Build Pipeline
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          {this.state.buildpipeline?<BuildIcon className='success' /> : <CircularProgress />} 
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className="paper">
            <Typography variant="h6" component="h1">
            {this.state.buildpipeline?'Created':'Creating'} Build pipeline {this.state.pipeline_name}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
            </Grid>
            </Grid>}
      
      </main>
            </div>
         
      );
  }
 
}
export default Projects;