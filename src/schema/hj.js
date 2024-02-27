import React from "react";

const WebsiteSchema = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "ArbabMustafa",
        url: "https://www.arbabmustafa.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.arbabmustafa.com/about{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      })}
    </script>
  );
};

const PersonSchema = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Person",
        name: "Arbab Mustafa",
        url: "https://www.arbabmustafa.com/",
        image: "https://www.arbabmustafa.com/pic1.png",
        sameAs: [
          "https://www.linkedin.com/in/arbab-mustafa-6b91a8258/",
          "https://github.com/Arbab-Mustafa",
          "https://www.arbabmustafa.com/",
          "https://twitter.com/KMarkhoor",
        ],
        jobTitle: "Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Frontend Developer",
        },
      })}
    </script>
  );
};

const BreadcrumbListSchema = () => {
  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.arbabmustafa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://www.arbabmustafa.com/about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contact",
            item: "https://www.arbabmustafa.com/contact",
          },
        ],
      })}
    </script>
  );
};
export { WebsiteSchema, BreadcrumbListSchema, PersonSchema };
