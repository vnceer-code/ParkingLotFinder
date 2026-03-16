import React from "react";
import { FiMap } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";

const SubNavbar = () => {

    return (

        <div className="bg-white border-b border-gray-300">

            <div className=" mx-auto px-10 py-3 flex justify-end gap-3">

                <button className="flex items-center text-gray-600 gap-2 border border-gray-400 focus:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition">

                    <MdFilterList />

                    Filter

                </button>

                <button className="flex items-center  text-gray-600 gap-2 border border-gray-400 focus:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition">

                    <FiMap />

                    Map

                </button>

            </div>

        </div>

    );

};

export default SubNavbar;