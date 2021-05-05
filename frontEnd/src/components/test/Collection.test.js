/* =================================================================The App Component======================================================= */ import React from "react";
import renderer from "react-test-renderer";
import Collection from "../Collection";

it("renders correctly", () => {
  const collectionItems = [
    {
      artworkUrl100: "",
      trackName: "Life of a bee",
      kind: "Movie",
    },
  ];

  const removeItem = () => {
    console.log("removeItem called");
  };

  const tree = renderer
    .create(
      <Collection collectionItems={collectionItems} removeItem={removeItem} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
