const axios = require("axios");
const res = require("express/lib/response");
const { restart } = require("nodemon");

class Id {
  listITem = [];
  constructor() {}

  async items(id = "") {
    try {
      const details = await this.details(id);
      const instance = axios.create({
        baseURL: `https://api.mercadolibre.com/items/${id}`,
      });

      const resp = await instance.get();
      const item = this.getItem(resp.data, details);
      this.listITem.push({
        autor: {
          name: "Mariana Loaiza",
          lastName: "Loaiza Llano",
        },
        item,
      });

      return this.listITem;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async details(id = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.mercadolibre.com/items/${id}/description`,
      });
      const resp = await instance.get();
      const { plain_text } = resp.data;
      return plain_text;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  getItem(element, details) {
    let item = {};
    let list = {};
    [element].map((data) => {
      item = {
        id: data.id,
        title: data.title,
        price: {
          amaunt: data.price,
          currency: data.currency_id,
        },
        picture: data.thumbnail,
        condition: data.condition,
        shippfree_shipping: data.shipping.free_shipping,
        description: details,
      };

      list = Object.assign(item);
    });
    return list;
  }
}

module.exports = Id;
