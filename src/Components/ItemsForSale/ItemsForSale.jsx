import React, { Component } from "react";
import itemsPanels from "../../ObjectsAndModels/ItemsForSale.js";

class Items extends Component {
  render() {
    return (
      <div className="header">
        <h1>Items For Sale</h1>
        <div className="panelContainer">
          {itemsPanels.itemsPanels.map((item, index) => {
            return (
              <div className={`${item.productName} panelInfo`}>
                <h3 class="productTitle">{item.productName}</h3>
                <img
                  className="panelImg"
                  src={`${item.image}`}
                  alt={`Look at this ${item.productName}`}
                />
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Items;
