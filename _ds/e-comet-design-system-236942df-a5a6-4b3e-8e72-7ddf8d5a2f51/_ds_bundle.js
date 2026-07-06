/* @ds-bundle: {"format":3,"namespace":"ECometDesignSystem_236942","components":[],"sourceHashes":{"ui_kits/cabinet/Accordion.jsx":"5cc9d84db0b7","ui_kits/cabinet/App.jsx":"44ce0ad4be01","ui_kits/cabinet/Button.jsx":"7ad2f2e2cd2f","ui_kits/cabinet/DataTable.jsx":"ee28e45a6797","ui_kits/cabinet/Field.jsx":"8bdfd6b680cb","ui_kits/cabinet/Header.jsx":"8a4f307a7f1b","ui_kits/cabinet/KpiRow.jsx":"638d6956df95","ui_kits/cabinet/LoginCard.jsx":"b5a6430df2dd","ui_kits/cabinet/Primitives.jsx":"320c4cc5b6e5","ui_kits/cabinet/Screens.jsx":"f4a10b3ca897","ui_kits/cabinet/Tabs.jsx":"536cdcc77e1a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ECometDesignSystem_236942 = window.ECometDesignSystem_236942 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/cabinet/Accordion.jsx
try { (() => {
/* Accordion section used on campaign detail */
const {
  useState: useAccState
} = React;
function Accordion({
  title,
  defaultOpen = true,
  children,
  action
}) {
  const [open, setOpen] = useAccState(defaultOpen);
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 10
    }
  }, React.createElement('div', {
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      cursor: 'pointer',
      borderBottom: open ? '1px solid #f2f4f6' : 'none',
      fontWeight: 700,
      fontSize: 14
    }
  }, React.createElement('span', {
    style: {
      fontSize: 10,
      color: '#9a9a9a',
      transform: open ? 'none' : 'rotate(-90deg)',
      transition: 'transform .2s'
    }
  }, '▲'), React.createElement('span', {
    style: {
      flex: 1
    }
  }, title), action && action), open && React.createElement('div', null, children));
}

