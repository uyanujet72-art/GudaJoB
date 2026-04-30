import { useState } from 'react';

const duties = [
  'разбираться в нестандартных задачах, даже если они пришли без инструкции и с пометкой «срочно»;',
  'превращать хаос в понятную структуру, а структуру — в действие;',
  'анализировать информацию и делать выводы, которые можно защитить без дрожи в голосе;',
  'помогать с финансовой, медийной и коммуникационной аналитикой;',
  'придумывать идеи для проектов и доводить их до формы, в которую уже хочется верить;',
  'работать с текстами, презентациями, сайтами и гипотезами;',
  'оформлять мысли так, чтобы их понял и преподаватель, и гендиректор;',
  'искать решения там, где другие видят только дедлайн;',
  'иногда делать невозможное, но без нарушения Трудового кодекса.',
];

const requirements = [
  'быстро учится и не делает вид, что всё знает заранее;',
  'умеет превращать хаос в структуру;',
  'интересуется бизнесом, медиа, PR, рекламой и аналитикой;',
  'может написать текст, который не стыдно показать преподавателю;',
  'способен мыслить как студент, предприниматель и стратег одновременно;',
  'не боится задавать вопросы, когда задача слишком загадочно улыбается;',
  'умеет доводить идею до результата;',
  'понимает, что уверенность — это навык, а не подарок с рождения;',
  'имеет чувство юмора и способность не паниковать;',
  'готов работать над собой, даже если никто не просил, но уже пора.',
];

const dreamCandidate = [
  { text: 'кудрявый;' },
  { text: 'зеленоглазый;' },
  { text: 'рост 190 см;' },
  { text: 'знак зодиака: Лев;' },
  { text: 'красивый;' },
  { text: 'выглядит уверенно даже перед самим собой;' },
  { text: 'умеет зайти в аудиторию так, будто проект уже его.', wide: true },
];

const offers = [
  'зарплата от 300 000 ₽ на руки;',
  'задачи, после которых обычная работа кажется слишком простой;',
  'возможность расти быстрее, чем вкладка с дедлайном;',
  'гибкий формат: гибрид, удалённо или красиво появиться в нужный момент;',
  <>уважение к идеям — даже если их автор родился <strong className="zodiac-accent">Девой</strong>;</>,
  'среда, где ценят ум, стиль и способность не паниковать;',
  'проекты на стыке ИИ, медиа, бизнеса и коммуникаций;',
  'официальное моральное право говорить: «я делаю невозможное».',
];

const microTexts = [
  'Дедлайн не страшен, если ты страшнее',
  'Сделано с ИИ, одобрено человеком',
  'Проект уже твой',
];

const scoringCriteria = [
  ['Потенциал', 'высокий'],
  ['Готовность начать', 'подтверждена'],
  ['Уровень паники', 'управляемый хаос'],
  ['Проект', 'уже его'],
];

const comparisonRows = [
  ['требует опыт', 'видит потенциал'],
  ['пугает обязанностями', 'даёт роль'],
  ['ищет резюме', 'ищет характер'],
  ['обещает развитие', 'провоцирует начать'],
  ['просит стрессоустойчивость', 'верит, что ты уже готов'],
];

const roleProfile = [
  { term: 'Тип роли', description: 'стратег / аналитик / человек-оркестр' },
  { term: 'Главная задача', description: 'превращать хаос в результат' },
  { term: 'Уровень самостоятельности', description: 'высокий' },
  { term: 'Уровень паники', description: 'недопустим' },
  { term: 'Потенциал роста', description: 'подозрительно высокий', wide: true },
];

const vacancyDetails = [
  ['Опыт', 'можно без опыта, если быстро думаешь'],
  ['Занятость', 'полная, особенно когда дедлайн рядом'],
  ['Формат', 'удалённо / гибрид'],
  ['Локация', 'Москва / онлайн'],
  ['Отклики', 'принимаются'],
];

const companyTags = ['ИИ', 'Медиа', 'Стратегия', 'Аналитика', 'Уверенность'];
const contactEmail = 'alexander.gudoovich@gmail.com';

