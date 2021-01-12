var restart = document.querySelector("#b");

var sqaures = document.querySelectorAll('td');


function clearBoard(){
    for(var i=0; i<sqaures.length; i++){
        sqaures[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard);


var cellOne = document.querySelector('#one')

cellOne.addEventListener('click',function(){
    if(cellOne.textContent === ''){
        cellOne.textContent = 'X';
    }

    else if(cellOne.textContent === 'X'){
        cellOne.textContent = 'O';
    }
    else{
        cellOne.textContent = '';
    }
})


function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
    }
    else{
        this.textContent='';
    }
}



for(var i=0; i<sqaures.length; i++){
    sqaures[i].addEventListener('click',changeMarker)
    
}


