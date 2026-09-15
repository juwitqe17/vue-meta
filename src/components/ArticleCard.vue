<script setup>
defineProps({
  tag: { type: String, default: 'Teknologi' },
  date: { type: String, default: '12 Jun 2025' },
  readTime: { type: String, default: '5 menit baca' },
  title: {
    type: String,
    default: 'Judul Artikel yang Menarik dan Informatif',
  },
  excerpt: {
    type: String,
    default:
      'Cuplikan singkat dari isi artikel yang membuat pembaca penasaran dan ingin melanjutkan membaca lebih lanjut...',
  },
  image: String,
})
</script>

<template>
  <article
    class="overflow-hidden rounded-2xl border border-black/5 bg-white
           shadow-subtle transition hover:-translate-y-1
           hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
  >
    <!-- Gambar Artikel -->
    <div class="relative h-44 overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition duration-500
               hover:scale-105"
      />

      <!-- Tag -->
      <span
        class="absolute left-3.5 top-3.5 rounded-md bg-accent px-2.5 py-1
               text-[10px] font-bold uppercase tracking-widest text-white"
      >
        {{ tag }}
      </span>
    </div>

    <!-- Isi -->
    <div class="p-5">
      <div class="mb-2.5 flex items-center gap-2 text-xs text-black/40">
        <span>{{ date }}</span>
        <span class="text-black/20">·</span>
        <span>{{ readTime }}</span>
      </div>

      <h3
        class="mb-2.5 font-display text-[17px] font-semibold
               leading-snug text-dark-navy"
      >
        {{ title }}
      </h3>

      <p class="text-[13.5px] leading-relaxed text-black/50">
        {{ excerpt }}
      </p>
    </div>
  </article>
</template>