Feature: To test add tariff plan

  @tag2
  Scenario Outline: To verify the succes message with valid details
    Given The user is in the add tarrif page
    When The user enter  valid plan details "<MonthlyRental>","<FreeLocalMinutes>","<FreeInternationalMinutes>","<FreeSMSPack>","<LocalPerMinutesCharges>","<InternationalPerMinutesCharges>","<SMSPerCharges>"
    And The user click the submit button
    Then The user should see the success message

    Examples: 
      | MonthlyRental | FreeLocalMinutes | FreeInternationalMinutes | FreeSMSPack | LocalPerMinutesCharges | InternationalPerMinutesCharges | SMSPerCharges |
      |          1000 |              100 |                      100 |         100 |                      2 |                              4 |             6 |
      |          2000 |              200 |                      200 |         200 |                      2 |                              4 |             6 |
      |          3000 |              300 |                      200 |         300 |                      2 |                              4 |             6 |
      |          4000 |              400 |                      400 |         400 |                      2 |                              4 |             6 |
