// Write a node app that will reverse the string that is
// given to it on the command line argument

// Hints: process.argv, split(), join(), reverse()

var origString = process.argv[2]

// var revArr = origString.split('')
// console.log('step1:', revArr)

// revArr = revArr.reverse()
// console.log('step2:', revArr)

// var revString2 = revArr.join('')
// console.log('step3:', revString2)

var revString2 = origString.split('').reverse().join('')
console.log(origString+' becomes '+revString2)
// split(del) splits a string into an array, splitting on the given delimiter `del`
// reverse() reverses the contents of an array
// join(del) joins the elements of an array into a single string, using the `del` between the elements

var sentence = 'this is a sentence'
sentenceWords = sentence.split(' ')  // ['this', 'is', 'a', 'sentence']
revSentence = sentenceWords.reverse()  // ['sentence','a', 'is', 'this']
revString = revSentence.join(',')  // 'sentence,a,is,this'



var reverse = function() {
    var result = '';
    for (var i=origString.length-1;i>=0;i--) {
        result += origString[i]
    }
    return result
}
var revString = reverse();



console.log(origString+' becomes '+revString)