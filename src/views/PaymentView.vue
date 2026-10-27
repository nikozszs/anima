<template>
  <div class="container">
    <section class="hero">
      <h1 class="title-other-color">Оплата и доставка</h1>
      <p class="hero-subtitle text-lg">
        Мы делаем процесс покупки изделий из натурального камня максимально простым и прозрачным.
        Рассчитайте стоимость доставки и выберите удобный способ оплаты.
      </p>
    </section>

    <!-- ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР -->
    <section class="calculator">
      <h2 class="section-title">Рассчитать доставку</h2>
      <div class="calc-box">
        <div class="calc-row">
          <label class="calc-label">Ваш город:</label>
          <select v-model="selectedCity" class="calc-input">
            <option value="moscow">Москва</option>
            <option value="spb">Санкт-Петербург</option>
            <option value="other">Другой город (ТК)</option>
          </select>
        </div>
        <div class="calc-row">
          <label class="calc-label">Вес изделия (кг):</label>
          <input type="number" v-model="weight" min="1" max="1000" class="calc-input" />
        </div>

        <div class="calc-result">
          <p><strong>Стоимость доставки:</strong> {{ deliveryCost }} ₽</p>
          <p><strong>Срок:</strong> {{ deliveryTime }}</p>
          <p v-if="selectedCity === 'other'" class="text-sm text-gray">
            * Точная стоимость рассчитывается менеджером после уточнения габаритов.
          </p>
        </div>
      </div>
    </section>

    <section class="payment">
      <h2 class="section-title">Способы оплаты</h2>
      <div class="payment-grid">
        <div
          v-for="method in paymentMethods"
          :key="method.title"
          class="info-card"
        >
          <h3 class="card-title">{{ method.title }}</h3>
          <p class="card-desc text-sm">{{ method.description }}</p>
        </div>
      </div>
    </section>

    <!-- НОВЫЙ БЛОК: ВОЗВРАТ И ОБМЕН -->
    <section class="returns">
      <h2 class="section-title">Возврат и обмен</h2>

      <div class="returns-intro">
        <p class="text-base" style="margin-bottom: 24px; color: var(--fourt-color);">
          Мы уверены в качестве наших изделий, но если что-то пошло не так, вы всегда можете вернуть товар или обменять его. Мы работаем в строгом соответствии с Законом РФ «О защите прав потребителей».
        </p>
      </div>

      <div class="returns-grid">
        <div class="return-card">
          <h3 class="card-title">Товар надлежащего качества</h3>
          <ul class="return-list text-sm">
            <li>Вернуть или обменять изделие можно в течение <strong>14 дней</strong> с момента получения.</li>
            <li>Товар не должен быть в употреблении, сохранены его товарный вид, потребительские свойства и упаковка.</li>
            <li>Обязательно наличие чека или иного документа, подтверждающего покупку.</li>
            <li>Возврат денежных средств осуществляется в течение 10 дней после получения заявления.</li>
          </ul>
        </div>

        <div class="return-card">
          <h3 class="card-title">Товар с дефектом (Брак)</h3>
          <ul class="return-list text-sm">
            <li>Если вы обнаружили производственный дефект, мы бесплатно устраним его, заменим товар или вернем деньги.</li>
            <li>Срок обращения по гарантии — <strong>12 месяцев</strong> с момента покупки.</li>
            <li>Стоимость доставки бракованного товара берем на себя.</li>
          </ul>
        </div>

        <div class="return-card">
          <h3 class="card-title">Изделия по индивидуальному заказу</h3>
          <ul class="return-list text-sm">
            <li>Возврат изделий, изготовленных по индивидуальным размерам (например, столешницы сложной формы), <strong>не предусмотрен</strong>.</li>
            <li>Исключение составляют случаи, когда мы нарушили согласованные размеры или характеристики камня.</li>
            <li>Перед запуском в производство мы всегда согласовываем с вами чертежи и эскизы.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- КНОПКА ИМИТАЦИИ ОПЛАТЫ -->
    <section class="cta-section">
      <h2 class="section-title">Готовы оформить заказ?</h2>
      <p class="text-sm text-gray" style="margin-bottom: 20px;">
        Нажмите кнопку ниже, чтобы перейти к оформлению. (В демо-версии откроется заглушка).
      </p>
      <AppButton
        text="Перейти к оформлению"
        color="submit"
        @click="openMockPayment"
      />
    </section>

    <section class="conditions">
      <h2 class="section-title">Важные детали</h2>
      <div class="conditions-grid">
        <div
          v-for="cond in importantDetails"
          :key="cond.title"
          class="condition-card"
        >
          <h3 class="condition-title fw500">{{ cond.title }}</h3>
          <p class="condition-desc text-sm">{{ cond.description }}</p>
        </div>
      </div>
    </section>

    <!-- МОДАЛЬНОЕ ОКНО ЗАГЛУШКИ ОПЛАТЫ -->
    <div v-if="isPaymentModalOpen" class="modal-overlay" @click.self="isPaymentModalOpen = false">
      <div class="modal-content">
        <h3 class="modal-title">Демо-версия оплаты</h3>
        <p class="modal-text">
          Это пет-проект. Здесь будет подключен виджет платежной системы (например, ЮKassa или Tinkoff).
        </p>
        <p class="modal-text text-sm text-gray">
          В реальном проекте здесь откроется форма ввода данных карты или выбор способа оплаты (СБП, Карта, SberPay).
        </p>
        <div class="modal-actions">
          <AppButton text="Понятно" color="primary" @click="isPaymentModalOpen = false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'

