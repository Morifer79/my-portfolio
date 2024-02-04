const allLangs = ['en', 'ua', 'ru'];
let currentLang = localStorage.getItem('language') || checkBrowserLang() || 'en';

const langButtons = document.querySelectorAll("[data-btn]");
const currentPathName = window.location.pathname;
let currentText = {};

const homeTexts = {
  "home-page-title": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "home-header-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "home-header-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "home-header-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "home-header-documents": {
    en: "Documents",
    ua: "Документи",
    ru: "Документы",
  },
  "home-header-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
  "home-uptext": {
    en: "WELCOME!",
    ua: "Ласкаво просимо!",
    ru: "Добро пожаловать!",
  },
  "home-subtext": {
    en: "Each time we leave the house, we return to it differently.",
    ua: "Кожного разу залишая дім, ми повертаємося в нього вже іншими.",
    ru: "Каждый раз покидая дом, мы возвращаемся в него уже другими.",
  },
  "home-sectitle": {
    en: "WHO AM I",
    ua: "ХТО Я ТАКИЙ",
    ru: "КТО Я ТАКОЙ",
  },
  "home-p1": {
    en: "At one time everyone has asked this question and everyone has found their answers... It is not surprising that one of the commands that outputs the user's name sounds the same way. You will agree that everything is simpler and unambiguous here. I won't make it any more complicated than that either.",
    ua: "Колись кожен задавався цим питанням і кожен знаходив свої відповіді... Не дивно, що одна з команд, яка виводить ім'я користувача, звучить так само. Погодьтеся, що тут все простіше і однозначніше. Не стану ускладнювати й тут.",
    ru: "В свое время каждый задавался этим вопросом и каждый находил на него свой ответ... Неудивительно, что одна из команд, выводящая имя пользователя, звучит точно так же. Согласитесь, здесь все проще и однозначнее. Не стану усложнять и здесь.",
  },
  "home-p2": {
    en: "I am Hennadii Laktionov from Ukraine. Before the war, I wrote poems and stories, went on hikes, studied languages, and was fond of African and Asian cultures. Half of his life worked in supply. But, as Shakespeare wrote, 'Nothing lasts forever under the moon...'. Losing a job is probably the least of the possible losses, but it is enough incentive for new beginnings. For me, it became the direction of IT. I would be lying if I said that I had not touched it before, but in such a context and so professionally - not. Thus, in January 2024 I finished the course and received a certificate of Fullstack developer. I don't know how my fate will develop further, whether it will be a trench or an office chair, but at the moment I decided to create this site, where I will present my work during the period of training. Usually, the portfolio exhibits their exemplary works, I will provide it as it is... many points are controversial, but were interpreted by the terms of technical tasks and layouts because there is...",
    ua: "Я - Геннадій Лактіонов з України. До війни я писав вірші та оповідання, ходив у походи, вивчав мови, захоплювався африканською та азіатською культурами. Половину свого життя пропрацював у постачанні. Але, як писав Шекспір, 'Ніщо не вічне під місяцем...'. Втрата роботи - це, мабуть, найменша з можливих втрат, але й вона є достатнім стимулом для нових починань. Для мене таким початком став напрямок IT. Я збрешу, якщо скажу, що не торкався його раніше, але в такому контексті й так професійно - ні. Таким чином, у січні 2024 року я закінчив курс і отримав сертифікат Fullstack-розробника. Не знаю, як складеться моя доля далі, чи буде це траншея окопу, чи офісне крісло, але наразі я вирішив створити цей сайт, на якому я викладатиму свої роботи за час навчання. Зазвичай у портфоліо виставляють свої зразкові роботи, я ж надам все як є... багато моментів спірні, але трактувалися з точки зору технічних завдань і макетів, тому що є...",
    ru: "Я - Геннадий Лактионов из Украины. До войны я писал стихи и рассказы, ходил в походы, изучал языки, увлекался африканской и азиатской культурами. Половину своей жизни проработал в снабжении. Но, как писал Шекспир, 'Ничто не вечно под луной...'. Потеря работы - это, пожалуй, наименьшая из возможных потерь, но и она является достаточным стимулом для новых начинаний. Для меня таким началом стало направление IT. Я совру, если скажу, что не касался его раньше, но в таком контексте и так профессионально - нет. Таким образом, в январе 2024 года я закончил курс и получил сертификат Fullstack-разработчика. Не знаю, как сложится моя судьба дальше, будет ли это траншея окопа или офисное кресло, но на данный момент я решил создать этот сайт, на котором я буду выкладывать свои работы за время обучения. Обычно в портфолио выставляют свои образцовые работы, я же предоставлю все как есть... многие моменты спорные, но трактовались с точки зрения технических заданий и макетов, поэтому как есть...",
  },
  "home-p3": {
    en: "Once again, welcome, and if you are here, then everything is not in vain. Peace be with you!",
    ua: "Ще раз ласкаво просимо, і якщо ви тут, значить все не даремно. Мир вам!",
    ru: "Еще раз добро пожаловать, и если вы здесь, значит все не напрасно. Мир вам!",
  },
  "home-footer-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "home-footer-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "home-footer-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "home-footer-documents": {
    en: "Documents",
    ua: "Документи",
    ru: "Документы",
  },
  "home-footer-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
};

