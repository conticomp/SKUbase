import SettingsNavigation from "@/components/dashboard/settings-navigation";
import DashboardTitle from "@/components/dashboard/dashboard-title";
import React from 'react';
import {Separator} from "@/components/ui/separator";

export default function PersonalAccountSettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const items = [
    { name: "Profile", href: "/dashboard/settings" },
    { name: "Teams", href: "/dashboard/settings/teams" },
    { name: "Billing", href: "/dashboard/settings/billing" },
  ];

  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {items.map((item) => (
              
                key={item.href}
                href={item.href}
                className="hover:bg-muted hover:text-foreground px-3 py-2 text-sm font-medium text-muted-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
