import React, { useState } from "react";
import { ContentHolder, Item } from "./aboutme.style";

export default function AboutItem({ node, index }) {
    const [visible, setVisible] = useState(false)
  return (
    <>
      <Item onClick={()=>setVisible(true)}>
        {index + 1}. {node.frontmatter.title}
      </Item>
      <ContentHolder visible={visible}>
          <h2 onClick={()=>setVisible(false)}>X</h2>
          <h1>{node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{__html: node.html}}></div>
      </ContentHolder>
    </>
  );
}
