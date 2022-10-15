let nglAddress = "0xB1DdF580C253850f632C5c5738fC42093B64EDFc";

let network = "https://data-seed-prebsc-2-s3.binance.org:8545/"
let abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformA",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_platformB",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_platformC",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_trashAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_withdrawThreshold",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "inviterId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Redeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "name": "RewardV4",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "oldLevel",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "newLevel",
                "type": "uint8"
            }
        ],
        "name": "Upgrade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "reward",
                "type": "uint256"
            }
        ],
        "name": "WithDraw",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "BOT_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MANAGER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_memberId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint248",
                "name": "_up",
                "type": "uint248"
            },
            {
                "internalType": "uint256",
                "name": "_down",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "addLevel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            }
        ],
        "name": "canUpgrade",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "inviterId",
                "type": "uint256"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "depositToMarket",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "depositToPlatform",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "depositToStatic",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            }
        ],
        "name": "directInvitation",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "emencyWithDraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "levelId",
                "type": "uint8"
            }
        ],
        "name": "getLevel",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint8",
                        "name": "id",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint248",
                        "name": "front",
                        "type": "uint248"
                    },
                    {
                        "internalType": "uint256",
                        "name": "back",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NGL.Level",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upgradeToV1Amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upgradeToV1Income",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upgradeToV2Amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upgradeToV2Income",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upgradeToV3Income",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upgradeToV3Amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upgradeToV4Income",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_upgradeToV4Amount",
                "type": "uint256"
            }
        ],
        "name": "initalize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            }
        ],
        "name": "inviterId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isInitalize",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketLevelFourToMember",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketLevelOneToMember",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketLevelThreeToMember",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketLevelTwoToMember",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToAllV4",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToDirect",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToInter",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToManager",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToV1",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToV2",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToV3",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "marketToV4",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "memberIdOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            }
        ],
        "name": "memberOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "_frontBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_backBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalDeposit",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalWithdraw",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalIncome",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_dynamicBalance",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_balance",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "_level",
                "type": "uint8"
            },
            {
                "internalType": "uint8",
                "name": "_marketLevel",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_lastDepositTime",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformA",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformABalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformB",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformBBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformC",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformCBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformToA",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformToB",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "platformToC",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_depositToPlatform",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_depositToStatic",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_depositToMarket",
                "type": "uint16"
            }
        ],
        "name": "resetFundRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "_marketToV1",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "_marketToV2",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "_marketToV3",
                "type": "uint64"
            },
            {
                "internalType": "uint64",
                "name": "_marketToV4",
                "type": "uint64"
            }
        ],
        "name": "resetManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_marketToDirect",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_marketToInter",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_marketToManager",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_marketToAllV4",
                "type": "uint16"
            }
        ],
        "name": "resetMarket",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_platformToC",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_platformToB",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_platformToA",
                "type": "uint16"
            }
        ],
        "name": "resetPlatformRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_staticToFrontSeventy",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_staticToInviation",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_staticToSelf",
                "type": "uint16"
            }
        ],
        "name": "resetStaticRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint16",
                "name": "_withdrawToFrontAndBack",
                "type": "uint16"
            },
            {
                "internalType": "uint16",
                "name": "_withdrawToSelf",
                "type": "uint16"
            }
        ],
        "name": "resetWithdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardV4",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_memberId",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "_marketLevel",
                "type": "uint8"
            }
        ],
        "name": "setMarketLevel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformA",
                "type": "address"
            }
        ],
        "name": "setPlatformA",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformB",
                "type": "address"
            }
        ],
        "name": "setPlatformB",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_platformC",
                "type": "address"
            }
        ],
        "name": "setPlatformC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_threshold",
                "type": "uint256"
            }
        ],
        "name": "setThreshold",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_trashAddress",
                "type": "address"
            }
        ],
        "name": "setTrashAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "marketLevel",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "needIncome",
                "type": "uint256"
            }
        ],
        "name": "setUpgradeIncome",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "setUpgradeToV1Income",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "setUpgradeToV2Amount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "staticToFrontSeventy",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "staticToInviation",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "staticToSelf",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "trashAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "trashBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "_levelId",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "updateLevel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            }
        ],
        "name": "upgrade",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV1Amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV1Income",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV2Amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV2Income",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV3Amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV3Income",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV4Amount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "upgradeToV4Income",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "v4balance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "memberId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withDraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawPlatformA",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawPlatformB",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawPlatformC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawThreshold",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawToFrontAndBack",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawToSelf",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawTrash",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

let web3;


