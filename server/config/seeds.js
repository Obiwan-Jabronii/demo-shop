const db = require('./connection');
const  { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Food'},
        {name: 'Electronics'},
        {name: 'Household Items'},
        {name: 'Books'},
        {name: 'Games'},
        {name: 'Toys'},
    ]);

    console.log('Categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cookie-tin.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },
    ]);

    console.log('Products seeded');

    await User.deleteMany();

    await User.create({
        username: 'Mitchell',
        email: 'mitchell@testmail.com',
        password: 'password12345',
        orders: [
          {
            products: [products[0]._id, products[0]._id, products[1]._id]
          }
        ]
      });
    
      await User.create({
        username: 'Kassi',
        email: 'kassi@testmail.com',
        password: 'password12345'
      });
    
      console.log('users seeded');
    
      process.exit();
});