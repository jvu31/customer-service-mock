import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import { Customer } from "@/app/data";
import type { Vehicle } from "@/app/data";
import Popup from "@/app/utilitycomponents/popup";

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

  // Values for adding new vehicle
  const [newMake, setMake] = useState("");
  const [newModel, setModel] = useState("");
  const [newColor, setColor] = useState("");
  const [newPlate, setPlate] = useState("");

  // Popup Management
  const [showPopup, setShowPopup] = useState(false);
  const [popupHeader, setPopupHeader] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupAction, setPopupAction] = useState("update");
  const [removedVehicle, setRemovedVehicle] = useState(-1);

  useEffect(() => {
    if (user) {
      setNewVehicles(user.vehicles);
      setNewSubscriptions(user.subscriptions);
      setPendingChanges(false);
    }
  }, [user]);

  // Handles saving the changes
  const saveChanges = () => {
    updateVehicles({
      vehicles: newVehicles,
      subscriptions: newSubscriptions,
    });
    setEditVehicles(false);
    setPendingChanges(false);
    setShowPopup(false);
  };

  // Add new vehicle
  const addVehicle = () => {
    const newVehicle: Vehicle = {
      id: newVehicles.length + 1,
      make: newMake,
      model: newModel,
      color: newColor,
      plate: newPlate,
      image: "/cars/dumb.png",
      subscription: "None",
    };

    setNewVehicles((prevVehicles) => [...prevVehicles, { ...newVehicle }]);
    setPendingChanges(true);
    setMake("");
    setModel("");
    setColor("");
    setPlate("");
  };

  // Removing vehicle check
  const removeVehicleCheck = (id: number) => {
    setPopupHeader("Removing Vehicle");
    setPopupMessage("Are you sure you want to remove this vehicle?");
    setPopupAction("remove");
    setRemovedVehicle(id);
    setShowPopup(true);
  };

  // Removes the vehicle from the list
  const removeVehicle = () => {
    setNewVehicles((prevVehicles) =>
      prevVehicles.filter((vehicle) => vehicle.id !== removedVehicle)
    );
    setPendingChanges(true);
    setRemovedVehicle(-1);
    setPopupAction("update");
    setShowPopup(false);
  };

  // Updates vehicles
  const updateVehicleInfo = (
    id: number,
    field: keyof Omit<Vehicle, "id" | "subscription">,
    value: string
  ) => {
    setNewVehicles((prevVehicles) =>
      prevVehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, [field as string]: value } : vehicle
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
      setPopupHeader("Removing Subscription");
      setPopupMessage("Are you sure you want to remove this subscription?");
    } else {
      // Adding a new subcription to list
      if (
        !newSubscriptions.some((subscription) => subscription.vehicle_id === id)
      ) {
        setNewSubscriptions((prevSubscriptions) => [
          ...prevSubscriptions,
          { id: 0, vehicle_id: id, type: value },
        ]);
        setPopupHeader("Adding Subscription");
        setPopupMessage("Are you sure you want to add this subscription?");
      }
      // Modifying an existing subscription
      else {
        setNewSubscriptions((prevSubscriptions) =>
          prevSubscriptions.map((subscription) =>
            subscription.vehicle_id === id
              ? { ...subscription, type: value }
              : subscription
          )
        );
        setPopupHeader("Modifying Subscription");
        setPopupMessage("Are you sure you want to modify this subscription?");
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
          {newVehicles.map((vehicle) => (
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
              {newSubscriptions.find(
                (subscription) => subscription.vehicle_id === vehicle.id
              ) && (
                <div className="w-full px-2 mt-1">
                  <span className="text-xs bg-blue-100 text-blue-700 p-2 rounded-full">
                    Subscription:{" "}
                    {
                      newSubscriptions.find(
                        (sub) => sub.vehicle_id === vehicle.id
                      )?.type
                    }
                  </span>
                </div>
              )}
            </div>
          ))}
          {/* Adding a new vehicle */}
          <div className="bg-white rounded-lg flex flex-col items-center justify-center shadow-md p-8 w-[300px] space-y-4">
            <div className="py-4">
              <button
              className={`items-center justify-center px-4 py-2 rounded text-white ${
                !newMake || !newModel || !newColor || !newPlate
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-dark_blue hover:bg-light_blue"
              }`}
              onClick={addVehicle}
              disabled={!newMake || !newModel || !newColor || !newPlate}
            >
              Add Vehicle
            </button>
              </div>
            <div className="flex w-full space-x-2 textbox">
              {["make", "model", "color"].map((field) => (
                <div key={field} className="relative w-24 flex">
                  <label className="header">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    type="text"
                    value={
                      field === "make"
                        ? newMake
                        : field === "model"
                        ? newModel
                        : newColor
                    }
                    placeholder=""
                    className="area"
                    onChange={(e) => {
                      if (field === "make") {
                        setMake(e.target.value);
                      } else if (field === "model") {
                        setModel(e.target.value);
                      } else if (field === "color") {
                        setColor(e.target.value);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="relative w-24 flex textbox">
              <label className="header">Plate</label>
              <input
                type="text"
                value={newPlate}
                placeholder=""
                className="area"
                onChange={(e) => {
                  setPlate(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      )}
      {/* Editing Mode */}
      {editVehicles === true && (
        <div className="grid grid-cols-4 gap-2">
          {newVehicles.map((vehicle) => (
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
                        value={vehicle[field as keyof Vehicle] as string}
                        placeholder=""
                        className="area"
                        onChange={(e) => {
                          updateVehicleInfo(
                            vehicle.id,
                            field as keyof Omit<Vehicle, "id" | "subscription">,
                            e.target.value
                          );
                        }}
                      />
                    </div>
                  )
                )}
              </div>
              <div className="relative w-24 flex textbox">
                <label className="header">Plate</label>
                <input
                  type="text"
                  value={vehicle.plate}
                  placeholder=""
                  className="area"
                  onChange={(e) => {
                    updateVehicleInfo(
                      vehicle.id,
                      "plate" as keyof Omit<Vehicle, "id" | "subscription">,
                      e.target.value
                    );
                  }}
                />
              </div>
              <select
                className="w-full p-2 border border-dark_gray rounded-md focus:outline-none focus:ring-2 focus:ring-dark_blue text-sm"
                value={
                  newSubscriptions.find((sub) => sub.vehicle_id === vehicle.id)
                    ?.type ?? "None"
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
              <button
                className="button-delete"
                onClick={() => removeVehicleCheck(vehicle.id)}
              >
                Remove Car
              </button>
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
            onClick={() => {
              setShowPopup(true);
            }}
            disabled={!pendingChanges}
          >
            Save Changes
          </button>
        </div>
      )}
      {showPopup && (
        <Popup
          onConfirm={popupAction === "remove" ? removeVehicle : saveChanges}
          onCancel={() => setShowPopup(false)}
          header={popupHeader}
          message={popupMessage}
        />
      )}
    </div>
  );
}
