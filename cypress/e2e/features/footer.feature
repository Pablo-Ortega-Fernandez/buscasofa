Feature: Footer

  Scenario: El footer muestra los nombres del equipo
    Given el usuario navega a la home
    Then debería ver el texto "Pablo Ortega Fernández"
    Then debería ver el texto "minerva"
    Then debería ver el texto "Donovan Lopez"
    Then debería ver el texto "Eli"