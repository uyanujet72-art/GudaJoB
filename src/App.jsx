import { useState } from 'react';

const duties = [
  'разбираться в нестандартных задачах, даже если они пришли без инструкции и с пометкой «срочно»;',
  'превращать хаос в понятную структуру, а структуру — в действие;',
  'анализировать информацию и делать выводы, которые можно защитить без дрожи в голосе;',
  'помогать с финансовой, медийной и коммуникационной аналитикой;',
  'придумывать идеи для проектов и доводить их до формы, в которую уже хочется верить;',
  'работать с текстами, презентациями, сайтами и гипотезами;',
  'оформлять мысли так, чтобы их понял и преподаватель, и CEO;',
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
  'кудрявый;',
  'зеленоглазый;',
  'рост 190 см;',
  'красивый;',
  'выглядит уверенно даже перед самим собой;',
  'умеет зайти в аудиторию так, будто проект уже его.',
];

const offers = [
  'зарплата от 300 000 ₽ на руки;',
  'задачи, после которых обычная работа кажется слишком простой;',
  'возможность расти быстрее, чем вкладка с дедлайном;',
  'гибкий формат: гибрид, удалённо или красиво появиться в нужный момент;',
  'уважение к идеям, даже если их автор родился Девой;',
  'среда, где ценят ум, стиль и способность не паниковать;',
  'проекты на стыке AI, медиа, бизнеса и коммуникаций;',
  'официальное моральное право говорить: «я делаю невозможное».',
];

const microTexts = [
  'GudaJoB — вакансии, которых ещё нет, но уже хочется откликнуться',
  'Дедлайн не страшен, если ты страшнее',
  'Soft skills: включены',
  'Hard skills: прокачиваются',
  'AI-assisted, human-approved',
  'Career, but make it personal',
  'Проект уже твой',
];

const vacancyDetails = [
  ['Опыт', 'можно без опыта, если быстро думаешь'],
  ['Занятость', 'полная, особенно когда дедлайн рядом'],
  ['Формат', 'удалённо / гибрид / появляться красиво'],
  ['Локация', 'Москва, онлайн и там, где рождаются идеи'],
  ['Отклики', 'принимаются от людей, которые не боятся начать'],
];

const companyTags = ['AI', 'Media', 'Strategy', 'Analytics', 'Confidence'];
const contactEmail = 'alexander.gudoovich@gmail.com';

function scrollToApply() {
  document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="GudaJoB">
        <span className="brand-mark">GJ</span>
        <span>
          <strong>GudaJoB</strong>
          <small>место, где невозможное становится вакансией</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Навигация">
        <a href="#vacancy">Вакансия</a>
        <a href="#company">Компания</a>
        <a href="#requirements">Требования</a>
        <a href="#question">Вопрос</a>
        <a href="#apply">Откликнуться</a>
      </nav>
    </header>
  );
}

