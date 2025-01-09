function configIt() {
  return {
    name: `it`,
    linkHub: {
      configure: {
        label: `DS N°8<span>CONFIGURAZIONE</span>`,
        link: `https://store.dsautomobiles.it/configurable`,
      },
      brochure: {
        label: `RIMANERE<span>INFORMATI</span>`,
        link: `https://www.dsautomobiles.it/modelli-ds/ds-7.html`,
      },
      testDrive: {
        label: `<span>TEST DRIVE</span>`,
        link: `https://landingform.dsautomobiles.it/testdrive_qrcode/`,
      },
      arView: `<div class="display_text_ar_div"><div><img src="assets/images/ar_icon.svg" class="display_img_ar" alt="AR icon"/></div><div class="display_text_ar">DS N°8 nella<span>REALTÀ AUMENTATA</span></div></div>`,
    },
    arIosBtn: `AR`,
    tutorial: {
      title: `MANUALE<br/>UTENTE`,
      part1: `Toccare per aumentare o<br/> diminuire le dimensioni`,
      part2: `Tieni premuto e muovi il dito<br/> per ruotare il veicolo`,
      part3: `Clicca su questo pulsante per<br/> proiettare l'auto nel tuo ambiente`,
    }
  };
};