function scrollToApply() {
  document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToCandidate() {
  document.querySelector('#candidate')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="GudaJoB">
        <span className="brand-mark">GJ</span>
        <span>
          <strong>GudaJoB</strong>
          <small>креативная вакансия, которая почти реальна</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Навигация">
        <a href="#vacancy">Вакансия</a>
        <a href="#candidate">Кандидат</a>
        <a href="#company">Компания</a>
        <a href="#requirements">Требования</a>
        <a href="#question">Вопрос</a>
        <a href="#apply">Откликнуться</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="vacancy">
      <div className="hero-content">
        <div className="badge-row">
          <span className="badge accent">Вакансия мечты</span>
          <span className="badge">Кандидат почти найден</span>
        </div>
        <p className="site-kicker">GudaJoB</p>
        <p className="eyebrow">GUDOVICH.AI ищет</p>
        <h1>Человек, который делает невозможное</h1>
        <p className="hero-company">GUDOVICH.AI · Карьера, но лично</p>
        <p className="hero-lead">Для тех, кто открывает задачу, видит там хаос и не уходит.</p>
        <div className="hero-note">Любить себя — тоже профессиональный навык.</div>
        <p className="hero-subline">Не просто вакансия. Это приглашение стать версией себя, которая уже не отступает.</p>
        <div className="hero-meta" aria-label="Основные условия">
          <span>от 300 000 ₽ на руки</span>
          <span>удалённо / гибрид / иногда появляться красиво</span>
          <span>можно без опыта, если быстро думаешь</span>
          <span>Москва / онлайн</span>
        </div>
        <div className="hero-actions">
          <button className="button primary" onClick={scrollToApply}>Откликнуться</button>
          <button className="button ghost" type="button" onClick={scrollToCandidate}>Посмотреть кандидата</button>
        </div>
      </div>
      <div className="hero-panel" aria-label="Кратко о вакансии">
        <h2>Кратко о вакансии</h2>
        <dl className="hero-summary">
          <div><dt>Зарплата</dt><dd>от 300 000 ₽</dd></div>
          <div><dt>Формат</dt><dd>удалённо / гибрид</dd></div>
          <div><dt>Опыт</dt><dd>можно без опыта</dd></div>
          <div><dt>Статус</dt><dd>кандидат почти найден</dd></div>
          <div><dt>Отклик</dt><dd>открыт</dd></div>
        </dl>
      </div>
    </section>
  );
}

function VacancyDetails() {
  return (
    <section className="details-card" aria-label="Параметры вакансии">
      {vacancyDetails.map(([term, description]) => (
        <div key={term} className="details-item">
          <dt>{term}</dt>
          <dd>{description}</dd>
        </div>
      ))}
    </section>
  );
}

