import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import { Customer } from "@/app/data";

interface Props {
  user: Customer;
  updateVehicles: (
    updatedDetails: Partial<Pick<Customer, "subscriptions" | "vehicles">>
  ) => void;
}

export default function Vehicle({ user, updateVehicles }: Props) {
  const [pendingChanges, setPendingChanges] = useState(false);
  const [editVehicles, setEditVehicles] = useState(false);
  const [newVehicles, setNewVehicles] = useState(user.vehicles);
  const [newSubscriptions, setNewSubscriptions] = useState(user.subscriptions);

  useEffect(() => {
    if (user) {
      setNewVehicles(user.vehicles);
      setNewSubscriptions(user.subscriptions);
      setPendingChanges(false);
    }
  }, [user, editVehicles]);

  // Handles saving the changes
  const saveChanges = () => {
    updateVehicles({
      vehicles: newVehicles,
      subscriptions: newSubscriptions,
    });
    setEditVehicles(false);
    setPendingChanges(false);
  };

  // Updates individual elem of vehicle
  const updateVehicleInfo = (id: number, field: string, value: string) => {
    setNewVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, [field]: value } : vehicle
      )
    );
    setPendingChanges(true);
  };

  // Updates subscription based on what user selects for vehicle
  const updateSubscriptionInfo = (id: number, value: string) => {
    // Indicates that user is removing a subscription from the list
    if (value === "None") {
      setNewSubscriptions((prevSubscriptions) =>
        prevSubscriptions.filter(
          (subscription) => subscription.vehicle_id !== id
        )
      );
    } else {
        
    // Adding a new subcription to list
      if (!newSubscriptions.some((subscription) => subscription.vehicle_id === id)) {
        setNewSubscriptions((prevSubscriptions) => [
          ...prevSubscriptions,
          { id: 0, vehicle_id: id, type: value },
        ]);
      }
      // Modifying an existing subscription
      else { 
        setNewSubscriptions((prevSubscriptions) =>
        prevSubscriptions.map((subscription) =>
          subscription.vehicle_id === id
            ? { ...subscription, type: value }
            : subscription
        ))
      }
    }
    setPendingChanges(true);
  };

  return (
    <div className="space-y-2">
      <div>
        <div className="flex w-[300px]">
          <h1>Vehicles</h1>
          <button className="ml-auto">
            <FaEdit
              className="hover:text-dark_gray items-center"
              size={30}
              onClick={() => setEditVehicles(!editVehicles)}
            />
          </button>
        </div>
      </div>
      {/* Non-Editing Mode */}
      {editVehicles !== true && (
        <div className="grid grid-cols-4 gap-2">
          {user.vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-lg flex flex-col items-center justify-center shadow-md p-8 w-[300px]"
            >
              <Image
                alt={vehicle.make}
                src={vehicle.image}
                width={200}
                height={150}
                className="object-contain"
              />
              <h1 className="text-xl text-left mt-2 w-full px-2">
                {vehicle.make} {vehicle.model} {vehicle.color}
              </h1>
              <h2 className="text-left w-full px-2">{vehicle.plate}</h2>
              {user.subscriptions.find(
                (subscription) => subscription.vehicle_id === vehicle.id
              ) && (
                <div className="w-full px-2 mt-1">
                  <span className="text-xs bg-blue-100 text-blue-700 p-2 rounded-full">
                    Subscription:{" "}
                    {
                      user.subscriptions.find(
                        (sub) => sub.vehicle_id === vehicle.id
                      )?.type
                    }
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {/* Editing Mode */}
      {editVehicles === true && (
        <div className="grid grid-cols-4 gap-2">
          {user.vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-lg flex flex-col shadow-md p-8 w-[300px] space-y-2"
            >
              <div className="h-[150px] w-full flex justify-center items-center mb-2">
                <Image
                  alt={vehicle.make}
                  src={vehicle.image}
                  width={200}
                  height={150}
                  className="object-contain self-center"
                />
              </div>
              <div className="flex w-full space-x-2 textbox">
                {(["make", "model", "color"] as (keyof typeof vehicle)[]).map(
                  (field) => (
                    <div key={field} className="relative w-24 flex">
                      <label className="header">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        id={field}
                        type="text"
                        defaultValue={vehicle[field]}
                        placeholder=""
                        className="area"
                        onChange={(e) => {
                          updateVehicleInfo(vehicle.id, field, e.target.value);
                        }}
                      />
                    </div>
                  )
                )}
              </div>
              <div className="relative w-24 flex">
                <label className="absolute -top-2 left-2 px-1 text-xs text-black bg-white z-10">
                  Plate
                </label>
                <input
                  type="text"
                  defaultValue={vehicle.plate}
                  placeholder=""
                  className="w-full h-10 px-2 pt-2 pb-1 text-sm border border-dark_gray rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-dark_blue text-left"
                  onChange={(e) => {
                    updateVehicleInfo(vehicle.id, "plate", e.target.value);
                  }}
                />
              </div>
              <select
                className="w-full p-2 border border-dark_gray rounded-md focus:outline-none focus:ring-2 focus:ring-dark_blue text-sm"
                defaultValue={
                  user.subscriptions.find(
                    (sub) => sub.vehicle_id === vehicle.id
                  )?.type ?? "None"
                }
                onChange={(e) => {
                  updateSubscriptionInfo(vehicle.id, e.target.value);
                }}
              >
                <option value="Annual">Annual</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="None">None</option>
              </select>
            </div>
          ))}
          <button
            className={`
                items-center bg-dark_blue hover:bg-light_blue rounded-full p-2 text-white text-left w-fit h-fit
                transition-all duration-300 ease-in-out transform
                ${
                  pendingChanges
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }
              `}
            onClick={() => saveChanges()}
            disabled={!pendingChanges}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
