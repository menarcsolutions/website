import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag: string;
  stats: string;
  href: string;
  themeColor: string; // e.g., "150 50% 25%"
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  ({ className, imageUrl, location, flag, stats, href, themeColor, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          // @ts-ignore
          "--theme-color": themeColor,
        } as React.CSSProperties}
        className={cn("group w-full h-full cursor-pointer", className)}
        onClick={onClick}
        {...props}
      >
        <div
          className="relative block w-full h-full rounded-2xl overflow-hidden shadow-lg 
                     transition-all duration-500 ease-in-out 
                     group-hover:scale-105 group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          style={{
             boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
            <Image
              src={imageUrl}
              alt={`${location} service — Menarc Business Systems`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.9), hsl(var(--theme-color) / 0.6) 30%, transparent 60%)`,
            }}
          />
          
          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-4 text-white">
            <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight mb-1">
              {location}
            </h3>
            <p className="text-[10px] text-white/70 line-clamp-2 mb-3 leading-tight">
              {stats}
            </p>
            
            {/* Explore Button */}
            <div className="flex items-center justify-between bg-[hsl(var(--theme-color)/0.2)] backdrop-blur-md border border-[hsl(var(--theme-color)/0.3)] 
                           rounded-lg px-3 py-1.5 
                           transition-all duration-300 
                           group-hover:bg-[hsl(var(--theme-color)/0.4)] group-hover:border-[hsl(var(--theme-color)/0.5)]">
              <span className="text-[10px] font-semibold tracking-wide text-white uppercase">Learn More</span>
              <ArrowRight className="h-3.5 w-3.5 text-white transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
