import { createClient } from "@sanity/client";
import { definePreview } from "@sanity/preview-kit";

export const projectId = "x7mdx0wt";
export const dataset = "production";
export const apiVersion = "2023-01-01";

export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn: true });
export const usePreview = definePreview({ projectId, dataset });