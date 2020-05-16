const focusImageEN = require('../../img/pages/home/homesite-header-EN.png')
const focusImageENMob = require('../../img/pages/home/home-homesite-header-EN-mobile-size.png')
const focusImageDE = require('../../img/pages/home/homesite-header-DE.png')
const focusImageDEMob = require('../../img/pages/home/home-homesite-header-DE-mobile-size.png')

const horizonLogoDE = require('../../img/pages/home/eu-de-horizon-2020.svg')
const horizonLogoEN = require('../../img/pages/home/eu-en-horizon-2020.svg')

const prDesk = require('../../img/pages/home/press-release-web.svg')
const prTab = require('../../img/pages/home/press-release-tablet.svg')
const prMob = require('../../img/pages/home/press-release-mobile.svg')

const appStore = require('../../img/pages/home/apple.svg')
const playStore = require('../../img/pages/home/android.svg')

const pattern = require('../../img/common/fiat-abstract-pattern.svg')

module.exports = {
  settings: {
    hero: {
      style: {
        backgroundImage: true,
        align: 'left',
        // todo: temporary solution
        TEMPORARYscreenShotStyleTop: ' en-screen-shot',
      },
      focusImageEN: {
        desktop: focusImageEN,
        laptop: focusImageEN,
        mob: focusImageENMob,
      },
      focusImageDE: {
        desktop: focusImageDE,
        laptop: focusImageDE,
        mob: focusImageDEMob,
      },
      horizonLogoEN,
      horizonLogoDE,
      appStore,
      playStore,
      cta: {
        textEN: 'Get your free account',
        textDE: 'Kostenloses Konto eröffnen',
        href: process.env.GLOBAL_ONBOARDING_URL,
      },
      pressRelease: {
        prDesk,
        prTab,
        prMob,
      },
      theme: 'light',
    },
    pattern,
  },
}
