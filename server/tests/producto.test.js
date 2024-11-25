const request = require('supertest');
const app = require('../index'); // Importar el servidor
const mongoose = require('mongoose');
const Producto = require('../models/Producto'); // Modelo de Producto

beforeAll(async () => {
    // Conectar a una base de datos de prueba
    const dbUri = 'mongodb://127.0.0.1:27017/testdb';
    //await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    // Cerrar la conexión a la base de datos y limpiar la base de datos
    //await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('API de productos', () => {
    let productoId;

    it('Debe crear un producto', async () => {
        const response = await request(app)
            .post('/api/productos')
            .send({
                nombre: 'Producto Test',
                categoria: 'Test',
                ubicacion: 'Estantería 1',
                precio: 100,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id');
        productoId = response.body._id; // Guardamos el ID del producto para otras pruebas
    });

    it('Debe obtener todos los productos', async () => {
        const response = await request(app).get('/api/productos');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0); // Verifica que hay productos
    });

    it('Debe obtener un producto por ID', async () => {
        const response = await request(app).get(`/api/productos/${productoId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id', productoId);
    });

    it('Debe actualizar un producto', async () => {
        const response = await request(app)
            .put(`/api/productos/${productoId}`)
            .send({
                nombre: 'Producto Actualizado',
                categoria: 'Actualizado',
                ubicacion: 'Estantería 2',
                precio: 150,
            });

        expect(response.status).toBe(200);
        expect(response.body.nombre).toBe('Producto Actualizado');
    });

    it('Debe eliminar un producto', async () => {
        const response = await request(app).delete(`/api/productos/${productoId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('msg', 'Producto eliminado con éxito');
    });
});
