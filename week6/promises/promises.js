var doFirstThing = function(){
    var firstThingPromise = new Promise(function(resolve, reject){
	setTimeout(function(){
	    resolve('Did the first thing')
	},2000)
    })

    return firstThingPromise
}


var doSecondThing = function(){
    var secondThingPromise = new Promise(function(resolve, reject){
	if (Math.random() > .4) { reject('oops! something went wrong') }
	else {
	    setTimeout(function(){
		resolve('Did the second thing')
	    },1000)
	}
    })

    return secondThingPromise
}


/*
doFirstThing()
    .then(doSecondThing)
    .then(function(data){
	console.log(data)
	return 12
    }).then(function(data){
	console.log(data)
    })
*/

var firstPromise = doFirstThing()
var secondPromise = doSecondThing()

Promise.all([firstPromise, secondPromise]).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
})


