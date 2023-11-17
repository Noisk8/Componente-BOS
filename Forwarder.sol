//Contrato adaptado para  BOS certification pode Open web academy
/*adaptación de donación de 1 cafe a una donación con registro de que
sección de blog  o post fué en el que recibión la donación
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Forwarder {
   
uint8 ratingIndex = 0; //indice para agregar la ultima donación
uint256 coffeeQTY = 0; //cantidad de donaciones hechas
   
//Estructura básica de la donación
struct Coffee {
        uint256 timestamp;
        string title;
        address sender;
        string name;
        string message;
        uint8 rating;
 }
  //Sólo se guardan las últimas 5 donaciones 
  Coffee[5] coffeeLog;

   //retorno de las ultimas 5 donaciones
    function getCoffeeLog() public view returns (Coffee[5] memory) {
        return coffeeLog;
    }

   //retorno de la cantida de donaciones hechas 
   function getCoffeeQTY() public view returns (uint256) {
        return coffeeQTY;
    }

//donación, por parámetro se reenvia el fondo enviado a la dirección indicada    
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
