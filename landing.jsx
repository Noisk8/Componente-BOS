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
    <div class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
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
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <div class="d-flex" role="search">
            <Web3Connect
              className="ConnectButton "
              connectLabel="Connect with Web3"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="container text-center mt-5">
      <div className="d-flex flex-column align-items-center mb-3">
        <img
          src="https://raw.githubusercontent.com/Noisk8/Componente-BOS/main/giveme.png"
          alt="Gif"
          width="300px"
          className="mb-4"
        />

        <Button0018
          fontsize={fontsize}
          fontweight={fontweight}
          onClick={giveme}
        >
          <span>Give me </span>
        </Button0018>
      </div>
    </div>
  </>
);
