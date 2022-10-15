pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract DepositETH is AccessControl {
    using EnumerableSet for EnumerableSet.UintSet;
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    uint256 public depositId;
    mapping(uint256 => Deposit) public _deposits;

    mapping(address => EnumerableSet.UintSet) private _depositOf;


    struct Deposit {
        uint256 id;
        address owner;
        uint256 timestamp;
        uint256 value;
        uint256 unlockTimestamp;
    }

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _grantRole(MANAGER_ROLE, _msgSender());
    }

    function deposit(uint256 time) public payable {
        require(msg.value > 0, "Empty value");
        require(time > block.timestamp);
        Deposit memory deposit = Deposit(
            depositId,
            _msgSender(), 
            block.timestamp, 
            msg.value, 
           time
        );

        _depositOf[_msgSender()].add(depositId);
        _deposits[depositId] = deposit;
        depositId++;
    }

    function redeem(uint256 _depositId) public {
        Deposit memory deposit = _deposits[_depositId];
        require(deposit.owner == _msgSender(), "Invalid owner");
        require(deposit.unlockTimestamp <= block.timestamp, "Invalid time");

        _depositOf[_msgSender()].remove(_depositId);
        delete _deposits[_depositId];

        payable(deposit.owner).transfer(deposit.value);
    }

    function balanceOf(address account) public view returns (uint256[] memory) {
        return _depositOf[account].values();
    }

    function emergencyWithdraw(address account) public onlyRole(MANAGER_ROLE) {
        uint256 balance = address(this).balance;
        require(balance > 0, "Not enough balance");
        payable(account).transfer(balance);
    }

    receive() external payable {}
}
