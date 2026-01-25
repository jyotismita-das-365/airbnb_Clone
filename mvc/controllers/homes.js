const Home = require("../models/home")

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
};

exports.postAddHome = (req, res, next) => {
  const {houseName, price, location, rating, photoUrl} = req.body;

  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render('host/homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes => 
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'}));
}