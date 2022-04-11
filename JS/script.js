
// Variables

let switchStyle, totalScore, power, hp, heal, number, activePlayer, name, target, status, player1, player2;


function newGame() {

totalScore = [0,0];
power = 0;
hp = 100;
activePlayer = 0;
status = 'true';


    
// New game - reset
    
player1 = prompt('Player 1: Choose your name!');
player2 = prompt('Player 2: Choose your name!');

if (player1 == "") {
    player1 = "Mage";
}

if (player2 == "") {
    player2 = "Rogue";
}

    
document.getElementById('name-0').textContent = player1;
document.getElementById('name-1').textContent = player2;
document.getElementById('totalScorePlayer-0').textContent = 0;
document.getElementById('totalScorePlayer-1').textContent = 0;
document.getElementById('power0').textContent = 0;
document.getElementById('power1').textContent = 0;
document.getElementById('hp0').textContent = 100;
document.getElementById('hp1').textContent = 100;
document.getElementById('numbers').textContent = '';
document.getElementById('log').textContent = '';
    
    
document.querySelector('.totalScore0').classList.add('active');
document.querySelector('.totalScore1').classList.remove('active');

}

newGame();



// Info button
let id = 0;

document.querySelector('.info').addEventListener('click',function(){

    if (id == 0) {
        switchStyle = document.querySelector('.instruction').style.display = "block";
        id = 1;
        }
    
    else if (id == 1) {
        switchStyle = document.querySelector('.instruction').style.display = "none";
        id = 0;
        }
})


// Number roll

document.querySelector('.char').addEventListener('click',function(){
    
    if(status == 'true') {
        
    number = Math.ceil(Math.random()*7);
    document.getElementById('numbers').textContent = number;



// Power count

if (number == 7) {
    power = power + number;
    document.getElementById('power' + activePlayer).textContent = power;

    hp = document.getElementById('hp' + activePlayer).textContent;
        heal = Number(hp) + 7;
    document.getElementById('hp' + activePlayer).textContent = heal;
    
    name = document.getElementById('name-' + activePlayer).textContent;
    document.getElementById('log').textContent = name + ' used heal and restore 7 HP!';

}

    else if (number !== 1) {
        power = power + number;
        document.getElementById('power' + activePlayer).textContent = power;
        
        document.getElementById('log').textContent = '';
    } 

    else {
       
        totalScore[activePlayer] = totalScore[activePlayer] + power;
    
        document.getElementById('totalScorePlayer-' + activePlayer).textContent = totalScore[activePlayer];
       
        hp = document.getElementById('hp' + activePlayer).textContent -power;
        document.getElementById('hp' + activePlayer).textContent = hp;
       
       
        name = document.getElementById('name-' + activePlayer).textContent;
        document.getElementById('log').textContent = 'Charge failure, ' + name + ' lost ' + power + ' hp!';
       
        power = 0;
        document.getElementById('power' + activePlayer).textContent = power;
        
        dead ();
        nextPlayer();
    }
    
   }  

})



// Attack

document.querySelector('.atk').addEventListener('click',function(){
    
    if(status == 'true') {
        
    totalScore[activePlayer] = totalScore[activePlayer] + power;
    document.getElementById('totalScorePlayer-' + activePlayer).textContent = totalScore[activePlayer];
    
    
    if(activePlayer === 0) {
        hp = document.getElementById('hp1').textContent -power;
        document.getElementById('hp1').textContent = hp;
    } else {
        hp = document.getElementById('hp0').textContent -power;
        document.getElementById('hp0').textContent = hp;
    }
    
    
    name = document.getElementById('name-' + activePlayer).textContent;
    setTarget();
            
    document.getElementById('log').textContent = name + ' hit ' + target + ' with power ' + power + '! ' + target + ' lost ' + power + ' hp!';
    
    
    power = 0;
    document.getElementById('power' + activePlayer).textContent = power;

    document.getElementById('numbers').textContent = '';
    
    dead();
    nextPlayer();
    
    }
})

    


// New game

    document.querySelector('.new').addEventListener('click',newGame);
    


    
// Player switch
    
function nextPlayer() {
    document.querySelector('.totalScore0').classList.toggle('active');
    document.querySelector('.totalScore1').classList.toggle('active');
    
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
            activePlayer = 0;
        }
}
  


// End game

function dead() {
        
    hp = document.getElementById('hp0').textContent;

        if(hp <= 0) {
                document.getElementById('hp0').textContent = "Dead";
            
                target = document.getElementById('name-1').textContent;
                name = document.getElementById('name-0').textContent;
            
                document.getElementById('log').textContent = name + ' is dead. ' + target + ' is winner!' ;
            
                status = false;
            
        } else {}
            
    
    hp = document.getElementById('hp1').textContent;
    
        if (hp <= 0) {
                document.getElementById('hp1').textContent = "Dead";
            
                target = document.getElementById('name-0').textContent;
                name = document.getElementById('name-1').textContent;
            
                document.getElementById('log').textContent = name + ' is dead. ' + target + ' is winner!' ;
            
                status = false;
            
            } else {}
    
}


// Target var

function setTarget() {
    if(activePlayer === 0) {
        target = document.getElementById('name-1').textContent;
    } else {
        target = document.getElementById('name-0').textContent;
    }
}
