import type { MenuItemType } from "@/types/menu";

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: "main",
    label: "Main Menu",
    isTitle: true,
  },
  {
    key: "dashboards",
    icon: "iconoir-home-simple",
    label: "Dashboards",
    children: [
      {
        key: "dashboard-analytics",
        label: "Analytics",
        route: { name: "dashboards.analytics" },
        parentKey: "dashboards",
      },
      {
        key: "dashboard-ecommerce",
        label: "Ecommerce",
        route: { name: "dashboards.ecommerce" },
        parentKey: "dashboards",
      },
    ],
  },
  {
    key: "apps",
    icon: "iconoir-view-grid",
    label: "Applications",
    children: [
      {
        key: "apps-analytics",
        label: "Analytics",
        parentKey: "apps",
        children: [
          {
            key: "apps-analytics-customers",
            label: "Customers",
            route: { name: "apps.analytics.customers" },
            parentKey: "apps-analytics",
          },
          {
            key: "apps-analytics-reports",
            label: "Reports",
            route: { name: "apps.analytics.reports" },
            parentKey: "apps-analytics",
          },
        ],
      },
      {
        key: "apps-projects",
        label: "Projects",
        parentKey: "apps",
        children: [
          {
            key: "apps-projects-clients",
            label: "Clients",
            route: { name: "apps.projects.clients" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-team",
            label: "Team",
            route: { name: "apps.projects.team" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-project",
            label: "Project",
            route: { name: "apps.projects.project" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-task",
            label: "Task",
            route: { name: "apps.projects.task" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-kanban",
            label: "Kanban Board",
            route: { name: "apps.projects.kanban" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-users",
            label: "Users",
            route: { name: "apps.projects.users" },
            parentKey: "apps-projects",
          },
          {
            key: "apps-projects-create",
            label: "Project Create",
            route: { name: "apps.projects.create" },
            parentKey: "apps-projects",
          },
        ],
      },
      {
        key: "apps-ecommerce",
        label: "Ecommerce",
        parentKey: "apps",
        children: [
          {
            key: "apps-ecommerce-products",
            label: "Products",
            route: { name: "apps.ecommerce.products" },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-customers",
            label: "Customers",
            route: { name: "apps.ecommerce.customers" },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-customers-details",
            label: "Customers Details",
            route: {
              name: "ecommerce.customers.details",
              params: { id: "3001" },
            },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-orders",
            label: "Orders",
            route: { name: "apps.ecommerce.orders" },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-orders-details",
            label: "Orders Details",
            route: { name: "ecommerce.orders.details", params: { id: "3001" } },
            parentKey: "apps-ecommerce",
          },
          {
            key: "apps-ecommerce-refunds",
            label: "Refunds",
            route: { name: "apps.ecommerce.refunds" },
            parentKey: "apps-ecommerce",
          },
        ],
      },
      {
        key: "apps-chat",
        label: "Chat",
        parentKey: "apps",
        route: { name: "apps.chat" },
      },
      {
        key: "apps-contact-list",
        label: "Contact List",
        parentKey: "apps",
        route: { name: "apps.contacts" },
      },
      {
        key: "apps-calendar",
        label: "Calendar",
        parentKey: "apps",
        route: { name: "apps.calendar" },
      },
      {
        key: "apps-invoice",
        label: "Invoice",
        parentKey: "apps",
        route: { name: "apps.invoice" },
      },
    ],
  },
  {
    key: "components",
    label: "COMPONENTS",
    isTitle: true,
  },
  {
    key: "base-ui",
    icon: "iconoir-compact-disc",
    label: "UI Elements",
    children: [
      {
        key: "base-ui-alerts",
        label: "Alerts",
        route: { name: "ui.alerts" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-avatars",
        label: "Avatars",
        route: { name: "ui.avatars" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-buttons",
        label: "Buttons",
        route: { name: "ui.buttons" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-badges",
        label: "Badges",
        route: { name: "ui.badges" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-cards",
        label: "Cards",
        route: { name: "ui.cards" },
        parentKey: "base-ui",
      },

      {
        key: "base-ui-carousel",
        label: "Carousel",
        route: { name: "ui.carousel" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-dropdowns",
        label: "Dropdowns",
        route: { name: "ui.dropdowns" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-grids",
        label: "Grids",
        route: { name: "ui.grids" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-images",
        label: "Images",
        route: { name: "ui.images" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-list",
        label: "List",
        route: { name: "ui.list" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-modals",
        label: "Modals",
        route: { name: "ui.modals" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-navs",
        label: "Navs",
        route: { name: "ui.navs" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-navbar",
        label: "Navbar",
        route: { name: "ui.navbar" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-pagination",
        label: "Paginations",
        route: { name: "ui.pagination" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-popover-tooltip",
        label: "Popovers & Tooltips",
        route: { name: "ui.popovers-tooltips" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-progress",
        label: "Progress",
        route: { name: "ui.progress" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-spinners",
        label: "Spinners",
        route: { name: "ui.spinners" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-tabs-accordion",
        label: "Tabs & Accordions",
        route: { name: "ui.tabs-accordion" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-typography",
        label: "Typography",
        route: { name: "ui.typography" },
        parentKey: "base-ui",
      },
      {
        key: "base-ui-videos",
        label: "Videos",
        route: { name: "ui.videos" },
        parentKey: "base-ui",
      },
    ],
  },
  {
    key: "advanced-ui",
    icon: "iconoir-peace-hand",
    badge: {
      text: "New",
      variant: "info",
    },
    label: "Advanced UI",
    children: [
      {
        key: "advanced-ui-animation",
        label: "Animation",
        route: { name: "advanced.animation" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-clipboard",
        label: "Clip Board",
        route: { name: "advanced.clipboard" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-dragula",
        label: "Dragula",
        route: { name: "advanced.dragula" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-file-manager",
        label: "File Manager",
        route: { name: "advanced.file-manager" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-highlight",
        label: "Highlight",
        route: { name: "advanced.highlight" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-range-slider",
        label: "Range Slider",
        route: { name: "advanced.range-slider" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-ratings",
        label: "Ratings",
        route: { name: "advanced.ratings" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-ribbons",
        label: "Ribbons",
        route: { name: "advanced.ribbons" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-sweet-alert",
        label: "Sweet Alerts",
        route: { name: "advanced.alert" },
        parentKey: "advanced-ui",
      },
      {
        key: "advanced-ui-toast",
        label: "Toasts",
        route: { name: "advanced.toasts" },
        parentKey: "advanced-ui",
      },
    ],
  },
  {
    key: "forms",
    icon: "iconoir-journal-page",
    label: "Forms",
    children: [
      {
        key: "forms-basic-elements",
        label: "Basic Elements",
        route: { name: "forms.basic" },
        parentKey: "forms",
      },
      {
        key: "forms-advance",
        label: "Advance Elements",
        route: { name: "forms.advance" },
        parentKey: "forms",
      },
      {
        key: "forms-validation",
        label: "Validation",
        route: { name: "forms.validation" },
        parentKey: "forms",
      },
      {
        key: "forms-wizard",
        label: "Wizard",
        route: { name: "forms.wizard" },
        parentKey: "forms",
      },
      {
        key: "forms-editors",
        label: "Editors",
        route: { name: "forms.editors" },
        parentKey: "forms",
      },
      {
        key: "forms-file-uploads",
        label: "File Upload",
        route: { name: "forms.file-uploads" },
        parentKey: "forms",
      },
      {
        key: "forms-image-crop",
        label: "Image Crop",
        route: { name: "forms.image-crop" },
        parentKey: "forms",
      },
    ],
  },
  {
    key: "charts",
    label: "Charts",
    icon: "iconoir-candlestick-chart",
    children: [
      {
        key: "charts-apex",
        label: "Apex",
        route: { name: "charts.apex" },
        parentKey: "charts",
      },
      {
        key: "charts-justgage",
        label: "JustGage",
        route: { name: "charts.justgage" },
        parentKey: "charts",
      },
      {
        key: "charts-chartjs",
        label: "ChartjS",
        route: { name: "charts.chartjs" },
        parentKey: "charts",
      },
    ],
  },
  {
    key: "tables",
    icon: "iconoir-table-rows ",
    label: "Tables",
    children: [
      {
        key: "tables-basic",
        label: "Basic Tables",
        route: { name: "tables.basic" },
        parentKey: "tables",
      },
      {
        key: "tables-data-tables",
        label: "Datatables",
        route: { name: "tables.data-tables" },
        parentKey: "tables",
      },
    ],
  },
  {
    key: "icons",
    icon: "iconoir-trophy",
    label: "Icons",
    children: [
      {
        key: "icons-font-awesome",
        label: "Font Awesome",
        route: { name: "icons.fontawesome" },
        parentKey: "icons",
      },
      {
        key: "icons-line-awesome",
        label: "Line Awesome",
        route: { name: "icons.lineawesome" },
        parentKey: "icons",
      },
      {
        key: "icons-icofont",
        label: "Icofont",
        route: { name: "icons.icofont" },
        parentKey: "icons",
      },
      {
        key: "icons-iconoir",
        label: "Iconoir",
        route: { name: "icons.iconoir" },
        parentKey: "icons",
      },
    ],
  },
  {
    key: "maps",
    icon: "iconoir-navigator-alt",
    label: "Maps",
    children: [
      {
        key: "maps-google",
        label: "Google Maps",
        route: { name: "maps.google" },
        parentKey: "maps",
      },
      {
        key: "maps-leaflet",
        label: "Leaflet Maps",
        route: { name: "maps.leaflet" },
        parentKey: "maps",
      },
      {
        key: "maps-vector",
        label: "Vector Maps",
        route: { name: "maps.vector" },
        parentKey: "maps",
      },
    ],
  },
  {
    key: "email-templates",
    label: "Email Templates",
    icon: "iconoir-send-mail",
    children: [
      {
        key: "email-templates-basic",
        label: "Basic Action Email",
        route: { name: "email-templates.basic" },
        parentKey: "email-templates",
      },
      {
        key: "email-templates-alert",
        label: "Alert Email",
        route: { name: "email-templates.alert" },
        parentKey: "email-templates",
      },
      {
        key: "email-templates-billing",
        label: "Billing Email",
        route: { name: "email-templates.billing" },
        parentKey: "email-templates",
      },
    ],
  },
  {
    key: "crafted",
    label: "CRAFTED",
    isTitle: true,
  },
  {
    key: "pages",
    label: "Pages",
    isTitle: false,
    icon: "iconoir-page-star",
    children: [
      {
        key: "page-profile",
        label: "Profile",
        route: { name: "pages.profile" },
        parentKey: "pages",
      },
      {
        key: "page-notifications",
        label: "Notifications",
        route: { name: "pages.notifications" },
        parentKey: "pages",
      },
      {
        key: "page-timeline",
        label: "Timeline",
        route: { name: "pages.timeline" },
        parentKey: "pages",
      },
      {
        key: "page-tree-view",
        label: "Treeview",
        route: { name: "pages.tree-view" },
        parentKey: "pages",
      },
      {
        key: "page-starter",
        label: "Starter Page",
        route: { name: "pages.starter" },
        parentKey: "pages",
      },
      {
        key: "page-pricing",
        label: "Pricing",
        route: { name: "pages.pricing" },
        parentKey: "pages",
      },
      {
        key: "page-blogs",
        label: "Blogs",
        route: { name: "pages.blogs" },
        parentKey: "pages",
      },
      {
        key: "page-faqs",
        label: "FAQs",
        route: { name: "pages.faqs" },
        parentKey: "pages",
      },
      {
        key: "page-gallery",
        label: "Gallery",
        route: { name: "pages.gallery" },
        parentKey: "pages",
      },
    ],
  },
  {
    key: "page-authentication",
    label: "Authentication",
    isTitle: false,
    icon: "iconoir-fingerprint-lock-circle",
    children: [
      {
        key: "login",
        label: "Log In",
        route: { name: "auth.sign-in" },
        parentKey: "page-authentication",
      },
      {
        key: "register",
        label: "Register",
        route: { name: "auth.register" },
        parentKey: "page-authentication",
      },
      {
        key: "reset-pass",
        label: "Re-Password",
        route: { name: "auth.reset-pass" },
        parentKey: "page-authentication",
      },
      {
        key: "lock-screen",
        label: "Lock Screen",
        route: { name: "auth.lock-screen" },
        parentKey: "page-authentication",
      },
      {
        key: "maintenance",
        label: "Maintenance",
        route: { name: "auth.maintenance" },
        target: "_blank",
        parentKey: "page-authentication",
      },
      {
        key: "error-404",
        label: "Error 404",
        route: { name: "error.404" },
        parentKey: "page-authentication",
      },
      {
        key: "error-500",
        label: "Error 500",
        route: { name: "error.500" },
        parentKey: "page-authentication",
      },
    ],
  },
];
