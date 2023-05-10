import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import BillingInfo from './BillingInfo';
import Receipt from './Receipt';

const Orders = () => {
  const [cartItems, setCartItems] = useState([]);
  const [stage, setStage] = useState('cart');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    axios
      .get('https://api.jsonbin.io/v3/b/645017f19d312622a3559b2a')
      .then((response) => {
        console.log(response.data.record.cart);
        setCartItems(response.data.record.cart);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) {
      fetchData();
    }
  }, [cartItems.length, fetchData]);

  const handleDeleteItem = (item) => {
    axios
      .delete(`https://beaty-product-shop.onrender.com/${item.id}`)
      .then(() => {
        setCartItems((prevState) =>
          prevState.filter((cartItem) => cartItem.id !== item.id)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleQuantityChange = (value, item) => {
    axios
      .patch(`https://beaty-product-shop.onrender.com/${item.id}`, {
        quantity: value
      })
      .then(() => {
        setCartItems((prevState) => {
          const updatedCartItems = prevState.map((cartItem) => {
            if (cartItem.id === item.id) {
              return { ...cartItem, quantity: parseInt(value) };
            }
            return cartItem;
          });
          return updatedCartItems;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCheckout = () => {
    setStage('billing');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/customers', formData);
    setStage('receipt');
  };

  const handleConfirm = () => {
    setCartItems([]);
    navigate('/success');
  };

  return (
    <div className="bg-gray-100 pt-5 pb-20">
      {stage === 'cart' && (
        <ShoppingCart
          cartItems={cartItems}
          handleDeleteItem={handleDeleteItem}
          handleQuantityChange={handleQuantityChange}
          handleCheckout={handleCheckout}
        />
      )}
      {stage === 'billing' && (
        <BillingInfo
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      )}
      {stage === 'receipt' && (
        <Receipt
          cartItems={cartItems}
          formData={formData}
          handleConfirm={handleConfirm}
        />
      )}
    </div>
  );
};

export default Orders;
