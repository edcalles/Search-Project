/*
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=UP6732Wk58BBMmvGPzAAAyF8Hr07zfaj";
var query = "&q=rainbow"
*/
$(document).ready(()=>{ 
    $("#submit").click(()=>{
        let userInput = $("#search").val();
        let userLimit = $("#number").val();
        $.ajax({
            type:'GET',
            url: `https://api.giphy.com/v1/gifs/search?api_key=UP6732Wk58BBMmvGPzAAAyF8Hr07zfaj&q=${userInput}&limit=${userLimit}&offset=0&rating=g&lang=en`,
        })
            .done((res)=>{
                let gif = res.data;
                $.each(gif, (i, e)=>{
                    let link = e.images.original.url
                    console.log("url", link)
                    $("body").append(`<img class="col col-sm mr-sm-2 my-sm-2" src="${link}" alt="gif"/>`)
                    console.log("index", i, "element", e)
                })
            })
    })
});