import React from 'react';
import Centered from 'components/Centered';
import { Typography, Box } from '@material-ui/core';

function Dashboard() {
  return (
    <Centered column>
      <Box mb={2}>
        <Typography align="center">Dashboard!</Typography>
      </Box>
    </Centered>
  );
}

export default Dashboard;
