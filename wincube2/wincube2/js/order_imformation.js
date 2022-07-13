var j=0;
        function right(){ 
            j+=1;           
            var i;
            var k=document.getElementsByClassName("profile-1");
            for(i=0;i<k.length;i++){
                k[i].style.display="none";
            }            
            k[j].style.display="flex";   
            // 在這更新，換成下一個買家
        }
        function left(){ 
            j-=1;           
            var i;
            var k=document.getElementsByClassName("profile-1");
            for(i=0;i<k.length;i++){
                k[i].style.display="none";
            } 
            if(j<=0){
                j=0;
                k[j].style.display="flex";
            } 
            else{
                k[j].style.display="flex";
            }
            // 在這更新，換成上一個商品
        }