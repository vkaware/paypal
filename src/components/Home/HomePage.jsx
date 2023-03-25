import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import { Showhide } from "./Showhide";

import { useDispatch } from "react-redux";
import { initEndPoint } from "../../redux/task/task.action";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initEndPoint());
  }, []);

  const [img, setimg] = useState(
    "https://tmetric.com/media/e5enfaae/img-advantages.png"
  );
  return (
    <div>
      <Navbar />

      {/* -------------------------------------------------------------------------------------------------------- */}
      <Box bg="pink.50" w="100%" p={10} mt={50}>
        <Box textAlign={"center"} mb={10} transition="all 0.5s all">
          <Text fontSize={36}>
            <b>Overview Of Task Management System</b>
          </Text>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          padding="15px"
          justifyContent="space-around"
        >
          <Box width={{ base: "100%", md: "65%" }}>
            <img src={img} width={"100%"} alt="Image" srcset="" />
          </Box>
          <Box w={{ base: "100%", md: "30%" }}>
            <Showhide
              si={1}
              setimg={setimg}
              title="Time Tracking"
              icon="https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"
              value="Capture every task you work on. Take control over time intervals by simple time tracking"
            />
            <br />
            <Showhide
              si={2}
              setimg={setimg}
              title="Project Management"
              icon="https://tmetric.com/media/1niddz51/icon-project-blue.svg"
              value="Create projects, set rates and budgets. Keep tracking of hours spent on tasks and see the project progress at a glance, collaborate easily, keep deadlines and prevent over budgeting"
            />
            <br />
            <Showhide
              si={3}
              setimg={setimg}
              title="Team Management"
              icon="https://tmetric.com/media/2gxihhdu/icon-team-blue.svg"
              value="Measure productivity and activity level of your team, assign tasks in a click, monitor workflow and distribute the workload. Syncs your teams’ work and improves efficiency."
            />
            <br />
            <Showhide
              si={4}
              setimg={setimg}
              title="Billing & Invoicing"
              icon="https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg"
              value="With the accurate billing system, set billable rates and easily create an invoice based on tracked time and expenses, and get paid promptly."
            />
            <br />
            <Showhide
              si={5}
              setimg={setimg}
              title="Reporting"
              icon="https://tmetric.com/media/yoblhiut/icon-reports-blue.svg"
              value="With a flexible reporting system, you have a choice to get insights into your projects and team productivity, analyze incomes and keep costs under control"
            />
            <br />
            <Showhide
              si={6}
              setimg={setimg}
              title="Time Off"
              icon="https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg"
              value="Add a PTO policy for your organization, simply ask for days off, control missed workdays, manage balances and teams attendance hassle-free"
            />
            <br />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default HomePage;
