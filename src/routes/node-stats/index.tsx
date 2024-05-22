import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

import { ButtonAnchor, Card, Header } from '@luminescent/ui';
import { StatsChartOutline } from 'qwik-ionicons';

export default component$(() => {

  return <>
    <section class="flex flex-col gap-3 mx-auto max-w-6xl px-6 py-16 items-center min-h-[100svh]">
      <div class="justify-center flex relative max-w-5xl px-10 py-24">
        <div class="flex flex-col gap-8">
          <h1 class="flex gap-4 items-center justify-center text-gray-100 text-2xl sm:text-4xl font-bold mb-4 text-center drop-shadow-lg">
            <StatsChartOutline width="64" /> Node Stats
          </h1>
          <div class="flex flex-wrap gap-3 justify-center">
            <ButtonAnchor href="https://status.racnhosting.com/" size="lg" color="blue">
              Overview
            </ButtonAnchor>
            <ButtonAnchor href="https://netdata.racnhosting.com/panel" size="lg" color="blue">
              Web Services
            </ButtonAnchor>
          </div>
          <div class="grid sm:grid-cols-2 gap-3">
            <Card href="https://netdata.racnhosting.com/crabwings" color="red" hover="clickable" blobs>
              <Header subheader="New York City, NY, USA">
                Crabwings
              </Header>
              crabwings.racnhosting.com
            </Card>
            <Card href="http://impeyes.racnhosting.com:19999/" color="orange" hover="clickable" blobs>
              <Header subheader="Falkenstein, Germany (EU)">
                Impeyes
              </Header>
              impeyes.racnhosting.com
            </Card>
            <Card href="http://jellyfishjaws.racnhosting.com:19999/" color="yellow" hover="clickable" blobs>
              <Header subheader="Falkenstein, Germany (EU)">
                Jellyfishjaws
              </Header>
              jellyfishjaws.racnhosting.com
            </Card>
            <Card href="http://koalaknees.racnhosting.com/" color="green" hover="clickable" blobs>
              <Header subheader="Ashburn, VA, USA">
                Koalaknees
              </Header>
              koalaknees.racnhosting.com
            </Card>
          </div>
        </div>
      </div>
    </section>
  </>;
});

export const head: DocumentHead = {
  title: 'Holm Host Node Stats',
  meta: [
    {
      name: 'description',
      content: 'Check the status of Holm Host\'s nodes.',
    },
    {
      name: 'og:description',
      content: 'Check the status of Holm Host\'s nodes.',
    },
    {
      name: 'og:image',
      content: 'https://img.icons8.com/?size=100&id=2KH7rah9IPNi&format=png&color=228BE6',
    },
  ],
};