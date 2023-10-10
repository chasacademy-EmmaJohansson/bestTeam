import React from "react";
import Order from "~/Components/profile/Order";
import blueSneakers from "../../../public/blue-sneakers.jpg";
import beigeHoodie from "../../../public/beige-hoodie.jpg";
import whiteSneakers from "../../../public/white-sneakers.jpg";
import pinkPants from "../../../public/pink-pants.jpg";
import Wishlist from "~/Components/profile/Wishlist";

const profilePage = () => {
  return (
    <main>
      <h1 className="mt-8 text-3xl font-bold">My Orders</h1>
      <Order
        orderNr="Order No: 123456789"
        orderDate="18 Oct 2023"
        estDeliveryDate="20 Oct 2023"
        orderStatus="In Progress"
        paymentMethod="Credit Card"
        img={blueSneakers}
        alt="Blue Sneakers"
        productName="Blue Sneakers"
        color="Blue"
        qty={1}
        total={120}
      />

      <Order
        orderNr="Order No: 123456789"
        orderDate="18 Oct 2023"
        estDeliveryDate="20 Oct 2023"
        orderStatus="In Progress"
        paymentMethod="Credit Card"
        img={beigeHoodie}
        alt="Blue Sneakers"
        productName="Blue Sneakers"
        color="Blue"
        qty={1}
        total={120}
      />
      <div className="mb-32 mt-8 border-b-2 border-neutral-200"></div>
      <h1 className="text-3xl font-bold">Wishlist</h1>
      <Wishlist
        img={pinkPants}
        alt="Pink Pants"
        color="Pink"
        qty={1}
        total={70}
        productName="Pink Pants"
      />
      <Wishlist
        img={whiteSneakers}
        alt="Pink Pants"
        color="Pink"
        qty={1}
        total={70}
        productName="Pink Pants"
      />
    </main>
  );
};

export default profilePage;
