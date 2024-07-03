sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/dh/risk/risk/test/integration/FirstJourney',
		'com/dh/risk/risk/test/integration/pages/RisksList',
		'com/dh/risk/risk/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/dh/risk/risk') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);