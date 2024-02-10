import { useState } from "react";
import OpenCageGeocode from "opencage-api-client";

export default function Search1() {
  const [searchdata1, setsearchdata1] = useState("");
  const [searchdata2, setsearchdata2] = useState("");

  const search1handleOnChange = (e) => {
    setsearchdata1(e.target.value);
  };

  const search2handleOnChange = (e) => {
    setsearchdata2(e.target.value);
  };

  const handleSearchData = async () => {
    const apiKey = "40fd0b6abd2445e8a61504acc6c59ad0";

    try {
      const search1 = await OpenCageGeocode.geocode({
        q: searchdata1,
        key: apiKey,
      });
      const search2 = await OpenCageGeocode.geocode({
        q: searchdata2,
        key: apiKey,
      });

      if (
        search1.results &&
        search2.results &&
        search1.results.length > 0 &&
        search2.results.length > 0
      ) {
        const bounds1 = search1.results[0].bounds;
        const bounds2 = search2.results[0].bounds;

        if (bounds1 && bounds2) {
          const boundingBoxObj1 = {
            north: bounds1.northeast.lat,
            south: bounds1.southwest.lat,
            east: bounds1.northeast.lng,
            west: bounds1.southwest.lng,
          };
          const boundingBoxObj2 = {
            north: bounds2.northeast.lat,
            south: bounds2.southwest.lat,
            east: bounds2.northeast.lng,
            west: bounds2.southwest.lng,
          };

          // *********************************
          // Remember to send the above data to the parent component
          // using a function to change their search state
          // ************************************

        } else {
          console.error("Proper Boundary lat and long not available");
        }
      } else {
        window.alert("Please Enter valid locations");
        console.error("Invalid results in response search object");
      }
    } catch (error) {
      console.error("Error fetching bounding box:", error);
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={search1handleOnChange}
        value={searchdata1}
        placeholder="Search Destination"
      />
      <input
        type="text"
        onChange={search2handleOnChange}
        value={searchdata2}
        placeholder="Search Start"
      />
      <button type="submit" onClick={handleSearchData}>
        Search
      </button>
    </>
  );
}

