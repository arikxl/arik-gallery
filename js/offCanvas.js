'use strict'

function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}


function sendMail() {
    var user = $('input[name="name"]').val()
    var userEmail = $('input[name="email"]').val()
    var message = $('textarea[name="message"]').val()
    if (!message||!user||!userEmail) return
    var sendEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=arikxl@gmail.com&su=${user} - Contact form&body=${message}&bcc=${userEmail}`
    window.open(encodeURI(sendEmail))
}

renderContactMenu()

function renderContactMenu() {
    var elContactMenu = $('aside');
    var strHtml =
        `<section class="contact">
     <div class="contact-text text-center mt-4 ">
       <h4>Let's Talk</h4>
       <p>Do you have an idea in mind?<br>send me a message.<br>
       I'll get back to you and we'll create it together.</p>
     </div>
     <div class="col-md-12 col-md-offset-3">
       <div class="form-container">
         <div class="well well-sm">
           <form class="form-horizontal" action="" method="post">
             <div class="form-group">
               <label class="col-md-3 control-label" for="name">Name</label>
               <div class="col-md-9">
                 <input name="name" id="name" type="text" placeholder="Your name" class="form-control">
               </div>
             </div>
             <div class="form-group">
               <label class="col-md-8 control-label" for="email">Your E-mail</label>
               <div class="col-md-9">
                 <input name="email" type="text" placeholder="Your email" class="form-control">
               </div>
             </div>
             <div class="form-group">
               <label class="col-md-8 control-label" for="message">Your message</label>
               <div class="col-md-9">
                 <textarea class="form-control" name="message" placeholder="Whats on your mind?"
                   rows="5"></textarea>
               </div>
             </div>
             <div class="form-group">
               <div class="col-md-12 text-center">
                 <button type="button" class="btn btn-primary btn-lg hover-shadow" onclick="onContactFormSubmit()">
                 Submit</button>
           </form>
     </section>`
    $(elContactMenu).html(strHtml);
};