const portfolioTexts = {
  "portfolio-page-title": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "portfolio-header-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "portfolio-header-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "portfolio-header-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "portfolio-header-documents": {
    en: "Documents",
    ua: "Документи",
    ru: "Документы",
  },
  "portfolio-header-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
  "portfolio-subtext": {
    en: "Our lives are unique works of art made up of moments, decisions, and interactions. We are the artists of our destiny, weaving the colors of joy, the shadows of adversity, and the shades of our emotions. Every choice, every step is a stroke on the canvas of our existence. The creation of our lives depends on how we combine experience, love, and the desire for growth. Let each day be a new opportunity to add colors and shapes to this unique artistic process we call life.",
    ua: "Наше життя - це унікальний витвір мистецтва, що складається з моментів, рішень і взаємодій. Ми самі творимо свою долю, переплітаючи фарби радості, тіні негараздів і відтінки наших емоцій. Кожен вибір, кожен крок - це мазок на полотні нашого існування. Творіння нашого життя залежить від того, як ми поєднуємо досвід, любов і прагнення до розвитку. Нехай кожен день буде новою можливістю додати фарб і форм у цей унікальний художній процес, який ми називаємо життям.",
    ru: "Наша жизнь - это уникальное произведение искусства, состоящее из моментов, решений и взаимодействий. Мы сами творим свою судьбу, переплетая краски радости, тени невзгод и оттенки наших эмоций. Каждый выбор, каждый шаг - это мазок на холсте нашего существования. Творение нашей жизни зависит от того, как мы сочетаем опыт, любовь и стремление к развитию. Пусть каждый день будет новой возможностью добавить красок и форм в этот уникальный художественный процесс, который мы называем жизнью.",
  },
  "car-rental": {
    en: "In today's society, mobility is a key need, requiring one to move quickly and conveniently to fulfill responsibilities, study, work, or other personal needs.",
    ua: "У сучасному суспільстві мобільність є ключовою потребою, що вимагає швидко і зручно переміщатися для виконання обов'язків, навчання, роботи або задоволення інших особистих потреб.",
    ru: "В современном обществе мобильность является ключевой потребностью, требующей быстро и удобно перемещаться для выполнения обязанностей, учебы, работы или удовлетворения других личных потребностей.",
  },
  "phonebook": {
    en: "Paradoxically, progress is a visible step forward and an invisible step back. For example, having lost the Internet tomorrow, the day after tomorrow modern man will be very vulnerable, because there is no need to know, to know, or to remember... But today is today, which means that even a banal phone book of contacts eliminates the need to keep this information in your head.",
    ua: "Парадоксально, але прогрес - це видимий крок уперед і невидимий крок назад. Наприклад, втративши інтернет завтра, вже післязавтра сучасна людина стане вельми вразливою, адже не було потреби знати, вміти, пам'ятати... Але сьогодні - сьогодні, а це означає, що навіть банальна телефонна книга контактів позбавляє потреби тримати цю інформацію в голові.",
    ru: "Парадоксально, но прогресс - это видимый шаг вперёд и невидимый шаг назад. К примеру, потеряв интернет завтра, уже послезавтра современный человек станет весьма уязвим, ведь не было нужды знать, уметь, помнить... Но сегодня - сегодня, а это значит, что даже банальная телефонная книга контактов избавляет от нужды держать эту информацию в голове.",
  },
  "movie-search": {
    en: "Movie Search is the place where you can find interesting materials about movies, TV series, anime, and cartoons. We follow all major events in the world of cinema and provide you with the most up-to-date information.",
    ua: "Фільмотека - це місце, де ви можете знайти цікаві матеріали про фільми, серіали, аніме та мультфільми. Ми стежимо за всіма головними подіями у світі кіно і надаємо вам найсвіжішу інформацію.",
    ru: "Фильмотека - это место, где вы можете найти интересные материалы о фильмах, сериалах, аниме и мультфильмах. Мы следим за всеми главными событиями в мире кино и предоставляем вам самую свежую информацию.",
  },
  "feedback": {
    en: "Implementation of a feedback form with total count and percentage calculation. Everyone knows that reviews shape public opinion. They become a compass in a sea of choices, a clue in a maze of products and services. In a world where every click is like an invisible knock on the door of a virtual store, reviews act as a message to an unknowing friend. They create a link between experience and expectation, making every decision an informed and conscious step.",
    ua: "Реалізація форми відгуків із підрахунком загальної кількості та відсотків. Усім відомо, що відгуки формують громадську думку. Вони стають компасом у морі вибору, підказкою в лабіринті товарів і послуг. У світі, де кожен клік схожий на невидимий стукіт у двері віртуального магазину, відгуки діють як послання невідомому другу. Вони створюють зв'язок між досвідом та очікуваннями, роблячи кожне рішення усвідомленим і зваженим кроком.",
    ru: "Реализация формы отзывов с подсчетом общего количества и процентов. Всем известно, что отзывы формируют общественное мнение. Они становятся компасом в море выбора, подсказкой в лабиринте товаров и услуг. В мире, где каждый клик похож на невидимый стук в дверь виртуального магазина, отзывы действуют как послание неизвестному другу. Они создают связь между опытом и ожиданиями, делая каждое решение осознанным и взвешенным шагом.",
  },
  "r-image-search": {
    en: "Visual content enrichment, creating eye-catching content, illustrating ideas, finding images for projects, presentations, or social media - all of these periodically prompt a dip into the internet. The proposed site is a good helper in this...",
    ua: "Візуальне збагачення контенту, створення привабливого змісту, ілюстрування ідей, пошук зображень для проєктів, презентацій чи соціальних мереж - усе це періодично змушує занурюватися в інтернет. Пропонований сайт - гарний помічник у цьому...",
    ru: "Визуальное обогащение контента, создание привлекательного содержания, иллюстрирование идей, поиск изображений для проектов, презентаций или социальных сетей - все это периодически заставляет погружаться в интернет. Предлагаемый сайт - хороший помощник в этом...",
  },
  "bookshelf": {
    en: "The web app is designed for book shopping and allows the user to search for books by category and sort purchases into a shopping cart. There is also an opportunity to switch to one of three trading platforms on this topic. We are the books we love... A person needs different books in different periods of life, so as they change, they look for answers in books that help them realize themselves at a new stage of life.",
    ua: "Веб-додаток призначений для книжкових покупок і дає змогу користувачеві шукати книжки за категоріями та сортувати покупки в кошик. Також є можливість перейти на один із трьох торговельних майданчиків за цією тематикою. Ми - це книги, які ми любимо... У різні періоди життя людині потрібні різні книжки, тому, змінюючись, вона шукає відповіді в книжках, які допомагають їй реалізувати себе на новому етапі життя.",
    ru: "Веб-приложение предназначено для книжных покупок и позволяет пользователю искать книги по категориям и сортировать покупки в корзину. Также есть возможность перейти на одну из трех торговых площадок по данной тематике. Мы - это книги, которые мы любим... В разные периоды жизни человеку нужны разные книги, поэтому, меняясь, он ищет ответы в книгах, которые помогают ему реализовать себя на новом этапе жизни.",
  },
  "image-search": {
    en: "A versatile visual information retrieval tool for everyday life, work and entertainment.",
    ua: "Універсальний інструмент пошуку візуальної інформації для повсякденного життя, роботи та розваг.",
    ru: "Универсальный инструмент поиска визуальной информации в повседневной жизни, работе и развлечениях.",
  },
  "cat-breed": {
    en: "Interest in cats can arise from a love of animals, a need to choose a suitable pet, participation in shows, or simply admiration for the aesthetics and beauty of different breeds. This site allows you to learn more about it...",
    ua: "Інтерес до кішок може виникнути через любов до тварин, необхідність вибрати підходящого улюбленця, участь у виставках або просто захоплення естетикою і красою різних порід. На цьому сайті ви зможете дізнатися більше про це...",
    ru: "Интерес к кошкам может возникнуть из-за любви к животным, необходимости выбрать подходящего питомца, участия в выставках или просто восхищения эстетикой и красотой разных пород. На этом сайте вы сможете узнать больше об этом...",
  },
  "watch-spot": {
    en: "Acquiring a watch is a great reason to emphasize your good taste and style for a man, an opportunity to complement an impeccable outfit and show well-groomed hands for a woman, and a chance to be known as a little fashionista for a child.",
    ua: "Придбання годинника - це чудовий привід підкреслити свій гарний смак і стиль для чоловіка, можливість доповнити бездоганне вбрання і продемонструвати доглянуті руки для жінки, а також шанс уславитися маленьким модником для дитини.",
    ru: "Приобретение часов - это отличный повод подчеркнуть свой хороший вкус и стиль для мужчины, возможность дополнить безупречный наряд и продемонстрировать ухоженные руки для женщины, а также шанс прослыть маленьким модником для ребенка.",
  },
  "web-studio": {
    en: "First work on adaptive layout. Website of a web studio creating internet applications with innovative design and advanced development.This is where your ideas become reality.",
    ua: "Перша робота над адаптивною версткою. Сайт веб-студії, що створює інтернет-додатки з інноваційним дизайном і передовою розробкою. Тут ваші ідеї стають реальністю.",
    ru: "Первая работа над адаптивной версткой. Сайт веб-студии, создающей интернет-приложения с инновационным дизайном и передовой разработкой. Здесь ваши идеи становятся реальностью.",
  },
  "mavi-ai": {
    en: "First attempt at creating a voice assistant for its own purposes.",
    ua: "Перша спроба створити голосового помічника для власних цілей.",
    ru: "Первая попытка создать голосового помощника для собственных целей.",
  },
  "portfolio-footer-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "portfolio-footer-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "portfolio-footer-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "portfolio-footer-documents": {
    en: "Documents",
    ua: "Документи",
    ru: "Документы",
  },
  "portfolio-footer-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
};

