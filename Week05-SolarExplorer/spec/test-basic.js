describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    var scope;
    var mainController;
    var $templateCache;
    var $compile;

    // Load the elfApp module from control.js with reference in layout.jade
    beforeEach(module('elfApp'));

    /*
     * instantiate the controller stand-alone, without the directive
     * We also get the Angular compiler and templateCache so we can process angular templates
     */
    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _$controller_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
        $templateCache = _$templateCache_;
        mainController = _$controller_('MainController', {
            $scope: scope
        });
    }));

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures/';
        loadFixtures('renewable.html');
    });


    it('should be possible to access the fixture', function() {
        var spanElement = document.getElementById('renewable');
        expect(spanElement).toBeDefined();
    });

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('tests scope variable access in template loaded through raw text', function() {
        scope.renewable = [{
            "Year": "2017",
            "Solar (quadrillion Btu)": "0.8045307",
            "Geothermal (quadrillion Btu)": "0.2349284",
            "Other biomass (quadrillion Btu)": "0.50916",
            "Wind power (quadrillion Btu)": "2.202328",
            "Liquid biofuels (quadrillion Btu)": "1.2329197",
            "Wood biomass (quadrillion Btu)": "1.9860924",
            "Hydropower (quadrillion Btu)": "2.5859957"
        }];
        $templateCache.put("renewable",
            '<div id="renewable">' +
            'First: {{renewable[index].Year}}' +
            '   <br/>Solar: {{renewable[index]["Solar (quadrillion Btu)"]}}' +
            '   <br/>Geothermal: {{renewable[index]["Geothermal (quadrillion Btu)"]}}' +
            '   <br/>Other biomass: {{renewable[index]["Other biomass (quadrillion Btu)"]}}' +
            '   <br/>Wind power: {{renewable[index]["Wind power (quadrillion Btu)"]}}' +
            '   <br/>Liquid biofuels: {{renewable[index]["Liquid biofuels (quadrillion Btu)"]}}' +
            '   <br/>Wood biomass: {{renewable[index]["Wood biomass (quadrillion Btu)"]}}' +
            '   <br/>brHydropower: {{renewable[index]["Hydropower (quadrillion Btu)"]}}' +
            '</div>');

        var element = $compile('<elf-renewable></elf-renewable>')(scope);
        scope.$digest();
        console.log(element);
        // Check that the compiled element contains the templated content
        expect(element.text()).toContain(2017);
    });

    it('should be possible to access the renewable fixture', function() {
        var spanElement = document.getElementById('renewable');
        expect(spanElement).toBeDefined();
        expect(spanElement.innerHTML).toContain('First');
    });

    it('tests scope variable access in template loaded through fixture', function() {
        // Get element from fixture
        scope.renewable = [{
            "Year": "2017",
            "Solar (quadrillion Btu)": "0.8045307",
            "Geothermal (quadrillion Btu)": "0.2349284",
            "Other biomass (quadrillion Btu)": "0.50916",
            "Wind power (quadrillion Btu)": "2.202328",
            "Liquid biofuels (quadrillion Btu)": "1.2329197",
            "Wood biomass (quadrillion Btu)": "1.9860924",
            "Hydropower (quadrillion Btu)": "2.5859957"
        }];

        var el = document.getElementById('renewable');
        $templateCache.put('renewable', el);
        var element = $compile('<elf-renewable></elf-renewable>')(scope);
        scope.$digest();

        expect(element.text()).toContain('2017');

        // ETC. The rest of the code is nearly, but not exactly identical to the renewable code.
    });

});



// Load renewable.html so we can test against it
