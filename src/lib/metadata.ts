import type { Metadata } from "next";

export const siteUrl = "https://napa-pickleball-concierge.vercel.app";

type MetadataConfig = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  imagePath = "/opengraph-image",
}: MetadataConfig): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${siteUrl}${imagePath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Napa Pickleball Concierge",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
