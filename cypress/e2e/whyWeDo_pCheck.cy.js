describe("Why We Do It Presence Check", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.get('[eventkey="2"]').click();
		cy.get("main > :nth-child(4) > .text-center");
		cy.get(":nth-child(4) > .items-center > .p-4");
	});
});
