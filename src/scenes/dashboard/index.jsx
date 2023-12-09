import React from "react";
import Header from "../components/Header";
import {
  DownloadOutlined,
  MapsHomeWork,
  EmojiEvents,
  PersonAdd,
  Beenhere,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import StatBox from "../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  

  return (
    <Box m="1.5rem 2.5rem">
      
        <Header title="DASHBOARD" subtitle="Bienvenu sur votre Dashboard" />

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total Salles"
          value={ "Le nombre total de salles:"}
          increase="15000"
          description=""
          icon={
            <MapsHomeWork
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Spectacle "
          value={"La spectacle le plus vendu:"}
          increase="Film Barbie"
          description=""
          icon={
            <EmojiEvents
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        <StatBox
          title="Best day "
          value={"Le jours avec le plus de ventes ce moi dernier:"}
          increase="Samedi 12/12/23"
          description=""
          icon={
            <Beenhere
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        
        

        {/* ROW 2 */}
     
        
      </Box>
    </Box>
  );
};

export default Dashboard;
