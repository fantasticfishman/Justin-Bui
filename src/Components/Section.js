import React from "react";
export default function Section({ title, subtitle, dark, id, carousel,list }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <h3>{title}</h3>
      <div className="section-content" id={id}>
        <div className="left">{carousel}</div>
        <div className="right">
          <p>{subtitle}</p>
          {list}
        </div>
      </div>
    </div>
  );
}
