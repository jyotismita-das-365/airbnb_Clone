const Home = require("../models/home")

exports.getIndex = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes => 
    res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'index'}));
};

exports.getHomes = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes => 
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'Homes List', currentPage: 'Home'}));
};

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', {pageTitle: 'My Bookings', currentPage: 'bookings'});
};

exports.getFavouriteList = (req, res, next) => {
  const registeredHomes = Home.fetchAll(registeredHomes => 
    res.render('store/favourite-list', {
      registeredHomes: registeredHomes, 
      pageTitle: 'My Favourites', 
      currentPage: 'favourites',}));
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, home => {
    if(!home){
      console.log("Home not found");
      res.redirect("/homes");
    }else {
      res.render('store/home-detail', {
        home: home,
        pageTitle: 'Home Detail', 
        currentPage: 'Home',})
    }
  });
};