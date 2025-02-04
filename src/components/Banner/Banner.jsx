import React from "react";
import { Home } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="flex items-center space-x-2 text-sm text-white/80">
      <Home className="w-4 h-4" />
      <span>/</span>
      <span>Commodity Focus</span>
      <span>/</span>
      <span>Spices</span>
      <span>/</span>
      <span className="text-white">Exporting Spices from India</span>
    </div>
  );
};

export default Breadcrumb;
