import { useState, useEffect } from "react";
import { Customer, Purchases, Card } from "@/app/data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
  user: Customer;
}

interface PurchaseProps {
  purchase: Purchases;
  card: Card;
}

export default function History({ user }: Props) {
  const [displayPurchases, setDisplayPurchases] = useState(user.purchases);
  const [selectedSort, setSelectedSort] = useState(1);

  const sortDates = () => {
    const sortDates = [...user.purchases].sort((a, b) => {
      if (a.date < b.date) {
        return -1 * selectedSort;
      }
      if (a.date > b.date) {
        return 1 * selectedSort;
      }
      return 0;
    });

    setSelectedSort(selectedSort * -1);
    setDisplayPurchases(sortDates);
  };

  return (
    <div className="space-y-2">
      <div className="flex w-[300px]">
        <h1>Purchase History</h1>
      </div>
      <div className="table">
        <div className="table-header grid-cols-3">
          <div>Type</div>
          <button
            className="text-left w-fit underline underline-offset-4 hover:text-dark_blue"
            onClick={() => sortDates()}
          >
            Date
          </button>
          <div>Amount</div>
        </div>
        <div className="overflow-y-auto max-h-[450px]"> {/* Added max-height to make rows scrollable */}
            {displayPurchases.map((purchase) => (
          <EventItem key={purchase.id} purchase={purchase} card={user.card} />
        ))}
        </div>
      </div>
    </div>
  );
}

// Individual row with dropdown
const EventItem = ({ purchase, card }: PurchaseProps) => {
  const [isDropdown, setDropdown] = useState(false);

  return (
    <div className="border-b border-light_blue py-4 px-2 space-y-4">
      <div className="grid grid-cols-3 text-black">
        <div className="font-bold space-x-2 flex">
          <button onClick={() => setDropdown(!isDropdown)}>
            {isDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <div>{purchase.type}</div>
        </div>
        <div>{purchase.date}</div>
        <div>${purchase.amount}</div>
      </div>
      {isDropdown && (
        <div className="grid grid-cols-3 text-black">
          <div>
            <span className="font-bold">Card:</span> xxxx-xxxx-xxxx-
            {String(card.card_number).slice(-4)}
          </div>
          <div><span className="font-bold">Location:</span> {purchase.location}</div>
          <div><span className="font-bold">Invoice-ID:</span> {purchase.id}</div>
        </div>
      )}
    </div>
  );
};
