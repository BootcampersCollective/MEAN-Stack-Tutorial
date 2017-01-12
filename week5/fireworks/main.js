var rockets = []
var particles = []
var gravity = -.00004
document.body.style.overflow = 'hidden'

function launchRocket(){
    var launchTime = performance.now()
    // start velocity should be mostly up, and a little to the left or right
    var startVelocityY = ((Math.random() * .03) - .015 ) + .07
    var startVelocityX = ((Math.random() * .02) -.01 )
    var startPositionX = (((Math.random() * 6) -3 ) +50 )
    // random spin speed/direction
    var spinSpeed = (Math.random() -.5)


    // add the rocket to the DOM and give it basic styles
    var rocket = document.createElement('rocket') // this rocket element behaves the same way as a div, because browsers don't recognize rocket elements (i made it up)
    document.body.appendChild(rocket)
    rocket.style.position = 'absolute'
    rocket.style.height = '50px'
    rocket.style.width  = '50px'
    rocket.style.border = '1px solid black'
    rocket.style.backgroundColor = "rgb(100,200,50)"
    
    // pack up the info about our rocket into an object
    var rocketMeta = {
        element        : rocket,
        launchTime     : launchTime,
        startVelocityY : startVelocityY,
        startVelocityX : startVelocityX,
        startPositionX : startPositionX,
        spinSpeed      : spinSpeed
    }
    rockets.push(rocketMeta)
    console.log(rockets)
}

// set the position of each individula rocket on one individual frame
function setRocketPositions(){
    rockets.forEach(function(rm){ // (R)ocket (M)eta
        var elapsedTime = performance.now() - rm.launchTime

        rm.element.style.bottom = (rm.startVelocityY * elapsedTime ) + (( gravity * elapsedTime * elapsedTime)/2) + 'vh'
        rm.element.style.left = ( (rm.startVelocityX * elapsedTime) + rm.startPositionX ) + 'vw'
        rm.element.style.borderRadius = ((rm.startVelocityY + ( gravity * elapsedTime)) * 500 ) + 'px'
        
        var rotation = elapsedTime * rm.spinSpeed

        rm.element.style.transform = `rotateZ(${rotation}deg)`

        // remove rockets after they explode
        rockets = rockets.filter(function(rm){
            var elapsedTime = performance.now() - rm.launchTime

            if ( (rm.startVelocityY + ( gravity * elapsedTime )) < 0 ) {
                rm.element.remove()
                var numParticles = Math.floor((Math.random()+1)*5)
                for ( var i = 0; i < numParticles; i++ ) {
                    launchParticle(rm)
                }
                return false
            }

            else { return true }
        })
    })
}

// create a new particle, in the position of a rocket when it explodes
function launchParticle(rm){
    var launchTime = performance.now()
    var startVelocityY = ((Math.random() * .03) - .015 ) + .04
    var startVelocityX = ((Math.random() * .02) - .01)
    var startPositionX = parseFloat(rm.element.style.left)
    var startPositionY = parseFloat(rm.element.style.bottom)

    var particle = document.createElement('particle')
    var spinSpeed = (Math.random() - .5)
    var borderRadius = Math.floor(Math.random()*15)

    document.body.appendChild(particle)

    particle.style.position = 'absolute'
    particle.style.height = '20px'
    particle.style.width = '20px'
    particle.style.border = '1px dashed black'
    particle.style.borderRadius = borderRadius + 'px'

    // set a random color on the particles
    var red   = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
    var blue  = Math.floor(Math.random() * 255)

    
    particle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    //the particles are a little off-center from the rocket. nudge them back in the middle
    particle.style.transform = 'translateY(50%) translateX(-50%)'

    var particleMeta = {
        element : particle,
        launchTime : launchTime,
        startVelocityX : startVelocityX,
        startVelocityY : startVelocityY,
        startPositionX : startPositionX,
        startPositionY : startPositionY,
        spinSpeed : spinSpeed
    }
    particles.push(particleMeta)
}

// set the location of each individual particle on one individual frame
function setParticlePositions(){
    particles.forEach(function(pm){ // (P)article (M)eta
        var elapsedTime = performance.now() - pm.launchTime
        pm.element.style.bottom = (( pm.startVelocityY * elapsedTime ) + pm.startPositionY ) + ((gravity * elapsedTime *elapsedTime)/2) +'vh'
        pm.element.style.left = ( (pm.startVelocityX * elapsedTime ) + pm.startPositionX ) + 'vw'
        var rotation = (elapsedTime * pm.spinSpeed)
        pm.element.style.transform = `rotateZ(${rotation}deg)`
    })

    // remove particles that fell off the screen
    particles = particles.filter(function(pm){
        var elapsedTime = performance.now() - pm.launchTime
        if ( pm.element.style.bottom[0] === '-' ) {
            pm.element.remove()
            return false
        }
        else { return true }
    })
}

// this function guarantees that we will set the rocket and particle positions on every frame
function render(){
    //console.log(performance.now())
    setRocketPositions()
    setParticlePositions()
    requestAnimationFrame(render)
}
render()



