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



BACKEND



El Backend está diseñado de tal manera que por medio de un contrato inteligent en solidy diseñado para la evm en testnet aurora  

Estructura del contrato
ARRAY 5 posiciones 

se encarga de almacenar la uinfo de las ulñtyimas donaciones 


con el fin del liberar memoria en el contrarto 

un metodo que retiorna cuantas donaciones ah hecho 

metdodo retorna las ulttimas 5 donaciones 

El metodo más importante es que l hace la donación.

EN BOS se inclyenyo por medio de ether js la funcionalidad en la pagina de tipe me 

AEL ABI LO que genera es un json quwe le muestra a lib ethers la funciones "descriptior de las funciones"

dos lectura y una de escritura 


LAS DOS DE LECTRURA CUANTAS DONACIONES HAN  EN HECHO Y EL LOG DE LAS UTIMAS 


Y EL DE ESCRITURA ES EL QUE HACE LA DONACIÓN 
