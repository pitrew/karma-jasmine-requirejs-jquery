describe("A suite", function() {
	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
	});
});

describe("Fixtures", function() {
	it("works", function() {
		expect($('<input type="checkbox" checked="checked"/>')).toBeChecked();	
	});
});


