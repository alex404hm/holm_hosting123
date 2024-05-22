import { $, component$, useOnWindow, useVisibleTask$, useStore } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import { Anchor, Button, ButtonAnchor, Card, Header } from '@luminescent/ui';
import { CartOutline, CashOutline, ColorPaletteOutline, CubeOutline, EyeOutline, GlobeOutline, HeartOutline, PersonOutline, RocketOutline, ServerOutline, StarOutline, CheckmarkCircleOutline, AlertCircleOutline } from 'qwik-ionicons';
import Chart from '~/components/elements/Chart';
import { initiateTyper } from '~/components/util/Typer';

import Background from '~/components/images/background.png?jsx';
import { plans } from './plans';

export default component$(() => {

  const missionContentVisible = useStore({ expanded: false });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    initiateTyper();
  });

  useOnWindow('scroll', $(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;
    const bg = document.getElementById('bg')!;
    bg.style.bottom = `${window.scrollY / 2}px`;
    bg.style.filter = `blur(${window.scrollY * 2 / 100}px)`;
  }));

  return <>
    <section class="flex mx-auto max-w-7xl px-6 items-center justify-center min-h-[calc(100svh)] pt-[72px]">
      <Background class="fixed bottom-0 scale-110 overflow-hidden -z-10 h-[100lvh] w-[100lvw] object-cover object-center opacity-55" id="bg" alt="background" />
      <div class="text-center justify-center flex relative w-full">
        <div class="flex flex-col gap-2 sm:gap-6 w-full px-4">
          <h1 class="text-white text-3xl sm:text-6xl font-bold animate-in fade-in slide-in-from-top-8 anim-duration-1000 drop-shadow-lg">
            <span class="text-blue-400">Holm Host</span>
          </h1>
          <h2 class="text-gray-300 text-lg sm:text-2xl animate-in fade-in slide-in-from-top-16 anim-duration-1000">
<span
              class="typer"
              id="main"
              data-words={'Quality Over Quantity., Affordable Reliable., Secure Fast Dependable.'}
              data-colors="#5487CB,#54B1DF,#54DAF4,#54EEFF"
              data-delay="50"
              data-deleteDelay="1500">
            </span>
            <span class="cursor" data-owner="main" data-cursor-display="|"></span>
          </h2>
          <div class="flex flex-col gap-2 mt-8 animate-in fade-in slide-in-from-top-24 anim-duration-1000">
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
              <ButtonAnchor href="#plans" color="blue" size="xl">
                 Get Started
              </ButtonAnchor>
            </div>
            <div class="flex flex-col sm:flex-row gap-2 justify-center">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 items-center justify-center bg-gray-800">
      <div class="justify-center flex relative max-w-5xl px-6">
        <div class="flex flex-col gap-4">
          <Anchor id="plans" />
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Plans
          </h2>
          <div class="grid md:grid-cols-3 gap-4">
            {Object.keys(plans).map((planName) => {
              const plan = plans[planName as keyof typeof plans];
              const ramOptions = Object.keys(plan.ramAndId);
              return <Card key={planName} color="darkergray" hover>
                <Header subheader={<></>}>
                  {planName}
                </Header>
                <ul class="list-disc ml-5 flex flex-col gap-2 h-full">
                  {plan.features.map((feature) => {
                    return <li key={feature}>
                      {feature}
                    </li>;
                  })}
                </ul>
                {plan.outOfStock ?
                  <Button color="red" class={{ 'w-full': true }} disabled>
                    <AlertCircleOutline width="30" class="text-3xl" /> Out of stock
                  </Button>
                  :
                  <Link href={`/plans?plan=${encodeURIComponent(planName)}`} class="pt-4">
                    <Button color="blue" class={{ 'w-full': true }}>
                      <CartOutline width="30" class="text-3xl" /> Buy Now
                    </Button>
                  </Link>
                }
              </Card>;
            })}
          </div>
        </div>
      </div>
    </section>
    <section class="flex mx-auto pt-16 items-center justify-center bg-gray-800">
      <div class="justify-center flex relative max-w-5xl px-6">
        <div class="flex flex-col gap-4">
          <h2 class="text-gray-100 text-3xl sm:text-5xl font-bold mb-4 text-center">
            Features
          </h2>
          <div class="grid md:grid-cols-2 gap-4">
            <Card color="darkergray">
              <Header>
                <RocketOutline width="36" /> Modern Design
              </Header>
              <p>
                We don't make compromises. Choose from our blazing fast Ryzen 9 processors and NVMe SSDs. All plans include a satisfaction guarantee.
              </p>
            </Card>
            <Card color="darkergray">
              <Header>
                <HeartOutline width="36" /> Instant Support
              </Header>
              <p>
                You can contact support at any time through our <a href="https://discord.gg/nmgtX5z" class="text-blue-400 hover:underline">Discord server</a>.
              </p>
            </Card>
            <Card color="darkergray">
              <Header>
                <EyeOutline width="36" /> Affordable Pricing
              </Header>
              <p>
                We don't oversell, and we're transparent about that. View our public <Link href="/node-stats" class="text-blue-400 hover:underline">detailed server statistics</Link> or financial breakdown.
              </p>
            </Card>
            <Card color="darkergray">
              <Header>
                <GlobeOutline width="36" /> User-Friendly Control Panel
              </Header>
              <p>
                We're confident that we have the best plans available. If you locate a similar plan at a lower price, ask us about our price matching.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <div class="pt-16 bg-gray-800" />
  </>;
});

export const head: DocumentHead = {
  title: 'Holm Host | Your Trusted Web Hosting Partner',
  meta: [
    {
      name: 'description',
      content: 'Holm Host: Where quality meets affordability. Experience blazing-fast servers and seamless performance for your online presence. Join us and elevate your web experience today.',
    },
    {
      name: 'og:description',
      content: 'Holm Host: Where quality meets affordability. Experience blazing-fast servers and seamless performance for your online presence. Join us and elevate your web experience today.',
    },
    {
      name: 'og:image',
      content: 'https://img.icons8.com/?size=100&id=2KH7rah9IPNi&format=png&color=228BE6',
    },
  ],
};
