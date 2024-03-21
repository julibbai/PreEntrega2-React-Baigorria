export const Checkout = ({ envioDeFormulario, capturar }) => {
  return (
    <div>
      <h1>Acá va el Checkout</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturar}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          onChange={capturar}
          lastName="lastName"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
