'use client'

import { useState, Dispatch, SetStateAction } from "react";
import HelloModal from "./modals/hello-modal";

interface ButtonProps {
    setIsClicked?: Dispatch<SetStateAction<boolean>>;
}

export default function Button({ setIsClicked }: ButtonProps) {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClickedState] = useState(false);

    if (isClicked) {
        return <HelloModal setIsClicked={setIsClickedState} />
    }

    return (
        <div className="flex items-center justify-center">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsClicked && setIsClicked(true) || setIsClickedState(true)}
            >
                {isHovered ? "Hovered" : "Button"}
            </button>
        </div>
    );
}