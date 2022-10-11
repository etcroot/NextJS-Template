import React from "react";
import SEO from "./SEO";

export function Layout(props) {
  return (
    <React.Fragment>
      <SEO />
      <main className="wrapper">{props.children}</main>
    </React.Fragment>
  );
}

export function Content(props) {
  return (
    <article className="content">
      {props.header && (
        <div className="content-header">
          <h1 className="page-title">{props.title}</h1>
        </div>
      )}
      <div className="content-body">{props.children}</div>
    </article>
  );
}
