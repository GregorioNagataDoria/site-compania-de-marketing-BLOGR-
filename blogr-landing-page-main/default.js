function openinfo(x){

if(x == 'company'){

    if(document.getElementById('company').style.display == 'block'){

        document.getElementById('company').style.display = 'none' 
    }
    else{

            document.getElementById('company').style.display = 'block' 

            document.getElementById('connect').style.display = 'none'
            document.getElementById('product').style.display = 'none'
        }
    }



if(x == 'product'){

    if(document.getElementById('product').style.display == 'block'){

        document.getElementById('product').style.display = 'none' 
    }
    else{

            document.getElementById('product').style.display = 'block'
            
            document.getElementById('connect').style.display = 'none'
            document.getElementById('company').style.display = 'none'
        }
    }


if(x == 'connect'){

    if(document.getElementById('connect').style.display == 'block'){

        document.getElementById('connect').style.display = 'none' 
    }
    else{

            document.getElementById('connect').style.display = 'block' 
            
            document.getElementById('product').style.display = 'none'
            document.getElementById('company').style.display = 'none'
        }
    }
}


function openmobileinfo(y){

    if(y == 'company2'){
    
        if(document.getElementById('company2').style.display == 'block'){
    
            document.getElementById('company2').style.display = 'none' 
        }
        else{
    
                document.getElementById('company2').style.display = 'block' 
    
                document.getElementById('connect2').style.display = 'none'
                document.getElementById('product2').style.display = 'none'
            }
        }

    if(y == 'product2'){
    
        if(document.getElementById('product2').style.display == 'block'){
    
            document.getElementById('product2').style.display = 'none' 
        }
        else{
    
                document.getElementById('product2').style.display = 'block' 
    
                document.getElementById('connect2').style.display = 'none'
                document.getElementById('company2').style.display = 'none'
            }
        }

    if(y == 'connect2'){
    
        if(document.getElementById('connect2').style.display == 'block'){
    
            document.getElementById('connect2').style.display = 'none' 
        }
        else{
    
                document.getElementById('connect2').style.display = 'block' 
    
                document.getElementById('product2').style.display = 'none'
                document.getElementById('company2').style.display = 'none'
            }
        }






    }



function ham() {

    if(document.getElementById('mobile-info-creator-holder').style.display == 'none'){

    document.getElementById('main-info').style.visibility = 'hidden'
    document.getElementById('title').style.visibility = 'hidden'

    document.getElementById('mobile-info-creator-holder').style.display = 'block'

    document.getElementById('hamburger').src = 'images/icon-close.svg'

    }

    else{


        document.getElementById('main-info').style.visibility = 'visible'
        document.getElementById('title').style.visibility = 'visible'
    
        document.getElementById('mobile-info-creator-holder').style.display = 'none'

        document.getElementById('hamburger').src = 'images/icon-hamburger.svg'


    }



 }   