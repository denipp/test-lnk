/********  Field Filling ********/
export function fillField(selector, value) {
  return cy.get(selector).type("x").clear().type(value);
}

export function clearField(selector) {
  return cy.get(selector).type("x").clear();
}


/******** Element Selection ********/
export function get(selector) {
  return cy.get(selector);
}

export function unCheckForm(selector) {
  return cy.get(selector).uncheck();
}

/******** Element Clicking ********/
export function click(selector, ...args) {
  return cy.get(selector).click(...args);
}

export function clickIfContain(selector, value) {
  return cy.get(selector).contains(value).click({ force: true });
}