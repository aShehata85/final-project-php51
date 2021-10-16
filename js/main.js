//show-hide extra images
let extraImage = document.querySelectorAll('.extra');
let loadMore = document.querySelector('.feature .load-more');
let loadLess = document.querySelector('.feature .load-less');
let imageCount ;
// show extra image
loadMore.addEventListener('click' , function(){
    //console.log(loadMore);
    for(imageCount = 0 ; imageCount < extraImage.length ; imageCount++){
        extraImage[imageCount].style.display= 'block';
    }
    loadMore.style.cssText = 'display:none';
    loadLess.style.cssText = 'display:block; margin:2% auto;';
});

//hide extra image
loadLess.addEventListener('click' , function(){
    //console.log(loadMore);
    for(imageCount = 0 ; imageCount < extraImage.length ; imageCount++){
        extraImage[imageCount].style.display= 'none';
    }
    loadMore.style.cssText = 'display:block; margin:2% auto;';
    loadLess.style.display = 'none';
});