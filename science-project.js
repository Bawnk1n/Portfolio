

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // Factory Function to create more Aeuqor objects
  const pAeuqorFactory = (specimenNum, dnaArray) => {
    return  {
      specimenNum: specimenNum,
      dna: dnaArray,
      mutate() {   //change one random DNA base in the strand
        let randomBase = 0;
        let originalBase = '';
        randomBase = Math.floor(Math.random() * this.dna.length -1)
        originalBase = this.dna[randomBase]
  
        switch (originalBase) {
          case 'A':
            const differentDna1 = ['T', 'C', 'G']
            this.dna[randomBase] = differentDna1[Math.floor(Math.random() * 3)];
            break;
          case 'T':
            const differentDna2 = ['A', 'C', 'G']
            this.dna[randomBase] = differentDna2[Math.floor(Math.random() * 3)];  
            break;
          case 'C':
            const differentDna3 = ['A', 'T', 'G']
            this.dna[randomBase] = differentDna3[Math.floor(Math.random() * 3)];  
            break; 
          case 'G':  
            const differentDna4 = ['A', 'T', 'C']
            this.dna[randomBase] = differentDna4[Math.floor(Math.random() * 3)];  
            break;                  
        }
        
        return this.dna;
  
        //  console.log(randomBase)
        //  console.log(originalBase)
        //  console.log(this.dna)
  
      },
  
      compareDNA(otherPAeuqor) {  // return the pecentage DNA bases in common between 2 strands
        let dnaInCommon = 0;
        for (let i = 0 ; i < this.dna.length ; i++) {
          
            if (otherPAeuqor.dna[i] === this.dna[i]) {
              dnaInCommon++;
              
            }
          
        }
  
        const percentage = (dnaInCommon/15) * 100;
  
        // tests -->
        // console.log(dnaInCommon)
        // console.log(percentage)
        // console.log(this.dna)
        // console.log(otherPAeuqor.dna)
  
        //return `Specimen number ${this.specimenNum} and specimen number ${otherPAeuqor.specimenNum} have ${percentage}% DNA in common`;
        return percentage;
      },
      
      willLikelySurvive() {  //check if C or G base makes up at least 60% of the genome
        let amountOfCorG = 0;
        
  
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C') {
            amountOfCorG++;
          }
          else if (this.dna[i] === 'G') {
            amountOfCorG++;
          }
        }
        if ((amountOfCorG/15) * 100 > 60){
          return true;
        }
        else {
          return false;
        }
      },
      
      complementStrand() {   //Create a strand which mirrors the original strand, A's & T's mirrored, G's and C's mirrored
        let complementaryStrand = mockUpStrand();
        for (let i = 0 ; i<this.dna.length ; i++) {
          if (this.dna[i] === 'A'){
            complementaryStrand[i] = 'T';
          }
          if (this.dna[i] === 'T'){
            complementaryStrand[i] = 'A';
          }        
          else if (this.dna[i] === 'C') {
            complementaryStrand[i] = 'G';
          }
          else if (this.dna[i] === 'G') {
            complementaryStrand[i] = 'C';
          }
        }
        //console.log(this.dna)
        return complementaryStrand;
      }
    }
  }
  
  
  const createThirtyObjects = () => { //Create a new array of 30 strands that all pass the willLikelySurvive function
    const pAeuqorArray = [];
  let count = 0;
  while (pAeuqorArray.length < 30 && count < 100000) {
  
      const potentialStrand = pAeuqorFactory(count, mockUpStrand());
  
      if (potentialStrand.willLikelySurvive()) {
        pAeuqorArray.push(potentialStrand)
      }
      count++;
      
    }
    for (let i = 0 ; i < pAeuqorArray.length ; i++) {
      pAeuqorArray[i].specimenNum = i;
    }
    return pAeuqorArray;
  }
  
  let highestCommonality = 0;
  let firstGenome = [];
  let secondGenome = [];

  const checkForMostCommon = () => { // creates a new array of strands that all pass the willLikelySurvive() function and tells you the two that are the most common
    const newArrayOfThirty = createThirtyObjects();
    for (let i = 0 ; i < newArrayOfThirty.length ; i++) {
      for (let j = 1 ; j < newArrayOfThirty.length ; j++) {
        if (newArrayOfThirty[i].compareDNA(newArrayOfThirty[j]) > highestCommonality && newArrayOfThirty[i] != newArrayOfThirty[j]){
          highestCommonality = newArrayOfThirty[i].compareDNA(newArrayOfThirty[j]);
          firstGenome = newArrayOfThirty[i];
          secondGenome = newArrayOfThirty[j]
        }
      }
    }
    // console.log(highestCommonality)
    // console.log(firstGenome)
    // console.log(secondGenome)
    // console.log(`The highest percentage commonality is ${highestCommonality} and it is between specimen # ${firstGenome.specimenNum} and ${secondGenome.specimenNum}`)
    return highestCommonality, firstGenome, secondGenome;
    
    
  }
  
  
  
  // tests
  
  //obj.mutate()
  //obj.compareDNA(pAeuqorFactory(2, mockUpStrand()))
  //console.log(obj.willLikelySurvive())
  //createThirtyObjects()
  //console.log(pAeuqorArray)
  //console.log(pAeuqorFactory(1, mockUpStrand()).complementStrand())
  //console.log(checkForMostCommon());


 // -------------------------------------SECTION CHANGE (WEBSITE FUNCTIONALITIES)-------------------------------------------------
 let scienceProjectCover = document.getElementById('science-project-cover');
 let bringBackCoverButton = document.getElementById('bring-back-cover');

