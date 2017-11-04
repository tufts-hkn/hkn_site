$(document).ready(function() {
    $.getJSON("members.json", "", function(members) {
        var member_list = $("#portfolio > .container");
        var row;
        members.forEach(function(member, index) {
            if (index % 3 == 0) {
                row = member_list.append("<div>").addClass("row");
            }
            row.append('<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 portfolio-item"> <div class="portfolio-one"> <div class="portfolio-head"> <div class="portfolio-img"><img alt="" src=""></div></div><div class="portfolio-content"><h5 class="title"></h5><p></p></div></div></div>');
            row.find(".portfolio-img > img").last().attr("src", "./img/" + member.img);
            row.find(".portfolio-content > .title").last().text(member.name);
            row.find(".portfolio-content > p").last().text(member.title 
                                                           + "\n" + member.year);
        })
    })
});
