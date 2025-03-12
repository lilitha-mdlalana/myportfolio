<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/blog",
  sort: [{ date: -1 }],
};
useHead({
  title: "Lilitha Mdlalana - Blog",
  meta: [
    {
      // hid: "description",
      name: "description",
      content: "Welcome to my tech blog where I share insights, tutorials, and updates on software development. Explore articles on web development, programming languages, frameworks, and best practices. Join me on my journey as a student programmer and stay updated with the latest trends and tips in the tech world",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://lilitha-mdlalana.netlify.app/blog/",
    },
  ],
  noscript: [
    {
      innerHTML: `
        <div class="alert alert-warning" role="alert">
          <strong>Warning!</strong>
          <br />
          <br />
          <p>
            <strong>AOS</strong> requires JavaScript to be enabled in your
            browser.
          </p>
        </div>
      `,
    },
  ],
})
</script>

<template>
  <section data-bs-version="5.1" class="news08 cid-u8fJMhNm4g" id="news08-2j" data-aos="fade-right"
    data-aos-duration="2000">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-12 content-head">
          <div class="mbr-section-head">
            <h4
              class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"
            >
              <strong>My thoughts....</strong>
            </h4>
          </div>
        </div>
      </div>
      <ContentList :query="query" path="/blog" v-slot="{ list }">
        <div class="row">
          <SharedArticleCard
            v-for="post in list"
            :key="post._path"
            :articleTitle="post.title"
            :articleGenre="post.tag"
            :articleImageUrl="post.thumbnail"
            :articleUrl="post.slug"
          />
        </div>
      </ContentList>
    </div>
  </section>

  <SectionContact />
</template>
