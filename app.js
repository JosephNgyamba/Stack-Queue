const image_input=document.querySelector('#profil');
let upload_image="";
const img_image=document.getElementById('img_image');

image_input.addEventListener("change", ()=>{
    console.log(image_input.value);
    const reader=new FileReader();
    
   
    reader.addEventListener("load",()=>{
        //  img_image.src=reader.result;
       upload_image= reader.result;
       document.getElementById('display').style.backgroundImage=`url(${upload_image})`;

    });
    reader.readAsDataURL(image_input.files[0]);   
});
 