export let defaultCountryCode = "SG";

export let countries = [
  {
    countryCode: "SG",
    googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798167640012!2d103.85689231444971!3d1.2956953990549809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c4401f071f%3A0x3ce0fafa822c08f6!2sReal%20Estate%20Analytics!5e0!3m2!1sen!2ssg!4v1635401278030!5m2!1sen!2ssg",
    locale: "en-US",
    emails: {
      consumer: "consumer@rea-sg.com",
      concierge: "concierge@rea-sg.com",
      corporate: "corporate@rea-sg.com",
      media: "media@rea-sg.com"
    },
    phones: [
      {
        countryCode: "SG",
        phone: "+65 6226-2723"
      }, {
        countryCode: "HK",
        phone: "+852 2639 3698"
      }
    ],
    addresses: [
      {
        countryCode: "SG",
        address: [
          "Real Estate Analytics Singapore",
          "9 Temasek Boulevard",
          "Suntec Tower Two",
          "#23 - 02, Singapore 038989"
        ]
      },
      {
        countryCode: "HK",
        address: [
          "Real Estate Analytics HK Limited",
          "904-907 Dah Sing Financial Centre",
          "248 Queen's Road East, Wanchai, HK"
        ]
      }
    ]
  },
  {
    countryCode: "ID",
    googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.282841808727!2d106.80657751476916!3d-6.226389795492856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505affffff%3A0x301b8a0f5d2c33ed!2sEquity%20Tower!5e0!3m2!1sen!2ssg!4v1636442773957!5m2!1sen!2ssg",
    locale: "id-ID",
    emails: {
      consumer: "consumer@rea-id.com",
      concierge: "concierge@rea-id.com",
      corporate: "corporate@rea-id.com",
      media: "media@rea-id.com"
    },
    phones: ["+62 8126 999 4959"],
    addresses: [
      [
        "PT Real Estate Analytics Indonesia",
        "Equity Tower Lt 49",
        "Jl Jenderal Sudirman Kav 52-53",
        "Senayan, Kebayoran Baro",
        "Jakarta Selatan",
      ]
    ],
    additionalContacts: [
      {
        name: "Layanan Pengaduan Konsumen",
        contacts: [
          {
            title: "Contact Number",
            contact: "<a href='tel:085311111010'>0853 1111 1010</a>"
          },
          {
            title: "Email",
            contact: "<a href='mailto:cpengaduan.konsumen@kemendag.go.id'>cpengaduan.konsumen@kemendag.go.id</a>"
          },
          {
            title: "Website",
            contact: "<a href='simpktn.kemendag.go.id'>simpktn.kemendag.go.id</a>"
          },
          {
            title: "Mail Address",
            contact: "Jl MI Ridwan Rais no.5 Jakarta 10110"
          }
        ]
      }
    ]
  }
]

export function getCountryVariables(countryCode, variables) {
  return countries.find(element => element.countryCode === countryCode) ? countries.find(element => element.countryCode === countryCode)[variables] : null
};