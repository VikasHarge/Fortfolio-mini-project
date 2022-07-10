
// Skill Icons
const skillicons = document.getElementsByTagName('i');
const infoBox = document.getElementById('infoBox');


for(const icon of skillicons){
    icon.addEventListener('mouseenter', function(e){
        icon.style.color='blueviolet';
    } ) 
    icon.addEventListener('mouseleave', function(e){
        icon.style.color='black';
    } ) 
}

// Progress Bar

// const skillClick = document.getElementById('skillClick')

// const scrolls = document.getElementsByTagName('section');

// const scrolls = document.getElementById('skills')
// // console.log(scrolls);

// scrolls.addEventListener('onfocus',(e)=>{
    const progresses = document.getElementsByClassName('progress_done');
    
    for(const progress of progresses){
        setTimeout(()=>{
        progress.style.width = progress.getAttribute('data-done')+'%';
        }, 500)
    }
// })



    











