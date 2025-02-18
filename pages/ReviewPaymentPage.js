import { BasePage } from "./BasePage.js";

export class ReviewPaymentPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.paymentForm = page.locator("//form[@id='payment-form']");

    this.paymentFrame = page.frameLocator(
      "(//iframe[contains(@title, 'Secure payment')])[1]"
    );
    this.cardNumberInput = this.paymentFrame.locator(
      "(//input[@type='text'])[1]"
    );
    this.expiryDateInput = this.paymentFrame.locator(
      "(//input[@type='text'])[2]"
    );
    this.cvcInput = this.paymentFrame.locator("(//input[@type='text'])[3]");
    this.countryDropDown = this.paymentFrame.locator("//select[@name = 'country']");
    this.zipCodeInput = this.paymentFrame.locator("(//input[@type='text'])[4]");
    this.byProvidingCardInformationText = page.locator(
      "//p[contains(., 'By providing your card information')]"
    );
    this.productPriceText = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Product Price')]"
    );
    this.productPriceAmount = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Product Price')]/following-sibling::span"
    );
    this.installmentPriceText = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installment Price')]"
    );
    this.installmentPriceAmount = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installment Price')]/following-sibling::span"
    );
    this.subtotalText = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Subtotal')]"
    );
    this.subtotalAmount = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Subtotal')]/following-sibling::span"
    );
    this.processingFeeText = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Processing')]"
    );
    this.processingFeeAmount = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Processing')]/following-sibling::span"
    );
    this.totalText = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Total')]"
    );
    this.totalAmount = page.locator(
      "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Total')]/following-sibling::span"
    );
    this.termsAndConditionsCheckbox = page.locator(
      "//input[@type = 'checkbox']"
    );
    this.termsAndConditionsLink = page.locator(
      "//u[normalize-space()='Terms and Conditions']"
    );
    this.payButton = page.locator("//button[@type='button']");
    this.cardNumberErrorMessage = this.paymentFrame.locator(
      "//p[@id='Field-numberError' and @class='p-FieldError Error' and @role='alert']"
    );
    this.backButton = page.locator("(//span[@class='back-button'])[2]");
    this.footerText = page.locator(
      "(//p[@class = 'footer-text' and contains(text(), 'Need help?')])[3]"
    );
    this.cardExpiryErrorMessage = this.paymentFrame.locator(
      "//p[@id='Field-expiryError' and @class='p-FieldError Error' and @role='alert']"
    );
    this.cardCVCErrorMessage = this.paymentFrame.locator(
      "//p[@id='Field-cvcError' and @class='p-FieldError Error' and @role='alert']"
    );
    this.zipCodeErrorMessage = this.paymentFrame.locator(
      "//p[@id='Field-postalCodeError' and @class='p-FieldError Error' and @role='alert']"
    );
    this.progressBar = page.locator("//mat-spinner[@role='progressbar']");
    this.readAgreeTerms = page.locator(
      "//div[3]/div[4]/div[1]/div[2]/div/div[6]"
    );
    this.termsAgreementTextPop = page.locator(
      "//h1[@id='mat-mdc-dialog-title-0']"
    );
  }

}
