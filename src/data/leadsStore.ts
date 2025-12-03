import { Lead } from "@/types/realEstate";

const leads: Lead[] = [];

export function saveLead(lead: Omit<Lead, "id" | "createdAt">): Lead {
  const newLead: Lead = {
    ...lead,
    id: `lead-${crypto.randomUUID()}`,
    createdAt: new Date().toISOString(),
  };
  leads.push(newLead);
  return newLead;
}

export function getLeads() {
  return leads;
}
