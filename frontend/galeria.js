//let body = document.getElementById('bodyID')
function mostrar() {
  let spiner = document.getElementById("spinner1")
  spiner.classList.remove("mostrar")

  
  console.log('si me ejecuto mostrar');
    fetch('http://localhost:3000/leerImagenes')
    .then(response => response.json())
    .then(data => {
      console.log(data);
           data.archivos.forEach((item) => {
              // document.getElementById("cargando").innerText = ''
            spiner.classList.add("mostrar")

               let newIMG = document.createElement("img");
               newIMG.src = item
              let lugar = document.getElementById('container')
              lugar.append(newIMG)
              newIMG.classList.add("canva", "size", "existentIMG")
              ///nuevo
             
              newIMG.onclick = function(){
               let modalImg = document.getElementById('img01')
               modal.style.display = "block";
               modalImg.src = item;
               modalImg.classList.add('sizing')
               //captionText.innerHTML = this.alt;
              }
               
               //create element
               //source sera item pq item es el link que recibo del back
              });
       });
    
  
   }
   var modal = document.getElementById("myModal");

   function mostrarPixel() {
     console.log('si me ejecuto mostrarPixel');
     
 
    fetch('http://localhost:3000/leerImagenesPixel')
    .then(response => response.json())
    
    .then(data => {
   console.log(data);
        data.archivos.forEach((item) => {
            let newIMG = document.createElement("img");
            newIMG.src = item
           let lugar = document.getElementById('container')
           lugar.append(newIMG)
           newIMG.classList.add("canva", "size", "existentIMG")
           ///nuevo
          
           newIMG.onclick = function(){
            let modalImg = document.getElementById('img01')
            modal.style.display = "block";
            
            modalImg.src = item;
            modalImg.classList.add('sizing')
            //captionText.innerHTML = this.alt;
           }
            
            //create element
            //source sera item pq item es el link que recibo del back
           });
    });
  }

     var span = document.getElementsByClassName("close")[0];

     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
       modal.style.display = "none";
     }

   

   window.addEventListener("load", mostrar)

   window.addEventListener("load", mostrarPixel)

  
   
