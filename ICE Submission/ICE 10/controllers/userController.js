// home view get
const homeView = (req, res) => {
    const pageTitle = 'Home';
    res.render('home', {
        pageTitle: pageTitle

    });
};


module.exports = {
    homeView
};