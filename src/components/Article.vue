<template lang= "pug">
  .news-item
    .news-item__img
      img(src="img/news/1.png")
      .img-hover
        .img-hover__center
          router-link(:to="'/news/'+ article._id")
            span Читать...
    .news-item__date
      span {{article.pub_date | formatDate}}
    .news-item__text
      .title.title_2 {{article.text}}
</template>
<script >
  export default {
    props: ['article']
  }
</script>