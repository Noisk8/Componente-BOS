return (
  <>
    <div className="bg-light-subtle">
      <div class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Web3Connect
            className="ConnectButton "
            connectLabel="Connect with Web3"
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse btn-group "
            role="group"
            id="navbarSupportedContent"
            aria-label="Basic outlined example"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
                    Middle
                  </button>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Right
                  </button>
                </a>
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
            <div class="d-flex" role="search"></div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <div className="d-flex flex-column align-items-center mb-3">
          <h1> Tipe Me</h1>

          <img
            src="https://raw.githubusercontent.com/Noisk8/Componente-BOS/main/tipeme.png"
            alt="Gif"
            width="200px"
            className="mb-4"
          />
          <div className="d-flex justify-content-center align-items-center flex-column">
            <p class="bg-light p-3 shadow-lg rounded">
              Tipe Me es una app que permite a los usuarios del ecosistema de
              NEAR dar y recibir propinas por sus aportes de creación de
              componente, conenidos{" "}
            </p>
            <p class="bg-light p-3 shadow-lg rounded">
              Tipe Me está construido en BOS blockchain operative siystem{" "}
            </p>
            <div class="alert alert-info" role="alert">
              Proyecto creado en el marco de Open Web Academy BOS
            </div>
          </div>
        </div>
<h2 class="mt-4 mb-4"> Equipo</h2>
    <div class="accordion bg-light p-3 shadow-lg rounded" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Sergio Tech
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://avatars.githubusercontent.com/u/64911708?v=4"
                    alt="Gif"
                    width="200px"
                    className="mb-4"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Sergio Tech</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Juan Jaramillo
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          {" "}
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://raw.githubusercontent.com/Noisk8/Componente-BOS/main/tipeme.png"
                  alt="Gif"
                  width="200px"
                  className="mb-4"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Juan Jaramillo</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-body"></div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Alex Rubeola
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://raw.githubusercontent.com/Noisk8/Componente-BOS/main/tipeme.png"
                  alt="Gif"
                  width="200px"
                  className="mb-4"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Alex Rubeola</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-body"></div>
        </div>
      </div>
    </div>
  



        <div class="card-footer bg-transparent border-success">
          Tipe Me 2023
        </div>
      </div>
      
    </div>
  </>
);
