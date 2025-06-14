"use client";
import { useState } from "react";
import CuisineSelect from "@/components/CuisineSelect";
import RestaurantSelect from "@/components/RestaurantSelect";
import PreferencesSelect from "@/components/PreferencesSelect";

export default function CreateForm() {
  const [date, setDate] = useState();
  const [priority, setPriority] = useState(25);


  return (
    
    <div>
    
      <fieldset className="fieldset h-150 w-150 bg-base-200 border-base-300 rounded-box w-xl border p-4 gap-4">
        
        <label className="label font-bold">Cuisine Type</label>
        <CuisineSelect></CuisineSelect>

        <label className="label font-bold">Restaurant Type</label>
        <RestaurantSelect></RestaurantSelect>

        <label className="label font-bold">Preferences</label>
        <PreferencesSelect></PreferencesSelect>

        <label className="label font-bold ">Description</label>

        <input type="text bg-white" className="input" placeholder="..." />

        <label className="label font-bold">Price Level</label>
        <div className="w-full max-w-xs">
          <input
            type="range"
            min={0}
            max={100}
            value={priority}
            onChange={(e) => setPriority(Number(e.target.value))}
            className="range"
            step="25"
          />
          <div className="flex justify-between px-2.5 mt-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <div className="flex justify-between px-2.5 mt-2 text-xs">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
          </div>
        </div>

        <button className="btn btn-primary mt-3 w-xs">Submit</button>
      </fieldset>
    </div>
  );
}
