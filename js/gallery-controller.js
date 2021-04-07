'use strict'



function onOpenProj(projId) {
    console.log(projId)
}



function onContactFormSubmit() {
    sendMail()
}




function renderProjects() {
    var elMainPortfolio = $('.main-portfolio');
    var strHTML = gProjects.map(function (project) {
        return `    
        <div class="col-md-4 col-sm-6 portfolio-item"
         onclick=renderProjectModal('${project.id}')>
            <a class="portfolio-link ${project.id} portfolioModal" data-toggle="modal">
            <div class="portfolio-hover" >
                <div class="portfolio-hover-content" ></div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.png">
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
    var projId = +(id)
    console.log('projId:', projId);
    var currProject = getProjectById(+(id));
    var elModalBody = $(`.modal-body`)
    var strHtml = `
    <h2>${currProject.title}</h2>
    <p class='item-intro text-muted'>${currProject.description}</p>
    <button class='btn btn-primary btn-lg' style="margin:25px"  type='button' onclick=onOpenProj('${projId}')>
    <i class='fas fa-external-link-alt'></i>
    Let's Play</button>
    <img class="img-fluid d-block mx-auto portfolio-img" src="img/portfolio/${currProject.id}.png">
    <ul class='list-inline'>
    <li>Date: Originally published: ${currProject.publishedAt}</li>
    <li>Category: ${currProject.labels}</li>
    </ul>
    <button class='btn btn-primary' data-dismiss='modal' type='button'>
    <i class='fa fa-times'></i>
    Close Project</button>`;
    $(elModalBody).html(strHtml);
    console.log('projId:', projId)

};


function onOpenProj(projId) {
    switch (projId) {
        case 0:
            window.open('https://www.youtube.com/watch?v=vQWsrlDdV84&list=RDMMNvLni-QU4VU&index=27')
            break;
        case 1:
            window.open('https://mail.google.com/mail/u/0/?tab=wm#inbox')
            break;
        case 2:
            window.open('https://github.com/arikxl')
            break;
    }
}
