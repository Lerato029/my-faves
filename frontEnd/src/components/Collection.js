/* =================================================================The Collection Component======================================================= */
/* import statement to be able to create React component */
import React from "react";

//import bootstrap button
import { Button } from "react-bootstrap";

export default function Collection(props) {
  //destructuring props for better legibility
  let { collectionItems, removeItem } = props;

  //return statement where each entry in the collectionItems array is given the format below
  return (
    <div class="row">
      {collectionItems.map((collection, index) => (
        <div class="column" key={index}>
          <div class="card">
            <img src={collection.artworkUrl100} alt={collection.trackName} />

            <h5 className="blackFont">{collection.trackName}</h5>
            <p className="blackFont">{collection.kind}</p>
            <Button
              variant="danger"
              className="cardBtn"
              onClick={() => {
                removeItem(index);
              }}
            >
              DELETE
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
