<template>
  <div class="container">
    <section class="hero">
      <h1 class="title-other-color">Сотрудничество</h1>
      <p class="hero-subtitle text-lg">
        Создаём изделия из натурального камня для вашего дома.
        Работаем с частными заказчиками, дизайнерами интерьера и строительными бригадами.
        Поможем подобрать материал, рассчитаем стоимость и изготовим изделие по вашим размерам.
      </p>
    </section>

    <section class="partners">
      <h2 class="section-title">С кем мы работаем</h2>
      <div class="partners-grid">
        <div
          v-for="partner in partners"
          :key="partner.title"
          class="partner-card"
        >
          <h3 class="partner-title">{{ partner.title }}</h3>
          <p class="partner-desc text-sm">{{ partner.description }}</p>
        </div>
      </div>
    </section>

    <section class="advantages">
      <h2 class="section-title">Почему выбирают нас</h2>
      <ul class="advantages-list">
        <li v-for="adv in advantages" :key="adv.title" class="advantage-item">
          <div class="advantage-number">{{ adv.number }}</div>
          <div>
            <h3 class="advantage-title">{{ adv.title }}</h3>
            <p class="advantage-desc text-sm">{{ adv.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="conditions">
      <h2 class="section-title">Как мы работаем</h2>
      <div class="conditions-grid">
        <div
          v-for="cond in conditions"
          :key="cond.title"
          class="condition-card"
        >
          <h3 class="condition-title fw500">{{ cond.title }}</h3>
          <p class="condition-desc text-sm">{{ cond.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const partners = [
      {
        title: 'Частным заказчикам',
        description: 'Столешницы, подоконники, лестницы и другие изделия для вашего дома. Прямые цены от производителя.',
      },
      {
        title: 'Дизайнерам интерьера',
        description: 'Поможем подобрать камень под ваш проект. Предоставим образцы, 3D-визуализацию и точный расчёт.',
      },
      {
        title: 'Архитекторам',
        description: 'Изготовление нестандартных изделий по чертежам. Поддержка на всех этапах — от эскиза до монтажа.',
      },
      {
        title: 'Строительным бригадам',
        description: 'Комплексные поставки камня на объект. Согласованные сроки, аккуратный монтаж.',
      },
    ]

    const advantages = [
      {
        number: '01',
        title: 'Собственное производство',
        description: 'Полный цикл — от распила до полировки. Контролируем качество на каждом этапе.'
      },
      {
        number: '02',
        title: 'Прямые поставки',
        description: 'Работаем с проверенными месторождениями. Без посредников и лишних наценок.'
      },
      {
        number: '03',
        title: 'Индивидуальный подход',
        description: 'Менеджер ведёт ваш проект от заявки до установки готового изделия.'
      },
      {
        number: '04',
        title: 'Сроки и логистика',
        description: 'Собственная доставка по РФ. Бережная упаковка и отгрузка в срок.'
      },
    ]

    const conditions = [
      {
        title: 'Замер и консультация',
        description: 'Бесплатно приедем на объект, снимем размеры и поможем с выбором камня.'
      },
      {
        title: 'Изготовление',
        description: 'Срок изготовления — от 3 до 10 рабочих дней в зависимости от сложности изделия.'
      },
      {
        title: 'Доставка и монтаж',
        description: 'Аккуратно доставим и установим изделие. Уберём за собой после монтажа.'
      },
      {
        title: 'Гарантия',
        description: 'Предоставляем гарантию на изделия и работу монтажников.'
      },
    ]

    return { partners, advantages, conditions }
  },
}
</script>

<style scoped>
.container {
  padding: 54px 99px 60px;
}

.hero {
  margin-bottom: 80px;
}
.title-other-color {
  font-size: 3rem;
  color: var(--fourt-color);
  margin-bottom: 24px;
}
.hero-subtitle {
  max-width: 900px;
  color: var(--sec-color);
  line-height: 1.6;
}


.section-title {
  font-size: 2rem;
  color: var(--fourt-color);
  margin-bottom: 32px;
}


.partners {
  margin-bottom: 80px;
}
.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.partner-card {
  background: var(--fourt-back);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.partner-title {
  font-size: 1.25rem;
  color: var(--accent-color);
  font-weight: 700;
}
.partner-desc {
  color: var(--sec-color);
  line-height: 1.5;
}


.advantages {
  margin-bottom: 80px;
}
.advantages-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  list-style: none;
  padding: 0;
}
.advantage-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.advantage-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  line-height: 1;
}
.advantage-title {
  font-size: 1.25rem;
  color: var(--fourt-color);
  margin-bottom: 8px;
}
.advantage-desc {
  color: var(--sec-color);
  line-height: 1.5;
}


.conditions {
  margin-bottom: 80px;
}
.conditions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.condition-card {
  border: 1px solid var(--six-color);
  padding: 24px;
}
.condition-card:hover {
  border: 1px solid var(--accent-color)
}
.condition-title {
  font-size: 1.2rem;
  color: var(--accent-color);
  margin-bottom: 12px;
}
.condition-desc {
  color: var(--sec-color);
  line-height: 1.5;
}


@media (max-width: 1200px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .advantages-list,
  .conditions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 32px 20px;
  }
  .partners-grid {
    grid-template-columns: 1fr;
  }
}
</style>
