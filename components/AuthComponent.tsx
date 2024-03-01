"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";

const AuthComponent = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  const { user } = useKindeBrowserClient();

  return (
    <div>
      {isAuthenticated ? (
        <div className="cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                {user ? (
                  user.picture ? (
                    <AvatarImage src={user?.picture} />
                  ) : (
                    <AvatarFallback className="text-primary">CN</AvatarFallback>
                  )
                ) : (
                  <AvatarFallback className="text-primary">CN</AvatarFallback>
                )}
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="border-secondary w-72 bg-accent rounded-md mt-5 p-3"
              align="end"
            >
              <div className="flex gap-4 items-center cursor-auto">
                <span>
                  <Avatar>
                    {user ? (
                      user.picture ? (
                        <AvatarImage src={user?.picture} />
                      ) : (
                        <AvatarFallback className="text-primary">
                          CN
                        </AvatarFallback>
                      )
                    ) : (
                      <AvatarFallback className="text-primary">
                        CN
                      </AvatarFallback>
                    )}
                  </Avatar>
                </span>
                <span>
                  <h6 className="text-lg">
                    {user?.given_name} {user?.family_name}
                  </h6>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </span>
              </div>
              <div className="mt-5">
                <LogoutLink className="flex items-center gap-2">
                  {" "}
                  <span>
                    <LogOut className="w-5 h-5" />
                  </span>
                  <span>Log out</span>
                </LogoutLink>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button className="bg-primary text-white">
            <LoginLink postLoginRedirectURL="/resume">Sign in</LoginLink>
          </Button>
          <Button variant="ghost">
            <RegisterLink postLoginRedirectURL="/resume">Sign up</RegisterLink>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
