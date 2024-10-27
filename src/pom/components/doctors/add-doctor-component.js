const BaseComponent = require('../common/base.component');

class AddDoctorModal extends BaseComponent {
  constructor() {
    super('.new-doctor-dialog');
  }

  /**
   *
   * @param {'save' | 'close'} button
   */
  async clickButton(button) {
    if (button.toLowerCase() === 'save') {
      await this.saveBtn.click();
    } else await this.closeBtn.click();
  }

  get saveBtn() {
    return this.rootEl.$('.e-footer-content button.e-primary');
  }

  get closeBtn() {
    return this.rootEl.$('.new-doctor-dialog .e-dlg-closeicon-btn');
  }

  /**
   *
   * @param {'name' | 'phone' | 'email' | 'education' | 'designation'} name
   * @returns {*}
   */

  input(name) {
    const selectors = {
      name: '[name="Name"]',
      phone: '#DoctorMobile',
      email: '[name = "Email"]',
      education: '[name = "Education"]',
      designation: '[name = "Designation"]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}
module.exports = AddDoctorModal;
