import Home from './index'
import EDDData from '../context/Context'
import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css"

export default function MyApp() {
  const eddData = {
    "Unemployment Insurance" : {

    },
    "Disability Insurance" : {

    },
    "Paid Family Leave" : {
      "Benefit Programs Online" : {
        "General Information": {

        },
        "Registration": {

        },
        "Update Email, Password, and Security Profile": {

        },
        "Forgot Email": {

        },
        "Forgot Password": {

        }
      },
      "SDI Online": {

      },
      "Claims Questions": {

      },
      "Payments": {

      },
    },
    "Report Fraud": {

    },
    "Workforce Services": {

    },
    "CalJOBS": {

    },
    "Labor Market Information": {

    },
    "Taxes": {

    },
    "Benefit Overpayment": {

    },
  };
  return (
    <EDDData.Provider value={eddData}>
      <Home />
    </EDDData.Provider>
  );
}
