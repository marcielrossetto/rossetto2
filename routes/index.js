var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  menus.getMenus().then(results => {
    res.render('index', { 
    title: 'Churrascaria Rossetto', 
    menus: results,
    isHome: true

    });

  });

});

  router.get('/contacts', function(req, res, next){
    res.render('contacts',{
      title: "Contato - Churrascaria Rossetto!",
      background: 'images/img_bg_3.jpg',
      h1: 'Faça sua Reserva!'
    });
  });

  router.get('/menus', function(req, res, next){
    menus.getMenus().then(results =>{
      res.render('menus',{
        title: "Menu - Churrascaria Rossetto!",
        background: 'images/img_bg_1.jpg',
        h1: 'Saboreie nosso Cardápio!',
        menus: results
      });
    });
   
  });

  router.get('/reservations', function(req, res, next){
    res.render('reservations',{
      title: "Reserva - Churrascaria Rossetto!",
      background: 'images/img_bg_2.jpg',
      h1: 'Faça sua Reserva!'
    });
  });

  router.post('/reservations', function(req, res, next){
    res.send(req.body);
  });

  

  router.get('/services', function(req, res, next){
    res.render('services',{
      title: "Serviços - Churrascaria Rossetto!",
      background: 'images/img_bg_1.jpg',
      h1: 'Conheça nossos Serviços!'
    });
  });

module.exports = router;
