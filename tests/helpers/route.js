export const WEB_APP_BASE_URLS = {
    DASHBOARD: Cypress.env("base_url"),
};

/******** Visit ********/
export function visit(routes) {
    cy.visit(routes);
}

/******** Visit per Site ********/
export function visitDashboard() {
    cy.visit(WEB_APP_BASE_URLS.DASHBOARD);
}

/******** Reload Location ********/
export function reload() {
    cy.reload();
}
export function forceReload() {
    cy.reload(true);
}
