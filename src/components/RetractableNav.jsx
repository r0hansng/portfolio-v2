import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import Button from "./Button/Button";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Menu } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const SmallNav = () => {
  const navigate = useNavigate();

  const handleScrollNavigation = (id) => {
    navigate(`/?scrollTo=${id}`);
  };

  return (
    <div className="sm:hidden flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full border-gray-800">
            <Menu />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="p-3 w-48">
          <div className="flex items-center gap-2 p-2">
            <div className="grid gap-0.5 leading-none">
              <div className="font-semibold">Rohan Singh</div>
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => navigate("/projects")}>
            Projects
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => handleScrollNavigation("experience")}>
            Experience
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => navigate("/about")}>
            About Me
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => handleScrollNavigation("contact")}>
            Contact
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <div className="flex items-center gap-4 ml-1">
              <a
                href="https://github.com/r0hansng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohansng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://x.com/r0hansng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};