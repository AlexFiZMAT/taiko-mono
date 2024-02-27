"use strict";
const ADDRESS_LENGTH = 40;

module.exports = {
  ownerTimelockController: "0x5C8dA51Fd337936Ed0c49480E7A5aD7bCEc2217A",
  ownerSecurityCouncil: "0xAb707cb80e7de7C75d815B1A653433F3EEc44c74",
  ownerChainId: 32382,
  chainId: 167001,
  seedAccounts: [
    {
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266": 1024,
    },
    {
      "0x70997970C51812dc3A010C7d01b50e0d17dc79C8": 1024,
    },
    {
      "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC": 1024,
    },
    {
      "0x90F79bf6EB2c4f870365E785982E1f101E93b906": 1024,
    },
    {
      "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65": 1024,
    },
    {
      "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc": 1024,
    },
    {
      "0x976EA74026E726554dB657fA54763abd0C3a0aa9": 1024,
    },
    {
      "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955": 1024,
    },
    {
      "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f": 1024,
    },
    {
      "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720": 1024,
    },
    {
      "0xBcd4042DE499D14e55001CcbB24a551F3b954096": 1024,
    },
    {
      "0x71bE63f3384f5fb98995898A86B02Fb2426c5788": 1024,
    },
    {
      "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a": 1024,
    },
    {
      "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec": 1024,
    },
    {
      "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097": 1024,
    },
    {
      "0xcd3B766CCDd6AE721141F452C550Ca635964ce71": 1024,
    },
    {
      "0x2546BcD3c84621e976D8185a91A922aE77ECEc30": 1024,
    },
    {
      "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E": 1024,
    },
    {
      "0xdD2FD4581271e230360230F9337D5c0430Bf44C0": 1024,
    },
    {
      "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199": 1024,
    },
    {
      "0x7D86687F980A56b832e9378952B738b614A99dc6": 1024,
    },
    {
      "0x11e8F3eA3C6FcF12EcfF2722d75CEFC539c51a1C": 1024,
    },
    {
      "0x9eAF5590f2c84912A08de97FA28d0529361Deb9E": 1024,
    },
    {
      "0x1003ff39d25F2Ab16dBCc18EcE05a9B6154f65F4": 1024,
    },
    {
      "0x4779d18931B35540F84b0cd0e9633855B84df7b8": 1024,
    },
    {
      "0x1c87Bb9234aeC6aDc580EaE6C8B59558A4502220": 1024,
    },
    {
      "0x0d803cdeEe5990f22C2a8DF10A695D2312dA26CC": 1024,
    },
    {
      "0xAb707cb80e7de7C75d815B1A653433F3EEc44c74": 1024,
    },
    {
      "0xe8B1ff302A740fD2C6e76B620d45508dAEc2DDFf": 1024,
    },
    {
      "0xa0EC9eE47802CeB56eb58ce80F3E41630B771b04": 1024,
    },
    {
      "0x042a63149117602129B6922ecFe3111168C2C323": 1024,
    },
    {
      "0xA1196426b41627ae75Ea7f7409E074BE97367da2": 1024,
    },
    {
      "0xE74cEf90b6CF1a77FEfAd731713e6f53e575C183": 1024,
    },
    {
      "0x7Df8Efa6d6F1CB5C4f36315e0AcB82b02Ae8BA40": 1024,
    },
    {
      "0x9E126C57330FA71556628e0aabd6B6B6783d99fA": 1024,
    },
    {
      "0xcBDc0F9a4C38f1e010bD3B6e43598A55D1868c23": 1024,
    },
    {
      "0xBc5BdceE96b1BC47822C74e6f64186fbA7d686be": 1024,
    },
    {
      "0x0536896a5e38BbD59F3F369FF3682677965aBD19": 1024,
    },
    {
      "0xFE0f143FcAD5B561b1eD2AC960278A2F23559Ef9": 1024,
    },
    {
      "0x98D08079928FcCB30598c6C6382ABfd7dbFaA1cD": 1024
    }
  ],
  get contractAddresses() {
    return {
      // ============ Implementations ============
      // Shared Contracts
      BridgeImpl: getConstantAddress(`0${this.chainId}`, 1),
      ERC20VaultImpl: getConstantAddress(`0${this.chainId}`, 2),
      ERC721VaultImpl: getConstantAddress(`0${this.chainId}`, 3),
      ERC1155VaultImpl: getConstantAddress(`0${this.chainId}`, 4),
      SignalServiceImpl: getConstantAddress(`0${this.chainId}`, 5),
      SharedAddressManagerImpl: getConstantAddress(`0${this.chainId}`, 6),
      BridgedERC20Impl: getConstantAddress(`0${this.chainId}`, 10096),
      BridgedERC721Impl: getConstantAddress(`0${this.chainId}`, 10097),
      BridgedERC1155Impl: getConstantAddress(`0${this.chainId}`, 10098),
      RegularERC20: getConstantAddress(`0${this.chainId}`, 10099),
      // Rollup Contracts
      TaikoL2Impl: getConstantAddress(`0${this.chainId}`, 10001),
      RollupAddressManagerImpl: getConstantAddress(`0${this.chainId}`, 10002),
      // ============ Proxies ============
      // Shared Contracts
      Bridge: getConstantAddress(this.chainId, 1),
      ERC20Vault: getConstantAddress(this.chainId, 2),
      ERC721Vault: getConstantAddress(this.chainId, 3),
      ERC1155Vault: getConstantAddress(this.chainId, 4),
      SignalService: getConstantAddress(this.chainId, 5),
      SharedAddressManager: getConstantAddress(this.chainId, 6),
      // Rollup Contracts
      TaikoL2: getConstantAddress(this.chainId, 10001),
      RollupAddressManager: getConstantAddress(this.chainId, 10002),
    };
  },
  param1559: {
    gasExcess: 1,
  },
  predeployERC20: true,
};

function getConstantAddress(prefix, suffix) {
  return `0x${prefix}${"0".repeat(
    ADDRESS_LENGTH - String(prefix).length - String(suffix).length,
  )}${suffix}`;
}
