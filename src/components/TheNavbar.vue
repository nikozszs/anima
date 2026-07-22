<template>
  <nav class="container">
    <router-link to="/">
      <img src="../assets/logo.svg" alt="логотип"/>
    </router-link>
    <div class="navbar">
      <div class="connection">
        <img src="../assets/whatsapp.svg" />
        <div class="phone">
          <img src="../assets/phone.svg" />
          <p>+7 (499) 258-625-33</p>
        </div>
        <img src="../assets/search.svg"/>
      </div>
      <ul class="links">
        <li v-for="link in links" :key="link.path">
          <router-link class="link" :to='link.path'>
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {} from 'vue'
export default {
  setup(){
    const links = [
      {name: 'каталог', path: '/catalog'},
      {name: 'акции', path: '/sales'},
      {name: 'сотрудничество', path: '/partnership'},
      {name: 'оплата и доставка', path: '/payment'},
    ]
    return {links}
  }
}
</script>

<style scoped>
.container {
  padding: 22px 60px 16px 45px;
  display: flex;
  justify-content: center;
}

.connection {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  padding-right: 35px;
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
  gap: 30px;
}

.link {
  white-space: nowrap;
  font-size: 1.125rem;
  text-decoration: none;
  padding: 13px 34px 14px;
}

.link:active,
.link:hover {
  border-bottom: 3px solid var(--first-color);
}
</style>