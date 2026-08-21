<template>
    <div class="container-form">
      <h3 class="title-question">Остались вопросы?</h3>
      <h3 class="title-help">свяжитесь с нами, мы вам поможем!</h3>
      <p class="subtitle">Заполните форму и мы свяжемся с Вами в ближайшее время</p>
      <form class="form" @submit.prevent="onSubmit" id="form">
        <AppInput
          type="text"
          :placeholder="userNameError ? userNameError : 'Ваше имя'"
          v-model="userName"
          @blur="userBlur"
          :error="userNameError"
          />
        <AppInput
          type="tel"
          :placeholder="userPhoneError ? userPhoneError : 'Ваш телефон'"
          v-model="userPhone"
          @blur="userPhoneBlur"
          :error="userPhoneError"
          />
        <AppButton
          text="отправить"
          color="submit"
          class="footer-btn"
          type="submit"
          :disabled="isSubmitting"
          />
          <span v-if="isTooManyAttempts">Слишком много попыток. Подождите немного</span>

        <label class="checkbox-label">
          <input
            class="checkbox"
            type="checkbox"
            v-model="agreed" />
          <span class="text-agree">Согласен на обработку
            <a class="link" href="https://habr.com/ru/articles/649989/" >персональных данных</a> </span>
        </label>
      </form>
    </div>

    <div class="container-links">
      <a href="#" class="arrow"></a>
      <router-link to="/">
        <img src="../assets/logofooter.svg" alt="логотип">
      </router-link>
      <div v-for="section in footer" :key="section.title">
        <h5 class="title">{{ section.title }}</h5>
        <div v-for="link in section.links" :key="link.id">
          <a :href="link.href" class="links">{{ link.name }}</a>
        </div>
      </div>
      <div class="contacts">
        <h5 class="title">контакты для связи</h5>
        <h5 class="subtitle-contacts">Телефон:
          <span class="subtitle-contacts-accent">8(405) 555-0128 </span></h5>
        <h5 class="subtitle-contacts">Почта:
          <span class="subtitle-contacts-accent">hello@createx.com </span></h5>
        <div class="block-social">
          <AppSocial
            v-for="item in icons"
            :key="item.id"
            :icon="item" />
        </div>
      </div>
    </div>

    <div class="authors">674 Gonzales Drive. Washington, PA 15301</div>
</template>

<script lang="ts">
import {icons} from '../data/icons.ts'
import AppInput from './ui/AppInput.vue';
import AppButton from './ui/AppButton.vue';
import AppSocial from './ui/AppSocial.vue';
import { useFormMain } from '@/use/useFormMain.ts';
export default {
  components: {AppInput, AppButton, AppSocial},
  setup(){
    const {
      userName,
      userPhone,
      agreed,
      userNameError,
      userPhoneError,
      userBlur,
      userPhoneBlur,
      onSubmit,
      isSubmitting,
      isTooManyAttempts
      } = useFormMain()

    const footer = [
      { title: 'меню',
        links: [
          {name: 'Delivery & returns', href: '', id: 1},
          {name: 'FAQ', href: '', id: 2},
          {name: 'Contacts', href: '', id: 3},
          {name: 'Blog', href: '', id: 4},
        ]
      },
      { title: 'каталог',
        links: [
          {name: 'New arrivals', href: '', id: 5},
          {name: 'Trending now', href: '', id: 6},
          {name: 'Sales', href: '', id: 7},
          {name: 'Brands', href: '', id: 8},
        ]
      },
    ]

    return {
      userName,
      userPhone,
      agreed,
      userNameError,
      userPhoneError,
      userBlur,
      userPhoneBlur,
      onSubmit,
      isSubmitting,
      isTooManyAttempts,
      footer,
      icons,
    }
  }
}
</script>

<style scoped>
.container-form {
  padding: 70px 577px 70px 104px;
  background:
  linear-gradient(to right, rgba(0, 0, 0, 1) 30%, transparent 100%),
    url('../assets/footerback.jpg');
  background-size: cover;
}

.title-question {
  margin-bottom: 10px;
}

.title-help {
  margin-bottom: 15px;
}

.subtitle {
  font-size: 1.125rem;
  font-weight: 300;
  margin-bottom: 29px;
}

.form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.link {
  text-decoration: underline;
}

.footer-btn {
  padding: 15px 17px;
  text-transform:capitalize;
}

.footer-btn:disabled {
  color: var(--sec-color);
  border: 1px solid var(--sec-color);
  background: var(--fourt-back);
}

.text-agree {
  font-size: 0.875rem;
  font-weight: 300;
}

.checkbox-label {
  display: flex;
  gap: 10px;
  grid-column: 1/4;
}

.checkbox {
  accent-color: var(--fourt-back);
  cursor: pointer;
}

.container-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 41px 83px 40px 100px;
  border-top: 1px solid var(--third-color);
  border-bottom: 1px solid var(--third-color);
  background: var(--first-back);
  position: relative;
}

.arrow {
  position: absolute;
  width: 60px;
  height: 58px;
  background-image: url('@/assets/arrowTop.svg');
  background-color: var(--accent-color);
  right: 3%;
  top: 1%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.arrow:hover {
  transform: scale(1.1)
}

.links {
  color: var(--sec-color);
  text-decoration: none;
}

.title {
  margin-bottom: 12px;
}

.subtitle-contacts {
  font-weight: 300;
  letter-spacing: 0;
  text-transform: capitalize;
}

.subtitle-contacts-accent {
  color: var(--sec-color);
  text-transform: lowercase;
}

.subtitle-contacts-accent:last-child {
  margin-bottom: 24px;
}

.block-social {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.authors {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  background: var(--first-back);
  font-size: 1rem;
  line-height: 28px;
  font-weight: 300;
}
</style>