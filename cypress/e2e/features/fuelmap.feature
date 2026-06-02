Feature: Filtro del mapa de gasolineras

  Scenario: El usuario filtra gasolineras por rótulo
    Given el usuario navega a "/mapa"
    Then debería ver el input de filtro por rótulo
    When el usuario escribe "Repsol" en el filtro de rótulo
    Then el filtro debería contener "Repsol"