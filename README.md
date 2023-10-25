# Prueba técnica front 23/10/2023

- Algunas partes se pueden mejorar y refactorizar, como el router o los directorios para los import.

- El buscador quedaría mejorarlo para arreglar el caso en el que no se le pasa query al entrar por primera vez.

- Se podría haber creado una lista infinita en lugar de paginación.

- No he visto necesidad de utilizar redux o context, las respuestas de la api ya se cachean con react-query. Aún así he creado una store persistente con zustand como alternativa para almacenar los ids de las películas visitadas y añadidas a favoritos (de esto último quedaría hacer el fetch de la data por id).

- No he visto forma para usar la API KEY, he utilizado el auth token en su lugar, está inyectado directamente en el código.
