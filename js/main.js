

main = document.querySelector(".main")



/* 

get data method 



*/ 


let t = document.querySelector("#ttt");



for (var i=0; i<10;i++){

    let div = document.createElement('div');
    div.className = "data";
    div.innerHTML = " <span class='text'><strong>Всем привет!</strong> Вы прочитали важное сообщение.</span>";

    main.append(div);
    
}

setTimeout(() => t.style.display = "", 2000); // 
/*while (1){


    document.querySelector("#head").append('.')
    let delayres = await delay(3000);
    
    document.querySelector("#head").remove('.')
}*/