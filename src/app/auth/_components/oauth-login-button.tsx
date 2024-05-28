"use client";

import { Button } from "@/app/_components/ui/button";

interface OAuthLoginButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}
export const OAuthLoginButton = ({ icon, onClick }: OAuthLoginButtonProps) => {
  return (
    <Button
      size="lg"
      className="w-full bg-slate-50 hover:bg-slate-300 text-black hover:text-black"
      variant="outline"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};
