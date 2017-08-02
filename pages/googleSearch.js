var GoogleSearch = (function () {
  function GoogleSearch() {


    this.searchBox = element(By.css('#gsr #searchform #tsf #sfdiv #lst-ib'));
    this.searchButton = element(By.css('#gsr #searchform #tsf [value="Google Search"]'));


  }


  GoogleSearch.prototype.getSearchBox = function () {   return this.searchBox;  };
  GoogleSearch.prototype.getSearchButton = function () {   return this.searchButton;  };


  GoogleSearch.prototype.visitGoogleSearch = function () {
    console.log("url:" + browser.testEnv.baseUrl);
    browser.get(browser.testEnv.baseUrl);
  };


  return GoogleSearch;


})();

module.exports = GoogleSearch;
