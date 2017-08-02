var GoogleResults = (function () {
  function GoogleResults() {


    this.searchResult = element(By.css('#main #rcnt #search #imagebox_bigimages .iu-card-header'));
    this.searchResults = element.all(By.css('#main #rcnt #search .g'))


  }


  GoogleResults.prototype.getSearchResult = function () {   return this.searchResult;  };
  GoogleResults.prototype.getSearchResults = function () {   return this.searchResults;  };


  return GoogleResults;


})();

module.exports = GoogleResults;
