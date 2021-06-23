
describe('Navigate to Registration Page', () => {
  it('Register', async () => {
    var registertBtn = await $(`//android.view.ViewGroup[@content-desc=\"register-tab\"]/android.widget.TextView`);
    await registertBtn.waitForDisplayed({ timeout: 30000 });
    await registertBtn.click();

    var emailTxb = await $('~email');
    await emailTxb.waitForDisplayed({ timeout: 30000 });
    await emailTxb.setValue("test@gmail.com")

  });
});