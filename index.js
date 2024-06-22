const divContainer=document.querySelector('.divContainer');

let gridPerSide;

function formatGrid(gridPerSide){
    for(let i=0; i<=gridPerSide-1;i++){
    const divParent=document.createElement('div');
    divParent.classList.add(`divParent`);
    divContainer.appendChild(divParent);
        for(let j=0;j<=gridPerSide-1;j++){
            const divChild=document.createElement('div');
            divChild.classList.add(`divChild`);
            divParent.appendChild(divChild);

            divChild.addEventListener('mouseover',(e)=>{
                e.target.style.backgroundColor=`rgb(${getRgbNumber()},${getRgbNumber()},${getRgbNumber()})`;
            });
    }
}}

formatGrid(16);

const genGridBtn=document.querySelector('button');
genGridBtn.addEventListener('click',()=>{
    gridPerSide=prompt('Input Grid Per Side Here!',16);
    if(gridPerSide>100){
        alert('Opps...Looks like the number that you entered was too big.');
        genGridBtn.dispatchEvent(validNumberRequired);
        return  
    }else if(gridPerSide<1){
        alert('Please enter valid number.')
        genGridBtn.dispatchEvent(validNumberRequired);
        return
    }
    divContainer.innerHTML='';
    //delete exising grid before formatting new one.
    formatGrid(gridPerSide);
})

//Alert until input number is valid
let validNumberRequired= new Event('click');

//random number generator to genarate random color
function getRgbNumber(){
    return Math.floor(Math.random()*256);
}