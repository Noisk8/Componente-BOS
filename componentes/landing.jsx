//Contrato desplegado en aurora testnet
const tipMeContract = "0x57E094946e737694fCdADfdF2f2FfbfC8c6F99e4";

//Abi del contrato
const tipMetAbi = fetch(
  "https://raw.githubusercontent.com/Noisk8/Componente-BOS/main/Forwarder_abi.txt"
);
//aproximadamente medio dolar en aurora
const donationAmount = ethers.utils.parseEther("0.000282233502538071");
let amountToSend = 0;

let donators = [];
let qty = 0;
State.init({
  qty, //cantidad de donaciones
  donators, //arreglo de los ultimas donaciones
  name: "", //nombre del donador
  message: "", //mensaje
  amountToSend: 0, //equivalente a 1 dolar
});

//Función que convierte 1 dolar a eth precio mercado
const ethQty = () => {
  asyncFetch(`https://api.coingecko.com/api/v3/coins/ethereum`)
    .catch((err) => {
      console.log(err);
    })
    .then((res) => {
      let data = res.body;
      let ethPrice = data.tickers[0].last;
      let qty = 1 / ethPrice;

      let roundedNumber = parseFloat(qty.toFixed(18));
      State.update({ amountToSend: roundedNumber });
      amountToSend = roundedNumber;
    });
};

const tipMe = () => {
  const contract = new ethers.Contract(
    tipMeContract,
    tipMetAbi.body,
    Ethers.provider().getSigner()
  );
  //llamado para hacer la donación
  const amount = ethers.utils.parseEther(amountToSend.toString());
  contract
    .donateCoffee(
      "El articulo",
      "0x2929a620D5C1c6246FBCBB68AF7966968CBe9c12",
      state.name,
      state.message,
      5,
      {
        value: amount,
      }
    )
    .then((res) => console.log(res));
};

const tipsQty = () => {
  //llamado para traer cuando donaciones se han realizado
  const contract = new ethers.Contract(
    tipMeContract,
    tipMetAbi.body,
    Ethers.provider().getSigner()
  );

  contract.getCoffeeQTY().then((res) => {
    let qtyDonations = parseInt(res, 16);
    State.update({ qty: qtyDonations });
  });
};

const getDonators = () => {
  const contract = new ethers.Contract(
    tipMeContract,
    tipMetAbi.body,
    Ethers.provider().getSigner()
  );
  //llamado al contrato de las donadiones y formateo de la infomacion
  contract.getCoffeeLog().then((info) => {
    donators = [];
    info.map((data) => {
      if (data[1] != "") {
        let date = parseInt(data[0], 16);

        const myDate = new Date(date * 1000);
        donators.push({
          date: myDate.toLocaleString(),
          title: data[1],
          name: data[3],
          message: data[4],
          rating: data[5],
        });
      }
    });
    State.update({ donators: donators });
  });
};

