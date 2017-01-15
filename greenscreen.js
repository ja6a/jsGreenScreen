// global
var count=-1;

// Main macro to print the text like a computer terminal
function wordByWord(){
    
    
    
   

    
    $.getJSON( "greenscreen.json", function( data ,sentence) {
              var sentences=[];
              var sentence =0;
              $.each( data, function( key, val ) {
                     // split it up according to spaces
                     //var words = val.split(" ");
                     
                     sentences[sentence]=val;
                     sentence++;
                     
                     console.log(sentences);
                     console.log(sentence);
                     });
                    console.log("after read: "+sentence);
                    printLines (sentences);
              });
}

// Actually print the text.
function printLines(sentences) {
    
    count++;
     console.log(sentences.length);
    if (count==sentences.length){
        return;
    }
    
    
    var ul = document.getElementById('screen');
    var li = document.createElement('p');
    
    ul.appendChild(li);
    
    var index=0;
    
    var intervalId = window.setInterval(function(){
                                        var length = sentences[count].length;
                                        if (index<length){
                                       // console.log("index="+index);
                                        var letter = sentences[count].charAt(index);
                                        li.appendChild(document.createTextNode(letter));
                                        index++;
                                        }
                                        else {
                                        window.clearInterval(intervalId);
                                        mimicCursor(sentences,li);
                                        }
                                        }, 20);
}

// Pretend to be a flashing cursor.
function printLetter (word,li){
    var dot = document.createTextNode('|');
    var index = 0;
    var intervalId = window.setInterval(function(){
                                        if (index<10){
                                        if (index % 2 ==0){
                                        li.appendChild(dot);
                                        } else {
                                        li.removeChild(dot);
                                        }
                                        index++;
                                        }
                                        else {
                                        window.clearInterval(intervalId);
                                        printLines(sentences);
                                        }
                                        }, 100);
}

// Pretend to be a flashing cursor.
function mimicCursor (sentences,li){
    var dot = document.createTextNode('|');
    var index = 0;
    var intervalId = window.setInterval(function(){
                                        if (index<10){
                                        if (index % 2 ==0){
                                        li.appendChild(dot);
                                        } else {
                                        li.removeChild(dot);
                                        }
                                        index++;
                                        }
                                        else {
                                        window.clearInterval(intervalId);
                                        printLines(sentences);
                                        }
                                        }, 100);
}

function animate(words, li){
    li.appendChild(document.createTextNode(words[index]));
    index++;
}