/* Stat cell used in campaign settings */
function StatCell({
  label,
  value,
  valueColor,
  note,
  children
}) {
  const color = {
    orange: '#f0bc74',
    green: '#10b981',
    blue: '#347cce',
    red: '#e11d48'
  }[valueColor] ?? '#2c3046';
  return React.createElement('div', {
    style: {
      padding: '8px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderRight: '1px solid #f2f4f6',
      minWidth: 100
    }
  }, React.createElement('div', {
    style: {
      fontSize: 12,
      color: '#9a9a9a',
      display: 'flex',
      alignItems: 'center',
      gap: 3
    }
  }, label, note && React.createElement('span', {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      border: '1px solid #9a9a9a',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 8
    }
  }, 'i')), children || React.createElement('div', {
    style: {
      fontSize: 14,
      color,
      fontWeight: 400
    }
  }, value || '—'));
}
Object.assign(window, {
  Accordion,
  StatCell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Accordion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/App.jsx
try { (() => {
const {
  useState: useAppState
} = React;
function App() {
  const [screen, setScreen] = useAppState('login');
  const [activeNav, setActiveNav] = useAppState('ads');
  const [openRow, setOpenRow] = useAppState(null);
  const [theme, setTheme] = useAppState('light'); // 'light' | 'dark'

  const isDark = theme === 'dark';
  const bg = isDark ? '#0e0e10' : '#f5f8fb';
  const textMain = isDark ? '#efeff1' : '#2c3046';
  if (screen === 'login') {
    return React.createElement(LoginCard, {
      onSubmit: () => {
        setActiveNav('ads');
        setScreen('ads');
      }
    });
  }
  const navToScreen = id => {
    setActiveNav(id);
    if (id === 'ads') setScreen('ads');else if (id === 'briefcase') setScreen('briefcase');else if (id === 'keywords') setScreen('keywords');else if (id === 'abtests') setScreen('abtests');else setScreen(id);
    setOpenRow(null);
  };
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      background: bg,
      fontFamily: 'Nunito,sans-serif',
      color: textMain,
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement(Header, {
    active: activeNav,
    onNav: navToScreen,
    theme,
    onToggleTheme: () => setTheme(t => t === 'light' ? 'dark' : 'light')
  }), screen === 'ads' && React.createElement(AdsScreen, {
    onOpenRow: r => {
      setOpenRow(r);
      setScreen('campaign');
    },
    theme
  }), screen === 'campaign' && React.createElement(CampaignScreen, {
    row: openRow,
    onBack: () => setScreen('ads'),
    theme
  }), screen === 'briefcase' && React.createElement(BriefcaseScreen, {
    theme
  }), screen === 'keywords' && React.createElement(KeywordsScreen, {
    theme
  }), screen === 'abtests' && React.createElement('div', {
    style: {
      padding: '40px 24px',
      color: textMain
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, 'А/Б-тесты'), React.createElement('p', {
    style: {
      color: '#9a9a9a'
    }
  }, 'Раздел в разработке')), screen !== 'ads' && screen !== 'campaign' && screen !== 'briefcase' && screen !== 'keywords' && screen !== 'abtests' && React.createElement(AccountScreen, {
    theme
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size,
  children,
  onClick,
  disabled,
  style
}) {
  const bg = {
    primary: '#2c3046',
    secondary: '#f0bc74',
    garnet: '#f04527',
    outline: 'transparent',
    link: 'transparent',
    light: '#eaedf2'
  }[variant];
  const color = {
    primary: '#fff',
    secondary: '#2c3046',
    garnet: '#fff',
    outline: '#2c3046',
    link: '#2c3046',
    light: '#2c3046'
  }[variant];
  const border = variant === 'outline' ? '1px solid #c4c4c4' : `1px solid ${bg}`;
  const pad = size === 'sm' ? '4px 10px' : '6px 14px';
  const fs = size === 'sm' ? 12 : 14;
  return React.createElement('button', {
    onClick,
    disabled,
    style: {
      background: bg,
      color,
      border,
      borderRadius: 8,
      padding: pad,
      fontSize: fs,
      fontWeight: 600,
      fontFamily: 'Nunito, sans-serif',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      lineHeight: '20px',
      ...style
    }
  }, variant === 'link' ? React.createElement('span', {
    style: {
      borderBottom: '1px dashed rgba(38,43,64,0.3)'
    }
  }, children) : children);
}
window.Button = Button;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/DataTable.jsx
try { (() => {
function DataTable({
  onOpenRow
}) {
  const cols = [{
    key: 'name',
    label: 'Кампания',
    w: 280
  }, {
    key: 'status',
    label: 'Статус',
    w: 120
  }, {
    key: 'type',
    label: 'Тип',
    w: 120
  }, {
    key: 'bid',
    label: 'Ставка, ₽',
    w: 110,
    align: 'center'
  }, {
    key: 'spend',
    label: 'Расход, ₽',
    w: 110,
    align: 'center'
  }, {
    key: 'orders',
    label: 'Заказы',
    w: 90,
    align: 'center'
  }, {
    key: 'cpo',
    label: 'CPO, ₽',
    w: 90,
    align: 'center'
  }, {
    key: 'ctr',
    label: 'CTR',
    w: 80,
    align: 'center'
  }, {
    key: 'rating',
    label: 'Оценка',
    w: 80,
    align: 'center'
  }];
  const rows = [{
    id: 1,
    name: 'Кроссовки Nike — Автореклама',
    status: 'Активна',
    type: 'Поиск',
    bid: '62',
    spend: '1 240',
    orders: '28',
    cpo: '44',
    ctr: '2,8\u00A0%',
    rating: 5
  }, {
    id: 2,
    name: 'Куртка зимняя женская',
    status: 'Активна',
    type: 'Карточка',
    bid: '48',
    spend: '890',
    orders: '19',
    cpo: '47',
    ctr: '1,9\u00A0%',
    rating: 4
  }, {
    id: 3,
    name: 'Полка — Электроника',
    status: 'Пауза',
    type: 'Полка',
    bid: '—',
    spend: '',
    orders: '',
    cpo: '—',
    ctr: '—',
    rating: 3
  }, {
    id: 4,
    name: 'Рюкзак городской',
    status: 'Ошибка',
    type: 'Поиск',
    bid: '75',
    spend: '320',
    orders: '2',
    cpo: '160',
    ctr: '0,8\u00A0%',
    rating: 2
  }, {
    id: 5,
    name: 'Рубашка мужская — А/Б',
    status: 'Черновик',
    type: 'Карточка',
    bid: '—',
    spend: '',
    orders: '',
    cpo: '—',
    ctr: '—',
    rating: 3
  }, {
    id: 6,
    name: 'Детские игрушки — Лето',
    status: 'Активна',
    type: 'Поиск',
    bid: '38',
    spend: '2 110',
    orders: '71',
    cpo: '30',
    ctr: '3,4\u00A0%',
    rating: 5
  }];
  const ratingColor = {
    1: '#ad0c00',
    2: '#ff3300',
    3: '#eca94b',
    4: '#5292e7',
    5: '#19c296'
  };
  const statusTag = {
    'Активна': 'success',
    'Пауза': 'warning',
    'Ошибка': 'danger',
    'Черновик': 'info'
  };
  return React.createElement('div', {
    style: {
      background: '#fff',
      borderRadius: 8,
      border: '1px solid #c4c4c4',
      overflow: 'hidden',
      fontFamily: 'Nunito, sans-serif'
    }
  }, React.createElement('div', {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid #dcdcde',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, 'Рекламные кампании'), React.createElement('div', {
    style: {
      flex: 1
    }
  }), React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, 'Фильтры'), React.createElement(Button, {
    variant: 'primary',
    size: 'sm'
  }, 'Новая РК')), React.createElement('div', {
    style: {
      overflow: 'auto'
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, React.createElement('thead', null, React.createElement('tr', {
    style: {
      background: '#f5f8fb',
      color: '#2c3046',
      fontWeight: 700,
      textAlign: 'left'
    }
  }, cols.map(c => React.createElement('th', {
    key: c.key,
    style: {
      padding: '8px 12px',
      fontWeight: 700,
      fontSize: 12,
      textAlign: c.align || 'left',
      width: c.w,
      borderBottom: '1px solid #dcdcde'
    }
  }, c.label)))), React.createElement('tbody', null, rows.map(r => React.createElement('tr', {
    key: r.id,
    onClick: () => onOpenRow && onOpenRow(r),
    style: {
      cursor: 'pointer',
      borderBottom: '1px solid #f2f4f6'
    }
  }, React.createElement('td', {
    style: {
      padding: '10px 12px',
      fontWeight: 600
    }
  }, r.name), React.createElement('td', {
    style: {
      padding: '10px 12px'
    }
  }, React.createElement(Tag, {
    kind: statusTag[r.status]
  }, r.status)), React.createElement('td', {
    style: {
      padding: '10px 12px',
      color: '#6c757d'
    }
  }, r.type), React.createElement('td', {
    style: {
      padding: '10px 12px',
      textAlign: 'center'
    }
  }, r.bid), React.createElement('td', {
    style: {
      padding: '10px 12px',
      textAlign: 'center'
    }
  }, r.spend), React.createElement('td', {
    style: {
      padding: '10px 12px',
      textAlign: 'center'
    }
  }, r.orders), React.createElement('td', {
    style: {
      padding: '10px 12px',
      textAlign: 'center'
    }
  }, r.cpo), React.createElement('td', {
    style: {
      padding: '10px 12px',
      textAlign: 'center'
    }
  }, r.ctr), React.createElement('td', {
    style: {
      padding: '10px 12px',
      textAlign: 'center'
    }
  }, React.createElement('span', {
    style: {
      display: 'inline-block',
      width: 24,
      height: 24,
      borderRadius: 6,
      background: ratingColor[r.rating],
      color: '#fff',
      textAlign: 'center',
      lineHeight: '24px',
      fontWeight: 700,
      fontSize: 12
    }
  }, r.rating))))))));
}
window.DataTable = DataTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/DataTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/Field.jsx
try { (() => {
function Field({
  label,
  type = 'text',
  value,
  onChange,
  placeholder
}) {
  return React.createElement('div', {
    style: {
      marginBottom: 12
    }
  }, label && React.createElement('label', {
    style: {
      display: 'block',
      fontSize: 12,
      color: '#989696',
      marginBottom: 4
    }
  }, label), React.createElement('input', {
    type,
    value: value || '',
    onChange: e => onChange && onChange(e.target.value),
    placeholder,
    style: {
      width: '100%',
      minHeight: 'calc(1.5em + 1.225rem)',
      padding: '6px 10px',
      border: '1px solid #c4c4c4',
      borderRadius: 8,
      background: '#fff',
      fontFamily: 'Nunito, sans-serif',
      fontSize: 14,
      color: '#2c3046',
      boxSizing: 'border-box'
    }
  }));
}
function Tag({
  kind = 'info',
  children
}) {
  const c = {
    success: '#0fba81',
    warning: '#d59a06',
    danger: '#e11d48',
    info: '#6c757d',
    message: '#1e90ff',
    purple: '#9d4f9d',
    secondary: '#f0bc74'
  }[kind] || '#6c757d';
  return React.createElement('span', {
    style: {
      padding: '3px 10px',
      borderRadius: 9999,
      fontWeight: 600,
      fontSize: 12,
      color: kind === 'secondary' ? '#2c3046' : '#fff',
      background: c,
      display: 'inline-block'
    }
  }, children);
}
function StatusDot({
  color = 'green',
  children
}) {
  const c = {
    green: '#00ab79',
    yellow: '#f0bc74',
    red: '#e11d48',
    gray: '#9a9a9a'
  }[color];
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 13
    }
  }, React.createElement('span', {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: c,
      marginRight: 7
    }
  }), children);
}
function Card({
  title,
  children,
  style
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid #c4c4c4',
      borderRadius: 8,
      overflow: 'hidden',
      ...style
    }
  }, title && React.createElement('div', {
    style: {
      padding: '16px 16px 8px',
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 700
    }
  }, title), React.createElement('div', {
    style: {
      padding: title ? '8px 16px 16px' : 16
    }
  }, children));
}
window.Field = Field;
window.Tag = Tag;
window.StatusDot = StatusDot;
window.Card = Card;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Field.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/Header.jsx
try { (() => {
/* Header component */
function Header({
  active,
  onNav,
  theme,
  onToggleTheme
}) {
  const isDark = theme === 'dark';
  const bg = isDark ? '#18181b' : '#2c3046';
  const textMuted = 'rgba(255,255,255,0.75)';
  const navItems = [{
    id: 'ads',
    label: 'Реклама'
  }, {
    id: 'abtests',
    label: 'А/Б-тесты'
  }, {
    id: 'briefcase',
    label: 'Портфель'
  }, {
    id: 'keywords',
    label: 'Фразы'
  }, {
    id: 'orders',
    label: 'Лента'
  }, {
    id: 'admin',
    label: 'Админка'
  }];

  // Simple SVG icons as inline
  const GiftIcon = React.createElement('svg', {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8
  }, React.createElement('path', {
    d: 'M20 12v10H4V12'
  }), React.createElement('path', {
    d: 'M22 7H2v5h20V7z'
  }), React.createElement('path', {
    d: 'M12 22V7'
  }), React.createElement('path', {
    d: 'M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z'
  }), React.createElement('path', {
    d: 'M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'
  }));
  const ShieldIcon = React.createElement('svg', {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8
  }, React.createElement('path', {
    d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }));
  const ChatIcon = React.createElement('svg', {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8
  }, React.createElement('path', {
    d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
  }));
  const BellIcon = React.createElement('svg', {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8
  }, React.createElement('path', {
    d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'
  }), React.createElement('path', {
    d: 'M13.73 21a2 2 0 0 1-3.46 0'
  }));
  const iconBtn = icon => React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      color: textMuted,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: 0
    }
  }, icon);
  return React.createElement('header', {
    style: {
      height: 50,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      gap: 12,
      boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
      color: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      flexShrink: 0
    }
  }, React.createElement('img', {
    src: '../../assets/logoLight.png',
    alt: 'e-Comet',
    style: {
      height: 26
    }
  }), React.createElement('div', {
    style: {
      width: 1,
      height: 28,
      background: 'rgba(255,255,255,0.15)'
    }
  }), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 0,
      height: '100%',
      alignItems: 'center'
    }
  }, navItems.map(it => React.createElement('a', {
    key: it.id,
    onClick: () => onNav && onNav(it.id),
    style: {
      color: active === it.id ? '#f0bc74' : textMuted,
      fontWeight: active === it.id ? 700 : 400,
      fontSize: 14,
      cursor: 'pointer',
      padding: '0 10px',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      borderBottom: active === it.id ? '2px solid #f0bc74' : '2px solid transparent'
    }
  }, it.label))), React.createElement('div', {
    style: {
      flex: 1,
      margin: '0 8px'
    }
  }, React.createElement('div', {
    style: {
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 8,
      padding: '5px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.5)',
      fontSize: 13,
      maxWidth: 480
    }
  }, React.createElement('svg', {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2
  }, React.createElement('circle', {
    cx: 11,
    cy: 11,
    r: 8
  }), React.createElement('path', {
    d: 'm21 21-4.35-4.35'
  })), 'Поисковая фраза или собственный артикул')), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, iconBtn(GiftIcon), iconBtn(ShieldIcon), iconBtn(ChatIcon), iconBtn(BellIcon), React.createElement('button', {
    onClick: onToggleTheme,
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: '#f0bc74',
      color: '#2c3046',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, isDark ? '☀' : 'АВ')));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/KpiRow.jsx
try { (() => {
function KpiRow() {
  const k = [{
    label: 'Баланс',
    value: '12 480',
    unit: '₽',
    delta: null,
    hint: 'обновлено: 14:32 МСК'
  }, {
    label: 'Расход за сегодня',
    value: '3 192',
    unit: '₽',
    delta: '+8 %',
    up: true,
    hint: '12 активных РК'
  }, {
    label: 'Заказы',
    value: '218',
    unit: 'шт',
    delta: '+14 %',
    up: true,
    hint: 'vs вчера'
  }, {
    label: 'CPO',
    value: '147',
    unit: '₽',
    delta: '−5 %',
    up: false,
    hint: 'за последний день'
  }];
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, k.map(i => React.createElement(Card, {
    key: i.label,
    title: i.label
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, React.createElement('div', {
    style: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: 1
    }
  }, i.value), React.createElement('span', {
    style: {
      color: '#989696',
      fontSize: 14
    }
  }, i.unit), i.delta && React.createElement('span', {
    style: {
      fontSize: 12,
      color: i.up ? '#10b981' : '#e11d48',
      marginLeft: 4
    }
  }, i.delta)), React.createElement('div', {
    style: {
      color: '#989696',
      fontSize: 12,
      marginTop: 6
    }
  }, i.hint))));
}
window.KpiRow = KpiRow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/KpiRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/LoginCard.jsx
try { (() => {
/* LoginCard — matches production screenshot */
const {
  useState: useLoginState
} = React;
function LoginCard({
  onSubmit
}) {
  const [email, setEmail] = useLoginState('');
  const OutBtn = ({
    children
  }) => React.createElement('button', {
    style: {
      width: '100%',
      background: '#fff',
      color: '#2c3046',
      border: '1px solid #2c3046',
      borderRadius: 8,
      padding: '4px 10px',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'Nunito,sans-serif',
      cursor: 'pointer',
      lineHeight: '20px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6
    }
  }, children);
  const ExtLink = ({
    children
  }) => React.createElement('a', {
    style: {
      color: '#2c3046',
      borderBottom: '1px solid rgba(38,43,64,0.4)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, children, React.createElement('span', {
    style: {
      display: 'inline-block',
      marginLeft: 2,
      verticalAlign: '-1px',
      fontSize: '0.8em',
      color: '#5292e7'
    }
  }, '↗'));
  const VkLogo = React.createElement('svg', {
    width: 13,
    height: 13,
    viewBox: '0 0 448 512',
    fill: '#2c3046'
  }, React.createElement('path', {
    d: 'M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z'
  }));
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#2c3046',
      fontFamily: 'Nunito,sans-serif'
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      maxWidth: 446,
      background: '#fff',
      borderRadius: '0.375rem',
      border: '1px solid #c4c4c4',
      boxShadow: '0 6px 16px rgba(0,0,0,0.16)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      margin: '0.5rem'
    }
  }, /* Logo */
  React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement('img', {
    src: '../../assets/logo.png',
    style: {
      height: 40
    }
  })), /* Form */
  React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, React.createElement('div', {
    style: {
      fontSize: '1.25rem',
      fontWeight: 700,
      textAlign: 'center',
      lineHeight: 1.2
    }
  }, 'Войти или зарегистрироваться'), /* Email + submit */
  React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, React.createElement('input', {
    type: 'email',
    autoComplete: 'email',
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: 'Введите email',
    style: {
      width: '100%',
      padding: '4px 10px',
      border: '1px solid #c4c4c4',
      borderRadius: 8,
      fontFamily: 'Nunito,sans-serif',
      fontSize: 14,
      color: '#2c3046',
      boxSizing: 'border-box',
      minHeight: 'calc(1.5em + 0.5rem + 2px)'
    }
  }), React.createElement('button', {
    onClick: () => onSubmit && onSubmit(email),
    style: {
      width: '100%',
      background: '#2c3046',
      color: '#fff',
      border: '1px solid #2c3046',
      borderRadius: 8,
      padding: '4px 10px',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'Nunito,sans-serif',
      cursor: 'pointer',
      lineHeight: '20px'
    }
  }, 'Войти')), React.createElement('div', {
    style: {
      textAlign: 'center',
      color: '#5292e7',
      fontSize: 14,
      fontWeight: 500
    }
  }, 'или'), React.createElement(OutBtn, null, VkLogo, 'Войти с VK ID'), React.createElement(OutBtn, null, 'Войти с Яндекс ID'), React.createElement(OutBtn, null, 'Восстановить доступ')), /* Agreements */
  React.createElement('div', {
    style: {
      textAlign: 'center',
      fontSize: 11,
      lineHeight: 1.5,
      color: '#2c3046'
    }
  }, 'Нажимая \u201cВойти\u201d, вы соглашаетесь с ', React.createElement(ExtLink, null, 'офертой'), ' и ', React.createElement(ExtLink, null, 'политикой конфиденциальности'))));
}
window.LoginCard = LoginCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/LoginCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/Primitives.jsx
try { (() => {
/* shared inline helpers — exported to window */
function Button({
  variant = 'primary',
  size,
  children,
  onClick,
  disabled,
  style,
  fullWidth
}) {
  const bg = {
    primary: '#2c3046',
    secondary: '#f0bc74',
    garnet: '#f04527',
    outline: 'transparent',
    link: 'transparent',
    light: '#eaedf2',
    'outline-primary': 'transparent'
  }[variant] ?? 'transparent';
  const color = {
    primary: '#fff',
    secondary: '#2c3046',
    garnet: '#fff',
    outline: '#2c3046',
    link: '#2c3046',
    light: '#2c3046',
    'outline-primary': '#2c3046'
  }[variant] ?? '#2c3046';
  const border = variant === 'outline' || variant === 'outline-primary' ? '1px solid #2c3046' : variant === 'light' ? '1px solid #dcdcde' : `1px solid ${bg}`;
  const pad = size === 'sm' ? '3px 10px' : '6px 14px';
  const fs = size === 'sm' ? 12 : 14;
  return React.createElement('button', {
    onClick,
    disabled,
    style: {
      background: bg,
      color,
      border,
      borderRadius: 8,
      padding: pad,
      fontSize: fs,
      fontWeight: 600,
      fontFamily: 'Nunito,sans-serif',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      lineHeight: '20px',
      width: fullWidth ? '100%' : undefined,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      ...style
    }
  }, children);
}
function Tag({
  kind = 'info',
  children
}) {
  const bg = {
    success: '#0fba81',
    warning: '#d59a06',
    danger: '#e11d48',
    info: '#6c757d',
    message: '#1e90ff',
    purple: '#9d4f9d',
    orange: '#ff7a00',
    secondary: '#f0bc74',
    brown: '#a0522d'
  }[kind] ?? '#6c757d';
  const color = kind === 'secondary' ? '#2c3046' : '#fff';
  return React.createElement('span', {
    style: {
      padding: '2px 8px',
      borderRadius: 9999,
      fontWeight: 600,
      fontSize: 11,
      color,
      background: bg,
      display: 'inline-block',
      whiteSpace: 'nowrap'
    }
  }, children);
}
function StatusDot({
  color = 'green',
  children
}) {
  const c = {
    green: '#00ab79',
    yellow: '#f0bc74',
    red: '#e11d48',
    gray: '#9a9a9a'
  }[color];
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 13
    }
  }, React.createElement('span', {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: c,
      marginRight: 7,
      flexShrink: 0
    }
  }), children);
}
function Toggle({
  on,
  onChange
}) {
  return React.createElement('div', {
    onClick: () => onChange && onChange(!on),
    style: {
      width: 32,
      height: 18,
      borderRadius: 9999,
      background: on ? '#10b981' : '#dcdcde',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      flexShrink: 0
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      top: 2,
      [on ? 'right' : 'left']: 2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      transition: 'all .2s'
    }
  }));
}
function Card({
  title,
  children,
  style,
  action
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid #c4c4c4',
      borderRadius: 8,
      overflow: 'hidden',
      ...style
    }
  }, (title || action) && React.createElement('div', {
    style: {
      padding: '12px 16px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, title && React.createElement('div', {
    style: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 700,
      flex: 1
    }
  }, title), action && action), React.createElement('div', {
    style: {
      padding: title || action ? '4px 16px 16px' : 16
    }
  }, children));
}
function Divider() {
  return React.createElement('div', {
    style: {
      height: 1,
      background: '#f2f4f6',
      margin: '0 -16px'
    }
  });
}
Object.assign(window, {
  Button,
  Tag,
  StatusDot,
  Toggle,
  Card,
  Divider
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/Screens.jsx
try { (() => {
/* All page screens */
const {
  useState: useScreenState
} = React;

/* ---- ADS OVERVIEW ---- */
function AdsScreen({
  onOpenRow,
  theme
}) {
  const [activeTab, setActiveTab] = useScreenState('autopilot');
  const isDark = theme === 'dark';
  const bg = isDark ? '#0e0e10' : '#f5f8fb';
  const cardBg = isDark ? '#1f1f23' : '#fff';
  const border = isDark ? '#3a3a3f' : '#c4c4c4';
  const textMain = isDark ? '#efeff1' : '#2c3046';
  const textWeak = isDark ? '#787889' : '#9a9a9a';
  const tabs = [{
    id: 'autopilot',
    label: 'Автопилот',
    badge: 1,
    badgeColor: 'green'
  }, {
    id: 'overview',
    label: 'Обзор',
    badge: '125',
    badgeColor: 'green',
    badge2: '5',
    badge2Color: 'orange'
  }, {
    id: 'articles',
    label: 'Артикулы',
    badge: '17 %',
    badgeColor: 'blue'
  }, {
    id: 'campaigns',
    label: 'Кампании',
    badge: 5,
    badgeColor: 'green'
  }, {
    id: 'stats',
    label: 'Статистика'
  }];
  const rows = [{
    id: 1,
    art: '738020054',
    supplier: 'Консервы мясные',
    autopilot: false,
    status: 'manual',
    badges: ['1', '2'],
    stock: 2,
    maxSpend: 323,
    spend: 39690,
    drr: '—'
  }, {
    id: 2,
    art: '046111742',
    supplier: '046111742',
    autopilot: true,
    status: 'overflow',
    stock: 26,
    maxSpend: 108,
    spend: 54,
    drr: '9.14'
  }, {
    id: 3,
    art: '331801186',
    supplier: '331801186',
    autopilot: true,
    status: 'active',
    stock: 28,
    maxSpend: 97,
    spend: 40.5,
    drr: '11.45'
  }, {
    id: 4,
    art: '837208469',
    supplier: '837208469',
    autopilot: true,
    status: 'overflow',
    stock: 25,
    maxSpend: 118,
    spend: 53.4,
    drr: '19.09'
  }];
  const statusTag = s => {
    if (s === 'overflow') return React.createElement(Tag, {
      kind: 'orange'
    }, 'Избыток трафика');
    if (s === 'active') return React.createElement(Tag, {
      kind: 'success'
    }, 'Активен');
    return React.createElement('span', {
      style: {
        color: textWeak,
        fontSize: 12
      }
    }, '—');
  };
  return React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      background: bg,
      color: textMain,
      padding: '8px 0'
    }
  }, /* Page head */
  React.createElement('div', {
    style: {
      padding: '8px 24px 0'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 4
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: 0,
      lineHeight: '28px'
    }
  }, 'Управление рекламой'), React.createElement('div', {
    style: {
      flex: 1
    }
  }), React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, 'Задачи'), React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, 'Расходы')), React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak,
      marginBottom: 8
    }
  }, 'Обновлено: 5 минут назад')), /* Tabs */
  React.createElement('div', {
    style: {
      padding: '0 24px'
    }
  }, React.createElement(Tabs, {
    tabs,
    active: activeTab,
    onChange: setActiveTab,
    style: {
      borderBottomColor: isDark ? '#9492a1' : '#dcdcde'
    }
  })), /* Toolbar */
  React.createElement('div', {
    style: {
      padding: '10px 24px',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, '▾ Фильтры'), React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      fontSize: 16,
      cursor: 'pointer',
      color: textWeak
    }
  }, '?'), React.createElement('div', {
    style: {
      flex: 1
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: isDark ? '#1f1f23' : '#fff',
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: '3px 8px',
      fontSize: 13,
      color: textWeak
    }
  }, 'Показать: Активные ▾'), React.createElement(Button, {
    variant: 'garnet',
    size: 'sm',
    style: {
      gap: 4
    }
  }, React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.8)',
      display: 'inline-block'
    }
  }), 'Контроль расходов', React.createElement('span', {
    style: {
      background: 'rgba(255,255,255,0.25)',
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 10
    }
  }, 'PRO')), React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, 'Статистика'), React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, 'Аа'), React.createElement('div', {
    style: {
      background: isDark ? '#1f1f23' : '#fff',
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: '3px 10px',
      fontSize: 13,
      color: textWeak
    }
  }, 'Фильтр')), /* Table */
  React.createElement('div', {
    style: {
      padding: '0 24px',
      overflow: 'auto'
    }
  }, React.createElement('div', {
    style: {
      background: cardBg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      overflow: 'hidden',
      minWidth: 800
    }
  }, /* head */
  React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '32px 30px 180px 100px 90px 170px 80px 100px 90px 90px',
      background: isDark ? '#1f1f23' : '#f5f8fb',
      borderBottom: `1px solid ${border}`
    }
  }, ['', '№', 'Склейка / Артикул', 'Фото', 'Артикул ВБ', 'Автопилот', 'Статус', 'Журнал', 'Остатки по API', 'Расход ₽'].map((h, i) => React.createElement('div', {
    key: i,
    style: {
      padding: '8px 8px',
      fontSize: 11,
      fontWeight: 700,
      color: textWeak,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, h))), /* rows */
  rows.map((r, ri) => React.createElement('div', {
    key: r.id,
    onClick: () => onOpenRow && onOpenRow(r),
    style: {
      display: 'grid',
      gridTemplateColumns: '32px 30px 180px 100px 90px 170px 80px 100px 90px 90px',
      borderBottom: ri < rows.length - 1 ? `1px solid ${isDark ? '#2c2c30' : '#f2f4f6'}` : 'none',
      cursor: 'pointer',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      padding: '0 8px'
    }
  }, React.createElement('div', {
    style: {
      width: 15,
      height: 15,
      border: `1px solid ${isDark ? 'rgba(187,186,192,0.4)' : '#c4c4c4'}`,
      borderRadius: 3
    }
  })), React.createElement('div', {
    style: {
      padding: '8px 4px',
      color: textWeak,
      fontSize: 12
    }
  }, ri + 1), React.createElement('div', {
    style: {
      padding: '8px 8px',
      fontSize: 13,
      fontWeight: 600,
      color: isDark ? '#6d9eeb' : '#347cce',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.supplier, ' ↗'), React.createElement('div', {
    style: {
      padding: '8px 4px',
      display: 'flex',
      gap: 2
    }
  }, [0, 1].map(i => React.createElement('div', {
    key: i,
    style: {
      width: 20,
      height: 20,
      background: isDark ? '#3a3a3f' : '#f2f4f6',
      borderRadius: 3
    }
  }))), React.createElement('div', {
    style: {
      padding: '8px 4px',
      color: isDark ? '#6d9eeb' : '#347cce',
      fontSize: 12
    }
  }, r.art + ' ↗'), React.createElement('div', {
    style: {
      padding: '8px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement(Toggle, {
    on: r.autopilot
  }), r.badges && r.badges.map((b, i) => React.createElement('div', {
    key: i,
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: i === 0 ? '#10b981' : '#dcdcde',
      color: '#fff',
      fontSize: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, b))), React.createElement('div', {
    style: {
      padding: '8px 4px'
    }
  }, statusTag(r.status)), React.createElement('div', {
    style: {
      padding: '8px 4px'
    }
  }, React.createElement('svg', {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: textWeak,
    strokeWidth: 2
  }, React.createElement('path', {
    d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
  }), React.createElement('polyline', {
    points: '14 2 14 8 20 8'
  }))), React.createElement('div', {
    style: {
      padding: '8px 4px',
      textAlign: 'right',
      fontSize: 13,
      color: r.stock < 3 ? '#e11d48' : textMain
    }
  }, r.stock + ' шт'), React.createElement('div', {
    style: {
      padding: '8px 8px',
      textAlign: 'right',
      fontSize: 13,
      fontWeight: 600,
      color: r.spend > 1000 ? '#e11d48' : textMain
    }
  }, r.spend.toLocaleString('ru-RU')))))));
}

