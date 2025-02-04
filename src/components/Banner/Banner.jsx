import { Home } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="flex items-center space-x-2  text-white/80">
      <Home className="w-4 h-4" />
      <span className="text-[11px] sm:text-base">/</span>
      <span className="text-[11px] sm:text-base">Commodity Focus</span>
      <span className="text-[11px] sm:text-base">/</span>
      <span className="text-[11px] sm:text-base">Spices</span>
      <span className="text-[11px] sm:text-base">/</span>
      <span className="text-[11px] sm:text-base">
        Exporting Spices from India
      </span>
    </div>
  );
};

export default Breadcrumb;