const galleryTexts = {
  "gallery-page-title": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "gallery-header-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "gallery-header-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "gallery-header-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "gallery-header-documents": {
    en: "Documents",
    ua: "Документи",
    ru: "Документы",
  },
  "gallery-header-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
};

const documentsTexts = {
  "documents-page-title": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
  "documents-header-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "documents-header-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "documents-header-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "documents-header-documents": {
    en: "Documents",
    ua: "Документи",
    ru: "Документы",
  },
  "documents-header-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
  "documents-subtext": {
    en: "Not everything is as it seems, but we are who we are. Sometimes, we seek witnesses to our lives, and at times, we become witnesses for others.",
    ua: "Усе не те, чим здається, але ми такі, які є, й іноді ми шукаємо свідків свого життя, а іноді стаємо ними для інших.",
    ru: "Всё не то, чем кажется, но мы такие, какие есть, и иногда мы ищем свидетелей своей жизни, а иногда становимся ими для других.",
  },
  "documents-footer-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "documents-footer-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "documents-footer-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "documents-footer-documents": {
    en: "Documents",
    ua: "Документи",
    ru: "Документы",
  },
  "documents-footer-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
};

const contactsTexts = {
  "contacts-page-title": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
  "contacts-header-home": {
    en: "Home",
    ua: "Головна",
    ru: "Главная",
  },
  "contacts-header-portfolio": {
    en: "Portfolio",
    ua: "Портфоліо",
    ru: "Портфолио",
  },
  "contacts-header-gallery": {
    en: "Gallery",
    ua: "Галерея",
    ru: "Галерея",
  },
  "contacts-header-contacts": {
    en: "Contacts",
    ua: "Контакти",
    ru: "Контакты",
  },
  "contacts-subtext": {
    en: "Communication is an integral part of our daily lives, allowing us to express our thoughts, share our emotions, and connect with others. At certain times in our lives, we especially feel the need to communicate, whether it is for support, the joy of conversation or simply to share our experiences. Interacting with others enriches our relationships, fosters understanding of differences, and creates space for mutual support and inspiration. Communication is thus a key element of human life, benefiting both our emotional well-being and society as a whole.",
    ua: "Спілкування - невід'ємна частина нашого повсякденного життя, що дає нам змогу висловлювати свої думки та ділитися емоціями. У певні моменти життя ми відчуваємо потребу в спілкуванні, чи то підтримка, чи то радість спілкування, чи то просто бажання поділитися своїм досвідом. Спілкування з іншими людьми збагачує наші стосунки, сприяє розумінню відмінностей і створює простір для взаємної підтримки та натхнення. Таким чином, спілкування є ключовим елементом нашого життя, що приносить користь як нашому емоційному благополуччю, так і суспільству загалом.",
    ru: "Общение - неотъемлемая часть нашей повседневной жизни, позволяющая нам выражать свои мысли и делиться эмоциями. В определенные моменты жизни мы чувствуем потребность в общении, будь то поддержка, радость общения или просто желание поделиться своим опытом. Общение с другими людьми обогащает наши отношения, способствует пониманию различий и создает пространство для взаимной поддержки и вдохновения. Таким образом, общение является ключевым элементом нашей жизни, приносящим пользу как нашему эмоциональному благополучию, так и обществу в целом.",
  },
  "contacts-footer-text": {
    en: "Thank you for visiting my space - come back again...",
    ua: "Дякую, що завітали до мого простору - повертайтеся знову...",
    ru: "Спасибо, что посетили мое пространство - возвращайтесь снова...",
  },
};

