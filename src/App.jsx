import { useState } from 'react';

const duties = [
  'разбираться в нестандартных задачах и спокойно раскладывать их по полкам;',
  'анализировать информацию и превращать ее в понятные выводы;',
  'помогать с финансовой, медийной и коммуникационной аналитикой;',
  'придумывать идеи для проектов, презентаций и неожиданных стратегических ходов;',
  'оформлять мысли так, чтобы их понял и преподаватель, и CEO;',
  'быстро учиться новому и не драматизировать при виде незнакомых терминов;',
  'искать решения там, где другие видят только дедлайн;',
  'работать с текстами, презентациями, сайтами и гипотезами;',
  'иногда делать невозможное, но без нарушения Трудового кодекса.',
];

const requirements = [
  'способность быстро обучаться и включаться в незнакомый контекст;',
  'системное мышление и любовь к аккуратным выводам;',
  'грамотная письменная речь без канцелярита и паники;',
  'интерес к бизнесу, медиа, рекламе, PR и аналитике;',
  'умение работать с информацией, отделяя сигнал от шума;',
  'базовое понимание маркетинга, коммуникаций и digital-среды;',
  'умение задавать вопросы, после которых задача становится понятнее;',
  'самостоятельность, ответственность и чувство юмора;',
  'готовность учиться в магистратуре по направлению рекламы и связей с общественностью или интерес к этой сфере.',
];

const dreamCandidate = [
  'кудрявый;',
  'зеленоглазый;',
  'рост 190 см;',
  'красивый;',
  'умеет выглядеть уверенно даже перед дедлайном;',
  'способен зайти в аудиторию и сделать вид, что все под контролем.',
];

const offers = [
  'зарплата от 300 000 ₽ на руки;',
  'задачи, после которых обычная работа кажется слишком простой;',
  'возможность расти быстрее, чем вкладка с дедлайном;',
  'гибкий формат: гибрид, удаленно или красиво появиться в нужный момент;',
  'уважение к идеям, даже если они родились в 02:17;',
  'среда, где ценят ум, стиль и способность не паниковать;',
  'проекты на стыке AI, медиа, бизнеса и коммуникаций;',
  'официальное моральное право говорить: «я делаю невозможное».',
];

const microTexts = [
  'Дедлайн не страшен, если ты страшнее',
  'Soft skills: включены',
  'Hard skills: прокачиваются',
  'AI-assisted, human-approved',
];

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
          <span className="badge">HR уже улыбается</span>
        </div>
        <p className="eyebrow">GUDOVICH.AI ищет</p>
        <h1>Человек, который делает невозможное</h1>
        <p className="hero-lead">
          Для тех, кто открывает задачу, смотрит на хаос и говорит:
          «понял, сейчас разберемся».
        </p>
        <div className="hero-meta" aria-label="Основные условия">
          <span>от 300 000 ₽ на руки</span>
          <span>гибрид / удаленно / иногда появляться красиво</span>
          <span>главное - быстро включаться</span>
        </div>
        <div className="hero-actions">
          <button className="button primary" onClick={scrollToApply}>Откликнуться</button>
          <button className="button ghost" type="button">Сохранить вакансию</button>
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

function ListCard({ title, items, variant = 'default' }) {
  return (
    <section className={`card ${variant}`}>
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
        <div><dt>Локация</dt><dd>Москва / удаленно / где красиво</dd></div>
        <div><dt>Занятость</dt><dd>Полная занятость</dd></div>
        <div><dt>Опыт</dt><dd>Можно без опыта, если быстро думаешь</dd></div>
        <div><dt>Опубликовано</dt><dd>сегодня</dd></div>
      </dl>
      <button className="button primary full" onClick={scrollToApply}>Откликнуться</button>
    </aside>
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
        <p>Расскажите, почему именно вы способны красиво войти в задачу и вывести ее к смыслу.</p>
      </div>
      <form className="apply-form" onSubmit={handleSubmit}>
        <label>
          Имя
          <input type="text" name="name" placeholder="Например, Артем" required />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label>
          Telegram
          <input type="text" name="telegram" placeholder="@username" />
        </label>
        <label>
          Ссылка на портфолио или соцсеть
          <input type="url" name="portfolio" placeholder="https://..." />
        </label>
        <label className="wide">
          Почему именно ты?
          <textarea name="why" rows="5" placeholder="Потому что дедлайн увидел меня и сам перенесся." required />
        </label>
        <div className="form-actions">
          <button className="button primary" type="submit">Отправить отклик</button>
          <a className="button ghost" href="mailto:hr@gudovich.ai">Написать на email</a>
        </div>
      </form>
      {sent && (
        <div className="success-message" role="status">
          Ваш отклик принят. HR уже восхищён.
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
        <div className="micro-strip" aria-label="Креативные детали">
          {microTexts.map((text) => <span key={text}>{text}</span>)}
        </div>
        <div className="layout">
          <div className="main-column">
            <section className="card intro-card">
              <h2>Описание вакансии</h2>
              <p>
                GUDOVICH.AI ищет не просто сотрудника. Мы ищем человека, который умеет быстро
                разбираться в новых задачах, соединять аналитику, коммуникации, креатив,
                бизнес-мышление и способность не теряться, когда никто не понимает, что происходит.
              </p>
              <p>
                Здесь ценят ясную голову, хороший текст, нормальный вопрос вовремя и редкий навык
                превращать «надо срочно» в план, презентацию, гипотезу или вежливое письмо.
              </p>
            </section>

            <ListCard title="Что предстоит делать" items={duties} />
            <ListCard title="Кого мы ищем" items={requirements} />

            <section className="card irony-card" id="requirements">
              <div className="section-heading">
                <span className="badge">очевидная ирония</span>
                <h2>Идеальный кандидат по версии HR-мечты</h2>
                <p>
                  Этот блок - часть креативной концепции вакансии, а не реальные требования к кандидату.
                </p>
              </div>
              <ul className="dream-list">
                {dreamCandidate.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <ListCard title="Что мы предлагаем" items={offers} variant="offer-card" />

            <section className="card company-card" id="company">
              <span className="badge accent">Company</span>
              <h2>О компании GUDOVICH.AI</h2>
              <p>
                GUDOVICH.AI - вымышленная креативная AI-лаборатория, где искусственный интеллект,
                медиа, бизнес-аналитика и коммуникационные стратегии встречаются за одним столом
                и пытаются выглядеть так, будто это было запланировано.
              </p>
              <p>
                Мы занимаемся нестандартными проектами, переводим хаос в понятные решения,
                собираем смысл из данных, идей и презентаций. Немного пафоса, немного самоиронии,
                много уважения к людям, которые думают.
              </p>
            </section>

            <section className="card why-card">
              <h2>Почему эта вакансия существует</h2>
              <p>
                Потому что иногда компании нужен не еще один специалист по должностной инструкции,
                а человек, который умеет думать, учиться, писать, анализировать, презентовать и
                не исчезать после слов «надо срочно».
              </p>
            </section>

            <ApplyForm />
          </div>
          <VacancySidebar />
        </div>
      </main>
      <button className="sticky-apply" onClick={scrollToApply}>Откликнуться</button>
      <footer className="footer">
        <p>GudaJoB - креативная платформа вакансий, которых пока не существует, но уже хочется откликнуться.</p>
        <p>GUDOVICH.AI © 2026 · <a href="mailto:hr@gudovich.ai">hr@gudovich.ai</a></p>
      </footer>
    </div>
  );
}

export default App;
