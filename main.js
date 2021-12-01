var ID,Btn,resultFalse,resultTrue,odd=0,even=0,result,tcTotal,i,j,z;
ID = document.querySelector("#tc");
resultFalse = document.querySelector("#resultFalse");
resultTrue = document.querySelector("#resultTrue");
Btn = document.querySelector("#Btn")


Btn.addEventListener('click',function(){
    for(i=0; i<9; i+=2){
        odd+=Number(ID.value[i])
    }
    odd*=7;

    for(j=0; j<8; j+=2){
        odd+=Number(ID.value[j])
    }
    result=Math.abs(odd-even);

    for(z=0; z<10; z++){
        tcTotal+=Number(ID.value[z])
    }
    resultFalse.style.display="block";

    if(ID.value == ""){
        resultFalse.textContent="Kimlik numarası boş bırakılamaz!";
    }else if(ID.value.length !== 11){
        resultFalse.textContent="Kimlik numarası 11 haneli olmak zorundadır!";
        
    }else if(isNaN(ID.value)){
        resultFalse.textContent="Kimlik numarası sayılardan oluşmak zorundadır!";

    }else if(ID.value[0]==0){
        resultFalse.textContent="Kimlik numarasının ilk rakamı 0 olamaz!";
    
    }else if(result%10 !=Number(ID.value[9])){
        resultFalse.textContent="Girilen kimlik numarası gerçek bir şahsa ait değildir.";

    }else if(tcTotal%10 !=Number(ID.value[10])){
        resultFalse.textContent="Girilen kimlik numarası gerçek bir şahsa ait değildir.";

    }else{
        result.style.display="block";
    }



});