function ListCard({ title, items, variant = 'default', id, note }) {
  return (
    <section className={`card ${variant}`} id={id}>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
      <ul className="check-list">
        {items.map((item, index) => (
          <li key={typeof item === 'string' ? item : index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function VacancySidebar() {
  return (
    <aside className="side-card" aria-label="Краткая карточка вакансии">
      <div>
        <p className="side-company">GUDOVICH.AI</p>
        <strong className="side-salary">от 300 000 ₽</strong>
        <span className="side-note">на руки</span>
      </div>
      <dl>
        <div><dt>Локация</dt><dd>Москва / удалённо</dd></div>
        <div><dt>Занятость</dt><dd>Полная занятость</dd></div>
        <div><dt>Опыт</dt><dd>Можно без опыта, если быстро думаешь</dd></div>
        <div><dt>Опубликовано</dt><dd>сегодня</dd></div>
      </dl>
      <button className="button primary full" onClick={scrollToApply}>Откликнуться</button>
    </aside>
  );
}

function CandidateParameters() {
  return (
    <section className="card candidate-card" id="candidate">
      <div className="section-heading">
        <span className="badge chosen">Кандидат уже выбран</span>
        <h2>Параметры кандидата, которого мы уже выбрали</h2>
      </div>
      <ul className="dream-list">
        {dreamCandidate.map(({ text, wide }) => (
          <li
            key={text}
            className={wide ? 'candidate-item--wide' : undefined}
          >
            {text}
          </li>
        ))}
      </ul>
      <p className="candidate-note">Эта часть вакансии не обсуждается. Иногда компания просто знает, кого ищет.</p>
    </section>
  );
}

function HrScoring() {
  return (
    <section className="card scoring-card" aria-labelledby="scoring-title">
      <div className="section-heading compact">
        <span className="badge chosen">Кандидат уже выбран</span>
        <h2 id="scoring-title">HR-скоринг совпадения</h2>
      </div>
      <div className="score-main">
        <span>Совпадение с вакансией:</span>
        <strong>99,7%</strong>
      </div>
      <div className="score-bar" aria-label="Совпадение с вакансией 99,7%">
        <span />
      </div>
      <p className="score-note">Оставшиеся 0,3% мы оставили на красивое волнение перед откликом.</p>
      <dl className="score-grid">
        {scoringCriteria.map(([term, description]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function VacancyComparison() {
  return (
    <section className="card comparison-card" aria-labelledby="comparison-title">
      <h2 id="comparison-title">Обычная вакансия / эта вакансия</h2>
      <div className="comparison-grid">
        <div className="comparison-column muted-column">
          <h3>Обычная вакансия</h3>
          <ul>
            {comparisonRows.map(([usual]) => <li key={usual}>{usual}</li>)}
          </ul>
        </div>
        <div className="comparison-column accent-column">
          <h3>Эта вакансия</h3>
          <ul>
            {comparisonRows.map(([, current]) => <li key={current}>{current}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RoleProfile() {
  return (
    <section className="card role-card" aria-labelledby="role-title">
      <div className="section-heading compact">
        <span className="badge accent">Профиль роли</span>
        <h2 id="role-title">Профиль роли</h2>
      </div>
      <p>
        Эта вакансия собрана не под должностную инструкцию. Она собрана под человека,
        который не теряется, когда задача приходит без названия, без брифа и со словами «надо вчера».
      </p>
      <dl className="role-grid">
        {roleProfile.map(({ term, description, wide }) => (
          <div key={term} className={wide ? 'role-item--wide' : undefined}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function CompanyNeeds() {
  return (
    <section className="card needs-section" aria-labelledby="needs-title">
      <div className="section-heading compact">
        <h2 id="needs-title">Как GUDOVICH.AI понимает эту роль</h2>
        <p>Не формальная должность, а способ превращать неопределённость в понятный, живой и полезный результат.</p>
      </div>
      <div className="needs-grid">
        <article className="needs-card needs-card--wide">
          <h3>Кого мы правда ищем</h3>
          <p>GUDOVICH.AI не нанимает человека «под задачу».</p>
          <p>Потому что задача часто появляется раньше, чем её успевают нормально сформулировать.</p>
          <p>Нам нужен человек, который не ждёт идеального брифа. Он умеет разобраться, задать правильные вопросы, собрать структуру, докрутить смысл и довести работу до результата.</p>
          <p>Если коротко: стратег, который умеет думать руками.</p>
        </article>
        <article className="needs-card">
          <h3>Где начинается настоящая работа</h3>
          <p>Когда приходит идея без формы — её нужно превратить в понятный план.</p>
          <p>Когда есть материал, но нет структуры — её нужно собрать.</p>
          <p>Когда дедлайн уже близко, а ясности всё ещё нет — нужно не паниковать, а включаться.</p>
          <p>Эта роль появилась именно для таких ситуаций.</p>
        </article>
        <article className="needs-card">
          <h3>Как мы поймём, что получилось</h3>
          <p>Успех здесь не измеряется количеством закрытых задач.</p>
          <p>Успех — это когда из хаоса появляется результат, который не стыдно показать.</p>
          <p>Не обязательно идеальный. Но живой, собранный, понятный и пригодный для дела.</p>
          <p>Главный признак: после слов «надо срочно» ты не исчезаешь, а начинаешь думать.</p>
        </article>
        <article className="needs-card needs-card--wide">
          <h3>Что такое GUDOVICH.AI</h3>
          <p>GUDOVICH.AI — это не классическое агентство и не стартап в стиле «мы меняем мир».</p>
          <p>Это команда, которая собирает смысл, упаковку, идеи, презентации, автоматизацию и сложные решения в понятный результат.</p>
          <p>ИИ здесь не украшение в названии. Это рабочая среда, в которой быстрее думают, быстрее проверяют гипотезы и быстрее доводят идеи до формы.</p>
          <p>Здесь ценят не шум, а способность делать сложное понятным.</p>
        </article>
      </div>
    </section>
  );
}

function WhyMatch() {
  return (
    <section className="card match-card">
      <h2>Почему это совпадение</h2>
      <p>
        GUDOVICH.AI ищет человека, который умеет превращать хаос в структуру,
        идеи — в проекты, а сомнение — в действие. Кандидат ищет не просто вакансию,
        а повод доказать себе, что он уже способен начать. Здесь эти цели встречаются.
      </p>
    </section>
  );
}

function CompanyBlock() {
  return (
    <section className="card company-card" id="company">
      <div className="section-heading">
        <span className="badge accent">О компании</span>
        <h2>О компании GUDOVICH.AI</h2>
      </div>
      <p>
        GUDOVICH.AI — это компания, которая умеет делать многое: анализировать, придумывать,
        презентовать, автоматизировать и иногда просто красиво выглядеть в названии.
        Последнее тоже важно.
      </p>
      <p>
        AI в названии появился не случайно. Мы посмотрели на рынок, поняли, что с AI всё
        звучит дороже, инвесторы улыбаются шире, а презентации становятся убедительнее.
        Поэтому AI остался.
      </p>
      <blockquote>
        Наша главная миссия — дать шанс человеку, который ещё вчера сомневался в себе.
        А сегодня уже читает эту страницу и думает: «Стоп. Это же про меня. И это точно лучше,
        чем очередная вакансия на HeadHunter».
      </blockquote>
      <p>
        Мы любим сильные идеи, смелые отклики, людей, которые не сдаются, и особенно тех,
        кто однажды понимает: любить себя — тоже профессиональный навык.
      </p>
      <div className="company-tags" aria-label="Направления компании">
        {companyTags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </section>
  );
}

function CandidateQuestion() {
  return (
    <section className="card question-card" id="question">
      <span className="badge accent">Проект уже твой</span>
      <h2>Вопрос кандидату</h2>
      <p>
        Это не тест и не ловушка. Просто вопрос для тех, кто привык отвечать честно,
        даже когда это неудобно.
      </p>
      <p className="question-accent">
        Во что большинство верит, а ты — нет? И какая твоя идея пока кажется странной,
        но однажды может стать проектом?
      </p>
      <p className="question-caption">Неправильного ответа нет. Есть честный ответ — и есть ответ, написанный, чтобы понравиться.</p>
    </section>
  );
}

function ApplyForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="card apply-card" id="apply">
      <div className="section-heading">
        <span className="badge accent">Отклик</span>
        <h2>Откликнуться</h2>
        <p>Оставьте ответ на главный вопрос — и контакты, чтобы GUDOVICH.AI знала, куда отправлять восхищение.</p>
      </div>
      <form className="apply-form" onSubmit={handleSubmit}>
        <label>
          Имя
          <input type="text" name="name" placeholder="Например, Артём" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className="apply-field--full">
          Telegram
          <input type="text" name="telegram" placeholder="@username" />
        </label>
        <label className="wide">
          Во что большинство верит, а ты — нет?
          <textarea name="why" rows="4" placeholder="Например: большинство верит, что нужно дождаться идеальной готовности. Я — нет." required />
        </label>
        <label className="wide">
          Какая твоя идея пока кажется странной, но однажды может стать проектом?
          <textarea name="project" rows="4" placeholder="Опишите идею коротко: что это, зачем она нужна и почему вы в неё верите." required />
        </label>
        <div className="form-actions">
          <button className="button primary" type="submit">Отправить отклик</button>
          <a className="button ghost" href={`mailto:${contactEmail}`}>Написать на email</a>
        </div>
      </form>
      {sent && (
        <div className="success-message" role="status">
          <strong>Ваш отклик принят. HR уже восхищён.</strong>
          <span>Осталось только не скулить и забрать проект.</span>
        </div>
      )}
    </section>
  );
}

function App() {
  return (
    <div className="app" id="top">
      <Header />
      <main>
        <Hero />
        <VacancyDetails />
        <div className="layout">
          <div className="main-column">
            <section className="card intro-card">
              <h2>Описание вакансии</h2>
              <p>Мы ищем не просто сотрудника.</p>
              <p>
                Мы ищем человека, который берёт хаос и делает из него структуру.
                Из структуры вырастает текст, из текста — презентация, а из презентации
                уже рождается проект, который хочется защищать не потому что надо,
                а потому что жалко отдавать.
              </p>
              <p>
                Эта вакансия для тех, кто учится быстрее, чем успевает смениться дедлайн.
                Кто не ждёт, пока станет удобнее, а просто берёт то, что есть, и делает нормально.
                Примечательно, что именно так чаще всего и получается лучше, чем планировалось.
              </p>
              <p>
                GUDOVICH.AI нужен человек, который уже чувствует: может больше.
                Просто ещё не было настоящего повода проверить. Мы готовы стать этим поводом.
              </p>
            </section>

            <CandidateParameters />
            <HrScoring />
            <VacancyComparison />
            <RoleProfile />
            <CompanyNeeds />
            <WhyMatch />
            <ListCard title="Что предстоит делать" items={duties} note="Коротко: превращать хаос в результат." />
            <ListCard title="Кого мы ищем" items={requirements} id="requirements" />

            <ListCard title="Что мы предлагаем" items={offers} variant="offer-card" />
            <div className="micro-strip" aria-label="Креативные детали">
              {microTexts.map((text) => <span key={text}>{text}</span>)}
            </div>

            <CompanyBlock />

            <section className="card why-card">
              <h2>Почему эта вакансия существует</h2>
              <p>
                Потому что задачи бывают без названия. Брифы без деталей.
                Дедлайны без предупреждения. И в такие моменты нужен не специалист
                по инструкции, а человек, который смотрит на всё это и говорит:
                «Не скулить. Разберёмся».
              </p>
            </section>

            <CandidateQuestion />
            <ApplyForm />
          </div>
          <VacancySidebar />
        </div>
      </main>
      <button className="sticky-apply" onClick={scrollToApply}>Откликнуться</button>
      <footer className="footer">
        <p>GudaJoB — креативная платформа вакансий, которых пока не существует, но уже хочется откликнуться.</p>
        <p>Любить себя — тоже профессиональный навык.</p>
        <p>GUDOVICH.AI © 2026 · <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
      </footer>
    </div>
  );
}

export default App;
