<template>
  <nav class="container">
    <img src="../assets/logo.svg" alt="логотип"/>
    <div class="navbar">
      <div class="connection">
        <img src="../assets/whatsapp.svg" />
        <div class="phone">
          <img src="../assets/phone.svg" />
          <span>+7 (499) 258-625-33</span>
        </div>
        <img src="../assets/search.svg"/>
      </div>
      <ul class="links">
        <li>
          <router-link to='/catalog'>каталог</router-link>
        </li>
        <li>
          <router-link to='/sales'>акции</router-link>
        </li>
        <li>
          <router-link to='/partnership'>сотрудничество</router-link>
        </li>
        <li>
          <router-link to='/payment'>оплата и доставка</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {} from 'vue'
export default {
  setup(){}
}
</script>

<style scoped>
.container {
  padding: 22px 74px 16px 45px;
  display: flex;
  justify-content: space-between;
}

.connection {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}

.navbar {
  display: flex;
  gap: 36px;
  flex-direction: column;
}

.phone {
  display: flex;
  gap: 5px;
  font-size: 1.188rem;
  font-weight: 400;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  list-style: none;
  gap: clamp(3.75rem, -1.11rem + 13.41vw, 10.625rem);
}

.links li a {
  white-space: nowrap;
  font-size: 1.125rem;
}

.links li:active {
  border: 2px solid var(--first-color);
}
</style>