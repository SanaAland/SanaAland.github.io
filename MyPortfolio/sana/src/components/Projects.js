import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardTitle,
  CardActions,
  Button,
  Grid,
  Cell,
} from "react-mdl";
//import { counter } from '@fortawesome/fontawesome-svg-core'

const Projects = () => {
  const [state, setState] = useState({
    activeTab: 0,
  });

  const myFunction = () => {
    if (state.activeTab === 0) {
      return (
        <div style={{ display: "flex" }}>
          <Card
            shadow={0}
            style={{
              width: "256px",
              height: "256px",
              background: "url(icon.jpg) center / cover",
              margin: "auto",
            }}
          >
            <CardTitle expand />
            <CardActions
              style={{
                height: "52px",
                padding: "16px",
                // background: "rgba(0,0,0,0.2)",
              }}
            >
              <Button colored>
                <a href="https://github.com/SanaAland/Google-Translate.git">
                  GitHub
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (state.activeTab === 1) {
      return (
        <div style={{ display: "flex" }}>
          <Card
            shadow={0}
            style={{
              width: "256px",
              height: "256px",
              background: "url(icon2.png) center / cover",
              margin: "auto",
            }}
          >
            <CardTitle expand />
            <CardActions
              style={{
                height: "52px",
                padding: "16px",
                // background: "rgba(0,0,0,0.2)",
              }}
            >
              <Button colored>
                <a href="https://sana-react.s3.ap-south-1.amazonaws.com/index.html">
                  My Portfolio
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex" }}>
          <Card
            shadow={0}
            style={{
              width: "256px",
              height: "256px",
              background: "url(icon03.jpg) center / cover",

              margin: "auto",
            }}
          >
            <CardTitle expand />
            <CardActions
              style={{
                height: "52px",
                padding: "16px",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              <Button colored>
                <a href="https://github.com/SanaAland/Konnect-Backend.git">
                  Konnect Backend
                </a>
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    }
  };

  return (
    <div>
      <Tabs
        activeTab={state.activeTab}
        onChange={(tabID) => {
          setState({ ...state, activeTab: tabID });
        }}
        ripple
      >
        <Tab>Python</Tab>
        <Tab>React</Tab>
        <Tab>Backend</Tab>
      </Tabs>
      <section>
        <Grid>
          <Cell col={12}>{myFunction()}</Cell>
        </Grid>
      </section>
    </div>
  );
};
export default Projects;
