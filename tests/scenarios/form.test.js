import * as assert from "../helpers/asserts";
import * as cookie from "../helpers/cookie";
import * as element from "../helpers/elements";
import * as route from "../helpers/route";
import * as inputForm from "../pages/form.page";


describe('Input', function () {
    beforeEach(() => {
        cookie.clearCookies();
        route.visitDashboard();
    });

    it('Ensure the error message is shown when user not input the form', () => {
        element.click(inputForm.submitButton)
        assert.shouldContainAndBeVisible(inputForm.errorMessage, "This question is required.")

    });

    it('Ensure the error message is shown when user not input full name', () => {
        element.clearField(inputForm.fullNameField)
        element.fillField(inputForm.phoneNumberField, "08124423323")
        element.click(inputForm.chooseOptioneOne)
        element.click(inputForm.selectRate)
        element.click(inputForm.reviewDate)
        element.clickIfContain(inputForm.selectReviewDate, "15")
        element.click(inputForm.submitButton)

        assert.shouldContainAndBeVisible(inputForm.errorMessage, "This question is required.")
    });

    it('Ensure the error message is shown when user not input phone number', () => {
        element.fillField(inputForm.fullNameField, "Deni Pratama")
        element.clearField(inputForm.phoneNumberField)
        element.click(inputForm.chooseOptioneOne)
        element.click(inputForm.selectRate)
        element.click(inputForm.reviewDate)
        element.clickIfContain(inputForm.selectReviewDate, "15")
        element.click(inputForm.submitButton)

        assert.shouldContainAndBeVisible(inputForm.errorMessage, "This question is required.")
    });

    it('Successfully input full name in the form', () => {
        element.fillField(inputForm.fullNameField, "Deni Pratama")

        assert.shouldNotContain(inputForm.errorMessage)
    });

    it('Successfully input phone number in the form', () => {
        element.fillField(inputForm.phoneNumberField, "08124423323")

        assert.shouldNotContain(inputForm.errorMessage)
    });

    it('Successfully input "Do you think your product or service is affordable or expensive?" in the form', () => {
        element.click(inputForm.chooseOptioneOne)

        assert.shouldNotContain(inputForm.errorMessage)
    });

    it('Successfully input Rate our services in the form', () => {
        element.click(inputForm.selectRate)

        assert.shouldNotContain(inputForm.errorMessage)
    });

    it('Successfully input Review date in the form', () => {
        element.click(inputForm.reviewDate)
        element.clickIfContain(inputForm.selectReviewDate, "15")

        assert.shouldNotContain(inputForm.errorMessage)
    });

    it('Ensure the new page shown when completed input all data', () => {
        element.fillField(inputForm.fullNameField, "Deni Pratama")
        element.fillField(inputForm.phoneNumberField, "08124423323")
        element.click(inputForm.chooseOptioneOne)
        element.click(inputForm.selectRate)
        element.click(inputForm.reviewDate)
        element.clickIfContain(inputForm.selectReviewDate, "15")
        element.click(inputForm.submitButton)

        assert.shouldContainAndBeVisible(inputForm.successInputForm, "Your response has been successfully recorded.")
    });
});
