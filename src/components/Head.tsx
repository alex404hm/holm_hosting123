import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`${head.title}`}</title>
      <meta content={`${head.title}`} property="og:title" />
      <meta content="#54a5da" name="theme-color" />
      <meta content="https://img.icons8.com/?size=100&id=2KH7rah9IPNi&format=png&color=228BE6" property="og:image" />

      <link rel="preload" as="font" href="/fonts/MinecraftRegular.otf" crossOrigin="anonymous" />
      <link rel="preload" as="font" href="/fonts/MinecraftBold.otf" crossOrigin="anonymous" />
      <link rel="preload" as="font" href="/fonts/MinecraftItalic.otf" crossOrigin="anonymous" />
      <link rel="preload" as="font" href="/fonts/MinecraftBoldItalic.otf" crossOrigin="anonymous" />

      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" type="image/png" href="https://img.icons8.com/?size=100&id=2KH7rah9IPNi&format=png&color=228BE6" />
      <link rel="apple-touch-icon" href="https://img.icons8.com/?size=100&id=2KH7rah9IPNi&format=png&color=228BE6" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m, i) => (
        <meta {...m} key={i} />
      ))}

      {head.links.map((l, i) => (
        <link {...l} key={i} />
      ))}

      {head.styles.map((s, i) => (
        <style {...s.props} key={i} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});