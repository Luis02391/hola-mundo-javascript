const saludar = require('./index');

test('debería imprimir "¡Hola [nombre]!" y devolver el saludo', () => {
  console.log = jest.fn();

  const nombre = "Ivo Luis";
  const resultado = saludar(nombre);

  expect(console.log).toHaveBeenCalledWith(`¡Hola ${nombre}!`);

  expect(resultado).toBe(`¡Hola ${nombre}!`);
});
