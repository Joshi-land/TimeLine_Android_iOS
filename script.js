document.addEventListener('DOMContentLoaded', ()=> {
    const btnIOS = document.getElementById('loadIOS');
    if(btnIOS)
        {
            btnIOS.addEventListener('click',function(e){
                e.preventDefault();

                const url= this.getAttribute('href');
                const timeline = document.querySelector('.timeline');
                const titleText = document.querySelector('.title h1');
                const titleLogo = document.querySelector('.HeadLogo');

                timeline.style.opacity ='0';
                timeline.style.transition = 'opacity 0.5s ease';

                setTimeout(() => {
                    fetch(url)
                    .then(response=>{
                        if(!response.ok) throw new Error("Error al cargar contenido")
                        return response.text();
                    })
                    .then(data=>{
                        timeline.innerHTML=data;
                        titleText.innerText= "Historia de iOS";
                        titleLogo.src="img/iOS/apple.png";

                        this.innerText ="Ver Historia de Android";
                        this.classList.add('btn-back');
                        this.onclick=(event)=>{
                            event.preventDefault();
                            location.reload()
                        };
                        timeline.style.opacity='1';
                        window.scrollTo({top:0,behavior:'smooth' });
            
                    })
                    .catch(err=>console.error("Detalle error",err));
                },500);
            })


        }
})