ethQty();
// estrellitas
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 0.3rem;
  --stroke: #666;
  --fill: #ffc73a;

  input {
    appearance: unset;
    display: none;

  }

  label {
    cursor: pointer;
  }

  svg {
    width: 2rem;
    height: 2rem;
    overflow: visible;
    fill: transparent;
    stroke: var(--stroke);
    stroke-linejoin: bevel;
    stroke-dasharray: 12;
    animation: idle 4s linear infinite;
    transition: stroke 0.2s, fill 0.5s;
  }

  label:hover svg {
    stroke: var(--fill);
  }

  input:checked ~ label svg {
    transition: 0s;
    animation: idle 4s linear infinite, yippee 0.75s backwards;
    fill: var(--fill);
    stroke: var(--fill);
    stroke-opacity: 0;
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
  }

  @keyframes idle {
    from {
      stroke-dashoffset: 24;
    }
  }

  @keyframes yippee {
    0% {
      transform: scale(1);
      fill: var(--fill);
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke: var(--stroke);
      stroke-dasharray: 10;
      stroke-width: 1px;
      stroke-linejoin: bevel;
    }

    30% {
      transform: scale(0);
      fill: var(--fill);
      fill-opacity: 0;
      stroke-opacity: 1;
      stroke: var(--stroke);
      stroke-dasharray: 10;
      stroke-width: 1px;
      stroke-linejoin: bevel;
    }

    30.1% {
      stroke: var(--fill);
      stroke-dasharray: 0;
      stroke-linejoin: miter;
      stroke-width: 8px;
    }

    60% {
      transform: scale(1.2);
      fill: var(--fill);
    }
  }`;

const giveme = () => {};
const Button0018 = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0.4rem 3rem;
  margin: 20px ;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  display: inline-block;
  letter-spacing: 0.05rem;
  border-radius: 5px;
  overflow: hidden;
  background: #1974D2;
  color: ghostwhite;

  span {
    position: relative;
    z-index: 10;
    transition: color 0.4s;
  }

  &:hover span {
    color: black;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &::before {
    content: "";
    background: #000;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }

  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }`;
const text = props.text || "Button0018";
const fontsize = props.fontsize;
const fontweight = props.fontweight;