/* ---- CAMPAIGN DETAIL ---- */
function CampaignScreen({
  row,
  onBack,
  theme
}) {
  const [activeTab, setActiveTab] = useScreenState('overview');
  const isDark = theme === 'dark';
  const bg = isDark ? '#0e0e10' : '#f5f8fb';
  const textMain = isDark ? '#efeff1' : '#2c3046';
  const textWeak = isDark ? '#787889' : '#9a9a9a';
  const border = isDark ? '#3a3a3f' : '#e0e0e0';
  const cardBg = isDark ? '#1f1f23' : '#fff';
  const tabs = [{
    id: 'overview',
    label: 'Обзор'
  }, {
    id: 'analytics',
    label: 'Аналитика'
  }];
  const statRow = cells => React.createElement('div', {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      borderTop: `1px solid ${border}`
    }
  }, cells.map(([label, value, vc, hasInfo], i) => React.createElement('div', {
    key: i,
    style: {
      padding: '8px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderRight: `1px solid ${border}`,
      minWidth: 110
    }
  }, React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak,
      display: 'flex',
      alignItems: 'center',
      gap: 3
    }
  }, label, hasInfo && React.createElement('span', {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      border: `1px solid ${textWeak}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 8
    }
  }, 'i')), React.createElement('div', {
    style: {
      fontSize: 14,
      color: {
        orange: '#f0bc74',
        green: '#10b981',
        blue: '#347cce',
        red: '#e11d48'
      }[vc] || textMain
    }
  }, value))));
  return React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      background: bg,
      color: textMain
    }
  }, /* top bar */
  React.createElement('div', {
    style: {
      background: cardBg,
      borderBottom: `1px solid ${border}`,
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      width: 48,
      height: 48,
      background: '#f2f4f6',
      borderRadius: 6,
      flexShrink: 0
    }
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 14,
      color: textWeak
    }
  }, 'Единая'), React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, row?.supplier || 'Название кампании'), React.createElement(Tag, {
    kind: 'info'
  }, 'WB'), React.createElement(Tag, {
    kind: 'warning'
  }, 'Пауза'), React.createElement(Tag, {
    kind: 'danger'
  }, 'Нет показов'), React.createElement(Tag, {
    kind: 'info'
  }, 'Остаток'), React.createElement('span', {
    style: {
      background: '#f5f8fb',
      border: '1px solid #dcdcde',
      borderRadius: 4,
      padding: '1px 6px',
      fontSize: 11
    }
  }, '634')), React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak,
      display: 'flex',
      gap: 8,
      marginTop: 3
    }
  }, React.createElement('span', null, `ID: ${row?.id || 32677970} Артикул ${row?.art || 95775285} ↗`), React.createElement('span', {
    style: {
      color: textWeak
    }
  }, '07:04 тест1213 +1'))), React.createElement('div', {
    style: {
      flex: 1
    }
  }), React.createElement('button', {
    style: {
      background: 'none',
      border: 'none',
      fontSize: 14,
      cursor: 'pointer',
      color: textWeak
    }
  }, '⟳'), React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, '📊 Статистика')), /* Tabs */
  React.createElement('div', {
    style: {
      background: cardBg,
      padding: '0 16px',
      borderBottom: `1px solid ${border}`
    }
  }, React.createElement(Tabs, {
    tabs,
    active: activeTab,
    onChange: setActiveTab
  })), /* Sections */
  React.createElement('div', {
    style: {
      padding: '10px 16px'
    }
  }, React.createElement(Accordion, {
    title: 'Настройки'
  }, React.createElement('div', {
    style: {
      padding: '10px 14px',
      display: 'flex',
      gap: 24,
      borderBottom: `1px solid ${border}`
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13
    }
  }, React.createElement(Toggle, {
    on: true
  }), 'Управляется', React.createElement('span', {
    style: {
      width: 13,
      height: 13,
      borderRadius: '50%',
      border: `1px solid ${textWeak}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 8
    }
  }, 'i')), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 13
    }
  }, React.createElement(Toggle, {
    on: false
  }), 'Пауза', React.createElement('span', {
    style: {
      width: 13,
      height: 13,
      borderRadius: '50%',
      border: `1px solid ${textWeak}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 8
    }
  }, 'i'))), React.createElement('div', {
    style: {
      padding: '4px 14px 6px',
      fontSize: 12,
      color: textWeak,
      fontWeight: 700
    }
  }, 'Управление ставкой'), statRow([['Зона показов', 'Поиск', 'orange', true], ['Держать макс. ставку', '●', null, true], ['Целевая позиция', '6', 'blue', true], ['Тек. позиция', '0', 'green', true], ['Макс. ставка', '235 ₽', 'orange', true], ['Тек. ставка', '237 ₽', 'green', false]]), React.createElement('div', {
    style: {
      padding: '4px 14px 2px',
      fontSize: 12,
      color: textWeak,
      fontWeight: 700,
      marginTop: 4
    }
  }, 'Триггеры паузы'), statRow([['Мин. остаток', '2 шт', null, true], ['Тек. остаток', '1', null, false], ['Макс. расход', '—', null, false], ['Тек. расход', '0 ₽', 'green', true], ['Время показа', '100 %', null, true], ['Мин. оценка отзыва', '—', null, true], ['Смотреть отзывов', '—', null, true]])), React.createElement(Accordion, {
    title: 'Поиск: Кластеры'
  }, React.createElement('div', {
    style: {
      padding: '8px 14px',
      fontSize: 13,
      color: textWeak
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, ['Только активные', 'Автомикс', 'Проверка кластеров'].map(l => React.createElement('span', {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: textWeak
    }
  }, React.createElement('input', {
    type: 'checkbox',
    readOnly: true,
    checked: true,
    style: {
      accentColor: '#2c3046'
    }
  }), l))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      fontSize: 12
    }
  }, [['Минус-кластеров', '407 / 1 000'], ['Целевая фраза', '№1 из 2: зеркало'], ['Плюс-фразы', 'Отсутствуют'], ['Минус-фразы', 'Отсутствуют'], ['Фильтр по CTR / CPC', '3 % · 0 ₽ · 100 шт'], ['Фильтр по корзинам', '0 % · 0 ₽ · 100 шт'], ['Контроль органики', 'Мин. буст 0']].map(([l, v]) => React.createElement('div', {
    key: l
  }, React.createElement('div', {
    style: {
      color: textWeak,
      marginBottom: 1
    }
  }, l), React.createElement('div', {
    style: {
      fontWeight: 600,
      color: textMain
    }
  }, v))))))));
}

/* ---- BRIEFCASE ---- */
function BriefcaseScreen({
  theme
}) {
  const isDark = theme === 'dark';
  const bg = isDark ? '#0e0e10' : '#f5f8fb';
  const textMain = isDark ? '#efeff1' : '#2c3046';
  const textWeak = isDark ? '#787889' : '#9a9a9a';
  const border = isDark ? '#3a3a3f' : '#c4c4c4';
  const cardBg = isDark ? '#1f1f23' : '#fff';
  const cols = ['№', 'Артикул ВБ', 'Артикул пост.', 'Фото', 'Бренд', 'Поставщик', 'Фраз.', 'Изм. фраз', 'Заказов 30', 'Заказов сред.', 'Остатки по API'];
  const rows = [['436052406', '436052406', 'Поставщик', '', 'Бренд', 'Поставщик', '—', '—', '—', '—', '2'], ['834138171', '834138171', 'Поставщик', '', 'Бренд', 'Поставщик', '—', '—', '—', '—', '—'], ['221736840', '221736840', 'Поставщик', '', 'Бренд', 'Поставщик', '—', '—', '—', '—', '3'], ['399126323', '399126323', 'Поставщик', '', 'Бренд', 'Поставщик', '—', '—', '—', '—', '3'], ['547260252', '547260252', 'Поставщик', '', 'Бренд', 'Поставщик', '—', '—', '—', '—', '—']];
  const Group = ({
    name,
    count,
    expanded
  }) => {
    const [open, setOpen] = useScreenState(expanded);
    return React.createElement('div', {
      style: {
        background: cardBg,
        border: `1px solid ${border}`,
        borderRadius: 8,
        marginBottom: 8,
        overflow: 'hidden'
      }
    }, React.createElement('div', {
      onClick: () => setOpen(o => !o),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 16px',
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: 14
      }
    }, React.createElement('span', {
      style: {
        fontSize: 11,
        color: textWeak,
        transform: open ? 'none' : 'rotate(-90deg)',
        transition: 'transform .2s'
      }
    }, '▼'), React.createElement('span', null, name), React.createElement('span', {
      style: {
        fontSize: 12,
        color: textWeak,
        fontWeight: 400
      }
    }, ` — ${count} тов.`), React.createElement('div', {
      style: {
        flex: 1
      }
    }), React.createElement('button', {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: '#f0bc74',
        color: '#2c3046',
        border: 'none',
        fontSize: 14,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, '⊕')), open && React.createElement('div', {
      style: {
        overflowX: 'auto'
      }
    }, /* toolbar */
    React.createElement('div', {
      style: {
        padding: '6px 16px',
        display: 'flex',
        gap: 6,
        justifyContent: 'flex-end'
      }
    }, React.createElement(Button, {
      variant: 'outline',
      size: 'sm'
    }, 'Аа'), React.createElement('div', {
      style: {
        background: cardBg,
        border: `1px solid ${border}`,
        borderRadius: 8,
        padding: '2px 10px',
        fontSize: 13,
        color: textWeak
      }
    }, 'Фильтр')), React.createElement('table', {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 12,
        minWidth: 900
      }
    }, React.createElement('thead', null, React.createElement('tr', {
      style: {
        background: isDark ? '#1f1f23' : '#f5f8fb',
        borderBottom: `1px solid ${border}`
      }
    }, cols.map(c => React.createElement('th', {
      key: c,
      style: {
        padding: '6px 8px',
        fontWeight: 700,
        fontSize: 11,
        color: textWeak,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        textAlign: 'left'
      }
    }, c)))), React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', {
      key: ri,
      style: {
        borderBottom: `1px solid ${isDark ? '#2c2c30' : '#f2f4f6'}`
      }
    }, r.map((cell, ci) => React.createElement('td', {
      key: ci,
      style: {
        padding: '6px 8px',
        color: ci === 1 || ci === 2 ? '#347cce' : textMain,
        whiteSpace: 'nowrap'
      }
    }, ci === 3 ? React.createElement('div', {
      style: {
        width: 24,
        height: 24,
        background: isDark ? '#3a3a3f' : '#f2f4f6',
        borderRadius: 4
      }
    }) : cell))))))));
  };
  return React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      background: bg,
      color: textMain,
      padding: '16px 24px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: 0
    }
  }, 'Портфель ⊕'), React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak
    }
  }, 'Статистика за 30 дней'), React.createElement('div', {
    style: {
      flex: 1
    }
  }), React.createElement(Button, {
    variant: 'secondary',
    size: 'sm'
  }, 'Управление группами')), React.createElement(Group, {
    name: '12365',
    count: 9,
    expanded: true
  }), React.createElement(Group, {
    name: '123',
    count: 0,
    expanded: false
  }), React.createElement(Group, {
    name: '456',
    count: 0,
    expanded: false
  }), React.createElement(Group, {
    name: 'qwe',
    count: 0,
    expanded: false
  }));
}

/* ---- KEYWORDS ---- */
function KeywordsScreen({
  theme
}) {
  const isDark = theme === 'dark';
  const bg = isDark ? '#0e0e10' : '#f5f8fb';
  const textMain = isDark ? '#efeff1' : '#2c3046';
  const textWeak = isDark ? '#787889' : '#9a9a9a';
  const border = isDark ? '#3a3a3f' : '#c4c4c4';
  const cardBg = isDark ? '#1f1f23' : '#fff';
  const [activeTab, setActiveTab] = useScreenState('search');
  const tabs = [{
    id: 'search',
    label: 'Подбор'
  }, {
    id: 'positions',
    label: 'Позиции'
  }];
  const rows = [['кроссовки женские', '♡', '4 334 224', '+3', '1 702', '', '', 'Кроссовки', 'кроссовки женские', '112', '4 532 232', '20.3', '213 189'], ['футболка женская', '♡', '2 055 101', '+11', '1 386', '', '', 'Футболки', 'футболка женская', '105', '3 344 250', '24.7', '115 671'], ['джинсы женские', '♡', '2 425 612', '−22', '1 157', '', '', 'Джинсы', 'джинсы женские', '206', '2 505 393', '25.4', '95 588'], ['кроссовки мужские', '♡', '2 359 470', '+5', '2 263', '', '', 'Кроссовки', 'кроссовки мужские', '114', '2 595 061', '25.2', '93 636'], ['платье женское', '♡', '2 039 886', '−15', '1 595', '', '', 'Платья', 'платье женское', '249', '2 241 791', '8.2', '245 357']];
  const cols = ['№', 'Фраза', 'Целевая\u00a0/\u00a0мониторинг', 'Частота ↕', 'Изм. частоты %', 'Глубина анализа', 'Кампаний', 'Артикулов', 'Предмет', 'Кластер', 'Размер кластера', 'Частота кластера', 'Удельная частота', 'Товаров в выдаче'];
  return React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      background: bg,
      color: textMain,
      padding: '16px 24px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 4
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: 0
    }
  }, 'Фразы'), React.createElement('span', {
    style: {
      fontSize: 13,
      color: textWeak
    }
  }, '233 / 900')), React.createElement(Tabs, {
    tabs,
    active: activeTab,
    onChange: setActiveTab,
    style: {
      marginBottom: 12,
      borderBottomColor: isDark ? '#9492a1' : '#dcdcde'
    }
  }), /* Params accordion */
  React.createElement('div', {
    style: {
      background: cardBg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      marginBottom: 10,
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 700,
      fontSize: 14,
      borderBottom: `1px solid ${border}`
    }
  }, React.createElement('span', {
    style: {
      fontSize: 10,
      color: textWeak
    }
  }), '▲ Параметры'), React.createElement('div', {
    style: {
      padding: '10px 14px',
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, ['Только из лимитов', 'Только из рекламы'].map(l => React.createElement('label', {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'radio',
    readOnly: true,
    name: 'src',
    style: {
      accentColor: '#2c3046'
    }
  }), l))), React.createElement('div', {
    style: {
      padding: '6px 14px 12px',
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, [['Содержит', 'Текст'], ['Частота', '0'], ['до', '4 334 224'], ['Кластер', 'Фраза']].map(([l, p], i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, React.createElement('span', {
    style: {
      fontSize: 12,
      color: textWeak
    }
  }), React.createElement('input', {
    placeholder: `${l}  ${p}`,
    readOnly: true,
    style: {
      padding: '4px 10px',
      border: `1px solid ${border}`,
      borderRadius: 8,
      background: cardBg,
      color: textMain,
      fontFamily: 'Nunito,sans-serif',
      fontSize: 13,
      width: 130
    }
  }))), React.createElement(Button, {
    variant: 'primary',
    size: 'sm'
  }, 'Поиск'), React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, 'Сбросить'))), /* Table */
  React.createElement('div', {
    style: {
      background: cardBg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      overflowX: 'auto'
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12
    }
  }, React.createElement('thead', null, React.createElement('tr', {
    style: {
      background: isDark ? '#1f1f23' : '#f5f8fb'
    }
  }, ['', '№', 'Фраза', 'Целевая / мониторинг', 'Частота ↕', 'Изм. частоты %', 'Глубина анализа', 'Кампаний', 'Артикулов', 'Предмет', 'Кластер', 'Размер', 'Частота кластера', 'Уд. частота', 'Товаров'].map(c => React.createElement('th', {
    key: c,
    style: {
      padding: '6px 8px',
      fontWeight: 700,
      fontSize: 11,
      color: textWeak,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      borderBottom: `1px solid ${border}`
    }
  }, c)))), React.createElement('tbody', null, rows.map((r, ri) => React.createElement('tr', {
    key: ri,
    style: {
      borderBottom: `1px solid ${isDark ? '#2c2c30' : '#f2f4f6'}`
    }
  }, React.createElement('td', {
    style: {
      padding: '6px 4px'
    }
  }, React.createElement('div', {
    style: {
      width: 14,
      height: 14,
      border: `1px solid ${border}`,
      borderRadius: 3
    }
  })), React.createElement('td', {
    style: {
      padding: '6px 8px',
      color: textWeak
    }
  }, ri + 1), React.createElement('td', {
    style: {
      padding: '6px 8px',
      fontWeight: 600,
      color: isDark ? '#6d9eeb' : '#347cce'
    }
  }, r[0], ' ↗'), React.createElement('td', {
    style: {
      padding: '6px 4px',
      textAlign: 'center'
    }
  }, '♡'), React.createElement('td', {
    style: {
      padding: '6px 8px',
      textAlign: 'right'
    }
  }, r[2]), React.createElement('td', {
    style: {
      padding: '6px 8px',
      textAlign: 'right',
      color: r[3].startsWith('+') ? '#10b981' : '#e11d48'
    }
  }, r[3]), React.createElement('td', {
    style: {
      padding: '6px 8px',
      textAlign: 'right'
    }
  }, r[4]), ...Array(8).fill(0).map((_, i) => React.createElement('td', {
    key: i,
    style: {
      padding: '6px 8px',
      textAlign: 'right',
      color: textMain
    }
  }, r[6 + i] || '—')))))))));
}

/* ---- ACCOUNT ---- */
function AccountScreen({
  theme
}) {
  const isDark = theme === 'dark';
  const bg = isDark ? '#0e0e10' : '#f5f8fb';
  const textMain = isDark ? '#efeff1' : '#2c3046';
  const textWeak = isDark ? '#787889' : '#9a9a9a';
  const border = isDark ? '#3a3a3f' : '#c4c4c4';
  const cardBg = isDark ? '#1f1f23' : '#fff';
  const [activeTab, setActiveTab] = useScreenState('legal');
  const tabs = [{
    id: 'legal',
    label: 'Юрлица',
    badge: '3 / 5',
    badgeColor: 'green'
  }, {
    id: 'sessions',
    label: 'Сессии'
  }];
  const legalRows = [['Юрлицо ✎', '100 % ✎', '23 июн. 2026', true], ['Юрлицо', '100 %', '21 окт. 2025', false], ['Юрлицо', '✕', '12 окт. 2026', false]];
  return React.createElement('div', {
    style: {
      flex: 1,
      overflow: 'auto',
      background: bg,
      color: textMain,
      padding: '16px 24px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, React.createElement('h1', {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: 0
    }
  }, 'Личный кабинет'), React.createElement('span', {
    style: {
      color: '#f04527',
      fontSize: 14
    }
  }, '\u25cf')), /* Profile card */
  React.createElement('div', {
    style: {
      background: cardBg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: '16px 20px',
      marginBottom: 10,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, 'Андрей Васильев', React.createElement('span', {
    style: {
      fontSize: 13,
      opacity: .5,
      cursor: 'pointer'
    }
  }, '\u270E')), React.createElement('div', {
    style: {
      marginBottom: 10
    }
  }, React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak
    }
  }, 'Почта'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, 'jshadymail@gmail.com', React.createElement('span', {
    style: {
      fontSize: 12,
      opacity: .5,
      cursor: 'pointer'
    }
  }, '\u270E'))), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak
    }
  }, 'API ключ для расширения'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      letterSpacing: 2,
      color: textWeak
    }
  }, '•••\u00a0\u00a0\u00a0', React.createElement('span', {
    style: {
      fontSize: 14,
      opacity: .6,
      cursor: 'pointer'
    }
  }, '\u29c9')))), React.createElement('div', null, React.createElement('div', {
    style: {
      height: 32
    }
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak
    }
  }, 'Телефон'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, '+7 (913) 460-19-37', React.createElement('span', {
    style: {
      fontSize: 12,
      opacity: .5,
      cursor: 'pointer'
    }
  }, '\u270E'))))), /* Subscription card */
  React.createElement('div', {
    style: {
      background: cardBg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: '16px 20px',
      marginBottom: 10,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak,
      marginBottom: 4
    }
  }, 'Тариф'), React.createElement('div', {
    style: {
      color: isDark ? '#b56746' : '#f04527',
      fontWeight: 600
    }
  }, 'Проф до 15.07.2026 (80 дней)')), React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 12,
      color: textWeak,
      marginBottom: 4
    }
  }, 'Баланс'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      letterSpacing: 2,
      color: textWeak
    }
  }, '•••'), React.createElement('button', {
    style: {
      padding: '2px 8px',
      background: 'none',
      border: `1px solid ${border}`,
      borderRadius: 6,
      fontFamily: 'Nunito,sans-serif',
      fontSize: 12,
      color: textMain,
      cursor: 'pointer'
    }
  }, '+₽'), React.createElement('button', {
    style: {
      padding: '2px 8px',
      background: 'none',
      border: `1px solid ${border}`,
      borderRadius: 6,
      fontFamily: 'Nunito,sans-serif',
      fontSize: 12,
      color: textMain,
      cursor: 'pointer'
    }
  }, '\u29c9')))), /* Tabs + table */
  React.createElement(Tabs, {
    tabs,
    active: activeTab,
    onChange: setActiveTab,
    style: {
      marginBottom: 12,
      borderBottomColor: isDark ? '#9492a1' : '#dcdcde'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 8
    }
  }, React.createElement(Button, {
    variant: 'outline',
    size: 'sm'
  }, '+\u00a0Юрлицо')), React.createElement('div', {
    style: {
      background: cardBg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, React.createElement('thead', null, React.createElement('tr', {
    style: {
      borderBottom: `1px solid ${border}`
    }
  }, ['№', 'Название', 'Токен API', 'Срок действия токена', 'Активно', ''].map(h => React.createElement('th', {
    key: h,
    style: {
      padding: '8px 12px',
      fontWeight: 700,
      fontSize: 11,
      color: textWeak,
      textTransform: 'uppercase',
      textAlign: 'left'
    }
  }, h)))), React.createElement('tbody', null, legalRows.map(([name, token, expires, active], i) => React.createElement('tr', {
    key: i,
    style: {
      borderBottom: i < 2 ? `1px solid ${isDark ? '#2c2c30' : '#f2f4f6'}` : 'none'
    }
  }, React.createElement('td', {
    style: {
      padding: '10px 12px',
      color: textWeak
    }
  }, i + 1), React.createElement('td', {
    style: {
      padding: '10px 12px'
    }
  }, name), React.createElement('td', {
    style: {
      padding: '10px 12px',
      color: isDark ? '#6d9eeb' : '#347cce'
    }
  }, token), React.createElement('td', {
    style: {
      padding: '10px 12px'
    }
  }, expires), React.createElement('td', {
    style: {
      padding: '10px 12px'
    }
  }, React.createElement(Toggle, {
    on: active
  })), React.createElement('td', {
    style: {
      padding: '10px 12px'
    }
  }, React.createElement('span', {
    style: {
      opacity: .5,
      cursor: 'pointer'
    }
  }, '\u2699'))))))));
}
Object.assign(window, {
  AdsScreen,
  CampaignScreen,
  BriefcaseScreen,
  KeywordsScreen,
  AccountScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/Tabs.jsx
try { (() => {
/* Tabs component */
function TabBadge({
  value,
  color = 'green'
}) {
  if (!value && value !== 0) return null;
  const bg = {
    green: '#10b981',
    blue: '#1e90ff',
    orange: '#f0bc74'
  }[color] ?? '#6c757d';
  const textColor = color === 'orange' ? '#2c3046' : '#fff';
  return React.createElement('span', {
    style: {
      minWidth: 18,
      height: 18,
      borderRadius: 9999,
      background: bg,
      color: textColor,
      fontSize: 11,
      fontWeight: 700,
      padding: '0 5px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, value);
}
function Tabs({
  tabs,
  active,
  onChange,
  style
}) {
  return React.createElement('div', {
    style: {
      borderBottom: '1px solid #dcdcde',
      display: 'flex',
      ...style
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.id,
    onClick: () => onChange && onChange(t.id),
    style: {
      background: 'none',
      border: 'none',
      borderBottom: active === t.id ? '2px solid #2c3046' : '2px solid transparent',
      padding: '6px 16px',
      fontSize: 14,
      fontWeight: active === t.id ? 700 : 400,
      color: active === t.id ? '#2c3046' : '#262b40',
      cursor: 'pointer',
      fontFamily: 'Nunito,sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0
    }
  }, t.label, t.badge && React.createElement(TabBadge, {
    value: t.badge,
    color: t.badgeColor || 'green'
  }), t.badge2 && React.createElement(TabBadge, {
    value: t.badge2,
    color: t.badge2Color || 'blue'
  }))));
}
window.Tabs = Tabs;
window.TabBadge = TabBadge;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/Tabs.jsx", error: String((e && e.message) || e) }); }

})();
