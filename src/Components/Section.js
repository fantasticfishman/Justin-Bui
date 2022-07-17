import React from "react";
export default function Section({ title, subtitle, dark, id , carousel}) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        {carousel}
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
