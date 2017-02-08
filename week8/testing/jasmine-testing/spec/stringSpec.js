describe('javascript strings', function(){
    var greeting = 'hello'
    it('can tell you its length', function(){
	expect(greeting.length).toEqual(5)
    })
    it('can be capitalized', function(){
	expect(greeting.toUpperCase()).toEqual('HELLO')
    })
})
