const getRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1))+min;
}
const raqam=()=>{
    const minNumber=document.getElementById('min');
    const maxNumber=document.getElementById('max');
    const min=Number(minNumber.value);
    const max=Number(maxNumber.value);
    if(minNumber.value===''||maxNumber.value===''){
        const error=document.getElementById('errw');
        error.textContent='Iltimos Min va Max uchun qiymat kiriting';
        const small=document.createElement('h6');
        const text=document.createTextNode("*DIQQAT! Min Max dan kichik bolishi shart");
        small.appendChild(text);
        error.appendChild(small)
    }
    else if(Number(minNumber.value)>Number(maxNumber.value)){
        const error=document.getElementById('errw');
        error.textContent='';
        const small=document.createElement('h6');
        const text=document.createTextNode("*DIQQAT! Min Max dan kichik bolishi shart");
        small.appendChild(text);
        error.appendChild(small)
    }
    else{
        const error=document.getElementById('errw');
        error.textContent='';
        const small=document.createElement('h6');
        const text=document.createTextNode("");
        small.appendChild(text);
        error.appendChild(small)
        const placeholder=document.getElementById("placeholder");
        placeholder.textContent=getRandomNumber(min,max);
    }
}
const generator=document.getElementById("generator");
generator.addEventListener("click",raqam);

const header=document.getElementById("header");
header.appendChild(small);