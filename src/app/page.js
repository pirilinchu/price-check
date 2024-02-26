"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [buyPrice, setBuyPrice] = useState("Loading...");
  const [sellPrice, setSellPrice] = useState("Loading...");

  useEffect(() => {
    const fetchData = async (tradeType) => {
      const response = await fetch(
        "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fiat: "BOB",
            page: 1,
            rows: 1,
            tradeType: tradeType,
            asset: "USDT",
            countries: [],
            proMerchantAds: false,
            shieldMerchantAds: false,
            publisherType: null,
            payTypes: [],
            classifies: ["mass", "profession"],
          }),
        }
      );
      const data = await response.json();
      return data.data[0].adv.price;
    };

    fetchData("BUY").then((price) => setBuyPrice(price));
    fetchData("SELL").then((price) => setSellPrice(price));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a
          href="https://p2p.binance.com/en/trade/all-payments/USDT?fiat=BOB"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Buy <span>-&gt;</span>
          </h2>
          <p>
            <strong>{buyPrice}</strong>{" "}
            <span style={{ fontSize: "smaller" }}>BOB</span>
          </p>
        </a>

        <a
          href="https://p2p.binance.com/en/trade/sell/USDT?fiat=BOB&payment=all-payments"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sell <span>-&gt;</span>
          </h2>
          <p>
            <strong>{sellPrice}</strong>{" "}
            <span style={{ fontSize: "smaller" }}>BOB</span>
          </p>
        </a>
      </div>
    </main>
  );
}
