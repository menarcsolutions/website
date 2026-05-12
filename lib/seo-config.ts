export const SEO_LOCATIONS = [
  { city: "Chennai", slug: "chennai" },
  { city: "Coimbatore", slug: "coimbatore" },
  { city: "Madurai", slug: "madurai" },
  { city: "Trichy", slug: "trichy" },
  { city: "Salem", slug: "salem" },
  { city: "Tiruppur", slug: "tiruppur" },
  { city: "Erode", slug: "erode" },
  { city: "Vellore", slug: "vellore" },
];

export const SEO_SERVICES = [
  { title: "AI Solutions", slug: "ai-solutions" },
  { title: "Automation Agency", slug: "automation-agency" },
  { title: "CRM Solutions", slug: "crm-solutions" },
  { title: "Workflow Automation", slug: "workflow-automation" },
  { title: "Business Systems", slug: "business-systems" },
];

export function getProgrammaticRoutes() {
  const routes: string[] = [];
  SEO_SERVICES.forEach((service) => {
    SEO_LOCATIONS.forEach((location) => {
      routes.push(`${service.slug}-${location.slug}`);
    });
  });
  return routes;
}
