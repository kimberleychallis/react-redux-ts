import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useAppDispatch } from "./app/hooks";
import { setPhotos } from "./features/photos/photosSlice";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("cat");
  const unsplashAPI = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=12&orientation=landscape`;
  const unsplashAPIKey = UNSPLASH_API_KEY;

  const dispatch = useAppDispatch();

  const fetchPhotos = async () => {
    const response: AxiosResponse = await axios.get(unsplashAPI, {
      headers: { Authorization: `Client-ID ${unsplashAPIKey}` },
    });
    // .catch((err) => {
    //   console.log("Error: ", err);
    // });
    // console.log(response.data);

    dispatch(setPhotos(response.data.results));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPhotos();
  };

  // const handleClear = () => dispatch(clearPhotos());

  return (
    <>
      <form className="Search" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="What would you like to search for photographs of?"
            aria-label="Enter a photograph search term"
            aria-describedby="submit"
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            required
          />
          <button className="btn btn-primary" type="submit" id="submit">
            Search Unsplash
          </button>
        </div>
      </form>
      {/* <button onClick={handleClear}>Clear array</button> */}
    </>
  );
};

export default Search;
