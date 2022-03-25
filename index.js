
    function change(){
      
        let image = document.getElementById('img')
        
        if( image.src.match('img/eyes_open.png')){
            console.log('eyes is open');
            document.getElementById('img').src = "img/eyes_close.png";
        }else{
            console.log('eyes is close');
            document.getElementById("img").src = "img/eyes_open.png";
        }

    }