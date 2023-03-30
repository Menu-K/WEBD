const { getSWAPI } = require('../helpers/apiCalls');

// home view get
const homeView = (req, res) => {
    const pageTitle = 'Home';
    res.render('home', {
        pageTitle: pageTitle

    });
};

const peopleView = async (req, res) => {
    const people_url = 'https://swapi.dev/api/people/';
    let full_people_data = await getSWAPI(people_url);
    let people_data = full_people_data['results'];
    // console.log(people_data);
    for (person in people_data) {
        let profile = people_data[person];
        let svgCode = multiavater(profile['name']);
        profile['avatar'] = svgCode;
    }
    res.render('people', { people_data: people_data });
};



const planetView = async (req, res) => {
    const planets_url = 'https://swapi.dev/api/planets/';
    let full_planets_data = await getSWAPI(planets_url);
    // console.log(full_planets_data['results']);
    planets_data = full_planets_data['results'];
    res.render('planets', { planets_data: planets_data });
};

module.exports = {
    homeView,
    planetView,
    peopleView
};