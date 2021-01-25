import React, { useState } from "react";
import Boxes from "../Boxes";
import "./structure.scss";
import data from "../../data/structure";

const Structure = () => {
  const [selected, setSelected] = useState(data[2]);
  const select = (id = 1) => {
    let s;
    id === selected?.id ? (s = null) : (s = data.find((x) => x.id === id));
    setSelected(s);
  };
  return (
    <div className="structure">
      <h2 className="structure__title">Struktur</h2>
      <div className="structure__list">
        {data.map((struct) => {
          return (
            <div className="structure__list__item" key={struct.id}>
              <h4
                className="structure__list__item__text"
                onClick={() => {
                  select(struct.id);
                }}
              >
                {struct.title + " " + struct.id}
              </h4>

              <Boxes />

              <svg
                className={`structure__list__item__caret ${
                  selected?.id === struct.id &&
                  "structure__list__item__caret--up"
                }`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#445544"
                  d="M5.07821 4.48822L1.57837 0.988368C1.37777 0.787776 1.05322 0.787776 0.852625 0.988368C0.652034 1.18896 0.652034 1.51352 0.852625 1.71411L4.71535 5.57684C4.81537 5.67686 4.94698 5.72721 5.07823 5.72721C5.20947 5.72721 5.34109 5.67686 5.44111 5.57684L9.30383 1.71411L9.30384 1.7141C9.50441 1.51351 9.50441 1.18896 9.30381 0.988368C9.10322 0.787776 8.77867 0.787776 8.57807 0.988368L5.07821 4.48822Z"
                  stroke="#445544"
                  strokeWidth="0.324153"
                />
              </svg>

              {selected &&
                selected?.children &&
                selected?.children?.length > 0 && (
                  <ul
                    className={
                      selected.id === struct.id
                        ? "structure__list__item__children structure__list__item__children--open"
                        : "structure__list__item__children"
                    }
                  >
                    {struct?.children?.map((child) => {
                      return (
                        <li
                          className="structure__list__item__children__child"
                          key={struct.id + "" + child.id}
                        >
                          {child.title}
                        </li>
                      );
                    })}
                  </ul>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Structure;
