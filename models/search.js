const axios = require("axios");
const res = require("express/lib/response");
const { restart } = require("nodemon");

class Search {
  listSearch = [];
  constructor() {}

  async items(product = "") {
    try {
      const instance = axios.create({
        baseURL: `https://api.mercadolibre.com/sites/MLA/search`,
        params: {
          q: product,
        },
      });
      const resp = await instance.get();

      const categories = this.getCategories(resp.data.filters);
      const item = this.getItems(resp.data.results).slice(0, 4);

      this.listSearch.push({
        autor: {
          name: "Mariana Loaiza",
          lastName: "Loaiza Llano",
        },
        categories,
        item,
      });

      return this.listSearch;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  getItems(element) {
    const items = [];
    element.forEach((element) => {
      items.push({
        id: element.id,
        title: element.title,
        prices: this.getPrices(element),
        picture: element.thumbnail,
        condition: element.condition,
        shippfree_shipping: element.shipping.free_shipping,
        city: element.address.state_name,
      });
    });

    return items;
  }

  getCategories(element) {
    const items = [];
    element.filter((data) => {
      data.values.map((item) => {
        items.push(item.name);
      });
    });

    return items;
  }

  getPrices(element) {
    let item = {};
    let prices = {};
    element.prices.prices.forEach((data) => {
      item = { currency: data.currency_id, amount: data.amount };

      prices = Object.assign(item);
    });
    return prices;
  }
}

module.exports = Search;
