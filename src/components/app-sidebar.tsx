"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavПроекты } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { КомандаSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Песочница",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "История",
          url: "#",
        },
        {
          title: "Избранное",
          url: "#",
        },
        {
          title: "Настройки",
          url: "#",
        },
      ],
    },
    {
      title: "Модели",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Генезис",
          url: "#",
        },
        {
          title: "Обзор",
          url: "#",
        },
        {
          title: "Квантум",
          url: "#",
        },
      ],
    },
    {
      title: "Документация",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Введение",
          url: "#",
        },
        {
          title: "Быстрый старт",
          url: "#",
        },
        {
          title: "Туториалы",
          url: "#",
        },
        {
          title: "Журнал изменений",
          url: "#",
        },
      ],
    },
    {
      title: "Настройки",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Общие",
          url: "#",
        },
        {
          title: "Команда",
          url: "#",
        },
        {
          title: "Оплата",
          url: "#",
        },
        {
          title: "Лимиты",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Инжиниринг дизайна",
      url: "#",
      icon: Frame,
    },
    {
      name: "Продажи и маркетинг",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Путешествия",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <КомандаSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavПроекты projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
