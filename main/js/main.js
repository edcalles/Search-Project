/*
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=UP6732Wk58BBMmvGPzAAAyF8Hr07zfaj";
var query = "&q=rainbow"
*/
$(document).ready(()=>{ 
    $("#submit").click(()=>{
        alert('clicked!')
    })
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?&api_key=UP6732Wk58BBMmvGPzAAAyF8Hr07zfaj"
    });
});