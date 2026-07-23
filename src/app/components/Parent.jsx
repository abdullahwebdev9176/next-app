"use client";

import { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [count, setCount] = useState(0);

    console.log("Parent Render");

    const handleClick = useCallback(() => {
        console.log("Hello");
    }, []);

    return (
        <div className="text-center">
            <h1 className="mb-5 font-bold">Parent Component</h1>

            <h1 className="mb-5">{count}</h1>

            <div className="flex gap-2">
                <button className="py-2 px-4 bg-green-500 text-white rounded-md" onClick={() => setCount(count + 1)}>
                    Increment
                </button>

                <Child onClick={handleClick} />

            </div>
        </div>
    );
}