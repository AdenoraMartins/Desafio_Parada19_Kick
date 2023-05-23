function muda_tema(){

    let box = document.getElementById ("box");
    console.log (box);
    let tema = document.getElementById("i_tema").value;

    switch (tema){

        case "1":
            box.style.backgroundImage = "url('img/ceu.jpg')";
            break;
        case "2": 
            box.style.backgroundImage = "url('img/mar.jpg')";
            break
        default:
            box.style.backgroundImage = "url('img/trevas.jpg')";
    }

  
}

