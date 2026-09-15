<script setup>
const cols = [
  {
    title: 'Navigasi',
    links: [
      { label: 'Beranda', to: { name: 'home' } },
      { label: 'Artikel', to: { name: 'artikel' } },
      { label: 'Kreasi', to: { name: 'kreasi' } },
      { label: 'Tentang Kami', to: { name: 'tentang' } },
    ],
  },
  // {
  //   title: 'Kategori',
  //   links: [
  //     { label: 'Teknologi', href: '#' },
  //     { label: 'Desain', href: '#' },
  //     { label: 'Gaya Hidup', href: '#' },
  //     { label: 'Inspirasi', href: '#' },
  //   ],
  // },
  {
    title: 'Hubungi',
    links: [
      { label: 'metakanusa@gmail.com', href: 'mailto:halo@sitename.id' },
      { label: 'Kirim Pesan', href: '#' },
      { label: 'Kebijakan Privasi', href: '#' },
      { label: 'Syarat & Ketentuan', href: '#' },
    ],
  },
]
</script>

<template>
  <footer class="mt-20 bg-bg-dark text-white/65">
    <div class="mx-auto grid max-w-[1250px] grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 px-9 pt-14 max-md:grid-cols-2 max-md:gap-8 max-md:px-5">
      <!-- Brand -->
      <div>
        <div class="mb-4 flex items-center gap-2.5">
          <img src="/mcc.png" alt="Logo" class="h-9 w-9 object-contain" />
          <span class="font-display text-base font-semibold text-white">MCC</span>
        </div>
        <p class="max-w-[260px] text-[13.5px] leading-relaxed text-white/45">
          Platform berbagi kreasi, gagasan, dan cerita yang menginspirasi — Metamorph Creative Crew
        </p>
        <div class="mt-5 flex gap-2.5">
         <a 
            v-for="s in ['Instagram', 'Twitter/X', 'YouTube']"
            :key="s"
            href="#"
            :aria-label="s"
            class="flex h-8.5 w-8.5 items-center justify-center rounded-[7px] border border-white/12 text-white/50 transition hover:border-gold hover:bg-gold/6 hover:text-gold"
          >
            ●
          </a>
        </div>
      </div>

      <!-- Link columns -->
      <div v-for="col in cols" :key="col.title">
        <p class="mb-4.5 text-[11px] font-bold uppercase tracking-widest text-white/35">{{ col.title }}</p>
        <ul class="flex flex-col gap-2.5">
          <li v-for="link in col.links" :key="link.label">
            <component
              :is="link.to ? 'RouterLink' : 'a'"
              :to="link.to"
              :href="link.href"
              class="inline-block text-sm text-white/55 transition hover:pl-1 hover:text-gold"
            >
              {{ link.label }}
            </component>
          </li>
        </ul>
      </div>
    </div>

    <div class="mx-auto mt-12 flex max-w-[1250px] items-center justify-between px-9 py-5 text-[12.5px] text-white/30 max-md:flex-col max-md:gap-2 max-md:px-5 max-md:text-center border-t border-white/7">
      <span>© {{ new Date().getFullYear() }} MCC. Semua hak dilindungi.</span>
      <span>Dibuat dengan <span class="text-accent">cinta uwu</span> di SMK Negeri 1 Purwosari</span>
    </div>
  </footer>
</template>