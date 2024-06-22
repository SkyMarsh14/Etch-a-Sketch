const divContainer=document.querySelector('.divContainer');

for(let i=0; i<=15;i++){
    const divParent=document.createElement('div');
    divParent.classList.add(`divParent`);
    divContainer.appendChild(divParent);
        for(let i=0;i<=15;i++){
            const divChild=document.createElement('div');
            divChild.classList.add(`divChild`);
            divParent.appendChild(divChild);

            divChild.addEventListener('mouseover',(e)=>{
                e.target.style.backgroundColor='#fcb103';
            divChild.addEventListener('mouseout',(e)=>{
                e.target.style.backgroundColor='';
            });
            });
    }
}

