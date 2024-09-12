<script setup lang="ts">
useHead({
  script: [
      { src: '/bootstrap/js/bootstrap.bundle.min.js' },
      { src: '/smoothscroll/smooth-scroll.js' },
      { src: '/ytplayer/index.js' },
      { src: '/dropdown/js/navbar-dropdown.js' },
      { src: '/theme/js/script.js' }
    ]
})
</script>

<template>
  <SharedNavbar/>
  <div>
    <NuxtPage />
  </div>
  <SharedFooter/>
</template>
