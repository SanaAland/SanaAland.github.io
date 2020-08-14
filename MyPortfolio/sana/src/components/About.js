import React from "react";
import { Grid, Cell } from "react-mdl";

const About = () => {
  return (
    <div>
      <Grid>
        <Cell cols={4}>
          <div
            style={{
              textAlign: "center",
              borderStyle: "solid",
              borderColor: "black",
            }}
          >
            <img
              src="image2.png"
              alt="avatar"
              style={{ height: "200px", padding: "0.5em" }}
            />

            <button type="button" style={{ padding: "0.5em" }}>
              Click Me!
            </button>
          </div>
        </Cell>
        <Cell cols={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="image2.png"
              alt="avatar"
              style={{ height: "200px", padding: "0.5em" }}
            />

            <button type="button" style={{ padding: "0.5em" }}>
              Click Me!
            </button>
          </div>
        </Cell>
        <Cell cols={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="image2.png"
              alt="avatar"
              style={{ height: "200px", padding: "0.5em" }}
            />

            <button type="button" style={{ padding: "0.5em" }}>
              Click Me!
            </button>
          </div>
        </Cell>
      </Grid>
      <hr
        style={{
          borderTop: "3px solid #833fb2",
          width: "100%",
          textAlign: "center",
        }}
      />

      <Grid>
        <Cell cols={12}>
          <div>
            <img
              src="icon3.jpg"
              alt="avatar"
              style={{ height: "500px", width: "1500px" }}
            />
          </div>
        </Cell>
      </Grid>
      <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
      <Grid>
        <Cell cols={5}></Cell>
        <Cell cols={2} className="abtcell">
          <div
            style={{
              textAlign: "center",
              padding: "0.5em",
            }}
          >
            <span
              style={{
                background: "wheat",
                padding: "0.5em",
                borderRadius: "1.5em",
              }}
            >
              womens
            </span>
          </div>
        </Cell>
        <Cell cols={5}></Cell>
      </Grid>
      <Grid>
        <div
          style={{
            padding: "2em",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: "1.5em",
          }}
        >
          <a href="www.google.com" target="_blank">
            <img
              src="icon.jpg"
              alt="myavtar"
              style={{
                height: "200px",
                width: "300px",

                borderRadius: "1.5em",
              }}
            />
            <br />
            <br />
            <p style={{ textAlign: "center" }}>aland</p>
          </a>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div
          style={{
            padding: "2em",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: "1.5em",
          }}
        >
          <a href="www.google.com" target="_blank">
            <img
              src="icon2.png"
              alt="myavtar"
              style={{
                height: "400px",
                width: "600px",

                borderRadius: "1.5em",
              }}
            />
            <br />
            <br />
            <p style={{ textAlign: "center" }}>aland</p>
          </a>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div
          style={{
            padding: "2em",
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: "1.5em",
          }}
        >
          <div
            style={{
              borderStyle: "solid",
              borderColor: "black",
              borderRadius: "1.5em",
            }}
          >
            <a href="www.google.com" target="_blank">
              <img
                src="icon3.jpg"
                alt="myavtar"
                style={{
                  height: "300px",
                  width: "300px",

                  borderRadius: "1.5em",
                }}
              />
              <br />
              <br />
              <p style={{ textAlign: "center" }}>aland</p>
            </a>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default About;
