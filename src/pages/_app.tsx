import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const DEFAULT_SEO = {
  title: "이상조 | Front-End Dev",
  description: "안녕하세요, 프론트엔드 개발자 이상조입니다.",
  canonical: "https://www.sjoleee.info/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.sjoleee.info/",
    title: "이상조 | Front-End Dev",
    site_name: "이상조 | Front-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "이상조 | Front-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "이상조 | Front-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "이상조 | Front-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
