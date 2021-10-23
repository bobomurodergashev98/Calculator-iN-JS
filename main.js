const ekran=document.querySelector('#table-input')
const clear=document.getElementById('#table-input');
const bolish=document.getElementById("#bolish")
const kopaytirish=document.getElementById("#kopaytirish")
const natija=document.getElementById("#natija")
const qoshish=document.getElementById("#qoshish")
document.querySelectorAll("td").forEach((value)=>{
    value.addEventListener('click' , (e) => {
        var belgi=e.target.innerText;
        if (belgi === "C") {
            ekran.value=""
        } else if(belgi === "="){
            ekran.value=eval(ekran.value)
        } else{
            ekran.value+=belgi;

        }

    })
})