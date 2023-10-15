const input= document.getElementById('celsius');
const output= document.getElementById('fahren');
const convert= document.getElementById('convert');

convert.addEventListener('click',()=>{
    const celsiusValue = parseFloat(input.value);
    if(!isNaN(celsiusValue)){
        const fahrenheitValue= celsiusValue *9/5 +32;
        output.textContent=`${fahrenheitValue.toFixed(2)} \u00B0F`;
    }
    else{
        output.textContent='Invalid';

    }

});