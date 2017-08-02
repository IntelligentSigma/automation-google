var LabelsPage = (function () {
    function LabelsPage() {
        this.labelList = element(by.css('* /deep/ .label-list'));
        this.firstLabel = element(by.css('* /deep/ .label-list li a'));
        this.detachLabel = element(by.css('* /deep/ .label-list li label-detach-dialog'));
        this.detachButton = element(by.css('* /deep/ button[data-test-detach-button]'));
        this.attachButton = element(by.css('* /deep/ button[data-test-attach-button]'));

        this.attachLabel = element(by.css('* /deep/ button[data-test-attach-label]'));

        this.detachReason = element(by.css('* /deep/ #detach-reason'));

        this.labelAvailable = element(by.css('* /deep/ .label-list a:nth-child(1)'))
    }

    LabelsPage.prototype.getLabelList = function () {   return this.labelList;  };
    LabelsPage.prototype.getFirstLabel = function () {   return this.firstLabel;  };
    LabelsPage.prototype.getDetachLabel = function () {   return this.detachLabel;  };
    LabelsPage.prototype.getDetachButton = function () {   return this.detachButton;  };
    LabelsPage.prototype.getAttachButton = function () {   return this.attachButton;  };

    LabelsPage.prototype.getAttachLabel = function () {   return this.attachLabel;  };

    LabelsPage.prototype.getDetachReason = function () {   return this.detachReason;  };

    LabelsPage.prototype.getLabel = function () {   return this.labelAvailable;  };
    

    LabelsPage.prototype.visitPage = function (personId, section) {
        var ptor = new (require('qa-shared-base/lib/protractor-lib.js'));
        var personParam = "",
            sectionParam = "",
            viewParam = "";
        if(personId) {
            personParam = "&person=" + personId;
        }

        if(section == "labels") {
            sectionParam = "/" + section;
            viewParam = "/v8/person/" + personId;
        }
        else if(section) {
            sectionParam = "&section=" + section;
            viewParam = '#view=ancestor'
        }

        console.log("url:" + browser.testEnv.baseUrl + viewParam + sectionParam);
        browser.get(browser.testEnv.baseUrl + viewParam + sectionParam);

        experiments();
    };

    LabelsPage.prototype.visitV8LabelsPage = function (labelId) {
        var viewParam = "";

        if(labelId) {
            viewParam = "/v8/labels/" + labelId;
        }

        console.log("url:" + browser.testEnv.baseUrl + viewParam);
        browser.get(browser.testEnv.baseUrl + viewParam);

        experiments();
    };

    function experiments() {
        var experiments = new (require('qa-shared-experiments/lib/experiments.js'));

        if(browser.testEnv.experiments && Object.keys(browser.testEnv.experiments)) {
            Object.keys(browser.testEnv.experiments).forEach(function myFunction(experiment) {
            experiments.setExperiment(experiment, browser.testEnv.experiments[experiment]);
        });
        browser.refresh();
    }
}

    return LabelsPage;

})();

module.exports = LabelsPage;
