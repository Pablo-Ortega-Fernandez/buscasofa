Feature: Página About

  Scenario: La página About muestra la información del equipo
    Given el usuario navega a "/about"
    Then debería ver el texto "Equipo 5"
    Then debería ver el texto "Pablo Ortega Fernández"
    Then debería ver el texto "Minerva"
    Then debería ver el texto "Donovan López"
    Then debería ver el texto "Eli"