/**
 * Stable image URLs for the site. Uses Unsplash CDN for reliability.
 * Format: https://images.unsplash.com/photo-{id}?w=WIDTH&q=80
 */
const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

export const IMAGES = {
  /** Hero: modern IT office / tech workspace */
  hero: unsplash("1497366216548-37526070297c", 800),
  /** Team / about section */
  team: unsplash("1522071820081-009f0129c71c", 800),
  /** Industry / business imagery */
  industry1: unsplash("1497366216548-37526070297c", 500),
  industry2: unsplash("1558494949-ef010cbdcc31", 500),
  industry3: unsplash("1519389950473-47ba0277781c", 500),
  industry4: unsplash("1504384308090-c894fdcc538d", 500),
  /** Leadership / portrait */
  leader1: unsplash("1560250097-0b93528c311a", 400),
  leader2: unsplash("1573496359142-b8d87734a5a2", 400),
  leader3: unsplash("1472099645785-5658abf4ff4e", 400),
  /** Testimonial / CEO avatar */
  testimonialAvatar: unsplash("1560250097-0b93528c311a", 100),
  /** Services: tech / IT themed */
  service1: unsplash("1558494949-ef010cbdcc31", 800),
  service2: unsplash("1519389950473-47ba0277781c", 800),
  // Cloud Infrastructure
  service3: unsplash("1556761175-b413da4baf72", 800),
  service4: unsplash("1504384308090-c894fdcc538d", 800),
  // Disaster Recovery
  service5: unsplash("1559748841-3b4c2fc88494", 800),
  service6: unsplash("1522071820081-009f0129c71c", 800),
  /** Contact: map / location placeholder */
  mapPlaceholder: unsplash("1524661135-423995f22d0f", 800),
} as const;

/** Service section images in order (for Services page) */
export const SERVICE_IMAGES = [
  IMAGES.service1,
  IMAGES.service2,
  IMAGES.service3,
  IMAGES.service4,
  IMAGES.service5,
  IMAGES.service6,
] as const;

/** Leadership portrait images in order */
export const LEADER_IMAGES = [IMAGES.leader1, IMAGES.leader2, IMAGES.leader3] as const;
