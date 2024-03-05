import React, { useEffect, useState } from "react";
import MultiActionAreaCard from "./Cards";
import { Box, Typography } from "@mui/material";

const Starwars = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const stars = await fetch("https://swapi.dev/api/people");
        const people = await stars.json();
        setData(people);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <Box component="section" sx={{ p: 2, border: "1px solid grey" , width:'50%' , margin:'auto', marginTop:'1rem',marginBottom:'2rem' ,color: "primary.main" , fontSize: 20, fontWeight:600}}>
        Welcome to Star Wars.
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {data &&
          data?.results?.map((item) => (
            <div style={{ width: "400px" }}>
              <MultiActionAreaCard stars={item} />
            </div>
          ))}
      </Box>
    </>
  );
};

export default Starwars;
