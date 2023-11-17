# Componente-BOS


# TIPE ME

Es una aplicación que permite a los usuarios del ecosistema de NEAR dar y recibir propinas por su activiadad en foros, creación  de componentes, notas etc etc.

Por medio de un boton ubicado en difrenetes plataformas puedes dar una propina a un usuario y premiearlo por su buen trabajo 

TIPE ME  surge en el marco de Open web Academy piloto BOS, donde la intención es experimentar con las diversas posibilidades que brinda la tecnolgia de BOS.


TIPE está hecho en su totalidad con componentes de BOS  

FONT END 

El FrontEnd está diseñado cómo una landing page minimalista hecho con componentes hechos de 0 basado en la documentación de [Bootstrap](https://getbootstrap.com/) y con otros componentes de la [biblioteca de componentes](https://near.org/components) de BOS.

Componentes de la interfaz 
 
 * [NavBar](https://github.com/Noisk8/Componente-BOS/blob/main/componentes/navbar.jsx)

 * [Web3 Connect]()

 * [Cards](https://github.com/Noisk8/Componente-BOS/blob/main/componentes/card.jsx)

 * [Tabla de registro](https://github.com/Noisk8/Componente-BOS/blob/main/componentes/tabla.jsx)

 * [Acordeon](https://github.com/Noisk8/Componente-BOS/blob/main/componentes/acordion.jsx)

 * [About](https://github.com/Noisk8/Componente-BOS/blob/main/componentes/about.jsx)

 * [Landing](https://github.com/Noisk8/Componente-BOS/blob/main/componentes/landing.jsx)

La interfaz cuenta con un navbar, un par de cajas con sombras que permiten al puedes enviar las donaciones y visualizar el registro de los ultimos 5 donantes 

El landing se puede referenciar en [este archivo](https://github.com/Noisk8/Componente-BOS/blob/main/componentes/landing.jsx) Y los componentes se pueden ver por partes en la [carpeta](https://github.com/Noisk8/Componente-BOS/tree/main/componentes) de componentes de este repositorio.

## Backend del Contrato Inteligente para Donaciones 

Este documento proporciona información sobre el backend del contrato inteligente diseñado para gestionar donaciones en la red de prueba Aurora, adaptado para la certificación BOS en Open Web Academy.

## Estructura del Contrato

El contrato inteligente es un adaptación de donación, permitiendo registrar la sección de blog o post que recibió la donación en lugar de simplemente un café.

### Métodos del Contrato

1. **`getCoffeeLog`**
   - Descripción: Retorna las últimas 5 donaciones realizadas, incluyendo detalles como la marca de tiempo, título, remitente, nombre, mensaje y calificación.
   - Tipo de retorno: Array de estructuras `Coffee`.

2. **`getCoffeeQTY`**
   - Descripción: Retorna la cantidad total de donaciones realizadas.
   - Tipo de retorno: Entero (uint256).

3. **`donateCoffee`**
   - Descripción: Método principal que permite realizar una donación, registrando la sección de blog o post que recibirá la donación.
   - Parámetros:
     - `_title`: Título de la sección de blog o post.
     - `destination`: Dirección del destinatario de la donación.
     - `_name`: Nombre del remitente.
     - `_message`: Mensaje asociado a la donación.
     - `_rating`: Calificación de la donación.
   - Requiere: La cantidad de la donación debe ser mayor a 0.

## Uso del Contrato

El contrato permite donar fondos a una dirección específica, registrando la información de la donación y limitando el registro a las últimas 5 donaciones.

## Integración con BOS (Back-Office System)

La integración con BOS se realiza mediante Ether.js para facilitar la comunicación entre el frontend y el contrato inteligente. Se utilizan las funciones `getCoffeeLog` y `getCoffeeQTY` para lecturas, y `donateCoffee` para realizar una donación.


~~~
# Documentación Desglosada del Contrato Inteligente para Donaciones

A continuación se presenta un desglose línea por línea del contrato inteligente para donaciones, adaptado para la certificación BOS en Open Web Academy.

```solidity
// Contrato adaptado para BOS certification en Open Web Academy
// Adaptación de donación con registro de la sección de blog o post
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Forwarder {
   
    uint8 ratingIndex = 0; // Índice para agregar la última donación
    uint256 coffeeQTY = 0; // Cantidad de donaciones hechas

    // Estructura básica de la donación
    struct Coffee {
        uint256 timestamp;
        string title;
        address sender;
        string name;
        string message;
        uint8 rating;
    }

    // Sólo se guardan las últimas 5 donaciones
    Coffee[5] coffeeLog;

    // Retorno de las últimas 5 donaciones
    function getCoffeeLog() public view returns (Coffee[5] memory) {
        return coffeeLog;
    }

    // Retorno de la cantidad de donaciones hechas 
    function getCoffeeQTY() public view returns (uint256) {
        return coffeeQTY;
    }

    // Donación, por parámetro se reenvía el fondo enviado a la dirección indicada    
    function donateCoffee(
        string memory _title,
        address destination,
        string memory _name,
        string memory _message,
        uint8 _rating
    ) public payable {
        require(
            msg.value > 0,
            "Please send the quantity of a coffee or a little more :)"
        );

        if (ratingIndex > 4) {
            ratingIndex = 0;
        }
        
        coffeeLog[ratingIndex] = Coffee(
            block.timestamp,
            _title,
            msg.sender,
            _name,
            _message,
            _rating
        );

        address payable owner = payable(destination);
        (bool success, ) = owner.call{value: msg.value}("");
        require(success == true, "Donation unsuccessful :(");
        
        coffeeQTY = coffeeQTY + 1;
        ratingIndex = ratingIndex + 1;
    }
}

~~~


## ABI 

Este ABI describe las tres funciones principales del contrato inteligente: donateCoffee, getCoffeeLog, y getCoffeeQTY. Puedes utilizar este ABI junto con lib ethers para interactuar con el contrato desde el frontend y realizar operaciones como hacer donaciones, obtener el registro de donaciones y la cantidad total de donaciones realizadas. Si tienes alguna pregunta o inquietud, no dudes en preguntar. ¡Gracias por tu interés en el contrato inteligente para donaciones!


## Screenshots

![Captura desde 2023-11-17 00-14-23](https://github.com/Noisk8/Componente-BOS/assets/17709296/1de92679-a6ac-422a-9327-e2446402fd3a)

![Captura desde 2023-11-17 00-17-24](https://github.com/Noisk8/Componente-BOS/assets/17709296/0383337b-4248-4a4f-9b18-f54e5a315814)
![Captura desde 2023-11-17 00-17-29](https://github.com/Noisk8/Componente-BOS/assets/17709296/804d2f3d-ae23-4dc2-a9fa-4cb203219bfa)
![](https://github.com/Noisk8/Componente-BOS/blob/main/img/Captura%20desde%202023-11-17%2000-19-)
|[](https://github.com/Noisk8/Componente-BOS/blob/main/img/Captura%20desde%202023-11-17%2000-24-22.png)
![](https://github.com/Noisk8/Componente-BOS/blob/main/img/Captura%20desde%202023-11-17%2000-24-52.png)












