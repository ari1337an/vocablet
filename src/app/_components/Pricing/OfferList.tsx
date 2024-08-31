import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/app/_components/ui/hover-card";
import InfoIcon from "@/app/_icons/info";
import FlameIcon from "@/app/_icons/flame"; // Import the FlameIcon component
import { Badge } from "@/app/_components/ui/badge"; // Import the Badge component from shadcn

const checkIcon = (
  <svg width="12" height="9" viewBox="0 0 8 6" className="fill-current">
    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
  </svg>
);

const crossIcon = (
  <svg width="10" height="10" viewBox="0 0 8 8" className="fill-current">
    <path d="M7.4499 0.512524C7.1124 0.175024 6.5874 0.175024 6.2499 0.512524L3.9999 2.80002L1.7124 0.512524C1.3749 0.175024 0.849902 0.175024 0.512402 0.512524C0.174902 0.850024 0.174902 1.37502 0.512402 1.71252L2.7999 4.00002L0.512402 6.28752C0.174902 6.62502 0.174902 7.15002 0.512402 7.48752C0.662402 7.63752 0.887402 7.75002 1.1124 7.75002C1.3374 7.75002 1.5624 7.67502 1.7124 7.48752L3.9999 5.20002L6.2874 7.48752C6.4374 7.63752 6.6624 7.75002 6.8874 7.75002C7.1124 7.75002 7.3374 7.67502 7.4874 7.48752C7.8249 7.15002 7.8249 6.62502 7.4874 6.28752L5.1999 4.00002L7.4874 1.71252C7.7874 1.37502 7.7874 0.850024 7.4499 0.512524Z" />
  </svg>
);

const OfferList = ({
  text,
  status,
  tooltip,
  limitedOffer,
  showFlameIcon, // New prop for FlameIcon
}: {
  text: string;
  status: "active" | "inactive";
  tooltip?: string;
  limitedOffer?: boolean;
  showFlameIcon?: boolean; // Optional boolean to show or hide FlameIcon
}) => {
  const bgColor = status === "active" ? "bg-emerald-500" : "bg-rose-500";
  const textColor = status === "active" ? "text-emerald-500" : "text-rose-500";
  const icon = status === "active" ? checkIcon : crossIcon;

  return (
    <div className="mb-3 flex items-center">
      <span
        className={`mr-3 flex h-[24px] w-[24px] items-center justify-center rounded-full ${bgColor} bg-opacity-10 ${textColor}`}
      >
        {icon}
      </span>
      <div className="m-0 text-base font-medium text-body-color flex-grow flex items-center">
        {text}
        {tooltip && (
          <HoverCard>
            <HoverCardTrigger>
              <InfoIcon className="h-5 w-5 fill-slate-500 ml-2 text-body-color cursor-pointer" />
            </HoverCardTrigger>
            <HoverCardContent>{tooltip}</HoverCardContent>
          </HoverCard>
        )}
        {limitedOffer && (
          <Badge className="ml-2">
            Limited Offer
          </Badge>
        )}
        {showFlameIcon && (
          <FlameIcon className="h-5 w-5 fill-primary ml-2 text-body-color" />
        )}
      </div>
    </div>
  );
};

export default OfferList;
