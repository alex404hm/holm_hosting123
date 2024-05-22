import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { Button, ButtonAnchor, LoadingIcon, LogoDiscord, Nav, DropdownRaw } from '@luminescent/ui';
import { CubeOutline, GlobeOutline, LogoGithub, ServerOutline } from 'qwik-ionicons';


import { inlineTranslate, useSpeakConfig } from 'qwik-speak';

import { languages } from '~/speak-config';

export default component$(() => {
  const config = useSpeakConfig();
  const t = inlineTranslate();
  const loc = useLocation();

  return (
    <Nav fixed>
      <Link q:slot="start" href="/">
        <Button transparent>
          <span class="font-bold -ml-1">Holm Host</span>
          <div class={{
            'transition-all': true,
            '-ml-6 opacity-0': !loc.isNavigating,
          }}>
            <LoadingIcon width={16} speed="0.4s" />
          </div>
        </Button>
      </Link>

      <DropdownRaw id="nav-hosting" q:slot='end' size="md" transparent hover
        display={<div class="flex items-center gap-3"><ServerOutline width={24} />Hosting</div>}
        class={{ 'hidden sm:flex': true }}>
        <ButtonAnchor q:slot="extra-buttons" transparent href="https://panel.birdflop.com/">
          Panel
        </ButtonAnchor>
        <Link q:slot="extra-buttons" href="/plans">
          <Button transparent class={{ 'w-full': true }}>
            Plans
          </Button>
        </Link>
        <ButtonAnchor q:slot="extra-buttons" transparent href="https://client.birdflop.com/">
          Billing
        </ButtonAnchor>
        <Link q:slot="extra-buttons" href="/node-stats">
          <Button transparent class={{ 'w-full': true }}>
            Node Stats
          </Button>
        </Link>
      </DropdownRaw>
      
      <DropdownRaw id="nav-hosting" q:slot='mobile' size="md" transparent
        display={<div class="flex items-center gap-3"><ServerOutline width={24} />Hosting</div>}>
        <ButtonAnchor q:slot="extra-buttons" transparent href="https://panel.birdflop.com/">
          Panel
        </ButtonAnchor>
        <Link q:slot="extra-buttons" href="/plans">
          <Button transparent class={{ 'w-full': true }}>
            Plans
          </Button>
        </Link>
        <ButtonAnchor q:slot="extra-buttons" transparent href="https://client.birdflop.com/">
          Billing
        </ButtonAnchor>
        <Link q:slot="extra-buttons" href="/node-stats">
          <Button transparent class={{ 'w-full': true }}>
            Node Stats
          </Button>
        </Link>
      </DropdownRaw>
      <div q:slot='mobile' class="flex justify-evenly">
        <SocialButtons />
      </div>

    </Nav>
  );
});

export const SocialButtons = component$(() => {
  return <>
  </>;
});