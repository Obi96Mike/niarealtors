import { Unit } from "@/types/realEstate";
import { developments } from "./developments";

export const units: Unit[] = developments.flatMap((development) =>
  development.units.map((unit) => ({ ...unit, developmentId: development.id }))
);

export const getUnitBySlug = (slug: string) =>
  units.find((unit) => unit.slug === slug);
