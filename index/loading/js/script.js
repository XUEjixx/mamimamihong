window.onload = function(){
    var oP = document.getElementById('p')
    var oP1 = document.getElementById('p1')
    var aP = document.getElementsByTagName('p')
    var i = 0;
    var j = 0;
    var k = 9;
    function fn1(){
        oP.innerHTML = i+1 + '%';
        if(i<99){
            i++
        } else{
            clearInterval(timer)
        }
    }
    var timer = setInterval(fn1,130)
    function fn2(){
        aP[j].style.display = 'inline-block'
        if(j<aP.length-2){
            j++
        } else{
            clearInterval(timer1)
        }
        if(aP[5].style.display == 'inline-block'){
            aP[4].style.display = 'none'
        }
        if(aP[k+1].style.display == 'inline-block'){
            aP[k].style.display = 'none'
            k++;
        }
    }
    var timer1 = setInterval(fn2,800)
}