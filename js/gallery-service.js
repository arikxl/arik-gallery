'use strict'

var gIdNum = 1001;
var gProjects = [{
        id: gIdNum++,
        name: '!שוקו בא',
        title: 'Bring those kids some Shoko',
        description: 'A Sokoban style game',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["matrix", "game"]
    },
    {
        id: gIdNum++,
        name: 'Guess the number',
        title: 'Beat the computer',
        description: 'A numbers guessing game',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["JS", "game"]
    },
    {
        id: gIdNum++,
        name: 'Tic tac toe',
        title: 'Play with friends',
        description: 'A classic X-O game for 2 players',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["multiplayer", "game"]
    },
    {
        id: gIdNum++,
        name: 'Calculator',
        title: 'No more math Headache',
        description: 'A calculator designed for Ladies',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["JS", "tool"]
    },
    {
        id: gIdNum++,
        name: 'Minesweeper',
        title: 'Don\'t press on the mine!',
        description: 'A classic thinking game',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["matrix", "game"]
    },
    {
        id: gIdNum++,
        name: 'Touch the nums',
        title: 'Are you fast enough?',
        description: 'A umber learning game',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["matrix", "game"]
    },
    {
        id: gIdNum++,
        name: 'Clock',
        title: 'What\'s the time?',
        description: 'Analog international clock',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["css", "tool"]
    },
    {
        id: gIdNum++,
        name: 'Piano',
        title: 'Play some music',
        description: 'play piano through your keyboard',
        url: 'XXX/XXX',
        publishedAt: Date.now(),
        labels: ["music", "css"]
    },
];

// console.table(gProjects);
// console.log('gProjects:', gProjects)

renderProjects()

function renderProjects() {
    var elMainPortfolio = $('.main-portfolio');
    var strHTML = gProjects.map(function (project) {
        return `    
        <div class="col-md-4 col-sm-6 portfolio-item " "onclick="renderProjectModal(${project.id})">
            <a class="portfolio-link ${project.id} portfolioModal" data-toggle="modal"  >
            <div class="portfolio-hover" >
                <div class="portfolio-hover-content" ></div>
            </div>
            <img class="img-fluid " src="img/portfolio/${project.id}.png">
            </a>
            <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.description}</p>
            </div>
            </div>`
    });
    $(elMainPortfolio).html(strHTML.join(''));
};

function renderProjectModal(id) {
    console.log(id);

}



function getProjectById(id) {
    return gProjects.find(function (project) {
        return id === project.id;
    });
}