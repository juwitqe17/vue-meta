<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
  variant: { type: String, default: 'light' },
  linkText: String,
  linkHref: { type: String, default: '#' },
})
</script>

<template>
  <section class="py-20 max-md:py-10">
    <div
      :class="[
        'rounded-2xl',
        variant === 'dark' ? 'bg-dark-navy p-15 max-md:p-7' : '',
      ]"
    >
      <div class="mb-10">
        <p
          :class="[
            'mb-2.5 text-[11px] font-bold uppercase tracking-widest',
            variant === 'dark' ? 'text-gold' : 'text-accent',
          ]"
        >
          {{ eyebrow }}
        </p>

        <h2
          :class="[
            'font-display text-[clamp(24px,3vw,36px)] font-semibold leading-snug',
            variant === 'dark' ? 'text-white' : 'text-dark-navy',
          ]"
        >
          <slot name="title">{{ title }}</slot>
        </h2>

        <p
          :class="[
            'mt-3 max-w-lg text-[15.5px] leading-relaxed',
            variant === 'dark' ? 'text-white/50' : 'text-black/50',
          ]"
        >
          {{ description }}
        </p>
      </div>

      <!-- INI TEMPAT ISI GALLERY / CARD -->
      <slot />

      <a
        v-if="linkText"
        :href="linkHref"
        :class="[
          'mt-8 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5',
          variant === 'dark' ? 'text-gold' : 'text-accent',
        ]"
      >
        {{ linkText }}

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </section>
</template>