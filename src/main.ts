import Invoice from "./invoice"

let invoice = new Invoice()
console.log(
  invoice.generate({
    invoice: { 
      id: "INV0001",
      name: "Invoice Number 0001",
      typeCode: "338",
      issueDate: "2016-09-12T19:19:25.0",
      note: "invoice remark"
    },
    seller: {
      name: "Contemporary electronics Co. Ltd.",
      id: "057552600909900000",
      address: {
        countryId: "TH",
        postCode: "10310",
        countrySubDivisionID: "10",
        cityID : "1017",
        citySubDivisionID : "101701",
        buildingNumber: "3/34"
      }
    }, 
    buyer: {
      name: "Tara Laughstand",
      id: "057552600909900000",
      address: {
        countryId: "TH",
        postCode: "10310",
        countrySubDivisionID: "10",
        cityID : "1004",
        citySubDivisionID : "100402",
        streetName : "Rama VI",
        lineThree : "Chula Soi 10",
        buildingNumber: "799/89"
      }
    },
    deliveryAddress: {
      countryId: "TH",
      postCode: "10310",
      countrySubDivisionID: "10",
      cityID : "1004",
      citySubDivisionID : "100402",
      streetName : "Rama VI",
      lineThree : "Chula Soi 10",
      buildingNumber: "799/89"
    },
    order: {
      currencyCode: "THB",
      taxes: [
        {
          chargeType: "tax",
          typeCode: "VAT",
          rate: 7,
          basisAmount: 63050,
          calculatedAmount: 4413.50
        }
      ],
      charges: [
        {
          typeCode: "95",
          chargeIndicator: false,
          actualAmount: 2500
        }
      ],
      summary: {
        lineTotalAmount: 63050,
        allowanceTotalAmount: 2500,
        taxBasisTotalAmount: 60550,
        taxTotalAmount: 4238.50,
        grandTotalAmount: 64788.50
      },
      lineItems: [
        {
          id: "1",
          product: {
            id: "PR0001",
            name: "Eyebrow pencil"
          },
          amount: 359,
          quantityAmount: 150,
          summary: {
            netLineTotalAmount: 52350,
            netIncludingTaxesLineTotalAmount: 56014.5,
            taxTotalAmount: 3664.5
          },
          taxes: [
            {
              chargeType: "tax",
              typeCode: "VAT",
              rate: 7,
              basisAmount: 52350,
              calculatedAmount: 3664.50
            }
          ],
          charges: [
            {
              typeCode: "95",
              actualAmount: 1500,
              chargeIndicator: false
            }
          ]
        }
      ]
    }
  })
)
//export {
//  invoice
//}
