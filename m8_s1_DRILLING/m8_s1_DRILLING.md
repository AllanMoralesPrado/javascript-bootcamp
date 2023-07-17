## Javascript FullStack Web Development
### Módulo 8, Sesión 1 - APIS RESTFULL

# DRILLING: CONSULTAS A APIS

### EJERCICIO
La  siguiente  actividad  consiste  en  consultar  el  repositorio  de  APIs  públicas  publicado  en  GitHub. 
Consultaremos la API de Currency Exchange, y dentro de la misma, la API de Currency-api que es una de tasas de cambio de moneda gratis, con más de 150 monedas y sin límites de tasa.

Los pasos a seguir son los siguientes: 
1. Ingresa a https://github.com/public-apis/public-apis 
2. Selecciona Currency Exchange, o: https://github.com/public-apis/public-apis#currency-exchange 
3. Selecciona la API Currency-api, o: https://github.com/fawazahmed0/currency-api#readme  
4. Responde lo siguiente: 
    - ¿Qué observas en el sitio, de qué se trata? 
    - ¿Cuál es la estructura? 
    - ¿Cómo obtengo el tipo de cambio actual de pesos chilenos, con relación a las otras monedas? 
    - ¿Cómo obtengo la tasa de cambio actual del peso chileno, con relación al dólar? 
    - ¿Cómo obtengo la tasa de cambio de peso chileno para el 10-01-2022, con relación al dólar? 
    - ¿Qué tipo de operaciones permite la API Free Currency Rates API?

### SOLUCIÓN
- La API trata de la tasa de cambio entre monedas y criptomonedas.
- La estructura para realizar peticiones es la siguiente:

    ```http
    https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
    ```
- Para obtener el tipo de cambio actual de pesos chilenos, con relación a otras monedas se debe acceder al siguiente endpoint:

    ```http
    https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/clp.json
    ```
- Para obtener la tasa de cambio actual para convertir el dólar americano a pesos chilenos se debe acceder al siguiente endpoint:

    ```http
    https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/clp.json
    ```
- Idem al punto anterior, pero con fecha 10-01-2022, en lugar de utilizar el endpoint `lastest` para estos días, utilícese el endpoint `2022-01-10`:

    ```http
    https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-01-10/currencies/usd/clp.json
    ```
- De acuerdo con la documentación de la API las operaciones permitidas son:

    - Para versión formateada o simplificada:
        - Obtener el acrónimo de las monedas disponibles en la API y su significado.
        - Para la fecha más reciente o una histórica:
            - Obtener las tasas de cambios de una moneda respecto a todas las demás.
            - Obtener la tasa de cambio de una moneda respecto de otra.
