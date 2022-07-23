import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
// @ts-ignore
import { MIN_DELAY } from "../helper-hardhat-config";

const deployTimelock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("Deploying Timelock...");

  const timelock = await deploy("Timelock", {
    from: deployer,
    args: [MIN_DELAY, [], []],
    log: true
  });
}

export default deployTimelock;