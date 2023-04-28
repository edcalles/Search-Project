/*
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=UP6732Wk58BBMmvGPzAAAyF8Hr07zfaj";
var query = "&q=rainbow"
*/
$(document).ready(()=>{ 
    $("#submit").click(()=>{
        let userInput = $("#search").val();
        alert(userInput)
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=UP6732Wk58BBMmvGPzAAAyF8Hr07zfaj&q=${userInput}&limit=25&offset=0&rating=g&lang=en`
        })
            .done((res)=>{
                console.log("res", res.data)
            })
    })
});