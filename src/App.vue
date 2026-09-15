<script setup>
import { ref, onMounted, watch } from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
import Hero from '@/components/Hero.vue'
import AppSection from '@/components/AppSection.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import Footer from '@/components/Footer.vue'

import { kreasi } from '@/data/gallery.js'
import { artikel } from '@/data/article.js'

const collapsed = ref(false)

onMounted(() => {
  collapsed.value = localStorage.getItem('sidebar_collapsed') === 'true'
})
watch(collapsed, (val) => localStorage.setItem('sidebar_collapsed', val))
</script>

<template>
  <div class="flex min-h-screen bg-light">
    <AppSidebar v-model:collapsed="collapsed" />

    <div
      :class="[
        'flex flex-1 flex-col transition-[margin-left] duration-300',
        collapsed ? 'md:ml-[72px]' : 'md:ml-[260px]',
      ]"
    >
      <main class="w-full max-w-[1470px] flex-1 px-9 pt-9 max-md:px-5">
        <div class="flex flex-col gap-0">
          <Hero />

          <AppSection
            eyebrow="Artikel Terbaru"
            description="Pilihan artikel segar dari Divisi Penulisan ekstrakurikuler Metamorph Creative Crew"
            link-text="Semua Artikel"
          >
            <template #title>
              Baca Sesuatu yang
              <em class="not-italic text-accent">Bermakna</em>
            </template>

            <div class="grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:grid-cols-3">
              <ArticleCard
                v-for="item in artikel"
                :key="item.title"
                v-bind="item"
              />
            </div>
          </AppSection>

          <AppSection
            variant="dark"
            eyebrow="Galeri Kreasi"
            description="Koleksi kreasi terbaik dari Anggota Jurnalistik SMK Negeri 1 Purwosari"
            link-text="Lihat Semua Kreasi"
          >
            <template #title>
              Karya <em class="not-italic text-gold">Terbaru</em> Komunitas
            </template>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              <div
                v-for="item in kreasi"
                :key="item.title"
                class="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div
                  class="absolute inset-0 flex items-end bg-black/0 p-4 transition duration-300 group-hover:bg-black/50"
                >
                  <h3
                    class="translate-y-3 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-base"
                  >
                    {{ item.title }}
                  </h3>
                </div>
              </div>
            </div>
          </AppSection>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>