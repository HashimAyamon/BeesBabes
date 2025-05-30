import { Link, useResolvedPath } from "react-router-dom";
import { ShoppingBagIcon } from "lucide-react";
import { GiBee } from "react-icons/gi";
import { useProductStore } from "../store/useProductStore";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  const { products } = useProductStore();

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
              <GiBee className="size-9 text-pink-500" />
                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  beezbabies
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
