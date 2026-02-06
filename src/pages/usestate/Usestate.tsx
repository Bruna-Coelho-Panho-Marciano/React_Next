import { useState } from "react";
import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";

export default function Usestate() {
  const [cont, setCont] = useState<number>(10);

  return (
    <div className=" flex flex-col  p-8">
      <Topo />
      <h1 className="flex justify-center items-center font-bold text-2xl bg-gray-300 text-center h-[150px]">
        useState
      </h1>
      <DisplayState valor={cont} fvalor={setCont}></DisplayState>
    </div>
  );
}
