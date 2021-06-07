Feature: Product checkout

  Scenario Outline: Test that product can be search, added to cart and checkout
    Given user navigate to https://cornerstone-light-demo.mybigcommerce.com
    When user search for a product
    And user adds the product to the cart
    Then user complete the checkout process with "<credit card>"  "<expiry date>" and "<expiry date>"

    Examples: 
      | credit card         | expiry date | expiry date |
      | 4111 1111 1111 1111 | 10/21       |         123 |
