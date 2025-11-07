import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: Inbox,
  },
  {
    title: "Services",
    url: "/services",
    icon: Calendar,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Search,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: Settings,
  },
  {
    title: "Admin Dashboard",
    url: "/admin",
    icon: Settings,
  },
  {
    title: "Carrer Page",
    url: "/carrer",
    icon: Settings,
  },
  {
    title: "Blogs/News",
    url: "/blog",
    icon: Settings,
  },
  {
    title: "Testimonials",
    url: "/testimonials",
    icon: Settings,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}