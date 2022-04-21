import { browser } from '$app/env';
import { writable, type Writable } from 'svelte/store';

export enum GdprConsent {
  not_opted = '',
  denied = 'denied',
  necessary = 'necessary',
  functional = 'functional',
}

export function localStorageWriteable<T>(key: string, defaultValue: T) {
  let lsItem;
  if (browser) {
    lsItem = defaultValue;
    const json = localStorage.getItem(key);
    if (json) {
      lsItem = JSON.parse(json);
    }
  }
  const lsw: Writable<T> = writable(lsItem);
  lsw.subscribe((val) => {
    if (browser) {
      localStorage.setItem(key, JSON.stringify(val));
    }
  });

  return lsw;
}

export const gdprConsentVisible = localStorageWriteable('gdprConsentVisible', true);
// setTimeout(() => {
//   console.log(gdprConsentVisible);
//   gdprConsentVisible.set(true);
// }, 500);

export const gdprConsent = localStorageWriteable('gdprConsent', GdprConsent.not_opted);
