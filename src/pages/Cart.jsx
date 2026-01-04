import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";


export default function Cart() {
    const navigate = useNavigate();
    
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Gold Plated Bangles",
            price: 899,
            qty: 1,
            img: "/fashionimages/categoriesimages/category7.jpg",
        },
        {
            id: 2,
            name: "Purple Grand Frock",
            price: 1799,
            qty: 1,
            img: "/fashionimages/shopimages/shop1.jpg", // change to your real image
        },
        {
            id: 3,
            name: "Kundan Stone Set",
            price: 1399,
            qty: 1,
            img: "/fashionimages/categoriesimages/category6.jpg",
        },
        {
            id: 4,
            name: "Classic Half-Saree",
            price: 1500,
            qty: 1,
            img: "/fashionimages/categoriesimages/category4.jpg", // change to your real image
        },
    ]);

    const taxRate = 0.12;
    const shipping = 0;

    const updateQty = (id, type) => {
        setItems((prev) =>
            prev.map((it) => {
                if (it.id !== id) return it;
                const nextQty = type === "inc" ? it.qty + 1 : it.qty - 1;
                return { ...it, qty: Math.max(1, nextQty) };
            })
        );
    };

    const { itemCount, subtotal, tax, total } = useMemo(() => {
        const itemCount = items.reduce((sum, it) => sum + it.qty, 0);
        const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
        const tax = Math.round(subtotal * taxRate); // screenshot looks rounded
        const total = subtotal + tax + shipping;
        return { itemCount, subtotal, tax, total };
    }, [items]);

    return (
        <div className="cart-page">
            <div className="cart-wrap">
                {/* Tabs */}
                <div className="cart-tabs">
                    <button className="tab active" type="button">
                        Product card
                    </button>
                    <button className="tab" type="button">
                        Check out page
                    </button>
                    <button className="tab" type="button">
                        Payment page
                    </button>
                </div>

                {/* Table */}
                <div className="cart-table">
                    <div className="cart-head">
                        <div className="th product">Product</div>
                        <div className="th qty">Quantity</div>
                        <div className="th price">Price (₹)</div>
                        <div className="th sub">Subtotal (₹)</div>
                    </div>

                    {items.map((it) => (
                        <div className="cart-row" key={it.id}>
                            <div className="td product">
                                <div className="prod">
                                    <img className="prod-img" src={it.img} alt={it.name} />
                                    <div className="prod-name">{it.name}</div>
                                </div>
                            </div>

                            <div className="td qty">
                                <div className="qty-control">
                                    <button
                                        className="qty-btn"
                                        type="button"
                                        onClick={() => updateQty(it.id, "dec")}
                                        aria-label={`decrease ${it.name}`}
                                    >
                                        –
                                    </button>
                                    <span className="qty-num">{it.qty}</span>
                                    <button
                                        className="qty-btn"
                                        type="button"
                                        onClick={() => updateQty(it.id, "inc")}
                                        aria-label={`increase ${it.name}`}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="td price">₹ {it.price}</div>
                            <div className="td sub">₹ {it.price * it.qty}</div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="cart-summary">
                    <div className="sum-left">
                        <div className="sum-line">
                            <span>Items</span>
                            <span>{itemCount}</span>
                        </div>
                        <div className="sum-line">
                            <span>Subtotal</span>
                            <span>₹ {subtotal}</span>
                        </div>
                        <div className="sum-line">
                            <span>Shipping</span>
                            <span>₹ {shipping}</span>
                        </div>
                        <div className="sum-line">
                            <span>Taxes</span>
                            <span>₹ {tax}</span>
                        </div>
                        <div className="sum-line total">
                            <span>Total</span>
                            <span>₹ {total}</span>
                        </div>
                    </div>

                    <div className="sum-right">
                        <button
                            className="checkout-btn"
                            type="button"
                            onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
