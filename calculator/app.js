const btn=document.querySelectorAll("button")
const minidisplay=document.querySelector(".minidisplay")
const maindisplay=document.querySelector(".maindisplay")
let olddata=false
function result(elem){
    if(olddata){
        maindisplay.innerHTML=""
        minidisplay.innerHTML=""
        olddata=false
    }
    maindisplay.innerHTML+=elem
}

function display(elem){
    if(elem=="clear"){
        if(olddata){
            maindisplay.innerHTML=""
            minidisplay.innerHTML=""
            olddata=false
        }
        let len=maindisplay.innerHTML.length
        let slicedpart=maindisplay.innerHTML.substring(0,len-1)
        if(slicedpart==undefined){
            maindisplay.innerHTML=""
        }
        else{
            maindisplay.innerHTML=slicedpart
        }
    }
    if(elem=="equal"){
        minidisplay.innerHTML=maindisplay.innerHTML
        try{
            let finalResult=eval(maindisplay.innerHTML)
            finalResult=finalResult.toString()
            if(finalResult.length>8){
                maindisplay.innerHTML=finalResult.substring(0,11)

            }
            else{
                maindisplay.innerHTML=finalResult

            }
            
        }
        catch(err){
            maindisplay.innerHTML="Math Error"
            minidisplay.innerHTML=""
        }
        olddata=true

    }
}