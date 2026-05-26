const allowedExternalHosts = new Set([
  "wa.me",
  "www.linkedin.com",
  "linkedin.com",
  "t.me",
  "x.com",
  "github.com",
  "docs.google.com",
  "forms.gle",
]);

export function safeExternalHref(href: string) {
  try {
    const url = new URL(href);
    if (url.protocol !== "https:" || !allowedExternalHosts.has(url.hostname)) {
      return "#";
    }
    return url.toString();
  } catch {
    return "#";
  }
}