export default {
  components: { AppButton },
  setup() {
    // --- Логика калькулятора ---
    const selectedCity = ref('moscow')
    const weight = ref(50)

    const deliveryCost = computed(() => {
      if (selectedCity.value === 'moscow') return 1500 + weight.value * 10
      if (selectedCity.value === 'spb') return 2500 + weight.value * 15
      return 'Индивидуально'
    })

    const deliveryTime = computed(() => {
      if (selectedCity.value === 'moscow') return '1-2 рабочих дня'
      if (selectedCity.value === 'spb') return '2-3 рабочих дня'
      return '3-7 рабочих дней'
    })

    // --- Статические данные ---
    const paymentMethods = [
      {
        title: 'Наличными',
        description: 'Оплата при получении товара или после завершения монтажа. Выдаем чек.'
      },
      {
        title: 'Банковской картой',
        description: 'Онлайн-оплата на сайте или терминалом в офисе. Принимаем карты Мир, Visa, Mastercard.'
      },
      {
        title: 'По счету (для юр. лиц)',
        description: 'Выставим счет на оплату, предоставим все закрывающие документы (УПД, акты).'
      },
      {
        title: 'Рассрочка',
        description: 'Возможна рассрочка для крупных заказов (лестницы, комплексные проекты). Уточняйте у менеджера.'
      },
    ]

    const importantDetails = [
      {
        title: 'Бережная упаковка',
        description: 'Изделия из камня — хрупкий груз. Используем деревянные обрешетки и защитную пленку.'
      },
      {
        title: 'Сроки изготовления',
        description: 'Стандартный срок — от 3 до 10 рабочих дней. Точная дата зависит от сложности изделия.'
      },
      {
        title: 'Подъем на этаж',
        description: 'Если в доме нет грузового лифта, подъем осуществляется за дополнительную плату.'
      },
      {
        title: 'Гарантия и документы',
        description: 'Предоставляем гарантийный талон и все необходимые документы. Гарантия на изделия — 12 месяцев.'
      },
    ]

    // --- Логика модального окна ---
    const isPaymentModalOpen = ref(false)
    const openMockPayment = () => {
      isPaymentModalOpen.value = true
    }

    return {
      selectedCity,
      weight,
      deliveryCost,
      deliveryTime,
      paymentMethods,
      importantDetails,
      isPaymentModalOpen,
      openMockPayment
    }
  },
}
</script>

<style scoped>
.container {
  padding: 54px 99px 60px;
}

/* Hero */
.hero { margin-bottom: 60px; }
.title-other-color { font-size: 3rem; color: var(--fourt-color); margin-bottom: 24px; }
.hero-subtitle { max-width: 900px; color: var(--sec-color); line-height: 1.6; }

/* Общее */
.section-title { font-size: 2rem; color: var(--fourt-color); margin-bottom: 32px; }
.text-gray { color: var(--five-color); }

/* Калькулятор */
.calculator { margin-bottom: 80px; }
.calc-box {
  background: var(--fourt-back);
  padding: 32px;
  border-radius: 8px;
  max-width: 600px;
}
.calc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.calc-label { font-weight: 500; color: var(--fourt-color); }
.calc-input {
  padding: 10px 14px;
  border: 1px solid var(--six-color);
  border-radius: 4px;
  width: 250px;
  font-family: inherit;
  font-size: 1rem;
  outline: none;
}
.calc-input:focus { border-color: var(--accent-color); }
.calc-result {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--six-color);
  color: var(--fourt-color);
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Способы оплаты */
.payment { margin-bottom: 80px; }
.payment-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.info-card {
  background: var(--fourt-back);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.card-title { font-size: 1.25rem; color: var(--accent-color); font-weight: 700; margin-bottom: 12px;}
.card-desc { color: var(--sec-color); line-height: 1.5; }

/* Блок Возврата */
.returns { margin-bottom: 80px; }
.returns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.return-card {
  border: 1px solid var(--six-color);
  padding: 24px;
}
.return-list {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--sec-color);
  line-height: 1.6;
}
.return-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
}
.return-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent-color);
  font-weight: bold;
}

/* CTA Блок */
.cta-section { margin-bottom: 80px; }

/* Важные детали */
.conditions { margin-bottom: 80px; }
.conditions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.condition-card {
  border: 1px solid var(--six-color);
  padding: 24px;
}
.condition-title { font-size: 1.2rem; color: var(--accent-color); margin-bottom: 12px; }
.condition-desc { color: var(--sec-color); line-height: 1.5; }

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}
.modal-content {
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}
.modal-title { font-size: 1.5rem; color: var(--fourt-color); margin-bottom: 16px; }
.modal-text { color: var(--fourt-color); margin-bottom: 12px; line-height: 1.5; }
.modal-actions { margin-top: 24px; display: flex; justify-content: center; }

/* Адаптив */
@media (max-width: 1200px) {
  .payment-grid { grid-template-columns: repeat(2, 1fr); }
  .returns-grid { grid-template-columns: 1fr; }
  .conditions-grid { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .container { padding: 32px 20px; }
  .payment-grid { grid-template-columns: 1fr; }
  .calc-row { flex-direction: column; align-items: flex-start; gap: 10px; }
  .calc-input { width: 100%; }
  .modal-content { padding: 24px; }
}
</style>