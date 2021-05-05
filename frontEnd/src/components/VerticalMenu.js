/* =================================================================The Collections Component======================================================= */
/* import statement to be able to create React component */
import React from "react";

//import bootstrap button
import { Button } from "react-bootstrap";

export default function VerticalMenu(props) {
  //destructuring props for better legibility
  let { searchResults, add } = props;

  //return statement where each entry in the searchResults array is given the format below
  return (
    <ul className="list-unstyled verticalMenu">
      {searchResults.map((item, index) => (
        <div as="li" className="listItem" key={index}>
          <img
            className="mediaImg"
            src={item.artworkUrl100}
            alt="Generic placeholder"
          />
          <div className="itemHeading">
            <h5>{item.trackName}</h5>
            <p>{item.kind}</p>
          </div>

          <Button
            onClick={() => {
              add(item);
            }}
          >
            Add
          </Button>
        </div>
      ))}
    </ul>
  );
}
