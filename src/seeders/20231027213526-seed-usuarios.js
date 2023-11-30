module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Usuarios', [
    {
      nombre: 'nicoprueba',
      password: '$2b$10$dpYz87xNbdbQnGI1X0uYF.iuYqeWM6gEbPkujqHQsiWYrk1xkmOSS', // 123
      mail: 'nicoprueba@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'ADMIN',
      password: '$2b$10$4Dlh3IpQCNOn5V1uXqf2QuM5lxTP7KwuYolixSlPUVb0uoJXMNjsO', // ADM1N!
      mail: 'admin@gmail.com',
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Usuarios', null, {})
}
