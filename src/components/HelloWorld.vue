<template>
  <div class="hero">
    <picture class="hero__picture">
      <source media="(min-width: 768px)" srcset="image/hero.jpg 1x, image/hero@2x.jpg 2x" />
      <source media="(max-width: 767.9px)" srcset="image/hero@sp.jpg" />
      <img class="hero__image lazyload" src="image/hero.jpg" />
    </picture>
    <div class="hero__content">
      <div class="pickup">
        <div class="pickup__swiperWrap">
          <div class="pickup__swiper swiper-container">
            <div class="pickup__wrapper swiper-wrapper">
              <div class="pickup__slide swiper-slide">
                <a class="pickup__link" href="#">
                  <picture class="pickup__picture">
                    <source
                      media="(min-width: 768px)"
                      srcset="@/assets/image/pickup01.png 1x, @/assets/image/pickup01@2x.png 2x"
                    />
                    <source media="(max-width: 767.9px)" srcset="@/assets/image/pickup01@sp.png" />
                    <img
                      class="pickup__image lazyload"
                      src="@/assets/image/pickup01.png"
                      alt="ご入居お祝い金キャンペーン"
                    />
                  </picture>
                </a>
              </div>
              <div class="pickup__slide swiper-slide">
                <a class="pickup__link" href="#">
                  <picture class="pickup__picture">
                    <source
                      media="(min-width: 768px)"
                      srcset="@/assets/image/pickup01.png 1x, @/assets/image/pickup01@2x.png 2x"
                    />
                    <source media="(max-width: 767.9px)" srcset="@/assets/image/pickup01@sp.png" />
                    <img
                      class="pickup__image lazyload"
                      src="@/assets/image/pickup01.png"
                      alt="ご入居お祝い金キャンペーン"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
        <aside class="pickup__pagination swiper-pagination"></aside>
        <aside class="pickup__controller">
          <div class="pickup__prev swiper-button-prev"><?php include 'arrow.php'; ?></div>
          <div class="pickup__next swiper-button-next"><?php include 'arrow.php'; ?></div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
