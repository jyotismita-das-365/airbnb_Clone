const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render('addHome', {pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
};

exports.postAddHome = (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
};

exports.getHomes = (req, res, next) => {
  console.log(registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Home'});
}