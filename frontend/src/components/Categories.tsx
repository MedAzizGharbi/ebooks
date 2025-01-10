import { useState } from "react";
export default function Categories() {
    const categories = ["Ebooks", "AudioBooks", "Podcasts"];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        "Ebooks",
    );
    return (
        <div className="mb-2">
            <div className=" text-xl mb-2 ">Categories</div>
            <div className="flex gap-3">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`border-black border p-2 cursor-pointer transition-all 
                ease-in-out duration-300 ${selectedCategory === category
                                ? "bg-orange-400 text-white"
                                : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
}
