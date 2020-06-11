import React, { Component } from "react";
import itemsPanels from "../../ObjectsAndModels/ItemsForSale.js";

class Items extends Component {
  state = {
    basketCase: [],
    noItems: 0,
  };
  render() {
    const { basketCase, noItems } = this.state;
    return (
      <div className="header">
        <h1>Items For Sale</h1>
        <div className="right">
          Basket
          <div>
            {noItems}
            {basketCase}
          </div>
        </div>
        <div className="panelContainer">
          {itemsPanels.itemsPanels.map((item, index) => {
            return (
              <div className={`${item.className} panelInfo`}>
                <h3 className="productTitle">{item.productName}</h3>
                <img
                  className="panelImg"
                  src={`${item.image}`}
                  alt={`Look at this ${item.productName}`}
                />
                <p>{item.desc}</p>
                <div className="addRemove">
                  <div className={`${item.className}Add add`}>
                    <button
                      className={`${item.className}button addButton`}
                      onClick={() => this.handleAddToBasket(item.productName)}
                    >
                      +
                    </button>
                  </div>
                  <div className={`${item.className}Remove remove`}>
                    <button
                      className={`${item.className}button removeButton`}
                      onClick={() =>
                        this.handleRemoveFromBasket(item.productName)
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  handleAddToBasket = (product_name) => {
    let totalBasketList = this.state.basketCase;
    console.log(totalBasketList);
    totalBasketList.push(product_name);
    console.log(">>>>>>>", totalBasketList);
    this.setState({
      basketCase: totalBasketList,
      noItems: this.state.noItems + 1,
    });
  };

  handleRemoveFromBasket = (product_name) => {
    console.log(product_name);
    console.log(this.state.noItems);
    if (this.state.noItems !== 0) {
      this.setState({
        basketCase: [],
        noItems: this.state.noItems - 1,
      });
    } else {
      console.log("sorry bro");
    }
  };
}

export default Items;
