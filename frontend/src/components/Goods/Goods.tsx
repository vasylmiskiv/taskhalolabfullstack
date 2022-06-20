import { useEffect, useState } from "react";
import { Good } from "../Good/Good";
import axios from "axios";
import { BuyModal } from "../BuyModal/BuyModal";
import { Loader } from "../Loader/Loader";
import "./Goods.scss";

export const Goods: React.FC = () => {
  const [goods, setGoods] = useState<Good[] | any>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [buyModal, setBuyModal] = useState<boolean>(false);
  const [cheapestGood, setCheapestGood] = useState<Good | any>();
  const [votedGood, setVotedGood] = useState<Good | any>();
  const [error, setError] = useState<string>("");

  const findCheapest = (goods: Good[] | any) => {
    let min = goods[0].price;
    for (let good of goods) {
      if (good.price < min) {
        min = good.price;
      }
    }

    setCheapestGood(goods.find((good: Good) => good.price === min));
  };

  useEffect(() => {
    axios
      .get("/api/goods")
      .then((res) => {
        setGoods(res.data);
        findCheapest(res.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Something went wrong");
      });
  }, []);

  const onBuy = (good: Good) => {
    setVotedGood(good);
    setBuyModal(true);
  };

  const onCloseModal = () => setBuyModal(false);

  const onVoteCheapest = () => {
    setVotedGood(cheapestGood);
    setBuyModal(true);
  };

  return (
    <>
      <div className="container">
        {loader ? (
          <Loader error={error} />
        ) : (
          <div className="goods">
            <ul className="goods-list">
              {goods.map((good: Good, i: number) => (
                <li className="goods-item" key={i}>
                  <Good good={good} buy={onBuy} />
                </li>
              ))}
            </ul>
            <button
              className="goods__buy-cheapest"
              onClick={() => onVoteCheapest()}
            >
              Buy cheapest
            </button>
          </div>
        )}
      </div>
      {buyModal && <BuyModal votedGood={votedGood} closeModal={onCloseModal} />}
    </>
  );
};
