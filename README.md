<div>
<h1>Wordsmith</h2>
</div>

This project was inspired by a book that makes me laugh all the time, I Forced a Bot to Write This Book: A.I. Meets B.S. by Keaton Patti. With Wordsmith, the user can enter an ordinary sentence and “synonimize” it. The site connects to Merriam-Webster’s dictionary API and replaces each word in the sentence for one of its synonyms. The returned sentences are strange, surprising, and lots of fun.


## Screenshots 
![alt GIF of functioning site](https://res.cloudinary.com/dqfviar71/image/upload/v1676590903/wordsmith_copy_qevpqv.gif)

***

## Technical Framework and Language Usage:
- JavaScript
- HTML
- CSS
- APIs

## Build Status
Deployed@**[Wordsmith](https://taupe-marshmallow-580cfc.netlify.app/)**

***

## Future Goals
- [ ] Continue to seek outlier examples and refine JavaScript to account for them.  


## Challenges
- Getting comfortable routing to an API.   
- While the idea is simple, a lot of tweaking had to be done to account for punctuation and to leave common words untouched to ensure it would be legible. Below is a snippet from the code in which I am working through those challenges

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
        //adding beginning punctuation.
        res+= beginningPunctuation;
        beginningPunctuation = "";
        if(theResponse == []){
        res += theWord;
        }
        //common words
        if(["i","you","he","she","we","they", "is", "are", "was", "were", "the", "a", "an", "can", "me", "her","him", "us"].includes(theWord.toLowerCase())){
        res += theWord;
        }
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

## Triumphs
- Solidifying my understanding of routing APIs.
- Sharpening my JavaScript skills. 

***
