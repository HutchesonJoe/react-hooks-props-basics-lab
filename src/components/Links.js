import React from "react";

function Links(props){
  return (
    <div className="links">
      <h3 className="links">Links</h3>
      <a href={props.github} className="links">{props.github}</a>
      <a href={props.linkedin}className="links">{props.linkedin}</a>
    </div>
  )
}

export default Links