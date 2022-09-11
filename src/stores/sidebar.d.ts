import { Component } from "vue";

export interface SidebarChildren {
  text: string;
  path: string;
  icon?: Component;
}

export interface SidebarGroup {
  text: string;
  item: SidebarItem[];
  icon?: Component;
}

export type SidebarItem = SidebarChildren | SidebarGroup;

export type Sidebar = Array<SidebarItem>;
