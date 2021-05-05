/* =================================================================The Collections Component======================================================= */
/* import statement to be able to create React component */
import React from "react";

//Child components
import HeaderComponent from "./HeaderComponent";
import SearchForm from "./SearchForm";
import Collection from "./Collection";
import VerticalMenu from "./VerticalMenu";

/* import statement to to use the Fetch API*/
import "isomorphic-fetch";

/* Select Menu Options */
const options = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Movie",
    value: "movie",
  },
  {
    label: "Podcast",
    value: "podcast",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Music Video",
    value: "musicVideo",
  },
  {
    label: "AudioBook",
    value: "audiobook",
  },
  {
    label: "ShortFilm",
    value: "shortFilm",
  },
  {
    label: "TV Show",
    value: "tvShow",
  },
  {
    label: "Software",
    value: "software",
  },
  {
    label: "EBook",
    value: "ebook",
  },
];

/*=============================================================================functional component */
export default function Collections() {
  //Initializing state variables

  //Search strings
  const [term, setTerm] = React.useState("");
  const [media, setMedia] = React.useState("");

  //Booleans to hide/show elements
  const [showMenu, setShowMenu] = React.useState(false);
  const [showCollections, setShowCollections] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  //Search results and collection arrays
  const [searchResults, setSearchResults] = React.useState([]);
  const [collectionItems, setCollectionItems] = React.useState([]);

  //When collectionItems changes this is called
  React.useEffect(() => {
    //Check if any items were added to the collection so it can be hidden or not
    if (collectionItems.length === 0) {
      setShowCollections(false);
    } else {
      setShowCollections(true);
    }
  }, [collectionItems]);

  //Called when Select menu value changes
  const handleOption = (e) => {
    e.preventDefault();
    //media updated
    setMedia(e.target.value);
  };

  //submit search form
  const handleSubmit = async (e) => {
    //set loading to true
    setLoading(true);
    e.preventDefault();

    //URL for fetch request
    const apiURL = `content/${media},${term}`;

    //fetch method
    const res = await fetch(apiURL);

    //Store response json data
    const json = await res.json();

    //result array from json object to update searchResults
    setSearchResults(json.results);

    //Check if not result found and alert user
    if (json.results.length === 0) {
      alert("No results found! Please try again.");
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }

    //set loading to false
    setLoading(false);
  };

  //called when user tries to add item to collection
  const add = (collection) => {
    //append called object to collectionItems array
    const newCollection = [...collectionItems, collection];
    setCollectionItems(newCollection);

    //alert success
    alert(`${collection.trackName} added!`);
  };

  //delete item from collection
  const removeItem = (index) => {
    //duplicate current array and remove item through splice method
    const currentCollection = [...collectionItems];
    currentCollection.splice(index, 1);

    //update collectionItems
    setCollectionItems(currentCollection);

    //alert success
    alert(`Item deleted`);
  };

  //============================================The Return Statement=======================================
  /* statement returns all imported components and the props references are assigned state properties*/
  /* the VerticalMenu and Collection components are rendered conditionally*/
  return (
    <div className="App">
      <HeaderComponent />
      <SearchForm
        handleSubmit={handleSubmit}
        handleOption={handleOption}
        options={options}
        term={term}
        setTerm={(e) => {
          setTerm(e.target.value);
        }}
      />
      {showMenu ? (
        <>
          {loading ? (
            <h5>Searching for {term}</h5>
          ) : (
            <>
              <h2>Add Items To Collection</h2>
              <VerticalMenu searchResults={searchResults} add={add} />
            </>
          )}
        </>
      ) : (
        <div></div>
      )}
      <hr />
      {showCollections ? (
        <>
          <h2>Your Collection</h2>
          <Collection
            collectionItems={collectionItems}
            removeItem={removeItem}
          />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
