'use client'

import { Dispatch, SetStateAction } from "react";

interface HelloModalProps {
    setIsClicked: Dispatch<SetStateAction<boolean>>;
}

export default function HelloModal({ setIsClicked }: HelloModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Hello Modal</h1>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setIsClicked(false)}
                >
                    Close
                </button>
            </div>
        </div>
    )
}