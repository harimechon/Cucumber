Feature: Add tariff plan

  Scenario: Add Tariff Plans
    Given The user navigates to add tariff plan
    When The user fill the valid tariff plandetails
      | Monthly Rental                    | 500 |
      | Free Local Minutes                | 500 |
      | Free International Minutes        | 250 |
      | Free SMS Pack                     |  30 |
      | Local Per Minutes Charges         |   5 |
      | International Per Minutes Charges |   5 |
      | SMS Per Charges                   |   5 |
    And The user click submit button
    Then Ther user shouls see the cogratulation you add tariff plan
