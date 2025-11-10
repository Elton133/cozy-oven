"use client";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) {
  return (
    <div className="flex gap-3">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeChange(size)}
          className={`px-6 py-2 rounded-lg border-2 font-semibold transition-all ${
            selectedSize === size
              ? "border-orange-500 bg-orange-500 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:border-orange-400"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
