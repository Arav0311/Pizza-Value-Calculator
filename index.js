
document.getElementById("mybutton").onclick = function(){    
    let p1=document.getElementById("1price").value
    let r1=document.getElementById("1area").value /2
    let p2=document.getElementById("2price").value
    let r2=document.getElementById("2area").value /2
    let q1=document.getElementById("qt1").value
    let q2=document.getElementById("qt2").value

    let ar1=r1*r1*Math.PI*q1
    let ar2=r2*r2*Math.PI*q2
    
    let pp1=p1/ar1
    let pp2=p2/ar2
    
    let big= Math.max(pp1,pp2)
    let small=Math.min(pp1,pp2)
    let percent= ((big-small)/small)*100
    let winner
    let loser
    if (big=pp1){
        winner = "Pizza/s 1"
        loser = "Pizza/s 2"
    }
    else {
        winner="Pizza/s 2"
        loser = "Pizza/s 1"
    }
    console.log(percent)
    document.getElementById("result").textContent = winner + " is more economical than "+ loser +" by "+ Math.floor(percent)+"%."



}
