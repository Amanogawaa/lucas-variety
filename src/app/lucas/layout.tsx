import { SiteHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amu",
  icons: { icon: "/convex.svg" },
};

export default async function AmuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const supabase = await createClient();
  //   const {
  //     data: { session },
  //     error,
  //   } = await supabase.auth.getSession();
  //   const { data: user } = await supabase.auth.getUser();

  //   if (!session || error) {
  //     redirect("/login");
  //   }

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
