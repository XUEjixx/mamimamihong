window.onload = function () {
    var oLogin = document.getElementById('login');
    var aAlready = document.getElementsByClassName('already')
    var oNext = document.getElementById('down');
    var oTop = document.getElementById('top');
    var aLogin = document.getElementsByClassName('login');
    var aBody = document.getElementsByClassName('body');
    var oAut = document.getElementById('autograph');
    var aImg = oAut.getElementsByTagName('img');
    var aInput = oAut.getElementsByTagName('input');
    var aSpan = oAut.getElementsByTagName('span')
    var aNum = document.getElementsByClassName('num')
    var oUsermore = document.getElementsByClassName('usermore');
    var oUser = document.getElementsByClassName('user');
    var oMessagemore = document.getElementsByClassName('messagemore')
    var aDiv = oMessagemore[0].getElementsByTagName('div')
    var aUl = oMessagemore[0].getElementsByTagName('ul')
    var bDiv = oMessagemore[1].getElementsByTagName('div')
    var bUl = oMessagemore[1].getElementsByTagName('ul')
    var oMessages = document.getElementsByClassName('messages');
    var oNewdesireimg = document.getElementsByClassName('newdesireimg');
    var oEsc = document.getElementsByClassName('esc');
    var oBack = document.getElementById('back');
    var oAll = document.getElementById('all');
    var oMine = document.getElementById('mine');
    var oGood = document.getElementById('good');
    var oBiggood = document.getElementById('biggood')
    var oComment = document.getElementById('comment');
    var oTextarea = document.getElementsByTagName('textarea')
    var oPublish = document.getElementById('publish')
    var oNewdesire = document.getElementsByClassName('newdesire')
    var aHover = document.getElementsByClassName('hover')
    var aClose = document.getElementsByClassName('close')
    var oSpan = oNewdesire[0].getElementsByTagName('span')
    var oImg = oSpan[0].getElementsByTagName('img')
    var oDelete = document.getElementsByClassName('delete')
    var oAlldesire = document.getElementsByClassName('alldesire')
    var oMinedesire = document.getElementsByClassName('minedesire')
    var oBotton = document.getElementsByClassName('botton')
    var oSort = document.getElementsByClassName('sort')
    var oSoreul = document.getElementsByClassName('sortul')
    var aLi = oSoreul[0].getElementsByTagName('li')
    var aDesire = document.getElementsByClassName('desire')
    var Smalltext = aDesire[0].getElementsByClassName('text')
    var oRealize = document.getElementsByClassName('realize')
    var oDesiremore = document.getElementsByClassName('desiremore')
    var Textmore = oDesiremore[0].getElementsByClassName('text')
    var Tomine = document.getElementsByClassName('tomine')
    var i = 0;
    function fn1() {
        aNum[0].innerHTML = 12 - aInput[0].value.length;
    }
    oLogin.onmousedown = function () {
        this.style.background = '#ccc';
        this.style.paddingTop = '3px';
    }
    oLogin.onmouseup = function () {
        this.style.background = '#ddd';
        this.style.paddingTop = '1px';
    }
    oLogin.onclick = function () {
        aLogin[0].style.display = 'none';
        aAlready[0].style.display = 'block'
    }
    Tomine[0].onclick = function(){
        oTop.className = 'up';
        aBody[0].className = 'body bodyup';
        oMine.className = 'click'
        oAll.className = ''
        oAlldesire[0].style.display = 'none'
        oMinedesire[0].style.display = 'block'
    }
    oNext.onclick = function () {
        oTop.className = 'up';
        aBody[0].className = 'body bodyup';
    }
    oBack.onclick = function () {
        oTop.className = 'down';
        aBody[0].className = 'body bodydown';
    }
    aImg[0].onclick = function () {
        this.style.display = 'none';
        aInput[0].style.display = 'block';
        aInput[0].value = aSpan[0].innerHTML;
        aSpan[0].style.display = 'none';
        aNum[0].style.display = 'inline-block'
        fn1()
    }
    aInput[0].onblur = function () {
        this.style.display = 'none';
        aImg[0].style.display = 'inline-block';
        aSpan[0].style.display = 'inline-block';
        aNum[0].style.display = 'none'
        aSpan[0].innerHTML = aInput[0].value;
    }
    oMessages[0].onmouseover = function () {
        this.src = 'img/message(1).png'
    }
    oMessages[0].onmouseout = function () {
        this.src = 'img/message.png'
    }
    aDiv[1].onmouseover = function(){
        oMessages[0].src = 'img/message(1).png'
    }
    aDiv[1].onmouseout = function(){
        oMessages[0].src = 'img/message.png'
    }
    aUl[0].onmouseover = function(){
        oMessages[0].src = 'img/message(1).png'
    }
    aUl[0].onmouseout = function(){
        oMessages[0].src = 'img/message.png'
    }
    oNewdesireimg[0].onmouseover = function () {
        this.src = 'img/write(1).png'
    }
    oNewdesireimg[0].onmouseout = function () {
        this.src = 'img/write.png'
    }
    oEsc[0].onmouseover = function () {
        this.src = 'img/esc(1).png'
    }
    oEsc[0].onmouseout = function () {
        this.src = 'img/esc.png'
    }
    oEsc[0].onclick = function () {
        var out=confirm("确定退出这个没什么用的账号吗？");  
        if( out==true)  
        {  
            aAlready[0].style.display = 'none'
            aLogin[0].style.display = 'block';
        }
    }
    oUsermore[0].onmouseover = function () {
        oUser[0].src = 'img/user(1).png'
        this.style.color = '#ffb330';
    }
    oUsermore[0].onmouseout = function () {
        oUser[0].src = 'img/user.png'
        this.style.color = '#fff';
    }
    oMessages[1].onmouseover = function () {
        this.src = 'img/message(1).png'
    }
    oMessages[1].onmouseout = function () {
        this.src = 'img/message.png'
    }
    bDiv[1].onmouseover = function(){
        oMessages[1].src = 'img/message(1).png'
    }
    bDiv[1].onmouseout = function(){
        oMessages[1].src = 'img/message.png'
    }
    bUl[0].onmouseover = function(){
        oMessages[1].src = 'img/message(1).png'
    }
    bUl[0].onmouseout = function(){
        oMessages[1].src = 'img/message.png'
    }
    oNewdesireimg[1].onmouseover = function () {
        this.src = 'img/write(1).png'
    }
    oNewdesireimg[1].onmouseout = function () {
        this.src = 'img/write.png'
    }
    oEsc[1].onmouseover = function () {
        this.src = 'img/esc(1).png'
    }
    oEsc[1].onmouseout = function () {
        this.src = 'img/esc.png'
    }
    oEsc[1].onclick = function(){
        var out=confirm("确定退出这个没什么用的账号吗？");  
        if( out==true)  
        {  
            aAlready[0].style.display = 'none'
            aLogin[0].style.display = 'block';
        }
    }
    oAll.onclick = function () {
        this.className = 'click'
        oMine.className = ''
        oAlldesire[0].style.display = 'block'
        oMinedesire[0].style.display = 'none'
    }
    oMine.onclick = function () {
        this.className = 'click'
        oAll.className = ''
        oAlldesire[0].style.display = 'none'
        oMinedesire[0].style.display = 'block'
    }
    oSort[0].onmouseover = function () {
        oSoreul[0].className = 'sortul sortuldown'
    }
    oSort[0].onmouseout = function () {
        oSoreul[0].className = 'sortul sortulup'
    }
    for (var j = 0; j < aLi.length; j++) {
        var old = aLi[0];
        var now = aLi[0];
        aLi[j].index = j;
        aLi[0].style.color = '#000'
        aLi[j].onclick = function () {
            num = this.index
            old.style.color = '#ccc';
            old = aLi[num];
            aLi[num].style.color = '#000';
            now = aLi[num];
        }
        aLi[j].onmouseover = function(){
            this.style.color = '#000';
        }
        aLi[j].onmouseout = function(){
            this.style.color = '#ccc'
            if(this == now) {
                this.style.color = '#000';
            }
        }
        
    }
    Smalltext[0].onclick = function(){
        aHover[1].style.display = 'block'
        oDesiremore[0].style.display = 'block'
        Textmore[0].innerHTML = this.innerHTML
    }
    oRealize[0].onclick = function(){
        var realize=confirm("您确定要承包这个愿望吗？");  
        if(realize==true)  
        {  
            alert('成功承包')
        }  
    }
    oGood.onclick = function () {
        this.src = 'img/good(1).png'
        this.num = i;
        i++;
        if (this.num >= 1) {
            alert('请不要重复赞')
        }
    }
    oBiggood.onclick = function () {
        this.src = 'img/good(1).png'
        this.num = i;
        i++;
        if (this.num >= 1) {
            alert('请不要重复赞')
        }
    }
    oDelete[0].onclick = function () {
        var Determine=confirm("您确定不许这个实现不了的愿望了吗？");  
        if( Determine==true)  
        {  
            alert('非常明智')
        } 
    }
    oPublish.onclick = function () {
        if (oTextarea[0].value == '') {
            alert('请输入愿望再发布');
        } else {
            alert('发布成功');
            oTextarea[0].value = ''
            oNewdesire[0].style.display = 'none'
            aHover[1].style.display = 'none'
        }
        oAlldesire[0].style.display = 'none'
        oMinedesire[0].style.display = 'block'
    }
    oBotton[0].onclick = function () {
        aLogin[1].style.display = 'none'
        aHover[1].style.display = 'none'
    }
    aClose[0].onclick = function () {
        oDesiremore[0].style.display = 'none'
        aHover[1].style.display = 'none'
    }
    aClose[1].onclick = function () {
        oNewdesire[0].style.display = 'none'
        aHover[1].style.display = 'none'
    }   
    aClose[2].onclick = function () {
        aLogin[1].style.display = 'none'
        aHover[1].style.display = 'none'
    }
    for(var l = 0; l<aClose.length;l++){
        aClose[l].onmouseover = function () {
            this.src = 'img/close(1).png'
        }
        aClose[l].onmouseout = function () {
            this.src = 'img/close.png'
        }
    }
    oNewdesireimg[0].onclick = function () {
        oTop.className = 'up';
        aBody[0].className = 'body bodyup';
        oNewdesire[0].style.display = 'block'
        aHover[1].style.display = 'block'
        function fn1() {
            oTextarea[0].focus();
        }
        setTimeout(fn1, 1000)
    }
    oNewdesireimg[1].onclick = function () {
        oNewdesire[0].style.display = 'block'
        aHover[1].style.display = 'block'
        oTextarea[0].focus();
    }
    oTextarea[0].onfocus = function () {
        this.style.boxShadow = 'none'
    }
    oTextarea[0].onblur = function () {
        this.style.boxShadow = '0 0 1px 1px #ccc inset'
    }
    oSpan[0].onmouseover = function () {
        this.style.color = '#FFB300'
        oImg[0].src = 'img/arrow(2).png'
    }
    oSpan[0].onmouseout = function () {
        this.style.color = '#000'
        oImg[0].src = 'img/arrow(1).png'
    }
    oComment.onclick = function () {
        alert('项目组正在全力开发')
    }
}