function Hero() {
  const [saved, setSaved] = useState(false);

  return (
    <section className="hero" id="vacancy">
      <div className="hero-content">
        <div className="badge-row">
          <span className="badge accent">Вакансия мечты</span>
          <span className="badge">HR уже улыбается</span>
          <span className="badge">AI-assisted, human-approved</span>
        </div>
        <p className="eyebrow">GUDOVICH.AI ищет</p>
        <h1>Человек, который делает невозможное</h1>
        <p className="hero-company">GUDOVICH.AI · Career, but make it personal</p>
        <p className="hero-lead">Для тех, кто открывает хаос, смотрит на дедлайн и спокойно говорит: «Не скулить. Разберёмся».</p>
        <div className="hero-note">Любить себя — тоже профессиональный навык.</div>
        <p className="hero-subline">Не просто вакансия. Это приглашение стать версией себя, которая уже не отступает.</p>
        <div className="hero-meta" aria-label="Основные условия">
          <span>от 300 000 ₽ на руки</span>
          <span>удалённо / гибрид / иногда появляться красиво</span>
          <span>можно без опыта, если быстро думаешь</span>
        </div>
        <div className="hero-actions">
          <button className="button primary" onClick={scrollToApply}>Откликнуться</button>
          <button className="button ghost" type="button" onClick={() => setSaved(true)}>
            {saved ? 'Вакансия сохранена' : 'Сохранить вакансию'}
          </button>
        </div>
      </div>
      <div className="hero-panel" aria-label="Кратко о вакансии">
        <div className="orbit-card">
          <span className="panel-label">Mission status</span>
          <strong>impossible, but paid</strong>
          <p>Вакансия проверена внутренним чувством прекрасного</p>
        </div>
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

function ListCard({ title, items, variant = 'default', id }) {
  return (
    <section className={`card ${variant}`} id={id}>
      <h2>{title}</h2>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
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
      </div>
      <dl>
        <div><dt>Локация</dt><dd>Москва / удалённо / где красиво</dd></div>
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
    <section className="card candidate-card" id="candidate-parameters">
      <div className="section-heading">
        <span className="badge dark">already chosen</span>
        <h2>Параметры кандидата, которого мы уже выбрали</h2>
      </div>
      <ul className="dream-list">
        {dreamCandidate.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <p className="candidate-note">Эта часть вакансии не обсуждается. Иногда компания просто знает, кого ищет.</p>
    </section>
  );
}

function CompanyBlock() {
  return (
    <section className="card company-card" id="company">
      <div className="section-heading">
        <span className="badge accent">About GUDOVICH.AI</span>
        <h2>О компании GUDOVICH.AI</h2>
      </div>
      <p>
        GUDOVICH.AI — это компания, которая делает всё: анализирует, придумывает,
        презентует, автоматизирует, вдохновляет и иногда просто красиво выглядит в названии.
      </p>
      <p>
        AI в названии появился не случайно. Мы посмотрели на рынок, поняли, что с AI всё
        звучит дороже, инвесторы улыбаются шире, а презентации становятся убедительнее.
        Поэтому AI остался.
      </p>
      <blockquote>
        Наша главная миссия — дать шанс человеку, который ещё вчера сомневался, а сегодня уже
        открывает вакансию на 300 000 ₽ и думает: «А почему бы и нет? Это всё равно гораздо лучше, чем обычная вакансия на HeadHunter».
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
        Представь, что эту вакансию написал твой будущий ты. Что ты ответишь прошлому себе,
        чтобы доказать: ты уже стал человеком, который делает невозможное?
      </p>
      <p className="question-accent">
        Что ты готов сделать сегодня, чтобы однажды зайти в аудиторию так, будто проект уже твой?
      </p>
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
        <span className="badge accent">Apply</span>
        <h2>Откликнуться</h2>
        <p>Расскажите, почему именно вы способны войти в хаос и выйти оттуда с проектом.</p>
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
        <label>
          Telegram
          <input type="text" name="telegram" placeholder="@username" />
        </label>
        <label className="wide">
          Почему именно ты?
          <textarea name="why" rows="4" placeholder="Потому что я уже учусь быть человеком, который не исчезает после слова «срочно»." required />
        </label>
        <label className="wide">
          Что ты готов сделать, чтобы проект стал твоим?
          <textarea name="project" rows="4" placeholder="Например: разобраться, написать, защитить, улучшить и не скулить." required />
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
        <div className="micro-strip" aria-label="Креативные детали">
          {microTexts.map((text) => <span key={text}>{text}</span>)}
        </div>
        <div className="layout">
          <div className="main-column">
            <section className="card intro-card">
              <h2>Описание вакансии</h2>
              <p>
                Мы ищем не просто сотрудника. Мы ищем человека, который открывает задачу,
                смотрит на хаос и говорит: «Не скулить. Разберёмся».
              </p>
              <p>
                Эта вакансия для того, кто умеет учиться быстрее, чем меняется дедлайн. Для того,
                кто может превратить странную идею в структуру, структуру — в текст, текст — в
                презентацию, а презентацию — в проект, который уже хочется защищать.
              </p>
              <p>
                GUDOVICH.AI нужен человек, который пока, возможно, сам не до конца понял,
                насколько он способен. Но уже подозрительно хорошо подходит на роль того,
                кто делает невозможное.
              </p>
            </section>

            <ListCard title="Что предстоит делать" items={duties} />
            <ListCard title="Кого мы ищем" items={requirements} id="requirements" />
            <CandidateParameters />

            <ListCard title="Что мы предлагаем" items={offers} variant="offer-card" />

            <CompanyBlock />

            <section className="card why-card">
              <h2>Почему эта вакансия существует</h2>
              <p>
                Потому что иногда компании нужен не просто специалист по должностной инструкции,
                а человек, который умеет думать, писать, анализировать, презентовать, учиться и
                не исчезать после слов: «Надо срочно».
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
