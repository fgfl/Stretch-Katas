/*

In this exercise, we will be building an advanced case maker that can convert strings into all different kinds of case styles;
like camel, pascal, snake, or even kebab.

Case Maker II

We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with.
The following code block will describe all the casing styles to support.
We may also receive an array of casing styles, and each of these should be applied.

Create a function named makeCase that will receive an input string and one or more casing options.
Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

  1. camel, pascal, snake, kebab, title
  2. vowel, consonant
  3. upper, lower

Our function should be able to handle all of these cases. 

Per discussion here: http://web-prep-help.lighthouselabs.ca/t/kata-12-clarification-about-precedence-in-casing-solved/1749
the precendence will be applied in the order given above without care for sub-categorizing. 
My understandinign is 'kebab' will not over write 'snake'. 'Title' won't undo the spacing for 'camel', etc.
i.e. The output of a preceding case style will be passed to the next for processing. It is not necessary
that a following case style will make any changes.
*/
const punctuationRegex = /[.,?!\'\"]/;
const casePrecendenceMap = new Map([
  ['camel', 0],
  ['pascal', 1],
  ['snake', 2],
  ['kebab', 3],
  ['title', 4],
  ['vowel', 5],
  ['consonant', 6],
  ['upper', 7],
  ['lower',8]
]);
  
// thisIsCamelCase
// Spaces and punctuation are removed and the first letter of each word is capitalised. Except first word
function camelCase(input) {
  // Your code here
  let camelString = input.replace(punctuationRegex, '');
  camelString = camelString.trim();

  for(let i = 0; i < camelString.length; i++) {
    if(camelString[i] === ' ') {
      camelString = camelString.slice(0, i) + camelString[i + 1].toUpperCase() + camelString.slice(i + 2);
      i--; // check the same index after removing the space
    }
  }
  return camelString;
};

// ThisIsPascalCase
// Spaces and punctuation are removed and the first letter of each word is capitalised.
function pascalCase(input) {
  let pascalString = camelCase(input);
  pascalString = pascalString[0].toUpperCase() + pascalString.slice(1);

  return pascalString;
};

// this_is_snake_case
// Punctuation is removed and spaces are replaced by single underscores.
function snakeCase(input) {
  let snakeString = input.replace(punctuationRegex, '');
  snakeString.trim();
  snakeString = snakeString.replace(/\s/g, '_');
  return snakeString;
}

// this-is-kebab-case
// Similar to snake case, above, except hyphens rather than underscores are used to replace spaces. 
function kebabCase(input) {
  let kebabString = input.replace(punctuationRegex, '');
  kebabString.trim();
  kebabString = kebabString.replace(/\s/g, '-');
  return kebabString;
}

// This Is Title Case
// The first word and all other words capitalised.
// ignoring case where  articles and short prepositions and conjunctions are not capitalized.
function titleCase(input) {
  let titleString = input.trim();
  let titleWords = titleString.split(' ');

  titleWords.forEach(function(word,index, wordArray) {
    wordArray[index] = word[0].toUpperCase() + word.slice(1);
  });

  return titleWords.join(' ');
}

// thIs Is vOwEl cAsE
// Upper case all the vowels
function vowelCase(input) {
  let vowelString = input.trim();
  vowelString = vowelString.replace(/[aeiou]/g, function(match) {
    return match.toUpperCase();
  });
  
  return vowelString;
}

// THiS iS CoNSoNaNT CaSe
// Upper case all the consonants
function consonantCase(input) {
  let consonantString = input.trim();
  consonantString = consonantString.replace(/[^aeiou]/g, function(match) {
    return match.toUpperCase();
  });

  return consonantString;
}

/*
  Takes an input string an one or more casing options and transforms the input text
  input: input text
  typeCase: string or array of strings with the case options to apply to the input text
  return: string with case options applied. Undefined if the case option is invalid.
*/
const makeCase = function(input, typeCase) {
  // Put your solution here
  let styledOutput = '';

  if(Array.isArray(typeCase)) {
    styledOutput = input;
    //need to reorder typeCase to apply by precendence
    // implement something like sorting with map example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // map based on casePrecedenceMap, sort by the value, then extact the style string to an array
    let mappedStyles = typeCase.map(function(style) {
      return {key: style, value: casePrecendenceMap.get(style)}
    });

    mappedStyles.sort(function(a, b) {
      return a.value - b.value;
    });

    let sortedStyles = mappedStyles.map(function(style) {
      return style.key;
    })

    sortedStyles.forEach(function(style) {
      styledOutput = applyCaseStyle(styledOutput, style);
    });
  } else if(typeof typeCase === 'string') {
    styledOutput = applyCaseStyle(input, typeCase);
  }

  /*
    Applies the case style to input based on the string in typeCaseString.
    input: input string to transfrom
    typeCaseString: string to choose what case style to use
    return: string that has been transformed per the case style. Return undefined if typeCastString is not
      supported.
  */
  function applyCaseStyle(input, typeCaseString) {
    switch(typeCaseString) {
      case 'camel':
        return camelCase(input);
        break;
      case 'pascal':
        return pascalCase(input);
        break;
      case 'snake':
        return snakeCase(input);
        break;
      case 'kebab':
        return kebabCase(input);
        break;
      case 'title':
        return titleCase(input);
        break;
      case 'vowel':
        return vowelCase(input);
        break;
      case 'consonant':
        return consonantCase(input);
        break;
      case 'upper':
        return input.toUpperCase();
        break;
      case 'lower':
        return input.toLowerCase();
        break;
      default:
        return undefined;
    }
  }

  return styledOutput;
}

console.log(makeCase(" this.is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("thIs is a string", "vowel")); // check what happens if vowel is already upper cased
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "consonant")); // check what happens if consonant is already upper case
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["kebab", "snake"])); // run snake, kebab doesn overwrite
console.log(makeCase("this is a string", ["kebab", "snake"]) === 'this_is_a_string');
console.log(makeCase("this is a string", ["camel", "pascal"]));
console.log(makeCase("this is a string", ["camel", "pascal"]) === 'ThisIsAString');
console.log(makeCase("this is a string", ["pascal", "camel"]));
console.log(makeCase("this is a string", ["pascal", "camel"]) === 'ThisIsAString');
console.log(makeCase("this is a string", "not a right case style"));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// thIs Is A strIng
// THiS iS a STRiNG
// THiS iS a STRiNG
// THIS IS A STRING
// this is a string
// THIS_IS_A_STRING