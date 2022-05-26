 Feature: Login Feature
    
     As a client I can login in the page 
 Scenario: Successful Sign In
 Given Abriendo la pagina de login
 When Escribiendo el username "tomsmith"
 And Escribiendo el password "SuperSecretPassword!"
 And Dando click en el boton log
 Then Mostrando el mensaje 