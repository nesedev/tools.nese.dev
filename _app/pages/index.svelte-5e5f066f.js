import {
  S as K,
  i as V,
  s as W,
  e as _,
  t as c,
  k as b,
  c as f,
  a as u,
  h as p,
  d as i,
  m as q,
  b as x,
  g as k,
  J as o,
  n as y,
} from '../chunks/index-dd45c2ae.js';
function A(E) {
  let s, h, r, t, m, a, v, d;
  return {
    c() {
      (s = _('h1')),
        (h = c('Welcome to SvelteKit')),
        (r = b()),
        (t = _('p')),
        (m = c('Visit ')),
        (a = _('a')),
        (v = c('kit.svelte.dev')),
        (d = c(' to read the documentation')),
        this.h();
    },
    l(e) {
      s = f(e, 'H1', {});
      var l = u(s);
      (h = p(l, 'Welcome to SvelteKit')), l.forEach(i), (r = q(e)), (t = f(e, 'P', { class: !0 }));
      var n = u(t);
      (m = p(n, 'Visit ')), (a = f(n, 'A', { href: !0, class: !0 }));
      var S = u(a);
      (v = p(S, 'kit.svelte.dev')),
        S.forEach(i),
        (d = p(n, ' to read the documentation')),
        n.forEach(i),
        this.h();
    },
    h() {
      x(a, 'href', 'https://kit.svelte.dev'),
        x(a, 'class', 'svelte-1mp592p'),
        x(t, 'class', 'svelte-1mp592p');
    },
    m(e, l) {
      k(e, s, l), o(s, h), k(e, r, l), k(e, t, l), o(t, m), o(t, a), o(a, v), o(t, d);
    },
    p: y,
    i: y,
    o: y,
    d(e) {
      e && i(s), e && i(r), e && i(t);
    },
  };
}
class H extends K {
  constructor(s) {
    super(), V(this, s, null, A, W, {});
  }
}
export { H as default };
