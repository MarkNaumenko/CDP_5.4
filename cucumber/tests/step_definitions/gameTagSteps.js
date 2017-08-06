var steamStore = require('../support/pages/steamStore.js');

var steps = function() {

    this.Then(/^check '([^"]*)' feature$/, function(tag) {
        return element(by.xpath('.//img[contains(@src,"multiPlayer")]')).isPresent();
        // .then(function(qwe) {
        //     expect(qwe).to.be.deep.equal(tag);
        //was chai comporation with text, now only img src
        // });
    });

};

module.exports = steps;