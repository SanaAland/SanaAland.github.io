import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="resume">
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img src="image1.jpg" alt="avatar" style={{ height: "200px" }} />
          </div>
          <h2 style={{ paddingTop: "2em", color: "white" }}> Sana Aland</h2>
          <h4 style={{ color: "grey" }}> Programmer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vestibulum bibendum vestibulum. Cras imperdiet, mauris non convallis
            pretium, risus metus gravida enim, in elementum turpis magna a mi.
            Duis vulputate augue orci, ut ullamcorper lorem feugiat quis. Cras
            convallis et nisl eu hendrerit. Integer ligula sapien, volutpat vel
            aliquet non, gravida in ante. Sed lobortis nisi in dui semper, sed
            porttitor est euismod. Aenean sit amet massa tortor. Morbi nulla
            neque, blandit quis fringilla non, pretium dapibus lorem. Donec
            risus ipsum, sagittis non magna id, feugiat venenatis lacus. Sed vel
            massa efficitur, rhoncus metus a, tincidunt nibh. Praesent at lorem
            at sem viverra euismod nec ut velit. Nam placerat felis sit amet
            vestibulum aliquet. Praesent lobortis justo diam, a porta lorem
            tincidunt nec. Duis tincidunt nunc a augue condimentum aliquet.
            Etiam consequat faucibus nulla at dictum. Nulla a imperdiet turpis,
            ac dapibus ex.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5 style={{ color: "white" }}>Address</h5>
          <p style={{ color: "white" }}>Chandan Nagar,Kharadi, Pune</p>
          <h5 style={{ color: "white" }}>Mobile</h5>
          <p style={{ color: "white" }}>+91 9970185464</p>
          <h5 style={{ color: "white" }}>Email</h5>
          <p style={{ color: "white" }}>sana.aland.1910@gmail.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>
        <Cell
          className="resume-right-col"
          col={8}
          style={{ borderRadius: "2em" }}
        >
          <h2>Education</h2>
          <Education
            startYear={2004}
            endYear={2016}
            schoolName="Stella Maris School"
          />
          <Education
            startYear={2016}
            endYear={2018}
            schoolName="H.H.C.P college for girls"
          />
          <Education
            startYear={2018}
            schoolName="G.H.Raisoni institute of engineering and technology"
          />
          <hr style={{ borderTop: "3px solid #e22947" }} />
          <h2>Skills</h2>
          <Skills skill="HTML CSS" />
          <Skills skill="React JS" />
          <Skills skill="Express" />
          <Skills skill="Python" />
          <Skills skill="NodeJS" />
          <Skills skill="Bootstrap" />
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
