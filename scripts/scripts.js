let theWord;
let theWords;
let theURL= `https://dictionaryapi.com/api/v3/references/thesaurus/json/${theWord}?key=63fa8a5c-60e1-4302-bfa8-ff859f3785c8`;
let userInput = document.querySelector('.input');
let synonimizeButton = document.querySelector('.synonimize');
let answerText= document.querySelector('.answerText');

//TO DO
//numbers
//uppercase 
//question words 

async function GetData(){
    

    theWords = userInput.value;
    theWords = theWords.split(" ");
    console.log(theWords);
    let beginningPunctuation = "";
    let endingPunctuation = "";
    let res= "";


    for(let word of theWords){
        theWord = word; 

        //dealing with punctuation
        while( ["?", ".", "!", ",", '"', "-",].includes(theWord[theWord.length-1])) {
            endingPunctuation = theWord[theWord.length-1]+endingPunctuation;
            theWord = theWord.substring(0,(theWord.length-1));
        }

        while( ["?", ".", "!", ",", '"'].includes(theWord[0])) {
            beginningPunctuation = beginningPunctuation + theWord[0];
            theWord = theWord.substring(1,(theWord.length));
         }

    

        //running API
         theURL= `https://dictionaryapi.com/api/v3/references/thesaurus/json/${theWord}?key=63fa8a5c-60e1-4302-bfa8-ff859f3785c8`;
         let theResponse = await fetch(theURL);
         theResponse = await theResponse.json();
       
         //adding beginning punctuation.
        res+= beginningPunctuation;
        beginningPunctuation = "";
        
        if(theResponse == []){
            res +=  theWord;
        }
        //quesiton words- do does or are/ is at beginning
      

        //common words
        if(["i","you","he","she","we","they", "is", "are", "was", "were", "the", "a", "an", "can", "me", "her","him", "us"].includes(theWord.toLowerCase())){
            res += theWord;
        }
        // if(["do","does", "are", "is", "did", "were", "was"].includes(theWords[0].toLowerCase())){
        //     res += theWords;
        // }

        else if(theResponse[0].meta && theResponse != []){

            let synonymArrays = theResponse[0].meta.syns;
            let synonymArray = synonymArrays[0];

            let synonym = synonymArray[Math.floor(Math.random()*synonymArray.length)];
            console.log(`the synonym is ${synonym}`);
            res += synonym;
            }

        else{
            res += theWord; 
        }


        res += endingPunctuation; 
        res += " "
        endingPunctuation="";
        
        }
        answerText.innerText = res;
}


synonimizeButton.addEventListener('click', function(event){
GetData();
})

