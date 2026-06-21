import type { MetadataRoute } from "next";

const SITEMAP_BASE = "https://appzo.app";

const pages = [
    {
        path: "/",
        priority: 1.0,
        freq: "weekly" as const,
        modifiedDate: new Date("2026-06-21T09:02:00+06:00"),
    },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return pages.map((p) => ({
        url: `${SITEMAP_BASE}${p.path}`,
        lastModified: p.modifiedDate,
        changeFrequency: p.freq,
        priority: p.priority,
    }));
}