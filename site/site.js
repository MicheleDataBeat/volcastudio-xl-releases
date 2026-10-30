'use strict';
(() => {
  const T = {
    en: {
      preview: 'Desktop App and Browser App · real interfaces, one demo kit.',
      title: 'Prepare sample kits for the original Volca Sample',
      lead: 'VolcaStudio XL prepares and transfers sample kits, patterns, grooves and DataBeat OS firmware. It comes in two editions for Windows, macOS and Linux: the Browser App (opens in Google Chrome) and the Desktop App.',
      pick: 'Not sure which one to pick? Start with the Browser App: you download it, open it, and it works in Google Chrome, with nothing to set up. It’s the easiest way in.',
      cta: 'Download Browser App', howTitle: 'Three steps', s1t: 'Download', s1: 'The button suggests a package for your operating system. Check the architecture and requirements; all packages are listed below.',
      s2t: 'Open', s2: 'Open the downloaded file, then open “VolcaStudio XL Browser App”.', s3t: 'Work',
      s3: 'The local helper opens the Browser App in Chrome. Add samples, save a kit, then review the transfer before sending.',
      needTitle: 'You need', need1: 'Google Chrome (free: google.com/chrome).',
      need2: 'An original Volca Sample and a 3.5 mm cable: computer audio out → Volca SYNC IN.',
      need3: 'For pattern backups only: a USB-MIDI interface → Volca MIDI IN, and a cable from the Volca headphone output → computer input.',
      whyTitle: 'Why a download?',
      why: 'The Browser App opens a local workspace in Chrome. The included helper prepares your files and connects to the audio and MIDI devices you choose. No terminal, Python installation or account is needed.',
      allTitle: 'All downloads', edition: 'Edition', system: 'System', file: 'File', none: 'The download list is unavailable or loading. Use All versions and release notes for packages.',
      guide: 'Step-by-step guide (no terminal needed)',
      inTitle: 'In VolcaStudio XL', fwTitle: 'DataBeat OS 1.0', fwLink: 'Firmware guide', fwManual: 'DataBeat OS manual',
      fw: 'Studio contains no firmware. Download the official Korg volca sample 1.42 updater from korg.com and add it in the Firmware section of either edition. Studio builds DataBeat OS 1.0 from it on your computer, checks the result and keeps the Korg updater to restore Korg’s firmware.',
      grTitle: '270 groove templates',
      gr: 'MPC3000, Dilla-inspired instrument grids, analytical swings and D’Angelo selections: templates that change timing in DataBeat OS patterns. The catalog contains timing values, without source audio or MIDI files.',
      freeTitle: 'Application and firmware licences', repoLink: 'All versions and release notes',
      free: 'VolcaStudio XL is MIT-licensed. The Korg SYRO encoder keeps Korg’s BSD-3-Clause license. Studio contains no Korg firmware: you supply the Korg updater yourself, under Korg’s licence.',
      edTitle: 'Two editions, one studio',
      edBrowser: 'A locally installed application that opens in Google Chrome. Windows x64, macOS on Apple silicon, Linux x86-64. Chrome is installed separately.',
      edDesktop: 'Native desktop application. Windows x64, macOS on Apple silicon, Linux x86-64.',
      edShared: 'Both share libraries, kits, pattern banks and firmware on the same computer. The Browser App keeps separate audio and MIDI device choices.',
      foot: 'VolcaStudio XL is an independent project for the first-generation Korg Volca Sample. It is not affiliated with Korg. “Signals sent” means the app finished playing; only the Volca can show what it received.',
      for: (s, mb) => `For ${s}. Free · ${mb} MB · works offline.`, other: 'Other systems:',
      unknown: 'Choose your system below.', ctaDesktop: 'Download Desktop App', desktopFor: (s) => `Desktop App for ${s}`, desktopAll: 'Desktop App: choose your system below',
      first: {
        windows: 'On Windows, extract the ZIP first. Packages are unsigned: verify the release checksum. Only for a copy you trust, use “More info” → “Run anyway” if Windows blocks opening.',
        macos: 'On macOS, drag the app to Applications. Packages are unsigned: verify the release checksum. Only for a copy you trust, use System Settings → Privacy & Security → “Open Anyway” if opening is blocked.',
        linux: 'On Linux: extract the archive, then double-click “VolcaStudio XL Browser App” (or right-click → Run as a program). The Browser App can add itself to the applications menu from Connections.',
      },
      open: { windows: 'Extract the ZIP, open the folder, double-click “VolcaStudio XL Browser App”.', macos: 'Open the ZIP, drag “VolcaStudio XL Browser App” to Applications, open it.', linux: 'Extract the archive and double-click “VolcaStudio XL Browser App”.' },
      names: { windows: 'Windows 10/11 (64-bit)', macos: 'macOS on Apple silicon', linux: 'Linux x86-64 (glibc 2.35+)' },
    },
    it: {
      preview: 'Desktop App e Browser App · interfacce reali, un kit dimostrativo.',
      title: 'Prepara kit di campioni per la Volca Sample originale',
      lead: 'VolcaStudio XL prepara e trasferisce kit di campioni, pattern, groove e firmware DataBeat OS. Ci sono due edizioni per Windows, macOS e Linux: la Browser App (si apre in Google Chrome) e la Desktop App.',
      pick: 'Non sai quale scegliere? Inizia dalla Browser App: lo scarichi, lo apri e funziona in Google Chrome, senza configurare nulla. È il modo più semplice per cominciare.',
      cta: 'Scarica la Browser App', howTitle: 'Tre passi', s1t: 'Scarica', s1: 'Il pulsante suggerisce un pacchetto per il sistema operativo. Controlla architettura e requisiti; tutti i pacchetti sono elencati qui sotto.',
      s2t: 'Apri', s2: 'Apri il file scaricato, poi apri “VolcaStudio XL Browser App”.', s3t: 'Lavora',
      s3: 'Il servizio locale apre la Browser App in Chrome. Aggiungi i campioni, salva il kit e controlla il trasferimento prima di inviare.',
      needTitle: 'Ti serve', need1: 'Google Chrome (gratuito: google.com/chrome).',
      need2: 'Una Volca Sample originale e un cavo jack 3,5 mm: uscita audio del computer → SYNC IN della Volca.',
      need3: 'Solo per il backup dei pattern: un’interfaccia USB-MIDI → MIDI IN della Volca e un cavo dall’uscita cuffie della Volca → ingresso del computer.',
      whyTitle: 'Perché un download?',
      why: 'La Browser App apre uno spazio di lavoro locale in Chrome. Il servizio incluso prepara i file e usa le interfacce audio e MIDI che scegli. Non servono terminale, installazione di Python o account.',
      allTitle: 'Tutti i download', edition: 'Edizione', system: 'Sistema', file: 'File', none: 'L’elenco dei download non è disponibile o si sta caricando. Trovi i pacchetti in Tutte le versioni e le note di rilascio.',
      guide: 'Guida passo passo (senza terminale)',
      inTitle: 'In VolcaStudio XL', fwTitle: 'DataBeat OS 1.0', fwLink: 'Guida al firmware', fwManual: 'Manuale di DataBeat OS',
      fw: 'Studio non contiene firmware. Scarica da korg.com l’aggiornamento ufficiale Korg volca sample 1.42 e aggiungilo nella sezione Firmware di una delle due edizioni. Studio crea sul tuo computer DataBeat OS 1.0, verifica il risultato e conserva l’aggiornamento Korg per ripristinare il firmware Korg.',
      grTitle: '270 template di groove',
      gr: 'MPC3000, griglie per strumento ispirate a Dilla, swing analitici e selezioni D’Angelo: template che cambiano la temporizzazione dei pattern DataBeat OS. Il catalogo contiene valori di temporizzazione, senza audio o file MIDI originali.',
      freeTitle: 'Licenze dell’app e del firmware', repoLink: 'Tutte le versioni e le note di rilascio',
      free: 'VolcaStudio XL è distribuito con licenza MIT. L’encoder Korg SYRO mantiene la licenza BSD-3-Clause di Korg. Studio non contiene firmware Korg: fornisci tu l’aggiornamento Korg, secondo la licenza di Korg.',
      edTitle: 'Due edizioni, un solo studio',
      edBrowser: 'Applicazione installata sul computer che si apre in Google Chrome. Windows x64, macOS su Apple silicon, Linux x86-64. Chrome va installato a parte.',
      edDesktop: 'Applicazione desktop nativa. Windows x64, macOS su Apple silicon, Linux x86-64.',
      edShared: 'Le due edizioni condividono librerie, kit, banchi di pattern e firmware sullo stesso computer. La Browser App conserva separatamente le scelte delle interfacce audio e MIDI.',
      foot: 'VolcaStudio XL è un progetto indipendente per la Korg Volca Sample di prima generazione. Non è affiliato a Korg. “Segnali inviati” significa che l’app ha finito di riprodurli: solo la Volca può mostrare cosa ha ricevuto.',
      for: (s, mb) => `Per ${s}. Gratuito · ${mb} MB · funziona offline.`, other: 'Altri sistemi:',
      unknown: 'Scegli il tuo sistema qui sotto.', ctaDesktop: 'Scarica la Desktop App', desktopFor: (s) => `Desktop App per ${s}`, desktopAll: 'Desktop App: scegli il sistema qui sotto',
      first: {
        windows: 'Su Windows, estrai prima lo ZIP. I pacchetti non sono firmati: verifica il checksum della release. Solo per una copia di cui ti fidi, scegli “Ulteriori informazioni” → “Esegui comunque” se Windows blocca l’apertura.',
        macos: 'Su macOS, trascina l’app in Applicazioni. I pacchetti non sono firmati: verifica il checksum della release. Solo per una copia di cui ti fidi, usa Impostazioni di Sistema → Privacy e sicurezza → “Apri comunque” se l’apertura è bloccata.',
        linux: 'Su Linux: estrai l’archivio e fai doppio clic su “VolcaStudio XL Browser App” (oppure tasto destro → Esegui come programma). La Browser App può aggiungersi al menu applicazioni da Connections.',
      },
      open: { windows: 'Estrai lo ZIP, apri la cartella, doppio clic su “VolcaStudio XL Browser App”.', macos: 'Apri lo ZIP, trascina “VolcaStudio XL Browser App” in Applicazioni e aprila.', linux: 'Estrai l’archivio e fai doppio clic su “VolcaStudio XL Browser App”.' },
      names: { windows: 'Windows 10/11 (64 bit)', macos: 'macOS su Apple silicon', linux: 'Linux x86-64 (glibc 2.35+)' },
    },
  };
  const EDITIONS = { browser: 'Browser App', desktop: 'Desktop App' };
  const fileName = (p) => p.file.split('/').pop();
  const $ = (s) => document.querySelector(s);
  const system = (() => {
    const text = `${navigator.userAgentData ? navigator.userAgentData.platform : ''} ${navigator.platform} ${navigator.userAgent}`.toLowerCase();
    if (text.includes('win')) return 'windows';
    if (text.includes('mac')) return 'macos';
    if (text.includes('linux') && !text.includes('android')) return 'linux';
    return null;
  })();
  let lang = 'en';
  try {
    // Use English unless the visitor explicitly chose another language.
    const saved = localStorage.getItem('volcastudio-site-lang');
    if (saved === 'it' || saved === 'en') lang = saved;
  } catch (e) { /* English also works when browser storage is unavailable. */ }
  let packages = [];
  let browser = [];

  function render() {
    const t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => { if (typeof t[el.dataset.i18n] === 'string') el.textContent = t[el.dataset.i18n]; });
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    $('#guide-link').href = lang === 'it' ? 'docs/browser-quick-start.it.html' : 'docs/browser-quick-start.html';
    const mine = browser.find((p) => p.system === system);
    const cta = $('#cta');
    if (mine) {
      cta.href = mine.file;
      cta.setAttribute('download', '');
      $('#cta-for').textContent = t.for(t.names[system], Math.round((mine.bytes || 0) / 1048576));
    } else {
      cta.href = '#downloads';
      cta.removeAttribute('download');
      $('#cta-for').textContent = browser.length ? t.unknown : t.none;
    }
    const others = browser.filter((p) => p !== mine);
    $('#other').replaceChildren(...(others.length ? [t.other + ' ', ...others.flatMap((p, i) => {
      const a = document.createElement('a'); a.href = p.file; a.textContent = t.names[p.system] || p.system; a.setAttribute('download', '');
      return i ? [' · ', a] : [a];
    })] : []));
    const point = (el, pkg, title) => {
      el.href = pkg ? pkg.file : '#downloads';
      el.title = title;
      if (pkg) el.setAttribute('download', ''); else el.removeAttribute('download');
    };
    const desktop = packages.find((p) => p.edition === 'desktop' && p.system === system);
    point($('#cta-desktop'), desktop, desktop ? t.desktopFor(t.names[system]) : t.desktopAll);
    $('#first-open').textContent = system ? t.first[system] : '';
    if (system) $('#open-step').textContent = t.open[system];
    const rows = $('#download-rows');
    if (packages.length) {
      rows.replaceChildren(...packages.map((p) => {
        const tr = document.createElement('tr');
        const a = document.createElement('a'); a.href = p.file; a.textContent = fileName(p); a.setAttribute('download', '');
        [EDITIONS[p.edition] || p.edition, t.names[p.system] || p.system, a, p.sha256].forEach((v) => { const td = document.createElement('td'); td.append(v); tr.append(td); });
        tr.lastChild.className = 'hash';
        return tr;
      }));
    }
  }
  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('volcastudio-site-lang', lang); } catch (e) { /* ignore */ }
    render();
  }));
  fetch('downloads.json', { cache: 'no-store' }).then((r) => (r.ok ? r.json() : { packages: [] })).catch(() => ({ packages: [] }))
    .then((data) => {
      packages = (data.packages || []).map((p) => ({ edition: 'browser', ...p }));
      browser = packages.filter((p) => p.edition === 'browser');
      if (data.release_url) $('#repo-link').href = data.release_url;
      render();
    });
  render();
})();
