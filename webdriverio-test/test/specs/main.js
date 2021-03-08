const elm = require('./element.page.js');
describe("test elements", function () {
    it("test login-poststatus-deletestatus facebook", function () {
      browser.url("https://www.facebook.com/login/web/");
      //đăng nhập
      elm.TestLoginFacebookPage('abc@gmail.com', 'temp123');
      elm.TestLoginFacebookPage('camasasantiago2004@gmail.com', 'temp123456');
      elm.TestLoginFacebookPage('abc@gmail.com', 'temp123456');
      elm.TestLoginFacebookPage('camasasantiago2004@gmail.com', 'temp123');
      //đăng bài
      elm.TestPostStatus();
      //xóa bài
      elm.TestDeleteStatusFacebook();
    });
  });
  
  
  
  