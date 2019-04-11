document.getElementById("getmodal").addEventListener("click", function(){
    var modal = document.getElementById("modal");
    modal.className = 'modal';
    //modal.style.display='block';
  });

  document.getElementById("closmodal").addEventListener("click", function(){
    var modal = document.getElementById("modal");
    modal.className = 'modal hidden';
    //modal.style.display='none';
  });