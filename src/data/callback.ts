export const CONSENT_VERSION = "callback-2026-11-09";
export const CONSENT_TEXT = "Ja, Tim van StudioLee mag me over deze aanvraag mailen. Ik krijg de demo per e-mail.";
export const PROMOTION_TEXT = "Stuur me ook af en toe tips en aanbiedingen per e-mail. Niet verplicht.";

export const callbackPage: { heading: string; intro: string; plans: string; opening: [string, string][] } = {
  "heading": "De terugbelagent voor fietsenmakers",
  "intro": "Een gemiste oproep hoeft geen gemiste klant te zijn. De terugbelagent belt terug, vraagt uit wat er speelt en zet de afspraak klaar.",
  "plans": "De website is de basis. De terugbelagent, de chatbot en de marketing koppel je erbij via je pakket.",
  "opening": [
    [
      "Agent",
      "Goedemiddag, u spreekt met de digitale assistent van [bedrijfsnaam]. U belde net, maar we stonden in de werkplaats. Waarmee kan ik u helpen?"
    ],
    [
      "Klant",
      "Mijn e-bike geeft een foutmelding."
    ],
    [
      "Agent",
      "Welk merk is het en welke code ziet u op het scherm? Dan kan de monteur zich voorbereiden."
    ],
    [
      "Agent",
      "Ik plan de fiets in voor de werkplaats en stuur de bevestiging per WhatsApp."
    ]
  ]
};
