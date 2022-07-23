const { ethers } = require("hardhat");

const developmentChains = ["hardhat", "localhost"];
const MIN_DELAY = 3600;
const VOTING_PERIOD = 5;
const VOTING_DELAY = 1;
const QUORUM_PERCENTAGE = 4;

module.exports = { developmentChains, MIN_DELAY, VOTING_PERIOD, VOTING_DELAY, QUORUM_PERCENTAGE }