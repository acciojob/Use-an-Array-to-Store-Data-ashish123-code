const testData = [
  { input: 'apple', expectedOutput: 'fruit' },
  { input: 'carrot', expectedOutput: 'vegetable' },
  { input: 'banana', expectedOutput: 'fruit' },
  { input: 'lettuce', expectedOutput: 'vegetable' },
];

// Iterate over the test data array in your test
testData.forEach((data) => {
  it(`should correctly classify ${data.input} as a ${data.expectedOutput}`, () => {
    cy.visit('/my-page');
    cy.get('#input').type(data.input);
    cy.get('#submit-button').click();
    cy.get('#output').should('have.text', data.expectedOutput);
  });
});