import { TEN_SECOND } from "../consts/common";

/******** Visibilty ********/
export function shouldBeVisible(selector, timeout = TEN_SECOND) {
    cy.get(selector, { timeout }).should("be.visible");
}

/******** Contain ********/
export function shouldContain(selector, ...args) {
    cy.get(selector).contains(...args);
}
export function shouldContainText(selector, ...args) {
    cy.get(selector).should("contain", ...args);
}

export function shouldTitleContain(value) {
    cy.title().should("eq", value);
}
export function shouldContainAndBeVisible(selector, value, timeout = TEN_SECOND) {
    return cy.get(selector, { timeout }).contains(value).should("be.visible");
}

export function shouldNotContain(selector, timeout = TEN_SECOND) {
    return cy.get(selector, { timeout }).should("not.exist");
}

/******** Location Path ********/
export function shouldLocationEqual(path, timeout = TEN_SECOND) {
    cy.location("pathname", { timeout }).should("equal", path);
}