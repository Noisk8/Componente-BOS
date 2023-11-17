// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Forwarder {
    uint8 ratingIndex = 0;
    uint256 coffeeQTY = 0;
    struct Coffee {
        uint256 timestamp;
        string title;
        address sender;
        string name;
        string message;
        uint8 rating;
    }
    Coffee[5] coffeeLog;

    function getCoffeeLog() public view returns (Coffee[5] memory) {
        return coffeeLog;
    }

    function getCoffeeQTY() public view returns (uint256) {
        return coffeeQTY;
    }

    function donateCoffee(
        string memory _title,
        address destination,
        string memory _name,
        string memory _message,
        uint8 _rating
    ) public payable {
        require(
            msg.value > 0,
            "Please send the quantity of a cofffee or a little more :) "
        );

        if (ratingIndex > 4) {
            ratingIndex = 0;
        }
        coffeeLog[ratingIndex] = (
            Coffee(
                block.timestamp,
                _title,
                msg.sender,
                _name,
                _message,
                _rating
            )
        );
        address payable owner = payable(destination);
        (bool success, ) = owner.call{value: msg.value}("");
        require(success == true, "Donation unsucessfull :( )");
        coffeeQTY = coffeeQTY + 1;
        ratingIndex = ratingIndex + 1;
    }
}