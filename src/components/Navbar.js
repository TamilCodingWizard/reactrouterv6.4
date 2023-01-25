import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Router 6.4 and above</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Contact</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
