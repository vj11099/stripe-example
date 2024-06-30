import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Smartphones",
    href: "/categories/smartphones",
    description:
      "Advanced mobile devices with computing capabilities, often featuring touchscreens and internet connectivity.",
  },
  {
    title: "Laptops",
    href: "/categories/laptops",
    description:
      "Portable computers designed for mobility, capable of running various applications and software.",
  },
  {
    title: "Headphones",
    href: "/categories/headphones",
    description:
      "Audio devices worn over the ears or in-ear, used for listening to music, calls, or audio content.",
  },
  {
    title: "Televisions",
    href: "/categories/televisions",
    description:
      "Electronic devices used for viewing broadcasted or streamed visual content, ranging in size and display technology.",
  },
  {
    title: "Smart Watches",
    href: "/categories/smart-watches",
    description:
      "Wearable devices that offer functionalities beyond timekeeping, such as fitness tracking, notifications, and apps.",
  },
];

const NavBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <div className="nav-items">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex h-full w-full">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
                <NavigationMenuLink asChild></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex h-full w-full">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
                <NavigationMenuLink asChild></NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="px-[20px]">
          <Input type="products" placeholder="Search Products" />
        </div>
      </div>
      <div className="theme-mode-button">
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;

type ListItemProps = {
  title: string;
  children: React.ReactNode;
  href: string;
};

const ListItem: React.FC<ListItemProps> = ({ title, children, href }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

ListItem.displayName = "ListItem";
