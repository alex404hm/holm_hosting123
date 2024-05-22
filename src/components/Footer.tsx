import { component$ } from '@builder.io/qwik';
import { SocialButtons } from './Nav';

export default component$(() => {

  return (
    <footer class="relative flex flex-col gap-1 items-center justify-center text-center w-full z-10 bg-gray-950/30 border-t border-t-gray-700 p-6">
      <div class="flex mb-2">
        <SocialButtons />
      </div>
      <span class="text-sm text-gray-300 max-w-6xl text-center">
        Copyright © 2024 Holm Host. All rights reserved. Holm Host.<br />
      </span>
    </footer>
  );
});