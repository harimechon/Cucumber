$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddCustomer.feature");
formatter.feature({
  "name": "To test add custmer ID process",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test customer Id generation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user navigate to add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "Regester.the_user_navigate_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is fill in the valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Hari"
      ]
    },
    {
      "cells": [
        "LastName",
        "Prasath"
      ]
    },
    {
      "cells": [
        "Email",
        "harimech@18gmail.com"
      ]
    },
    {
      "cells": [
        "MobilNumber",
        "8754649406"
      ]
    },
    {
      "cells": [
        "Adress",
        "Erode"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Regester.the_user_is_fill_in_the_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the subit button",
  "keyword": "When "
});
formatter.match({
  "location": "Regester.the_user_click_the_subit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the customer id genrated",
  "keyword": "Then "
});
formatter.match({
  "location": "Regester.the_user_should_see_the_customer_id_genrated()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/AddTariffpPlan.feature");
formatter.feature({
  "name": "To test add tariff plan",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To verify the succes message with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The user is in the add tarrif page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user enter  valid plan details \"\u003cMonthlyRental\u003e\",\"\u003cFreeLocalMinutes\u003e\",\"\u003cFreeInternationalMinutes\u003e\",\"\u003cFreeSMSPack\u003e\",\"\u003cLocalPerMinutesCharges\u003e\",\"\u003cInternationalPerMinutesCharges\u003e\",\"\u003cSMSPerCharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The user click the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonthlyRental",
        "FreeLocalMinutes",
        "FreeInternationalMinutes",
        "FreeSMSPack",
        "LocalPerMinutesCharges",
        "InternationalPerMinutesCharges",
        "SMSPerCharges"
      ]
    },
    {
      "cells": [
        "1000",
        "100",
        "100",
        "100",
        "2",
        "4",
        "6"
      ]
    },
    {
      "cells": [
        "2000",
        "200",
        "200",
        "200",
        "2",
        "4",
        "6"
      ]
    },
    {
      "cells": [
        "3000",
        "300",
        "200",
        "300",
        "2",
        "4",
        "6"
      ]
    },
    {
      "cells": [
        "4000",
        "400",
        "400",
        "400",
        "2",
        "4",
        "6"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To verify the succes message with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The user is in the add tarrif page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_the_add_tarrif_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter  valid plan details \"1000\",\"100\",\"100\",\"100\",\"2\",\"4\",\"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_enter_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the succes message with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The user is in the add tarrif page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_the_add_tarrif_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter  valid plan details \"2000\",\"200\",\"200\",\"200\",\"2\",\"4\",\"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_enter_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the succes message with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The user is in the add tarrif page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_the_add_tarrif_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter  valid plan details \"3000\",\"300\",\"200\",\"300\",\"2\",\"4\",\"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_enter_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the succes message with valid details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "The user is in the add tarrif page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_in_the_add_tarrif_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enter  valid plan details \"4000\",\"400\",\"400\",\"400\",\"2\",\"4\",\"6\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_enter_valid_plan_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should see the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_should_see_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/Addtariffplan.feature");
formatter.feature({
  "name": "Add tariff plan",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add Tariff Plans",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user navigates to add tariff plan",
  "keyword": "Given "
});
formatter.match({
  "location": "Tariffplan.the_user_navigates_to_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill the valid tariff plandetails",
  "rows": [
    {
      "cells": [
        "Monthly Rental",
        "500"
      ]
    },
    {
      "cells": [
        "Free Local Minutes",
        "500"
      ]
    },
    {
      "cells": [
        "Free International Minutes",
        "250"
      ]
    },
    {
      "cells": [
        "Free SMS Pack",
        "30"
      ]
    },
    {
      "cells": [
        "Local Per Minutes Charges",
        "5"
      ]
    },
    {
      "cells": [
        "International Per Minutes Charges",
        "5"
      ]
    },
    {
      "cells": [
        "SMS Per Charges",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Tariffplan.the_user_fill_the_valid_tariff_plandetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Tariffplan.the_user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ther user shouls see the cogratulation you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "Tariffplan.ther_user_shouls_see_the_cogratulation_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
});