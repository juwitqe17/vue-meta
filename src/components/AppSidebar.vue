<script setup>
import { useRoute, RouterLink } from 'vue-router'

const props = defineProps({
  collapsed: { type: Boolean, default: false },
})
const emit = defineEmits(['update:collapsed'])

const route = useRoute()
const isActive = (name) => route.name === name || route.name?.startsWith(name + '.')

function toggleCollapsed() {
  emit('update:collapsed', !props.collapsed)
}

const navItems = [
  { name: 'home', label: 'Beranda' },
  { name: 'artikel', label: 'Artikel' },
  { name: 'kreasi', label: 'Kreasi' },
]
</script>

<template>
  <aside
    :class="[
      'fixed left-0 top-0 z-[100] flex h-screen flex-col overflow-hidden bg-dark-navy transition-[width] duration-300',
      props.collapsed ? 'w-[72px]' : 'w-[260px]',
    ]"
  >
    <!-- Brand -->
    <div class="flex flex-shrink-0 items-center gap-3 border-b border-white/8 px-5 pb-6 pt-7">
      <img src="/mcc.png" alt="Logo" class="h-9 w-9 flex-shrink-0 object-contain" />
      <div :class="['font-display text-[17px] font-semibold leading-snug text-white transition-opacity', props.collapsed && 'opacity-0']">
        MCC
        <span class="mt-0.5 block text-[11px] font-body font-normal uppercase tracking-wider text-white/45">
          Ekstrakurikuler Kreatif
        </span>
      </div>
    </div>

    <!-- Nav -->
    <nav class="flex-1 overflow-y-auto overflow-x-hidden px-3 py-5">
      <p :class="['mb-2 px-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/30 transition-opacity', props.collapsed && 'opacity-0']">
        Menu Utama
      </p>

      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="{ name: item.name }"
        :data-label="item.label"
        :class="[
          'group relative mb-0.5 flex items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-sm font-medium transition-colors',
          isActive(item.name)
            ? 'border-l-[3px] border-accent bg-gradient-to-br from-accent/25 to-accent/12 text-white'
            : 'text-white/65 hover:bg-white/7 hover:text-white',
        ]"
      >
        <!-- ganti dengan icon set kamu, mis. lucide-vue-next -->
        <span class="h-5 w-5 flex-shrink-0 opacity-75 group-hover:opacity-100">●</span>
        <span :class="['transition-opacity', props.collapsed && 'opacity-0']">{{ item.label }}</span>

        <!-- tooltip saat collapsed -->
        <span
          v-if="props.collapsed"
          class="pointer-events-none absolute left-[calc(72px+8px)] whitespace-nowrap rounded-md bg-bg-dark px-3 py-1.5 text-xs text-white opacity-0 shadow-[0_4px_14px_rgba(0,0,0,0.3)] transition-opacity group-hover:opacity-100"
        >
          {{ item.label }}
        </span>
      </RouterLink>

      <div class="my-4 mx-2.5 h-px bg-white/7" />
      <p :class="['mb-2 px-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/30 transition-opacity', props.collapsed && 'opacity-0']">
        Informasi
      </p>

      <RouterLink
        :to="{ name: 'tentang' }"
        :class="[
          'flex items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-sm font-medium transition-colors',
          isActive('tentang') ? 'border-l-[3px] border-accent bg-accent/15 text-white' : 'text-white/65 hover:bg-white/7 hover:text-white',
        ]"
      >
        <span class="h-5 w-5 flex-shrink-0 opacity-75">●</span>
        <span :class="props.collapsed && 'opacity-0'">Tentang Kami</span>
      </RouterLink>
    </nav>

    <!-- Collapse toggle (desktop only) -->
   <div class="flex-shrink-0 border-t border-white/8 px-5 py-4">
      <button
        :class="[
          'flex items-center rounded-lg px-2.5 py-2 text-[13px] text-white/45 hover:bg-white/6 hover:text-white/80',
          collapsed ? 'w-full justify-center' : 'w-full gap-2.5',
        ]"
        @click="toggleCollapsed"
      >
        <svg :class="['flex-shrink-0 transition-transform', collapsed && 'rotate-180']" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15,18 9,12 15,6" />
        </svg>
        <span v-show="!collapsed">Kecilkan</span>
      </button>
    </div>
  </aside>
</template>