const removeScienceCover =  () => {
    scienceProjectCover.hidden = true;
}
 
  const addScienceCover = () => {
      scienceProjectCover.hidden = false;
  }
 
  scienceProjectCover.addEventListener('click', removeScienceCover)
  bringBackCoverButton.addEventListener('click', addScienceCover)



let createStrandButton = document.getElementById('create-strand');
let mutateStrandButton = document.getElementById('mutate-strand');
let compareDnaButton = document.getElementById('compare-dna');
let willLikelySurviveButton = document.getElementById('will-likely-survive');
let complementStrandButton = document.getElementById('complement-strand');
let createArrayButton = document.getElementById('create-array-of-thirty');
let returnMostCommonButton = document.getElementById('return-most-common');
let scienceProjectParagraph = document.getElementById('science-project-paragraph');
let firstOne;
let mutatedStrand;


const createStrand = () => {
    firstOne = pAeuqorFactory(1, mockUpStrand())
    scienceProjectParagraph.innerHTML = 'Object Created: p-aeuqor. <br><br> DNA strand: <br><br>' + firstOne.dna;
    return firstOne;
}

const mutateStrand = () => {
    mutatedStrand = firstOne.mutate();
    scienceProjectParagraph.innerHTML = `Strand mutated. <br><br>New Strand: <br><br>` + mutatedStrand;
    return mutatedStrand;
}

const compareDna = () => {
    firstOne.dna = mutatedStrand;
    let secondOne = pAeuqorFactory(2, mockUpStrand())
    let comparisonDNA = firstOne.compareDNA(secondOne);
    scienceProjectParagraph.innerHTML = `new specimen created. DNA: `+ secondOne.dna + `<br><br> Your specimens DNA is: ` + firstOne.dna + `<br><br>Your specimen and the new specimen share: <br><br> ` + comparisonDNA + `% of their DNA.`;
    
}

const willItSurvive = () => {
    let didItSurvive = firstOne.willLikelySurvive();
    if(didItSurvive){
        scienceProjectParagraph.innerHTML = 'A P-Aeuqor is more likely to survive if C or G base makes up at least 60% of the genome <br><br> Your strand ' + firstOne.dna + ' is likely to survive,<br><br> congrats! :)';
    }
    else if (!didItSurvive) {
        scienceProjectParagraph.innerHTML = 'A P-Aeuqor is more likely to survive if C or G base makes up at least 60% of the genome <br><br> Your strand ' + firstOne.dna + ' is not likely to survive,<br><br> sorry :(';
    }
}

const createComplementaryStrand = () => {
    let complementaryStrand = firstOne.complementStrand();
    scienceProjectParagraph.innerHTML = 'Complementary strand created. <br><br> Your strand: ' + firstOne.dna + '<br><br> Complementary strand: <br><br>' + complementaryStrand;
}

const createArray = () => {
     let arrayOfThirty = [];
     arrayOfThirty = createThirtyObjects();
    scienceProjectParagraph.innerHTML = `Ran a program to create P-Aeuqor strands until 30 pass the .willLikelySurvive function. <br><br>Array created. <br><br>`+'specimen # '+ arrayOfThirty[0].specimenNum +':  '+ arrayOfThirty[0].dna + '<br>'+'specimen # '+ arrayOfThirty[1].specimenNum + ':  ' + arrayOfThirty[1].dna+ '<br>'+'specimen # '+ arrayOfThirty[2].specimenNum +':  ' + arrayOfThirty[2].dna + '<br> etc.' ;
}

const returnMostCommon = () => {
    checkForMostCommon();
    scienceProjectParagraph.innerHTML = `The highest percentage commonality is ${highestCommonality} and it is between specimen # ${firstGenome.specimenNum} and ${secondGenome.specimenNum}`;
} 

createStrandButton.addEventListener('click', createStrand)
mutateStrandButton.addEventListener('click', mutateStrand)
compareDnaButton.addEventListener('click', compareDna)
willLikelySurviveButton.addEventListener('click', willItSurvive)
complementStrandButton.addEventListener('click', createComplementaryStrand)
createArrayButton.addEventListener('click', createArray)
returnMostCommonButton.addEventListener('click', returnMostCommon)


  