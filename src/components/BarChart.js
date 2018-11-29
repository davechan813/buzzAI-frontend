import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.worldwithcountries';
import Usa from 'fusioncharts/maps/fusioncharts.usa';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import charts from 'fusioncharts/fusioncharts.charts';

ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

const styles = theme => ({
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 120,
    textAlign: 'left'
  },
});

function sortData(data, method, type) {
  if (method === 'hit') {
    data.sort(function(a, b) {
      return type * (a.value[0] - b.value[0]);
    });
  } else {
    data.sort(function(a, b) {
      return type * ('' + a.geoName).localeCompare(b.geoName);
    });
  }
  for (var i in data) data[i].hit = data[i].value[0];
  return data;
}

let nameToId = {
  "AG": "01",
  "BS": "02",
  "BB": "03",
  "BZ": "04",
  "CA": "05",
  "CR": "06",
  "CU": "07",
  "DM": "08",
  "DO": "09",
  "SV": "10",
  "GD": "11",
  "GT": "12",
  "HT": "13",
  "HN": "14",
  "JM": "15",
  "MX": "16",
  "NI": "17",
  "PA": "18",
  "KN": "19",
  "LC": "20",
  "VC": "21",
  "TT": "22",
  "US": "23",
  "GL": "24",
  "AR": "25",
  "BO": "26",
  "BR": "27",
  "CL": "28",
  "CO": "29",
  "EC": "30",
  "FK": "31",
  "GF": "32",
  "GY": "33",
  "PY": "34",
  "PE": "35",
  "SR": "36",
  "UY": "37",
  "VE": "38",
  "DZ": "39",
  "AO": "40",
  "BJ": "41",
  "BW": "42",
  "BF": "43",
  "BI": "44",
  "CM": "45",
  "CV": "46",
  "CP": "47",
  "TD": "48",
  "KM": "49",
  "CI": "50",
  "CD": "51",
  "DJ": "52",
  "EG": "53",
  "GQ": "54",
  "ER": "55",
  "ET": "56",
  "GA": "57",
  "GH": "58",
  "GN": "59",
  "GW": "60",
  "KE": "61",
  "LS": "62",
  "LI": "63",
  "LR": "64",
  "MS": "65",
  "MW": "66",
  "ML": "67",
  "MR": "68",
  "MA": "69",
  "MZ": "70",
  "NA": "71",
  "NE": "72",
  "NG": "73",
  "RW": "74",
  "ST": "75",
  "SN": "76",
  "SC": "77",
  "SL": "78",
  "SO": "79",
  "ZA": "80",
  "SD": "81",
  "SZ": "82",
  "TZ": "83",
  "TG": "84",
  "TN": "85",
  "UG": "86",
  "WA": "87",
  "ZM": "88",
  "ZW": "89",
  "GM": "90",
  "CG": "91",
  "MI": "92",
  "AF": "93",
  "AM": "94",
  "AZ": "95",
  "BD": "96",
  "BT": "97",
  "BN": "98",
  "MM": "99",
  "KH": "100",
  "CN": "101",
  "TP": "102",
  "GE": "103",
  "IN": "104",
  "ID": "105",
  "IA": "106",
  "JP": "107",
  "KZ": "108",
  "KP": "109",
  "KR": "110",
  "KG": "111",
  "LA": "112",
  "MY": "113",
  "MN": "114",
  "NP": "115",
  "PK": "116",
  "PH": "117",
  "RU": "118",
  "SG": "119",
  "LK": "120",
  "TJ": "121",
  "TH": "122",
  "TM": "123",
  "UZ": "124",
  "VN": "125",
  "TW": "126",
  "HK": "127",
  "MO": "128",
  "AL": "129",
  "AD": "130",
  "AT": "131",
  "BY": "132",
  "BE": "133",
  "BH": "134",
  "BG": "135",
  "HY": "136",
  "CZ": "137",
  "DK": "138",
  "EE": "139",
  "FI": "140",
  "FR": "141",
  "DE": "142",
  "GR": "143",
  "HU": "144",
  "IC": "145",
  "IR": "146",
  "IT": "147",
  "LV": "148",
  "LN": "149",
  "LT": "150",
  "LU": "151",
  "MK": "152",
  "MT": "153",
  "MV": "154",
  "MC": "155",
  "MG": "156",
  "NL": "157",
  "NO": "158",
  "PL": "159",
  "PT": "160",
  "RO": "161",
  "SM": "162",
  "CS": "163",
  "SK": "164",
  "SI": "165",
  "ES": "166",
  "SE": "167",
  "CH": "168",
  "UA": "169",
  "UK": "170",
  "VA": "171",
  "CY": "172",
  "TK": "173",
  "AU": "175",
  "FJ": "176",
  "KI": "177",
  "MH": "178",
  "FM": "179",
  "NR": "180",
  "NZ": "181",
  "PW": "182",
  "PG": "183",
  "WS": "184",
  "SB": "185",
  "TO": "186",
  "TV": "187",
  "VU": "188",
  "NC": "189",
  "BA": "190",
  "IZ": "191",
  "IS": "192",
  "JO": "193",
  "KU": "194",
  "LB": "195",
  "OM": "196",
  "QA": "197",
  "SA": "198",
  "SY": "199",
  "AE": "200",
  "YM": "201",
  "PR": "202",
  "KY": "203",
  "SS": "204",
  "KO": "205",
  "AB": "206",
  "AN": "207",
  "AS": "208",
  "BM": "209",
  "BU": "210",
  "CC": "211",
  "CK": "212",
  "CT": "213",
  "CW": "214",
  "FA": "215",
  "FP": "216",
  "GI": "217",
  "GO": "218",
  "GP": "219",
  "GS": "220",
  "GU": "221",
  "IM": "222",
  "JS": "223",
  "KS": "224",
  "MD": "225",
  "ME": "226",
  "MP": "227",
  "MQ": "228",
  "NF": "229",
  "NM": "230",
  "NU": "231",
  "PI": "232",
  "RE": "233",
  "SF": "234",
  "SH": "235",
  "SP": "236",
  "TC": "237",
  "VK": "238",
  "VS": "239",
  "WE": "240",
  "WF": "241",
  "WC": "242",
  "LP": "243",
  "AB": "244",
  "NA": "245",
  "NC": "246",
  "SV": "247",
  "TK": "248",
};

class DataChart extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {
    let chartConfigs = {
      type: 'WorldWithCountries',
      width: '900',
      height: '500',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "includevalueinlabels": "1",
          "labelsepchar": ": ",
          "entityFillHoverColor": "#FFF9C4",
          "theme": "fusion"
        },
        "colorrange": {
          "minvalue": "0",
          "code": "#FFE0B2",
          "gradient": "1",
          "color": [{
              "minvalue": "0",
              "maxvalue": "30",
              "color": "#FFD74D"
          }, {
              "minvalue": "30",
              "maxvalue": "60",
              "color": "#FB8C00"
          }, {
              "minvalue": "60",
              "maxvalue": "100",
              "color": "#E65100"
          }]
        },
      },
    };

    chartConfigs.dataSource.data = this.props.data.map(row => ({
      "id": nameToId[row.geoCode],
      "value": row.value[0].toString(),
    }));

    console.log("data", this.props.data);
    console.log("this.chartConfigs", this.chartConfigs);

    return (
      <ReactFC
        height='130'
        {...chartConfigs}
      />
    );
  }
}

export default withStyles(styles)(DataChart);
