# Escuela Colombiana de Ingeniería Julio Garavito
## Arquitecturas empresariales
### Jonathan Prieto 
#### Segundo proyecto - Convertidor de monedas
#### [Link AWS](http://currencyc-jonathan-prieto.s3-website-us-east-1.amazonaws.com)
#### [Link Artículo](https://docs.google.com/document/d/1eEA_byE8dkwNHvZAMrbBF6oP7pY_s5g_t6CH16jpVF4/edit?usp=sharing)
---
##### Descripción

Usted es un arquitecto en una organización que proporciona soluciones modernas y fáciles de escalar.

Un cliente del sector financiero desea construir un portal  que exponga servicios para el manejo rápido de las transacciones que efectúa la mesa de dinero. El primer conjunto de servicios que se incluirá en la plataforma será el de tasas de cambio. Usted debe diseñar e implementar una aplicación para la consulta y búsqueda de tasas de cambio y para la conversión de monedas. La aplicación debe construirse con microservicios usando la infraestructura de AWS lambda, AWS API Gateway y otros que usted considere. El aplicativo debe tener una interfaz de usuario simple, el servidor es un servidor de publicación de tasas de cambio y el canal de comunicación es TCP o HTTP.

La aplicación podrá extenderse con otros conjuntos de microservicios, es decir su implementación inicial incluirá los requerimientos de tasa de cambio, pero debería poder extenderse a otros servicios financieros, por ejemplo, para negociar bonos, o bitcoins.


El servidor expondría diferentes servicios para el consumo de la aplicación cliente, lista de tasas de cambio para diferentes monedas, búsqueda del tipo de cambio para una moneda específica y un conversor de moneda para convertir una cantidad específica de dinero de una moneda a otra. Utilice una de las API de conversión de moneda pública (https://openexchangerates.org/signup/free,https://currencylayer.com/documentation, etc.) en el lado del servidor para obtener las últimas tasas de conversión.

La aplicación cliente debe proporcionar una interfaz simple y clara para que el usuario final realice diferentes funcionalidades expuestas por el servidor, listando las monedas con sus tasas de cambio, el cuadro de búsqueda de una moneda específica, la caja de cambio de moneda y un botón de actualización para actualizar las tarifas del servidor .

La aplicación cliente debe ser responsive, cualquier congelación en la aplicación cliente no es aceptable, las operaciones de la red deben ser operaciones sin bloqueo, se debe notificar al usuario que hay una llamada del servidor y recibir una notificación una vez que se reciba la respuesta y se presente sin bloqueos.

Debe utilizar tecnologías Java y JS modernas para diseñar e implementar la aplicación con las especificaciones mencionadas.

- En la raíz del repositorio se podrá encontrar el artículo y el modelo en astah del proyecto.
