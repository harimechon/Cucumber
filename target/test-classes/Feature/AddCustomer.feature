Feature: To test add custmer ID process

  Scenario: To test customer Id generation
    Given The user navigate to add customer page
    When The user is fill in the valid details
      | FirstName   | Hari                 |
      | LastName    | Prasath              |
      | Email       | harimech@18gmail.com |
      | MobilNumber |           8754649406 |
      | Adress      | Erode                |
    When The user click the subit button
    Then The user should see the customer id genrated
