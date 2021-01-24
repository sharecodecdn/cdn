const videoContain = document.getElementById('videoContain')
const iframe = document.getElementById('iframe')
const buttonTrade = document.getElementById('buttonTrade')

function setContainVideo() {
    videoContain.style.width = '100%'
    videoContain.style.height = videoContain.clientWidth / 2+'px'
}setContainVideo()



setPlayer = (src) => {
    
    (function removeButton() {
        var button = document.querySelectorAll('.button')
        for(i = 0;i < button.length; i++){
            button[i].style.display = 'none';
        }
    })();

    (function setSrcIframe() {
        iframe.setAttribute('src', src)
       
    })();

    (function addButtonTradePlayer() {
        buttonTrade.style.display = 'flex'
    })();

}

tradePlayer = () => {
    (function removeSrc() {
        iframe.removeAttribute('src')
    })();

    (function removeButton() {
        buttonTrade.style.display = 'none'
    })();

    (function showButtonsPlayer() {
        var button = document.querySelectorAll('.button')
        for(i = 0;i < button.length; i++){
            button[i].style.display = 'flex';
        }
    })();
}
