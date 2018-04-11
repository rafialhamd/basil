import * as config from '../../truffle.js';

export const ACTIVE_NETWORK = config.networks.development;

const deployData = require(`../../deploy/deploy_data.${ACTIVE_NETWORK.name}.json`);
export const BASIL_ADDRESS = deployData.contracts.Basil.proxyAddress;
