import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, List } from "./aboutme.style";
import AboutItem from "./AboutItem";

export default function MoreAboutMe() {
  const data = useStaticQuery(graphql`
    query someQuery {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              id
            }
          }
        }
      }
    }
  `);
  return (
    <Container id="more" style={{ height: "100vh" }}>
      <h1>
        Apparently, who I am matters to you. And that is awesome, because I love
        talking about myself.{" "}
      </h1>
      <h3>Here are a few areas of my life that are interesting:</h3>
      <List>
          {
              data.allMarkdownRemark.edges.map((edge, index)=><AboutItem node={edge.node} index={index}/>)
          }  
      </List>
    </Container>
  );
}

// export const pageQuery = ;
