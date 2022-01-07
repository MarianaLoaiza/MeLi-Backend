
# Backend Mercado Libre

Se realiza una descripción de la solución desarrollada para la  prueba técnica del Backend Mercado Libre!

### Pre-requisitos 📋

Para la ejecución del proyecto se debe contar con Visual Studio Code y la instalación correspondiente a node js 
[https://nodejs.org/en/]

### Nota
Para la ejecución del proyecto se deben ejecutar los siguientes comandos:
npm i 
npm run dev

## Estructura 🚀

El Proyecto esta compuesto por los siguientes endpoints:

* /api/items - Este Servicio retorna la lista de productos que coinciden con la búsqueda esta se realiza  a través  de la API expuesta por Mercado Libre [https://api.mercadolibre.com/sites/MLA/search?q=:query] el cual recibe como parámetro un queryString  .
    Recibe como parámetros el siguiente JSON:
    ```

        "q":"string",
    
    ```
    Retorna el siguiente JSON:
    ```
        {
        "data": [
        {
          "autor": {
            "name": "Mariana Loaiza",
            "lastName": "Loaiza Llano"
          },
          "categories": [
            "Hogar, Muebles y Jardín"
          ],
          "item": [
            {
              "id": "MLA916002695",
              "title": "Silla De Escritorio Desillas Pro Sonic Gamer Ergonómica  Negra Y Azul Con Tapizado De Cuero Sintético",
              "prices": {
                "currency": "ARS",
                "amount": 31617
              },
              "picture": "http://http2.mlstatic.com/D_859013-MLA45378688969_032021-I.jpg",
              "condition": "new",
              "shippfree_shipping": true,
              "city": "Buenos Aires"
            },
            
          ]
        }
      ],
      "message": "product listed"
    }
    ```

* /api/items/:id - Este Servicio retorna el detalle del producto, la consulta se realiza a través de las API's expuestas por Mercado Libre [https://api.mercadolibre.com/items/:id
https://api.mercadolibre.com/items/:id/description] el cual recibe como parámetro el id del producto.

    ```
    {
      "data": [
        {
          "autor": {
            "name": "Mariana Loaiza",
            "lastName": "Loaiza Llano"
          },
          "item": {
            "id": "MLA1100221102",
            "title": "Fuente Cascada De Humo  Budah + 10 Conos Sahumerio.",
            "price": {
              "amaunt": 1300,
              "currency": "ARS"
            },
            "picture": "http://http2.mlstatic.com/D_890915-MLA47266341414_082021-I.jpg",
            "condition": "new",
            "shippfree_shipping": false,
            "description": "Cascada de humo, impresa en 3D - Material PLA biodegradable. Hornillo de Epoxi con metal para resistir la temperatura. Mas 10 conos de incienso . \nRealizamos impresiones de otros colores por pedido."
          }
        }
      ],
      "message": "product listed"
    }
    ```
