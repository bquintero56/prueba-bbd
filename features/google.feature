  Feature: Buscando udemy en google

    I want to find TestCafe repository by Google search

    Scenario: Searching for TestCafe by Google
    Given Abriendo la pagina de Google
    When Buscando "udemy" en Google
    Then Precionando click "enter" para buscar en Google


    Scenario: Scenario fallido
    Given Abriendo la pagina de Google
    When Buscando "udemy" en Google
    Then Precionando click "enter" para buscar en Google
    