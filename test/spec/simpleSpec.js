define(['src/credits', 'src/addhtml'], function(credits, addHtml) {
	describe("A suite", function() {
		it("contains spec with an expectation", function() {
			expect(true).toBe(true);
		});
	});
	
	describe("Credits", function() {
		it("has getCredits function", function() {
			expect(credits.getCredits).toBeDefined();
			expect(typeof credits.getCredits).toBe('function');
		});
	});

	describe("Fixtures", function() {
		it("works", function() {
			expect($('<input type="checkbox" checked="checked"/>')).toBeChecked();	

			var fixtures = setFixtures(readFixtures('myfixture.html'));
			addHtml.addHtml(fixtures.find('#my-fixture'), 'test');

			expect(fixtures.find('#my-fixture').html()).toBe('test');
		});
	});
});


