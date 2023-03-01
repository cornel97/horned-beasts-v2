import React from "react";
import HornedBeast from "./HornedBeast";
import data from "../data.json";

export default function Main() {
  return (
    <main>
      {data.map((beast) => {
        return (
          <HornedBeast
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
          />
        );
      })}
    </main>
  );
}
