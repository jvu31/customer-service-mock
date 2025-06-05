import { Customer } from "@/app/data";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

interface Props {
  user: Customer;
  updateCard: (updatedDetails: Partial<Pick<Customer, "card">>) => void;
}

export default function CardInfo({ user, updateCard }: Props) {
  const [editCard, setEditCard] = useState(false);

  return (
    <div className="space-y-2">
      <div className="flex w-[400px]">
        <h1>Card Information</h1>
        <button className="ml-auto">
          <FaEdit
            className="hover:text-dark_gray items-center"
            size={30}
            onClick={() => setEditCard(!editCard)}
          />
        </button>
      </div>
      <div className="bg-white rounded-lg w-full p-4">
        <div className="flex justify-between items-start p-6 rounded-md shadow-sm border border-light_gray">
          {/* Billing Address */}
          <div className="w-1/2 pr-6 space-y-1">
            <h4 className="text-dark_blue font-semibold mb-2">Billing Info</h4>
            <div>{user.card.name}</div>
            <div>{user.card.address}</div>
            <div>
              {user.card.city}, {user.card.state} {user.card.zip}
            </div>
            <div>{user.card.country}</div>
          </div>

          {/* Divider */}
          <div className="w-px bg-blue-200 mx-6" />

          {/* Card Information */}
          <div className="w-1/2 pl-6 space-y-2">
            <h4 className="text-dark_blue font-semibold mb-2">Payment</h4>

            <div className="group relative">
              <div className=" text-dark_gray uppercase text-xs">
                Card Number
              </div>
              <div className="flex">
                <div className="blur-sm group-hover:blur-none transition duration-300">
                  {String(user.card.card_number).slice(4)}
                </div>
                <span>{String(user.card.card_number).slice(-4)}</span>
              </div>
            </div>

            <div className="flex gap-8 text-sm group relative">
              <div>
                <div className=" text-dark_gray uppercase text-xs">CVV</div>
                <div className="blur-sm group-hover:blur-none transition duration-300">{user.card.cvv}</div>
              </div>
              <div>
                <div className="text-dark_gray uppercase text-xs">
                  Expiration Date
                </div>
                <div className="">{user.card.exp_date}</div>
              </div>
            </div>

            <div>
              <div className=" text-dark_gray uppercase text-xs">Name</div>
              <div className="">{user.card.name}</div>
            </div>
          </div>
        </div>
      </div>

      {editCard === true ? <div>gdfgd</div> : <div>dasdas</div>}
    </div>
  );
}
