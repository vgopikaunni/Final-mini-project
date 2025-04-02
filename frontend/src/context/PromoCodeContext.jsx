import React, { createContext, useState, useContext } from "react";

const PromoCodeContext = createContext();

export const PromoCodeProvider = ({ children }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Available promo codes
  const validPromoCodes = {
    "SAVE10": 10,  // 10% Discount
    "NEWUSER20": 20, // 20% Discount
  };

  // Function to apply promo code
  const applyPromoCode = (code) => {
    if (validPromoCodes[code]) {
      setPromoCode(code);
      setDiscount(validPromoCodes[code]);
    } else {
      setPromoCode("");
      setDiscount(0);
    }
  };

  return (
    <PromoCodeContext.Provider value={{ promoCode, discount, applyPromoCode }}>
      {children}
    </PromoCodeContext.Provider>
  );
};

// Custom Hook
export const usePromoCode = () => useContext(PromoCodeContext);
