/* global process */
import Rollbar from 'rollbar';

const rollbarConfig = new Rollbar({
  accessToken: '49b102dcb6414a4bb07079882f443d7b',
  environment: process.env.NODE_ENV || 'development',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

export default rollbarConfig;
