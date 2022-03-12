const SampleToken = artifacts.require("DanielToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken, 1000000000);
};

