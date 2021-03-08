class LoginPage {
  TestLoginFacebookPage(username, password) {
    var inputEmail = $('//input[@id="email"]');
    inputEmail.setValue(username);
    console.log(">>>>>>>>>>>>>>>>>>đã input user name " + inputEmail.getValue());
    //mật khẩu đúng
    var inputPass = $('//input[@id="pass"]');
    inputPass.setValue(password);
    console.log(">>>>>>>>>>>>>>>>>>đã input password " + inputPass.getValue());
    var btnLogin = $("button#loginbutton");
    btnLogin.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút đăng nhập");
    browser.pause(8000);
  }

  TestPostStatus() {
    var tao = $('//div[@aria-label="Tạo"]');
    tao.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút Tạo");
    //click nút đăng bài
    var runInBrowser = function(argument) { 
      argument.click();
    };
    browser.pause(2000);
    var dang = browser.$(
      '//div[@class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr"]'
    ); 
    //browser.pause(2000);
    browser.execute(runInBrowser, dang);
    //dang.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút Đăng");
    browser.pause(2000);
    //nội dung test thuytien
    browser.keys("anothertest");
    console.log(">>>>>>>>>>>>>>>>>>đã gõ text đăng status");
    var dangButton = $('//div[@aria-label="Đăng"]');
    dangButton.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút Đăng Bài");
    browser.pause(10000);
  }

  TestDeleteStatusFacebook() {
    var taikhoan = $('//div[@aria-label="Tài khoản"]');
    taikhoan.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút Tài khoản");
    browser.pause(2000);
    var tkcuaban = $(
      '//span[contains(text(),"Annatesting Tran")and @dir="auto"]'
    );
    tkcuaban.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút Tài khoản của bạn");
    browser.pause(2000);
    //nút 3 chấm
    var elipses = $(
      '//div[@aria-label="Hành động với bài viết này"]'
      );
    elipses.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút 3 chấm");
    browser.pause(1000);
    //click remove vô thùng rác
    var remove = $(
      '//span[contains(text(),"Chuyển vào thùng rác") and @class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m"]'
    );
    browser.pause(10000);
    remove.click();
    console.log(">>>>>>>>>>>>>>>>>>đã click nút xóa bài");
    var chuyen = $('//div[@aria-label="Chuyển"]');
    chuyen.click();
    browser.pause(10000);
  }
}

module.exports = new LoginPage();