// (async () => {
//     const Web3Modal = window.Web3Modal.default;
//     console.log(Web3Modal);
//     const providerOptions = {
//         /* See Provider Options Section */

//     };
    
//     const web3Modal = new Web3Modal({
//         network: "mainnet", // optional
//         cacheProvider: true, // optional
//         providerOptions // required
//     });
    
//     const provider = await web3Modal.connect();
//     console.log(provider);
//     web3 = new Web3(provider);
// })()

if (window.ethereum) {

    // web3 = new Web3(new Web3.providers.HttpProvider(network));
    web3 = new Web3(window.ethereum);

    window.ethereum.on("accountsChanged", (account) => {
        if (account == "") {
            msg("断开钱包");
        } else {
            msg('链接钱包成功，当前账户：' + account);
            getInfo();
        }
    })

} else {
    alert("请先安装MetaMask钱包");
    window.location.href = "https://metamask.io";
}


function connectWallet() {
    if (window.ethereum) {
        window.ethereum.enable();
        
    } else {
        alert("请先安装MetaMask钱包");
        window.location.href = "https://metamask.io";
    }
    
}

function msg(txt) {
    layer.open({
        content: txt
        , skin: 'msg'
        , time: 2 //2秒后自动关闭
        , style: 'background-color:#09C1FF; color:#fff; border:none;' //自定风格
    });
}
// ================== WEB3 FUNCTION ===================
async function getWeb3Account() {
    let accounts = await web3.eth.getAccounts();
    return accounts[0];
}



async function getERC20Balance(account) {
    // let erc20Contract = new web3.eth.Contract(tokenABI, tokenAddress);
    // let balance = await erc20Contract.methods.balanceOf(account).call();
    let balance = await web3.eth.getBalance(account);
    return balance;
}

async function approve(account) {
    let erc20Contract = new web3.eth.Contract(tokenABI, tokenAddress);
    let blanace = await getERC20Balance(account);
    await erc20Contract.methods.approve(nglAddress, blanace).send({
        from: account
    })
}

// // ================== CONTRACT FUNCTION ===================

// // instantiation contract
const ngl = new web3.eth.Contract(abi, nglAddress);

async function totalDepositMember() {
    return await ngl.methods._memberId().call();
}

async function canUpgrade(memberId) {
    return await ngl.methods.canUpgrade(memberId).call();
}

async function withdrawThreshold() {
    return await ngl.methods.withdrawThreshold().call();
}

async function memberIdOf(address) {
    return await ngl.methods.memberIdOf(address).call({
        from: address
    });
}

async function getLevel(levelId) {
    return await ngl.methods.getLevel(levelId).call()
}

async function directInvitation(memberId) {
    return await ngl.methods.directInvitation(memberId).call()
}

async function inviterId(memberId) {
    let sender = await getWeb3Account();
    return await ngl.methods.inviterId(memberId).call({
        from: sender
    });
}

async function deposit(amount, inviterId) {
    let sender = await getWeb3Account();
    await ngl.methods.deposit(amount, inviterId).send({
        from: sender,
        value: amount
    })
}

async function redeposit(amount, memberId) {
    let sender = await getWeb3Account();
    await ngl.methods.redeposit(amount, memberId).send({
        from: sender,
        value: amount
    })
}

async function upgrade(memberId) {
    let sender = await getWeb3Account();
    await ngl.methods.upgrade(memberId).send({
        from: sender
    })
}

async function withdraw(memberId, amount) {
    let sender = await getWeb3Account();
    await ngl.methods.withDraw(memberId, amount).send({
        from: sender
    })
}

async function emencyWithdraw(account) {
    let sender = await getWeb3Account();
    await ngl.methods.emencyWithDraw(account).send({
        from: sender
    })
}

async function rewardV4() {
    let sender = await getWeb3Account();
    await ngl.methods.rewardV4().send({
        from: sender
    })
}

async function setIsStaticToSelf() {
    let sender = await getWeb3Account();
    await ngl.methods.setIsStaticToSelf().send({
        from: sender
    })
}

async function initalize(
    _upgradeToV1Income,
    _upgradeToV1Amount,
    _upgradeToV2Amount,
    _upgradeToV2Income,
    _upgradeToV3Income,
    _upgradeToV3Amount,
    _upgradeToV4Income,
    _upgradeToV4Amount
) {
    let sender = await getWeb3Account();
    await ngl.methods.initalize(
        _upgradeToV1Amount,
        _upgradeToV1Income,
        _upgradeToV2Amount,
        _upgradeToV2Income,
        _upgradeToV3Income,
        _upgradeToV3Amount,
        _upgradeToV4Income,
        _upgradeToV4Amount
    ).send({
        from: sender
    })
}

