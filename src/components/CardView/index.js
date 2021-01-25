import React from "react";
import Card from "./card";
import "./style.scss";
import users from "../../data/users.json";

const CardView = () => {
  console.log(users);
  return (
    <div className="card-view">
      <Card />

      <Card arrow="right" />
      <Card arrow="left" />
    </div>
  );
};

export default CardView;
