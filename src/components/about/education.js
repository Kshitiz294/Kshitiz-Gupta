import { makeStyles, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Card from "../common/card/card";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  timelineItem: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column !important",
    },
  },
  timeline: {
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      padding: "0 !important",
    },
  },
  timelineContent: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      // display: 'none'
      textAlign: "left !important",
    },
  },
  timelineOppositeContent: {
    padding: "0px",
    [theme.breakpoints.down("xs")]: {
      textAlign: "start",
      order: 2,
      width: "100%",
    },
  },
  seperator: {
    [theme.breakpoints.down("xs")]: {
      width: "fit-content",
    },
  },
  connector: {
    [theme.breakpoints.down("xs")]: {
      height: "20px",
    },
  },
}));

const educationData = [
  {
    title: "Keysight Technologies",
    list: [
      "Designed Front End architecture and implemented different plugin designs for Pathwave Cloud Platform namely – Test Library, Stations Management and Test operations plugins",
      "Ensured utmost quality design and fully Responsive in two different themes",
      "Designed, Developed and successfully delivered Switch Manager to clients like Nokia and Broadcom",
      "Core Developer of common UI Library called Alloy containing many reusable components consumed throughout Pathwave Project by different plugins. ",
      "Designed and Developed Entire Roles and Permissions architecture through front end of the application. ",
      "Implemented Complex Data structures and Algorithms For Searching and Filtering data across app using ES6 Standards. ",
      "Successfully implemented state management using Redux and Ngrx Store in React and Angular respectively. ",
      "Designed and Developed Rest API’s for performing CRUD operations across pathwave using Node & Nest JS.",
      "Gained Hand’s on experience in technologies like React, Angular, Node, Javascript, Docker, Kubernetes, Mongo DB, SQL.",
    ],
    description: "Working as R&D Engineer III in Pathwave Cloud Team, on multiple projects like - Test Station Manager, Cloud Drive, User Admin, Switch Manager, Alloy",
  },
  {
    title: "Indraprastha University",
    description:
      "Engineering have made me of what I am today. I have been lucky having such a great experience so far. Additionally I gained was way over mere marks. With developing Home Automation App to Learning Data Structures and Algorithms, Programming have been my favorite subject above all.",
  },
  {
    title: "Sechdeva Public School",
    subTitle: "Senior Secondary School",
    showTag: "May 2014",
    description:
      "Sachdeva Public School isn't just  any other school, its a school of culture and aspirations. From being optimistic to being ambitious that's what this school taught me. Science Stream is amazing, it helps you open your mind and think out of the box",
  },
];

const Education = () => {
  const classes = useStyles();
  return (
    <div>
      <Timeline className={classes.timeline} align="alternate">

        {/* Keysight Technologies  */}

        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              link="/portfolio"
              subTitle="R&D Engineer III (Full Time)"
              showButton={true}
              buttonLabel="Work Samples"
              showTag="Jun 2018 - Present"
              data={educationData[0]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Current Employment
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              // path="../doc/degree.pdf"
              subTitle="Bachelors in Technology"
              // showButton={true}
              buttonLabel="Degree"
              showTag="Aug 2014 - Jun 2018"
              data={educationData[1]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography className={classes.heading} variant="h5">
              Graduation
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.timelineOppositeContent}>
            <Card
              subTitle="Senior Secondary"
              showTag="2013 - 2014"
              data={educationData[2]}
            />
          </TimelineOppositeContent>
          <TimelineSeparator className={classes.seperator}>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className={classes.connector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography variant="h5" className={classes.heading}>
              Secondary Education
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
