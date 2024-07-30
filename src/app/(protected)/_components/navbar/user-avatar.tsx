"use server";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { auth, signOut } from "@/server/authentication/auth";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import AvatarIcon from "@/app/_icons/avatar";
import UserIcon from "@/app/_icons/user";
import CreditCardIcon from "@/app/_icons/credit-cart";
import LogoutIcon from "@/app/_icons/logout";
import { REQUEST_TO_LOGIN_ROUTE } from "@/server/authentication/routes";

export default async function UserAvatar({
  avatarUrl,
}: {
  avatarUrl: string | undefined;
}) {
  const session = await auth();
  if (!session) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage className="w-12 h-12 rounded-full object-center object-fill " src={avatarUrl} />
          <AvatarFallback>
            <AvatarIcon className="w-12 h-12 rounded-full" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5">
        <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/account">
            <DropdownMenuItem className="cursor-pointer">
              <UserIcon className="mr-2 h-4 w-4 fill-white" />
              <span>Account</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/subscription">
            <DropdownMenuItem className="cursor-pointer">
              <CreditCardIcon className="mr-2 h-4 w-4 fill-white" />
              <span>Subscription</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <form
          action={async () => {
            "use server";
            await signOut({redirectTo: REQUEST_TO_LOGIN_ROUTE + "?logout=success"});
          }}
        >
          <button className="w-full" type="submit">
            <DropdownMenuItem className="cursor-pointer">
              <LogoutIcon className="mr-2 h-4 w-4 fill-white" />
              <span>Log out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