async function addLevel(up, down, value) {
    let sender = await getWeb3Account();
    await ngl.methods.addLevel(up, down, value).send({
        from: sender
    })
}

async function setUpgradeToV1Income(amount) {
    let sender = await getWeb3Account();
    await ngl.methods.setUpgradeToV1Income(amount).send({
        from: sender
    })
}

async function setUpgradeToV2Amount(amount) {
    let sender = await getWeb3Account();
    await ngl.methods.setUpgradeToV2Amount(amount).send({
        from: sender
    })
}

async function setUpgradeIncome(marketLevel, needIncome) {
    let sender = await getWeb3Account();
    await ngl.methods.setUpgradeIncome(marketLevel, needIncome).send({
        from: sender
    })
}

async function setMarketLevel(memberId, marketLevel) {
    let sender = await getWeb3Account();
    await ngl.methods.setMarketLevel(memberId, marketLevel).send({
        from: sender
    })
}

async function memberOf(memberId) {
    let sender = await getWeb3Account();
    return await ngl.methods.memberOf(memberId).call({
        from: sender
    })
}

async function setPlatformA(address) {
    let sender = await getWeb3Account();
    await ngl.methods.setPlatformA(address).send({
        from: sender
    })
}

async function setPlatformB(address) {
    let sender = await getWeb3Account();
    await ngl.methods.setPlatformB(address).send({
        from: sender
    })
}

async function setPlatformC(address) {
    let sender = await getWeb3Account();
    await ngl.methods.setPlatformC(address).send({
        from: sender
    })
}

async function resetFundRate(
    _depositToPlatform,
    _depositToStatic,
    _depositToMarket
) {
    let sender = await getWeb3Account();
    await ngl.methods.resetFundRate(
        _depositToPlatform,
        _depositToStatic,
        _depositToMarket
    ).send({
        from: sender
    })
}

async function resetStaticRate(
    _staticToFrontSeventy,
    _staticToInviation,
    _staticToSelf
) {
    let sender = await getWeb3Account();
    await ngl.methods.resetStaticRate(
        _staticToFrontSeventy,
        _staticToInviation,
        _staticToSelf
    ).send({
        from: sender
    })
}

async function resetPlatformRate(
    _platformToC,
    _platformToB,
    _platformToA
) {
    let sender = await getWeb3Account();
    await ngl.methods.resetPlatformRate(
        _platformToC,
        _platformToB,
        _platformToA
    ).send({
        from: sender
    })
}


async function resetMarket(
    _marketToDirect,
    _marketToInter,
    _marketToManager,
    _marketToV4
) {
    let sender = await getWeb3Account();
    await ngl.methods.resetMarket(
        _marketToDirect,
        _marketToInter,
        _marketToManager,
        _marketToV4
    ).send({
        from: sender
    })
}

async function resetWithdraw(
     _withdrawToFrontAndBack,
    _withdrawToSelf
) {
    let sender = await getWeb3Account();
    await ngl.methods.resetWithdraw(
        _withdrawToFrontAndBack,
        _withdrawToSelf
    ).send({
        from: sender
    })
}

async function resetManager(
    _marketToV1,
    _marketToV2,
    _marketToV3,
    _marketToV4
) {
    let sender = await getWeb3Account();
    await ngl.methods.resetManager(
        _marketToV1,
        _marketToV2,
        _marketToV3,
        _marketToV4
    ).send({
        from: sender
    })
}

async function setThreshold(_threshold) {
    let sender = await getWeb3Account();
    await ngl.methods.setThreshold(_threshold).send({
        from: sender
    })
}

async function setTrashAddress(trashAddress) {
    let sender = await getWeb3Account();
    await ngl.methods.setTrashAddress(trashAddress).send({
        from: sender
    })
}

async function platformABalance() {
    return await ngl.methods.platformABalance().call();
}

async function platformBBalance() {
    return await ngl.methods.platformBBalance().call();
}

async function platformCBalance() {
    return await ngl.methods.platformCBalance().call();
}

async function trashBalance() {
    return await ngl.methods.trashBalance().call();
}

async function v4Balance() {
    return await ngl.methods.v4balance().call();
}

