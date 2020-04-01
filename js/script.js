$(document).ready(function(){

    var vowels =["a","e", "i", "o", "u", "y" ]

    $("#form").submit(function(event){
        event.preventDefault();
        var input = ($("#input").val());
        var splitInput = input.split("");
        var vowels =["a","e", "i", "o", "u", "y" ]
        var finalSentence=[]
        counter = 0;


        // console.log(splitInput);

        splitInput.forEach(function(letter){
            if (vowels.includes(letter)){
                counter++;
                finalSentence.push(letter);
            }else {
                finalSentence.push(letter);

            }
           
        // })
        // console.log(counter);
        // console.log(finalSentence);
        $("#result").text(counter);
    })
  
    
    })


})