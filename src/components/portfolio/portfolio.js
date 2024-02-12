import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  card: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  image: {
    width: "100%",
    display: "block",
    height: "100%",
    borderRadius:"20px"
  },
  alertEnter: {
    transition: "all 300ms linear",
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  let [_cardView, setCardView] = useState(-1);

  const showPort = () => {
    return portfolioData.map((item, index) => {
      return (
    
          <Box
          height="300px"
          margin="40px"
          padding="12px"

            className={classes.container}
            onMouseEnter={() => setCardView(index)}
            onMouseLeave={() => setCardView(-1)}
          >
            <img
              
              alt="Kshitiz Gupta"
              key={index}
              src={item.image}
              className={classes.image}
            />
            <Typography component="h5" style={{ paddingTop: 12}}>
                {item.description}
            </Typography>
            {/* <div className={classes.card}>
              {cardView === index ? <Card data={item} /> : null}
            </div> */}
          </Box>
      );
    });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5">Portfolio</Typography>
      <Box display="grid" gridGap="32px">
        <Typography variant="body2">
          A developer's experience says its all
        </Typography>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="10px">{showPort()}</Masonry>
        </ResponsiveMasonry>
      </Box>
    </Container>
  );
};

const portfolioData = [
  {
    title: "Test Station Manager",
    description:
      "TSM is a cloud-based test system/instrument management application. Users can connect their systems to cloud, monitor their status and run test programs or updates on their systems.",
    image: "../images/TSM.png",
  },
  {
    title: "Switch Manager",
    description:
      "Switch Manager is a product designed using Go.js, Angular and Node.js. Its a software for representing GUI of Switches and matrix",
    image: "../images/web9.png",
  },
  {
    title: "Cloud Drive",
    description:
      "Cloud Drive is a virtual file system for storing user files. These files can be anything, such as instrument details, instrument settings, tests, test results, software updates etc.",
    image: "../images/cloud-drive.png",
  },
  {
    title: "User Administration",
    description:
      "Administration panel for managing access controls to users for different test systems and artifacts. Users can create and assign control policies to team members based on the access required.",
    image: "../images/user-admin.png",
  },
  {
    title: "Sudoku",
    description:
      "Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9 x 9 grid with digits so that each column, each row, and each of the 3 x 3 boxes that compose the grid contain all the digits from 1 to 9.",
    image: "../images/sudoku.png",
  },
  {
    title: "Minesweeper",
    description:
      "Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden “mines” or bombs without detonating any of them, with the help of clues about the number of neighboring mines in each field.",
    image: "../images/minesweeper.png",
  },
];

export default Portfolio;
