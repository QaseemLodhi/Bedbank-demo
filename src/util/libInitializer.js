import { initGTM } from "./GoogleTagManagerService";

const { REACT_APP_DEPLOYMENT_ENVIRONMENT: TARGET_ENV } = process.env;

const initializeLibraries = () => {
  const loaders = {
    development: [initGTM()],
    staging: [],
    production: []
  };
  if (!loaders[TARGET_ENV]) return;
  loaders[TARGET_ENV].map(initiateLibrary => initiateLibrary());
};

export default initializeLibraries;
