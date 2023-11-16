return (
  <>
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img
        src="https://raw.githubusercontent.com/Noisk8/Componente-BOS/main/giveme.png"
        alt="Gif"
        width="300px"
        className="mb-4"
      />

      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          className="form-control mt-2"
          type="text"
          id="name"
          name="name"
          required
          minLength="4"
          maxLength="8"
          size="10"
          placeholder="Nombre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          className="form-control mt-2"
          type="email"
          id="email"
          name="email"
          required
          minLength="4"
          maxLength="8"
          size="10"
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          className="form-control mt-2"
          type="password"
          id="password"
          name="password"
          required
          minLength="4"
          maxLength="8"
          size="10"
          placeholder="Contraseña"
        />
      </div>
    </div>
  </>
);
