<template>
  <footer>
    <nav class="nav-right">
      <a>v0.2.0-mp</a>
    </nav>
  </footer>
</template>

<style scoped lang="scss">
@import "../assets/styles/mixins";

footer {
  display: flex;
  justify-content: flex-end;
  padding: 0 $header-padding-side;
  align-items: center;
  z-index: 1;

  box-sizing: border-box;
  min-height: 60px;

  @include tablet {
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
  }
}

nav.nav-right {
  @include tablet {
    margin-top: 15px;
  }
}

nav a {
  color: $color-text-secondary;

  & + a {
    margin-left: 30px;
  }
}

nav a:hover,
nav a:focus {
  color: $color-text;
  outline: none;
}
</style>
