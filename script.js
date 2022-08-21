/**
 * Refresh age in index.html
 */

setInterval(function() {
    let birth = new Date(2019, 06, 17);
    let now = new Date(); 
    let howMany = (now-birth)/1000/60/60/24/365;
    document.getElementById("variable-text").innerHTML = '<b>Age:</b> ' + howMany.toFixed(5) + ' days old; <b>Gender:</b> male;';
}, 1);



/**
 * Hire Me form
 * 
 * Active after you click "Hire me" button
 */
$(document).ready(function() {
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    if (urlParameters.get("app") == "hire-me") {
        let main = document.getElementById("main");
        $("#main").html(
            '<a href="index.html?app=index" class="button" style="margin-top: 20px">Back</a><div class="hire-me-block"><h1>Hire Me</h1><form action="index.html" method="get"><input type="text" placeholder="First name"><input type="text" placeholder="Last name"><br><input type="email" placeholder="Your e-mail address"><input type="text" placeholder="Company (if you haven\'t don\'t fill this field)"><input type="submit" value="Submit" class="button"></form></div>'
        );
    }
});