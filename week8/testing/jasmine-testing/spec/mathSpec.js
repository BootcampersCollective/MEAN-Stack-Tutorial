describe('JavaScript Math.random() method', function () {
    it('makes numbers', function () {
        expect(typeof Math.random()).toEqual('number');
    });
    it('usually makes numbers that are bigger than .25', function(){
	expect(Math.random() > .25).toEqual(true)
    });
    
});
