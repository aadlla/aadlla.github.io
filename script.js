$(document).ready(function(){
   $('#mobile_btn').on('click', function(){
       $('#mobile_menu').toggleClass('active');
       $('#mobile_btn').find('i').toggleClass('fa-x');

   });

   ScrollReveal().reveal('#cta', {
    origin: 'left', 
    duration: 2500,
    distance: '20%'
   });

   ScrollReveal().reveal('.dish', {
    origin: 'left', 
    duration: 2500,
    distance: '20%'
   });

   ScrollReveal().reveal('#testimonial_chef', {
    origin: 'left', 
    duration: 1500,
    distance: '20%'
   })

   ScrollReveal().reveal('.feedback', {
    origin: 'right', 
    duration: 1500,
    distance: '20%'
   })

});
document.getElementById("btn-post").addEventListener("click", function () {
    const newComment = document.getElementById("new-comment").value;
    const commentContainer = document.getElementById("comment-container");
    const commentElement = document.createElement("p");
    commentElement.innerText = newComment;
    commentContainer.appendChild(commentElement);
    document.getElementById("new-comment").value = "";
});