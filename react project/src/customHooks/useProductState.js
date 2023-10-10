import { useEffect, useState } from "react";

export let productState = {
  haveNoQuantity: "haveNoQuantity",
  haveOneItem: "haveOneItem",
  haveQuantity: "haveQuantity",
};

export const useProductState = (productQuantity) => {
  let [state, setState] = useState(productState.haveNoQuantity);

  useEffect(() => {
    let currentState = productState.haveNoQuantity;
    if (productQuantity == 1) currentState = productState.haveOneItem;
    else if (productQuantity > 1) currentState = productState.haveQuantity;

    setState(currentState);
  }, [productQuantity]);

  return state;
};