return (
  <>
    // Este es un componente de barra de navegación. Se utiliza para navegar por las diferentes secciones de la página.
    <div className="bg-light-subtle">
      // Este es un contenedor que contiene la barra de navegación.
      <div class="navbar navbar-expand-lg bg-body-tertiary">
        // Este es un contenedor fluido que se utiliza para un diseño responsivo.
        <div class="container-fluid">
          // Este es un botón que se utiliza para colapsar la barra de navegación en dispositivos más pequeños.
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            // Este es el icono del botón de la barra de navegación.
            <span class="navbar-toggler-icon"></span>
          </button>
          // Este es el contenedor que se colapsa en dispositivos más pequeños.
          <div
            class="collapse navbar-collapse btn-group "
            role="group"
            id="navbarSupportedContent"
            aria-label="Basic outlined example"
          >
            // Esta es la lista de elementos de la barra de navegación.
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              // Estos son los elementos individuales de la barra de navegación.
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <button type="button" class="btn btn-outline-primary">
                    Acerca De
                  </button>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <button type="button" class="btn btn-outline-primary">
                    Docomentación
                  </button>
                </a>
              </li>
              // Este es un elemento desplegable de la barra de navegación.
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Github
                  </button>
                </a>
                // Este es el menú desplegable del elemento desplegable.
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      <button type="button" class="btn btn-outline-primary">
                        Middle
                      </button>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <button type="button" class="btn btn-outline-primary">
                        Left
                      </button>
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      <button type="button" class="btn btn-outline-primary">
                        Middle
                      </button>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            // Este es un contenedor para el botón de conexión de la billetera.
            <div class="d-flex">
              <Web3Connect
                className="ConnectButton "
                connectLabel="Conetar Billetera"
              />
            </div>
          </div>
        </div>
      </div>

      // Este es un contenedor que contiene un título, una imagen y un formulario.
      <div className="container text-center mt-5">
        // Este es un contenedor flexible que alinea sus hijos en el centro y en la parte inferior.
        <div className="d-flex flex-column align-items-center mb-3">
          // Este es un título que dice "Tipe Me".
          <h1> Tipe Me  </h1>
          // Esta es una imagen que se obtiene de una URL. La imagen tiene un ancho de 200px y tiene una clase que agrega un margen inferior.
          <img
            src="https://raw.githubusercontent.com/Noisk8/Componente-BOS/main/img/tipeme.png"
            alt="Gif"
            width="200px"
            className="mb-4"
          />

          // Este es un contenedor flexible que alinea sus hijos en el centro y tiene un fondo claro. También tiene un padding y una sombra.
          <div className="d-flex justify-content-center align-items-center flex-column bg-light p-3 shadow-lg rounded mb-4">
            // Este es un grupo de formularios que contiene un campo de entrada.
            <div className="form-group">
              // Este es un campo de entrada que acepta texto. Tiene varias propiedades como requerido, longitud mínima y máxima, tamaño y un marcador de posición.
              // Cuando el valor de este campo cambia, actualiza el estado con el nuevo valor.
              <input
                className="form-control mt-2"
                type="text"
                id="name"
                name="name"
                required
                minLength="4"
                maxLength="8"
                size="10"
                placeholder="Nombre del Donante"
                onChange={(event) => State.update({ name: event.target.value })}
              />
            </div>

            // Este es un grupo de formularios que contiene un área de texto.
            <div className="form-group mb-4">
              // Este es un área de texto que acepta texto. Tiene varias propiedades como un marcador de posición.
              // Cuando el valor de este campo cambia, actualiza el estado con el nuevo valor.
              <textarea
                class="form-control mt-4"
                placeholder="Sugerencias"
                aria-label="Con textarea"
                onChange={(event) =>
                  State.update({ message: event.target.value })
                }
              ></textarea>
            </div>
            // Este es un contenedor que contiene un grupo de botones de radio para la calificación.
            <div class="mb-2">
              <RatingContainer>
                // Estos son los botones de radio para la calificación. Cada uno tiene un valor y un identificador único.
                // También tienen una etiqueta asociada que contiene un SVG para la estrella de la calificación.
                <input
                  type="radio"
                  id="estrella-1"
                  name="radio-estrella"
                  value="estrella-1"
                />
                <label for="estrella-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      pathLength="360"
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    ></path>
                  </svg>
                </label>
                <input
                  type="radio"
                  id="estrella-2"
                  name="radio-estrella"
                  value="estrella-2"
                />
                <label for="estrella-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      pathLength="360"
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    ></path>
                  </svg>
                </label>
                <input
                  type="radio"
                  id="estrella-3"
                  name="radio-estrella"
                  value="estrella-3"
                />
                <label for="estrella-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      pathLength="360"
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    ></path>
                  </svg>
                </label>
                <input
                  type="radio"
                  id="estrella-4"
                  name="radio-estrella"
                  value="estrella-4"
                />
                <label for="estrella-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      pathLength="360"
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    ></path>
                  </svg>
                </label>
                <input
                  type="radio"
                  id="estrella-5"
                  name="radio-estrella"
                  value="estrella-5"
                />
                <label for="estrella-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      pathLength="360"
                      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                    ></path>
                  </svg>
                </label>
              </RatingContainer>

              <div></div>
            </div>

            <Button0018
              fontsize={fontsize}
              fontweight={fontweight}
              onClick={tipMe}
            >
              <span>Tipe Me $1  </span>
            </Button0018>
          </div>

          <h1 className="mt-4 mb-4 text-center"> Ultimas Donaciones</h1>

          <div class=" bg-light p-3 shadow-lg rounded">
            <div class="mb-4">
              <button onClick={tipsQty}>cantidad donaciones</button>
            </div>
            <h2 className=" mt-2">cantidad tips: {state.qty}</h2>

            <div class="mt-4">
              <button onClick={getDonators}>ultimos donantes</button>
            </div>
          </div>
          <div class="mt-4">
            <table className="table table-bordered table-hover table-responsive bg-light p-3 shadow-lg rounded">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Articulo</th>
                  <th scope="col">Donante</th>
                  <th scope="col">Mensaje</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                {console.log(state.donators)}
                {state.donators.map((donator) => {
                  return (
                    <tr>
                      <td>{donator.date}</td>
                      <td>{donator.title}</td>
                      <td>{donator.name}</td>
                      <td>{donator.message}</td>
                      <td>{donator.rating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer bg-transparent border-success mb-4 ">
          Tipe Me 2023
        </div>
      </div>
    </div>
  </>
);
