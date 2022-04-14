import React, { Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';

import history from 'services/history';
import PrivateRoute from 'components/PrivateRoute';
import LoggedLayout from 'layouts/LoggedLayout';
import config from './config';
import { Box, CircularProgress } from '@material-ui/core';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <LoggedLayout routes={config}>
          <Suspense
            fallback={
              <Box display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            }
          >
            <Switch>
              {config.public.map(({ component: Component, ...rest }, i) => (
                <PrivateRoute key={i} {...rest}>
                  <Component />
                </PrivateRoute>
              ))}
            </Switch>
          </Suspense>
        </LoggedLayout>
      </Switch>
    </Router>
  );
}

export default Routes;
