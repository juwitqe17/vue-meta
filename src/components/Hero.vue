<script setup>
import heroImage from '@/assets/images/mcc-hero.jpeg'

defineProps({
  eyebrow: { type: String, default: 'Metamorph Creative Crew' },
  stats: {
    type: Array,
    default: () => [
      { value: '50', suffix: '+', label: 'Artikel' },
      { value: '30', suffix: '+', label: 'Kreasi' },
    ],
  },
})
</script>

<template>
  <section
    class="relative min-h-[88vh] overflow-hidden rounded-2xl
           bg-gradient-to-br from-dark-navy to-[#0d1f32]
           px-16 py-20 flex items-center
           max-md:px-7 max-md:py-12 max-md:min-h-[70vh]"
  >
    <!-- radial glow -->
    <div
      class="pointer-events-none absolute inset-0"
      style="background:
        radial-gradient(ellipse 60% 60% at 80% 50%, rgba(231,76,60,0.12) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,199,44,0.07) 0%, transparent 60%);"
    />

    <!-- grid pattern -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.03]"
      style="background-image:
        linear-gradient(#fff 1px, transparent 1px),
        linear-gradient(90deg, #fff 1px, transparent 1px);
        background-size: 48px 48px;"
    />

    <!-- CONTENT -->
    <div
      class="relative z-10 grid w-full items-center gap-12
             lg:grid-cols-[1.05fr_0.95fr]"
    >
      <!-- KIRI -->
      <div class="max-w-xl">
        <span
          class="mb-7 inline-flex items-center gap-2 rounded-full
                 border border-gold/25 bg-gold/10 px-3.5 py-1.5
                 text-xs font-semibold uppercase tracking-widest text-gold"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-gold"></span>
          {{ eyebrow }}
        </span>

        <h1
          class="mb-5 font-display text-[clamp(36px,4vw,58px)]
                 font-semibold leading-tight text-white"
        >
          Tempat Gagasan<br />
          Menjadi
          <em class="not-italic italic text-gold">Karya</em>
        </h1>

        <p
          class="mb-10 max-w-lg text-[17px] leading-relaxed text-white/60"
        >
          Baca artikel terkini sekolah, eksplorasi karya kreasi, dan temukan
          inspirasi baru setiap harinya di satu tempat.
        </p>

        <!-- BUTTON -->
        <div class="flex flex-wrap gap-3.5">
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-[10px]
                   bg-accent px-7 py-3.5 text-sm font-semibold text-white
                   shadow-[0_4px_20px_rgba(231,76,60,0.35)]
                   transition hover:-translate-y-0.5 hover:bg-[#c0392b]"
          >
            Mulai Membaca

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

          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-[10px]
                   border border-white/18 bg-white/7 px-7 py-3.5
                   text-sm font-medium text-white/85
                   transition hover:border-white/30 hover:bg-white/12 hover:text-white"
          >
            Lihat Kreasi
          </a>
        </div>

        <!-- STATS -->
        <div class="mt-12 grid grid-cols-3 gap-5 max-md:grid-cols-2">
          <div
            v-for="s in stats"
            :key="s.label"
            class="rounded-xl border border-white/8 bg-white/4
                   px-5 py-5 text-center"
          >
            <div
              class="font-display text-3xl font-semibold leading-none text-white"
            >
              {{ s.value }}<span class="text-gold">{{ s.suffix }}</span>
            </div>

            <div
              class="mt-1.5 text-xs uppercase tracking-wide text-white/40"
            >
              {{ s.label }}
            </div>
          </div>
        </div>
      </div>

     <!-- KANAN : GAMBAR MCC -->
    <div class="relative flex items-center justify-center">
      <!-- glow di belakang gambar -->
      <div
        class="absolute h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      ></div>

      <img
        :src="heroImage"
        alt="Metamorph Creative Crew"
        class="relative z-10 max-h-[480px] w-full max-w-[480px]
              rounded-3xl object-cover
              drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]
              transition duration-500 hover:scale-[1.02]"
      />
    </div>
    </div>
  </section>
</template>