function Alpha(){}

Alpha.prototype.isAlpha = function(letter){
    return /^[a-zA-Z]$/.test(letter);
};

function Vowel(){}
Vowel.prototype = new Alpha(); 

Vowel.prototype.isVowel = function(letter){
    return /^[aeiuoyAEIOUY]$/.test(letter);
};


function Consonant(){}
Consonant.prototype = new Alpha(); 

Consonant.prototype.isConsonant = function(letter){
    return /^[^aeiouyAEIOUY]$/.test(letter);
}

