import React from "react";
import { Typography,styled } from "@mui/material";
import { useLoaderData, Link } from "react-router-dom";
import CareerList from "../components/CareerList";

const StyledLink = styled(Link)({
  textDecoration:'none'
})

const Careers = () => {
  const careerData = useLoaderData();
  console.log(careerData);
  return (
    <>
      <Typography variant="h3">Careers</Typography>
      {careerData &&
        careerData.map((career) => {
          return (
            <StyledLink to={career.id.toString()} key={career.id}>
              <CareerList title={career.title} location={career.location} />
            </StyledLink>
          );
        })}
    </>
  );
};

// Career Loader
export const careerLoader = async () => {
  const response = await fetch("http://localhost:8000/careers");

  if(!response.ok) {
    throw new Error('Job Not Found')
  }

  const jsonResponse = await response.json();

  return jsonResponse;
};

export default Careers;
