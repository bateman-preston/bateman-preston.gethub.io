$(document).ready(function(){
    $.getJSON("js/guides.json", function(result){
        var guides = result;
        guides.person.forEach(person => {
            var name = $("<h4></h4>").text(person.name);
            var image = $("<img alt='Guide Picture' />").attr("src", person.imageurl);
            var age = $("<p></p>").text("Age: " + person.age);
            var certification = $("<p></p>").text("Certification Level: " + person.cert);
            var exp = $("<p></p>").text("Years of Experience: " + person.yearsEXP);
            var email = $("<p></p>").text("Email: " + person.email)
            var biography = $("<p></p>").text("About The Guide: " + person.bio)
            $(".guideList").append(name, image, age, certification, exp, email, biography);
        });
    });
});