function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentText = homeTexts;
      break;
    case "/portfolio.html":
      currentText = portfolioTexts;
      break;
    case "/gallery.html":
      currentText = galleryTexts;
      break;
    case "/documents.html":
      currentText = documentsTexts;
      break;
    case "/contacts.html":
      currentText = contactsTexts;
      break;
    default:
      currentText = homeTexts;
      break;
  }
}
checkPagePathName();

function changeLang() {
  for (const key in currentText) {
    const el = document.querySelector(`[data-lang=${key}]`);
    if (el) {
      el.textContent = currentText[key][currentLang];
    }
  }
}
changeLang();

langButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    currentLang = e.target.dataset.btn;
    localStorage.setItem("language", e.target.dataset.btn);
    resetActiveClass(langButtons, "header-btn-active");
    btn.classList.add("header-btn-active");
    changeLang();
  })
})

function resetActiveClass(arr, activeClass) {
  arr.forEach(el => {
    el.classList.remove(activeClass);
  })
}

function checkActiveLangButton() {
  switch (currentLang) {
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header-btn-active");
      break;
    case "ua":
      document
        .querySelector('[data-btn="ua"]')
        .classList.add("header-btn-active");
      break;
    case "ru":
      document
        .querySelector('[data-btn="ru"]')
        .classList.add("header-btn-active");
      break;
    default:
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header-btn-active");
      break;
  }
}
checkActiveLangButton();

function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some(el => {
    return el === navLang;
  })
  if (result) {
    return navLang;
  }
}