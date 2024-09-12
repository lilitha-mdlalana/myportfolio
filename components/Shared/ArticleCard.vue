<script setup lang="ts">
const props = defineProps({
  articleTitle: String,
  articleGenre: String,
  articleImageUrl: String,
  articleUrl: String,
});
</script>

<template>
  <div class="item features-image col-12 col-md-6 col-lg-4">
    <div class="item-wrapper">
      <div class="item-img mb-3">
        <img :src="articleImageUrl"/>
      </div>
      <div class="item-content align-left">
        <h5 class="item-title mbr-fonts-style mt-0 mb-3 display-7">
          {{ articleGenre }}
        </h5>
        <h6 class="item-subtitle mbr-fonts-style mb-3 display-5">
          <strong>{{ articleTitle }}</strong>
        </h6>

        <div class="mbr-section-btn item-footer">
          <NuxtLink :to="articleUrl" class="btn item-btn btn-white display-7"
            >Read now</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
