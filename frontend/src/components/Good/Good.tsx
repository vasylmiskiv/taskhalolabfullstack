import "./Good.scss";

type Props = {
  good: Good;
  buy: (good: Good) => void;
};

export const Good: React.FC<Props> = ({ good, buy }) => {
  return (
    <div className="good-card">
      <div className="good-card__category">{good.category}</div>
      <div className="good-card__name">{good.name}</div>
      <div className="good-card__price">
        <div>
          <span className="good-card__dollar-sign">$</span>
          {good.price}
        </div>
        <button
          className="good-card__buy"
          type="button"
          onClick={() => buy(good)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
