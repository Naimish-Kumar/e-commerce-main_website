import Image from "next/image";
import clsx from "clsx";

interface OptionProps {
  text?: string;
  img?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export const Option = ({ text, img, onClick, isSelected }: OptionProps) => (
  <button
    onClick={onClick}
    className={clsx(
      "text-base flex items-center gap-2.5 py-2 px-4 rounded-button  border border-footerBg transition-all",
      isSelected && "bg-footerBg text-white"
    )}
  >
    {!!img && (
      <div className="relative w-5 h-5">
        <Image src={img} alt={text || "option"} fill className="object-contain" />
      </div>
    )}
    {text}
  </button>
);