async function managerViewInfo() {
    let v4Balance = await ngl.methods.v4balance().call();
    let platformA = await ngl.methods.platformA().call();
    let platformB = await ngl.methods.platformB().call();
    let platformC = await ngl.methods.platformC().call();
    let withdrawThreshold = await ngl.methods.withdrawThreshold().call();
    let upgradeToV1Income = await ngl.methods.upgradeToV1Income().call();
    let upgradeToV2Amount = await ngl.methods.upgradeToV2Amount().call();
    let upgradeToV2Income = await ngl.methods.upgradeToV2Income().call();
    let upgradeToV3Income = await ngl.methods.upgradeToV3Income().call();
    let upgradeToV4Income = await ngl.methods.upgradeToV4Income().call();

    let depositToPlatform = await ngl.methods.depositToPlatform().call();
    let depositToStatic = await ngl.methods.depositToStatic().call();
    let depositToMarket = await ngl.methods.depositToMarket().call();
    let platformToC = await ngl.methods.platformToC().call();
    let platformToB = await ngl.methods.platformToB().call();
    let platformToA = await ngl.methods.platformToA().call();
    let trashAddress = await ngl.methods.trashAddress().call();
    let staticToFrontSeventy = await ngl.methods.staticToFrontSeventy().call();
    let staticToInviation = await ngl.methods.staticToInviation().call();
    let staticToSelf = await ngl.methods.staticToSelf().call();
    let marketToDirect = await ngl.methods.marketToDirect().call();
    let marketToInter = await ngl.methods.marketToInter().call();
    let marketToManager = await ngl.methods.marketToManager().call();
    let marketToAllV4 = await ngl.methods.marketToAllV4().call();
    let marketToV1 = await ngl.methods.marketToV1().call();
    let marketToV2 = await ngl.methods.marketToV2().call();
    let marketToV3 = await ngl.methods.marketToV3().call();
    let marketToV4 = await ngl.methods.marketToV4().call();
    // let withdrawToRedeposit = await ngl.methods.withdrawToRedeposit().call();
    let withdrawToFrontAndBack = await ngl.methods.withdrawToFrontAndBack().call();
    let withdrawToSelf = await ngl.methods.withdrawToSelf().call();
    let curr_withdrawThreshold = await ngl.methods.withdrawThreshold().call();

    return {
        trashAddress,
        v4Balance,
        platformA,
        platformB,
        platformC,
        withdrawThreshold,
        upgradeToV1Income,
        upgradeToV2Amount,
        upgradeToV2Income,
        upgradeToV3Income,
        upgradeToV4Income,
        depositToPlatform,
        depositToStatic,
        depositToMarket,
        platformToC,
        platformToB,
        platformToA,
        staticToFrontSeventy,
        staticToInviation,
        staticToSelf,
        marketToDirect,
        marketToInter,
        marketToManager,
        marketToAllV4,
        marketToV1,
        marketToV2,
        marketToV3,
        marketToV4,
        withdrawToFrontAndBack,
        withdrawToSelf,
        curr_withdrawThreshold
    }
}

async function marketLevelFourToMember() {
    return await ngl.methods.marketLevelFourToMember().call();
}

async function updateLevel(value){
    let sender = await getWeb3Account();
    await ngl.methods.updateLevel("1", value).send({
        from: sender
    });
}

async function staticToSelf() {
    return  await ngl.methods.staticToSelf().call();
}

async function withdrawPlatformA() {
    let sender = await getWeb3Account();
    await ngl.methods.withdrawPlatformA().send({
        from: sender
    });
}

async function withdrawPlatformB() {
    let sender = await getWeb3Account();
    await ngl.methods.withdrawPlatformB().send({
        from: sender
    });
}

async function withdrawPlatformC() {
    let sender = await getWeb3Account();
    await ngl.methods.withdrawPlatformC().send({
        from: sender
    });
}

async function withdrawTrash() {
    let sender = await getWeb3Account();
    await ngl.methods.withdrawTrash().send({
        from: sender
    });
}

// ================== LISTEN EVENT ===================

function Deposit(callback) {
    ngl.events.Deposit({}, callback)
}

function Upgrade(callback) {
    ngl.events.Upgrade({}, callback)
}

function WithDraw(callback) {
    ngl.events.WithDraw({}, callback)
}

function RewardV4(callback) {
    ngl.events.RewardV4({}, callback)
}
// export {
//     web3,
//     getWeb3Account,
//     getERC20Balance,
//     deposit,
//     upgrade,
//     withdraw,
//     emencyWithdraw,
//     rewardV4,
//     initalize,
//     addLevel,
//     setUpgradeToV1Income,
//     setUpgradeToV2Amount,
//     setUpgradeIncome,
//     setV1Account,
//     memberOf,
//     setPlatformA,
//     setPlatformB,
//     setPlatformC,
//     resetFundRate,
//     resetMarket,
//     resetPlatformRate,
//     resetStaticRate,
//     resetWithdraw,
//     Deposit,
//     Upgrade,
//     WithDraw,
//     RewardV4
// }

