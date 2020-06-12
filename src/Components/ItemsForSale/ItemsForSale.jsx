import React, { Component } from "react";
import itemsPanels from "../../ObjectsAndModels/ItemsForSale.js";

class Items extends Component {
  state = {
    basketCase: [],
    noItems: 0,
    totalPrice: 0,
  };
  render() {
    const { basketCase, noItems, totalPrice } = this.state;
    return (
      <div className="header">
        <h1>Items For Sale</h1>
        <div className="right">
          Basket
          <div>{noItems}</div>
          <div>{basketCase}</div>
          <div>{totalPrice}</div>
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
                      onClick={() =>
                        this.handleAddToBasket(item.arrName, item.price)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className={`${item.className}Remove remove`}>
                    <button
                      className={`${item.className}button removeButton`}
                      onClick={() =>
                        this.handleRemoveFromBasket(item.arrName, item.price)
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

  handleAddToBasket = (product_name, price) => {
    //Set basketCase up to push into
    let totalBasketList = this.state.basketCase;
    totalBasketList.push(product_name);

    //set value for price to set to state as we need to do some logic with how many lamps of a certain letter
    // for discount purposes
    let amendedPrice = 0;

    //set values for the letters
    let totalAs = 0;
    let totalBs = 0;
    let totalCs = 0;
    let totalDs = 0;
    //loop to find how many letters have been added and let's get our discount on :D
    for (let i = 0; i < totalBasketList.length; i++) {
      console.log(totalBasketList[i]);
      if (totalBasketList[i] === "A") {
        totalAs += 1;
      }
      if (totalBasketList[i] === "B") {
        totalBs += 1;
      }
      if (totalBasketList[i] === "C") {
        totalCs += 1;
      }
      if (totalBasketList[i] === "D") {
        totalDs += 1;
      }
      // The above logic could be componetised and handed down further notifiers for add and remove to have effective
      // totalAs += 1 OR totalAs -=  but lets nmove onto the price logic and i'll call it a day
      let totalPriceForAs = totalAs * 50;
      let totalPriceForBs = totalBs * 30;
      //dont need to do C and D cos they are not eligble for the discount
      //lets calculate that there discount
      let howMuchDiscountForAs = Math.floor(totalAs / 3);
      let howMuchDiscountForBs = Math.floor(totalBs / 2);
      if(howMuchDiscountForAs >= 1){
        let RealTotalForPriceA = totalPriceForAs-(howMuchDiscountForAs*20)
      }
      if(howMuchDiscountForBs >= 1){
        let RealTotalForPriceA = totalPriceForAs-(howMuchDiscountForAs*20)
      }
      //Okay i now have both of me new values that are the discount value. Woo I am having a break now as it is l8
      
    }

    this.setState({
      //Amend new basketCase Value
      basketCase: totalBasketList,
      // Add item name to state to show later on
      noItems: this.state.noItems + 1,
      //Add price to total price. This needs to be amended so that i
      //calculate current array and determine price due to names etc :(
      totalPrice: this.state.totalPrice + price,
    });
  };

  handleRemoveFromBasket = (product_name, price) => {
    let totalBasketList = this.state.basketCase;
    //Find index of the inputtted value and remove it in the for loop to be inputted intio state setter
    var index = totalBasketList.indexOf(product_name);
    if (index >= 0) {
      totalBasketList.splice(index, 1);
    }

    if (this.state.noItems !== 0) {
      this.setState({
        basketCase: totalBasketList,
        noItems: this.state.noItems - 1,
        totalPrice: this.state.totalPrice - price,
      });
    }
    //Alert message to user that you cannot have minus things
    else {
      alert(
        "Apologies, but it appears you have not yet put anything into the basket to be removed"
      );
    }
  };
}

export default Items;
