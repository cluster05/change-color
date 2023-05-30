let body = document.getElementsByTagName("body")[0]


function changeColor(){
    setTimeout(function(){
        body.setAttribute("class","bg")
    },10000)
}

changeColor()