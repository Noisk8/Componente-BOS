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

## Consideraciones Importantes

- La adaptación del contrato permite registrar información detallada sobre la donación, incluyendo la sección de blog o post asociada.
- Se recomienda seguir las mejores prácticas de seguridad al interactuar con contratos inteligentes.
- La documentación del ABI debe ser seguida rigurosamente para garantizar una integración exitosa.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentra algún problema o tiene sugerencias de mejora, por favor, abra un problema o envíe una solicitud de extracción.

¡Gracias por utilizar el backend del contrato inteligente para donaciones en Aurora adaptado para BOS Certification en Open Web Academy!


LAS DOS DE LECTRURA CUANTAS DONACIONES HAN  EN HECHO Y EL LOG DE LAS UTIMAS 


Y EL DE ESCRITURA ES EL QUE HACE LA DONACIÓN 
