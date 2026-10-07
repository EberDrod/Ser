const { test, before, after } = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

let server;
let baseUrl;

before(async () => {
  server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => server.close());

test('GET /api/saludo responde "Hola Juliette"', async () => {
  const res = await fetch(`${baseUrl}/api/saludo`);
  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.mensaje, 'Hola Juliette');
  assert.strictEqual(data.conectado, true);
});

test('GET / sirve la página con el botón', async () => {
  const res = await fetch(`${baseUrl}/`);
  assert.strictEqual(res.status, 200);
  const html = await res.text();
  assert.match(html, /<button id="btn">/);
});
