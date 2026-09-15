<script setup>
import AppSidebar from '@/components/AppSidebar.vue'
import Hero from '@/components/Hero.vue'
import AppSection from '@/components/AppSection.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import Footer from '@/components/Footer.vue'

const artikel = [1, 2, 3] // ganti dengan data asli / props dari API nanti
</script>

<template>
  <div class="flex min-h-screen bg-light">
    <AppSidebar />

    <div class="flex flex-1 flex-col md:ml-[260px]">
      <main class="w-full max-w-[1250px] flex-1 px-9 pt-9 max-md:px-5">
        <div class="flex flex-col gap-0">
          <Hero />

          <AppSection
            eyebrow="Artikel Terbaru"
            description="Pilihan artikel segar dari penulis terpilih — tentang teknologi, desain, dan kehidupan."
            link-text="Semua Artikel"
          >
            <template #title>
              Baca Sesuatu yang <em class="not-italic text-accent">Bermakna</em>
            </template>

            <div class="grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:grid-cols-3">
              <ArticleCard v-for="n in artikel" :key="n" />
            </div>
          </AppSection>

          <AppSection
            variant="dark"
            eyebrow="Galeri Kreasi"
            description="Koleksi kreasi terbaik dari para kreator berbakat di seluruh Indonesia."
            link-text="Lihat Semua Kreasi"
          >
            <template #title>
              Karya <em class="not-italic text-gold">Terbaru</em> Komunitas
            </template>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <div
                v-for="n in 8"
                :key="n"
                class="flex aspect-square cursor-pointer items-center justify-center rounded-xl
                       border border-white/8 bg-white/5 text-3xl text-white/15
                       transition hover:scale-[1.02] hover:border-gold/20 hover:bg-gold/8"
              >
                ✦
              </div>
            </div>
          </AppSection>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>