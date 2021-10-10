function ValidateNumber(e) {
    $('#roll-input').on('input', function (event) {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
};

var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
    document.getElementById("error").style.display = ret ? "none" : "inline";
    return ret;
}

function checkLength(el) {
    if (el.value.length != 5) {
        // alert("length must be exactly 6 characters")
        return false;
    }
}
function empty() {
    var x;
    x = document.getElementById("roll-input").value;
    if (x == "") {
        //$(document).ready(function () {
        //    $("#mod").click(function () {
        //        $("h4").hide();
        //    });
        //});
        //alert("Enter a Valid Roll Number");
        document.getElementById("nullVal").innerHTML = "يرجى ملى قيمة عددية";
        return false;
    }
}

$(function () {
    $("#roll-input").bind('paste', function () {
        setTimeout(function () {
            //get the value of the input text
            var data = $('#roll-input').val();
            //replace the special characters to ''
            var dataFull = data.replace(/[^\w\s]/gi, '');
            //set the new value of the input text without special characters
            $('#roll-input').val(dataFull);
        });
    });
});

var jsonFile = [{
    "LicenceNo": "177-C1-2015",
    "Manufucturer": "Altai Technologies Limited",
    "Model": "WA8011N",
    "DeviceType": "Access Point"
},
{
    "LicenceNo": "139-C1-2015",
    "Manufucturer": "Edimax Technology Co.,Ltd.",
    "Model": "EW-7811Un",
    "DeviceType": "Adapter"
},
{
    "LicenceNo": "312-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "VP1",
    "DeviceType": "BT Car Radio"
},
{
    "LicenceNo": "355-C1-2017",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "VP2RFP",
    "DeviceType": "BT Transceiver"
},
{
    "LicenceNo": "009-C1-2013",
    "Manufucturer": "Rosemount Int",
    "Model": "1420",
    "DeviceType": "TR"
},
{
    "LicenceNo": "172-C1-2015",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "F15-125KHz",
    "DeviceType": "Immobilizer"
},
{
    "LicenceNo": "121-C1-2015",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "LCA 2.0 A",
    "DeviceType": "LCA 2.0 A SWA"
},
{
    "LicenceNo": "337-C1-2017",
    "Manufucturer": "Huf Hülsbeck & Fürst GmbH & Co KG",
    "Model": "HUF7059",
    "DeviceType": "Remote Control"
},
{
    "LicenceNo": "002-C1-2013",
    "Manufucturer": "Apple Inc",
    "Model": "A1432",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "010-C1-2013",
    "Manufucturer": "Rosemount Int",
    "Model": "D7520013",
    "DeviceType": "TR"
},
{
    "LicenceNo": "011-C1-2013",
    "Manufucturer": "Rosemount Int",
    "Model": "648",
    "DeviceType": "TR"
},
{
    "LicenceNo": "331-C1-2017",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "FS1744",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "176-C1-2015",
    "Manufucturer": "Altai Technologies Limited",
    "Model": "WA1011C",
    "DeviceType": "Access Point"
},
{
    "LicenceNo": "186-C1-2015",
    "Manufucturer": "Poston Scientific Corporation",
    "Model": "L300, L301, L321",
    "DeviceType": "ACCOLADE"
},
{
    "LicenceNo": "276-C1-2016",
    "Manufucturer": "Ubiquiti Networks",
    "Model": "AF-5U",
    "DeviceType": "airFiber"
},
{
    "LicenceNo": "287-C1-2016",
    "Manufucturer": "Agilis Company",
    "Model": "ALB190 Series",
    "DeviceType": "ALB190 Series"
},
{
    "LicenceNo": "182-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "S701,S702,S722",
    "DeviceType": "ALTRUA 2"
},
{
    "LicenceNo": "236-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1554",
    "DeviceType": "Apple Watch"
},
{
    "LicenceNo": "240-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1623",
    "DeviceType": "Apple Watch"
},
{
    "LicenceNo": "239-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1638",
    "DeviceType": "Apple Watch"
},
{
    "LicenceNo": "196-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "D044, D046, D047&D045",
    "DeviceType": "AUTOGEN MINI"
},
{
    "LicenceNo": "202-C1-2015",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "40737300",
    "DeviceType": "BCM"
},
{
    "LicenceNo": "304-C1-2016",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "AC110CTGG",
    "DeviceType": "Bluetooth"
},
{
    "LicenceNo": "263-C1-2016",
    "Manufucturer": "Humax Automotive Co Ltd",
    "Model": "HAGM1009",
    "DeviceType": "Bluetooth"
},
{
    "LicenceNo": "264-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LGBTM",
    "DeviceType": "Bluetooth"
},
{
    "LicenceNo": "179-C1-2015",
    "Manufucturer": "Visteon Corporation",
    "Model": "MAZ",
    "DeviceType": "Bluetooth"
},
{
    "LicenceNo": "098-C1-2014",
    "Manufucturer": "Visteon Corporation",
    "Model": "VE-BT001",
    "DeviceType": "Bluetooth"
},
{
    "LicenceNo": "157-C1-2015",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "EN2H",
    "DeviceType": "Bluetooth Unit"
},
{
    "LicenceNo": "306-C1-2016",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "AC110A0GG",
    "DeviceType": "Bluetooth"
},
{
    "LicenceNo": "308-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "BCMevoC",
    "DeviceType": "Body Control"
},
{
    "LicenceNo": "149-C1-2015",
    "Manufucturer": "Rosemount Inc",
    "Model": "487-7440",
    "DeviceType": "Gateway"
},
{
    "LicenceNo": "153-C1-2015",
    "Manufucturer": "Rosemount Inc",
    "Model": "CV-DW",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "323-C1-2016",
    "Manufucturer": "Magneti Marelli S.P.A",
    "Model": "EE0002",
    "DeviceType": "BT"
},
{
    "LicenceNo": "340-C1-2017",
    "Manufucturer": "Alpine Electronics Inc",
    "Model": "EE0002",
    "DeviceType": "BT"
},
{
    "LicenceNo": "201-C1-2015",
    "Manufucturer": "Ford Motor Company",
    "Model": "KMHSG1G1",
    "DeviceType": "BT Car Kit"
},
{
    "LicenceNo": "156-C1-2015",
    "Manufucturer": "Clarion Corporation of America",
    "Model": "A8DGEN31DE",
    "DeviceType": "BT Head Unit"
},
{
    "LicenceNo": "299-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1523",
    "DeviceType": "BT headphone"
},
{
    "LicenceNo": "300-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1722",
    "DeviceType": "BT headphone"
},
{
    "LicenceNo": "200-C1-2015",
    "Manufucturer": "Ford Motor Company",
    "Model": "KMHSYNCG2",
    "DeviceType": "BT Sync Module"
},
{
    "LicenceNo": "341-C1-2017",
    "Manufucturer": "Alpine Electronics Inc",
    "Model": "EE0001",
    "DeviceType": "BT WLAN"
},
{
    "LicenceNo": "327-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "WCM730Q",
    "DeviceType": "BT Wi-Fi Module"
},
{
    "LicenceNo": "324-C1-2016",
    "Manufucturer": "Magneti Marelli S.P.A",
    "Model": "EE0001",
    "DeviceType": "BT-WLAN-GPS"
},
{
    "LicenceNo": "118-C1-2015",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "AC111DKMG",
    "DeviceType": "Car Audio"
},
{
    "LicenceNo": "319-C1-2016",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "ADB10G6MG",
    "DeviceType": "CAR AUDIO"
},
{
    "LicenceNo": "124-C1-2015",
    "Manufucturer": "Humax Automotive Co Ltd",
    "Model": "HAGM1006",
    "DeviceType": "Car Audio"
},
{
    "LicenceNo": "229-C1-2016",
    "Manufucturer": "Xiamen Clarion Electrical Enterprise Co.,Ltd",
    "Model": "RD6",
    "DeviceType": "Car Audio"
},
{
    "LicenceNo": "180-C1-2015",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "VP2Refresh",
    "DeviceType": "Car Audio"
},
{
    "LicenceNo": "019-C1-2013",
    "Manufucturer": "Rosemount Inc",
    "Model": "AN1503",
    "DeviceType": "TR"
},
{
    "LicenceNo": "292-C1-2016",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "MIB GLOBAL ENTRY",
    "DeviceType": "Car radio & BT"
},
{
    "LicenceNo": "237-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1570",
    "DeviceType": "Charger"
},
{
    "LicenceNo": "238-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1598",
    "DeviceType": "Charger"
},
{
    "LicenceNo": "241-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1714",
    "DeviceType": "Charger"
},
{
    "LicenceNo": "272-C1-2016",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "BCMevo",
    "DeviceType": "Control Module"
},
{
    "LicenceNo": "365-C1-2017",
    "Manufucturer": "Sumitomo Wiring Systems,Ltd",
    "Model": "DA5501",
    "DeviceType": "Control Module"
},
{
    "LicenceNo": "354-C1-2017",
    "Manufucturer": "Wistron NeWeb Corporation",
    "Model": "D52A1",
    "DeviceType": "Cooler Radio"
},
{
    "LicenceNo": "207-C1-2015",
    "Manufucturer": "Marquardt GmbH",
    "Model": "PK1",
    "DeviceType": "DAS"
},
{
    "LicenceNo": "108-C1-2014",
    "Manufucturer": "NIKON CORPORATION",
    "Model": "COOLPIXL840",
    "DeviceType": "DIGITAL CAMERA"
},
{
    "LicenceNo": "170-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "Apple pencil A1603",
    "DeviceType": "Digital Stylus"
},
{
    "LicenceNo": "203-C1-2015",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "ACB10G5GG",
    "DeviceType": "DIGITAL SYSTEM"
},
{
    "LicenceNo": "204-C1-2015",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "ACB11G5GG",
    "DeviceType": "DIGITAL SYSTEM"
},
{
    "LicenceNo": "205-C1-2015",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "ACB90G5GG",
    "DeviceType": "DIGITAL SYSTEM"
},
{
    "LicenceNo": "206-C1-2015",
    "Manufucturer": "Hyundai MOBIS Co Ltd",
    "Model": "ACB93G5GG",
    "DeviceType": "DIGITAL SYSTEM"
},
{
    "LicenceNo": "271-C1-2016",
    "Manufucturer": "Marquardt GmbH",
    "Model": "AK01",
    "DeviceType": "Driving System"
},
{
    "LicenceNo": "158-C1-2015",
    "Manufucturer": "Carestream Healt, Inc",
    "Model": "2272233001",
    "DeviceType": "DRX Plus"
},
{
    "LicenceNo": "159-C1-2015",
    "Manufucturer": "Carestream Healt, inc",
    "Model": "2272233002",
    "DeviceType": "DRX Plus"
},
{
    "LicenceNo": "194-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "D020, D021, D022&D023",
    "DeviceType": "DYNAGEN MINI"
},
{
    "LicenceNo": "330-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "A2C1 1639400",
    "DeviceType": "Electronic Key"
},
{
    "LicenceNo": "199-C1-2015",
    "Manufucturer": "oston Scientific Corporation",
    "Model": "3200",
    "DeviceType": "EMBLEM S-ICD"
},
{
    "LicenceNo": "198-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "A209",
    "DeviceType": "EMBLEM S-ICD"
},
{
    "LicenceNo": "311-C1-2016",
    "Manufucturer": "Visteon Electronics France",
    "Model": "530 AI",
    "DeviceType": "End Product"
},
{
    "LicenceNo": "181-C1-2015",
    "Manufucturer": "Poston Scientific Corporation",
    "Model": "L100, L101, L121",
    "DeviceType": "ESSENTIO"
},
{
    "LicenceNo": "302-C1-2016",
    "Manufucturer": "Telecomunicazioni Elettroniche Milano",
    "Model": "A07C3000",
    "DeviceType": "FM RADIO"
},
{
    "LicenceNo": "417-C1-2017",
    "Manufucturer": "Telecomunicazioni Elettroniche Milano",
    "Model": "A07E1000",
    "DeviceType": "FM Radio"
},
{
    "LicenceNo": "290-C1-2016",
    "Manufucturer": "BW Broadcast LTD",
    "Model": "TX-600",
    "DeviceType": "FM Radio"
},
{
    "LicenceNo": "291-C1-2016",
    "Manufucturer": "Telecomunicazioni Elettroniche Milano",
    "Model": "A07E5000",
    "DeviceType": "FM Transmitter"
},
{
    "LicenceNo": "368-C1-2017",
    "Manufucturer": "Elenos S.r.I",
    "Model": "ETG3500",
    "DeviceType": "FM Transmitter"
},
{
    "LicenceNo": "347-C1-2017",
    "Manufucturer": "EuroTel S.p.A",
    "Model": "ETLFM2K5S",
    "DeviceType": "FM TRANSMITTER"
},
{
    "LicenceNo": "370-C1-2017",
    "Manufucturer": "sielco srl",
    "Model": "EXC 1500 GT",
    "DeviceType": "FM Transmitter"
},
{
    "LicenceNo": "086-C1-2014",
    "Manufucturer": "ILLumina,Inc.",
    "Model": "MiSeq MiSeqDX MiSeqFGX",
    "DeviceType": "Genetic"
},
{
    "LicenceNo": "137-C1-2015",
    "Manufucturer": "Magneti Marelli S.P.A",
    "Model": "EN2",
    "DeviceType": "Head Unit"
},
{
    "LicenceNo": "178-C1-2015",
    "Manufucturer": "Visteon Corporation",
    "Model": "MAZDA_GEN_65_CMU",
    "DeviceType": "Head unit"
},
{
    "LicenceNo": "230-C1-2016",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "FO4-AM868TRB",
    "DeviceType": "HW10 (RTM)"
},
{
    "LicenceNo": "316-C1-2016",
    "Manufucturer": "Hon Hai Precision Ind Co Ltd",
    "Model": "Display Key",
    "DeviceType": "ID Display"
},
{
    "LicenceNo": "144-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "A1574",
    "DeviceType": "IEEE 802.11"
},
{
    "LicenceNo": "183-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "L110, L111, L131",
    "DeviceType": "IMAGEREADY MR"
},
{
    "LicenceNo": "185-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "L210, L211, L231",
    "DeviceType": "IMAGEREADY MR"
},
{
    "LicenceNo": "187-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "L310, L311, L331",
    "DeviceType": "IMAGEREADY MR"
},
{
    "LicenceNo": "083-C1-2014",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "A2C31732200",
    "DeviceType": "immobilization"
},
{
    "LicenceNo": "257-C1-2016",
    "Manufucturer": "TRW Automotive US LLC",
    "Model": "58T",
    "DeviceType": "Immobilizer"
},
{
    "LicenceNo": "254-C1-2016",
    "Manufucturer": "TRW Automotive US LLC",
    "Model": "63T",
    "DeviceType": "Immobilizer"
},
{
    "LicenceNo": "226-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "A2C93178600",
    "DeviceType": "Immobilizer"
},
{
    "LicenceNo": "228-C1-2016",
    "Manufucturer": "Robert Bosch Car Multimedia GmbH",
    "Model": "Audi FPK Gen1",
    "DeviceType": "Immobilizer"
},
{
    "LicenceNo": "321-C1-2016",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "FI6-125kHz",
    "DeviceType": "Immobilizer"
},
{
    "LicenceNo": "092-C1-2014",
    "Manufucturer": "Medtronic Inc",
    "Model": "CAREINK ENCORE 29901",
    "DeviceType": "implant device"
},
{
    "LicenceNo": "313-C1-2016",
    "Manufucturer": "ZTE CORPORATION",
    "Model": "ZXSDR B8200",
    "DeviceType": "Indoor Unit"
},
{
    "LicenceNo": "314-C1-2016",
    "Manufucturer": "Robert Bosch Car Multimedia GmbH",
    "Model": "Daimler-TCC-Touch",
    "DeviceType": "Infotainment"
},
{
    "LicenceNo": "141-C1-2015",
    "Manufucturer": "Magneti Marelli S.P.A",
    "Model": "SMEG+IV2",
    "DeviceType": "Infotainment"
},
{
    "LicenceNo": "222-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "5WK49096",
    "DeviceType": "Innovative"
},
{
    "LicenceNo": "195-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "D010,D011,D012&D013",
    "DeviceType": "INOGEN MINI"
},
{
    "LicenceNo": "087-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1600",
    "DeviceType": "IPad Moblie"
},
{
    "LicenceNo": "089-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1567",
    "DeviceType": "ipad Tablet"
},
{
    "LicenceNo": "088-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1599",
    "DeviceType": "iPAD Tablet"
},
{
    "LicenceNo": "143-C1-2015",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "V4x",
    "DeviceType": "Keyless"
},
{
    "LicenceNo": "358-C1-2017",
    "Manufucturer": "Lear Corporation",
    "Model": "290RG1",
    "DeviceType": "Keyless entry"
},
{
    "LicenceNo": "075-C1-2014",
    "Manufucturer": "Continental Automotive Gmbh",
    "Model": "A2C31244300",
    "DeviceType": "Keyless Entry"
},
{
    "LicenceNo": "270-C1-2016",
    "Manufucturer": "Huf Hülsbeck & Fürst GmbH & Co KG",
    "Model": "HUF Flip Key Bosch 433.92 MHz",
    "DeviceType": "Keyless Entry"
},
{
    "LicenceNo": "268-C1-2016",
    "Manufucturer": "Huf Hülsbeck & Fürst GmbH & Co KG",
    "Model": "HUF Flip Key Continental 433.92 MHz",
    "DeviceType": "Keyless Entry"
},
{
    "LicenceNo": "269-C1-2016",
    "Manufucturer": "Huf Hülsbeck & Fürst GmbH & Co KG",
    "Model": "HUF Flip Key Continental 433.92 MHz",
    "DeviceType": "Keyless Entry"
},
{
    "LicenceNo": "073-C1-2014",
    "Manufucturer": "Continental Automotive Gmbh",
    "Model": "KR586013500",
    "DeviceType": "Keyless Entry"
},
{
    "LicenceNo": "173-C1-2015",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "FI5-AM433RX",
    "DeviceType": "Keyless System"
},
{
    "LicenceNo": "289-C1-2016",
    "Manufucturer": "DATUM SYSTEMS INC",
    "Model": "LDPC-16k",
    "DeviceType": "LDPC-16K"
},
{
    "LicenceNo": "155-C1-2015",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "AGSSP4",
    "DeviceType": "LPSR Device"
},
{
    "LicenceNo": "154-C1-2015",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "VHSS4",
    "DeviceType": "LPSR Device"
},
{
    "LicenceNo": "371-C1-2017",
    "Manufucturer": "Huawei Technologies Co Ltd",
    "Model": "B310s-22",
    "DeviceType": "LTE TERMIAL"
},
{
    "LicenceNo": "171-C1-2015",
    "Manufucturer": "BAYER MEDICAL CARE INC",
    "Model": "INT SYS 200",
    "DeviceType": "Medical Device"
},
{
    "LicenceNo": "142-C1-2015",
    "Manufucturer": "Varian Medical System, Inc",
    "Model": "Paxscan 4336W",
    "DeviceType": "Medical Device"
},
{
    "LicenceNo": "307-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "MIB2",
    "DeviceType": "MIB Entry"
},
{
    "LicenceNo": "174-C1-2015",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "MIB Global STANDARD PLUS",
    "DeviceType": "MIB Global HU"
},
{
    "LicenceNo": "243-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "L61SE2",
    "DeviceType": "MIB2 Entry"
},
{
    "LicenceNo": "112-C1-2015",
    "Manufucturer": "LG Electronics Inc",
    "Model": "MIB2",
    "DeviceType": "MIB2 Entry"
},
{
    "LicenceNo": "113-C1-2015",
    "Manufucturer": "LG Electronics Inc",
    "Model": "MIB2 PQ",
    "DeviceType": "MIB2 Entry"
},
{
    "LicenceNo": "294-C1-2016",
    "Manufucturer": "NEC Corporation",
    "Model": "100/200/400/1000",
    "DeviceType": "Microwave"
},
{
    "LicenceNo": "295-C1-2016",
    "Manufucturer": "NEC Corporation",
    "Model": "EX",
    "DeviceType": "Microwave"
},
{
    "LicenceNo": "360-C1-2017",
    "Manufucturer": "Huawei Technologies Co Ltd",
    "Model": "Optix RTN380",
    "DeviceType": "Microwave"
},
{
    "Manufucturer": "Robert Bosch Car Multimedia GmbH",
    "Model": "",
    "DeviceType": "MNS"
},
{
    "LicenceNo": "161-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "Iphone 6S Plus A1687",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "081-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1524",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "081-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1586",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "296-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1778",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "297-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1784",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "160-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "Iphone 6S A1688",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "372-C1-2017",
    "Manufucturer": "Huawei Technologies Co Ltd",
    "Model": "E5577s-321",
    "DeviceType": "Mobile Router"
},
{
    "LicenceNo": "039-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1387",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "038-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1457",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "028-C1-2013",
    "Manufucturer": "Apple Inc",
    "Model": "A1474",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "030-C1-2013",
    "Manufucturer": "Apple Inc",
    "Model": "A1475",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "029-C1-2013",
    "Manufucturer": "Apple Inc",
    "Model": "A1489",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "031-C1-2013",
    "Manufucturer": "Apple Inc",
    "Model": "A1490",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "035-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1507",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "353-C1-2017",
    "Manufucturer": "NEWTEC CY NV",
    "Model": "MDM3100",
    "DeviceType": "Modem VSAT"
},
{
    "LicenceNo": "278-C1-2016",
    "Manufucturer": "Robert Bosch Car Multimedia GmbH",
    "Model": "PSA RCC A1",
    "DeviceType": "Mulimedia & BT"
},
{
    "LicenceNo": "279-C1-2016",
    "Manufucturer": "Robert Bosch Car Multimedia GmbH",
    "Model": "PSA RCC A2",
    "DeviceType": "Multimedia"
},
{
    "LicenceNo": "231-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "A2C93142400",
    "DeviceType": "MY 2017 PEPS"
},
{
    "LicenceNo": "136-c1-2015",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "L2C0056TR",
    "DeviceType": "MY16 FOB"
},
{
    "LicenceNo": "232-C1-2016",
    "Manufucturer": "Continental Automotive Systems Inc",
    "Model": "A2C93142100",
    "DeviceType": "MY17 Ford PK"
},
{
    "LicenceNo": "277-C1-2016",
    "Manufucturer": "Ubiquiti Networks",
    "Model": "NBE-5AC-19",
    "DeviceType": "NanoBeam ac"
},
{
    "LicenceNo": "197-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "D000,D0002,D003&D052",
    "DeviceType": "ORIGEN MINI ICD"
},
{
    "LicenceNo": "008-C1-2013",
    "Manufucturer": "Rosemount Inc",
    "Model": "FA-170-BCAR-HS",
    "DeviceType": "TR"
},
{
    "LicenceNo": "013-C1-2013",
    "Manufucturer": "Rosemount Inc",
    "Model": "CF-534",
    "DeviceType": "TR"
},
{
    "LicenceNo": "006-C1-2013",
    "Manufucturer": "Rosemount Inc",
    "Model": "CF-54C",
    "DeviceType": "TR"
},
{
    "LicenceNo": "072-C1-2014",
    "Manufucturer": "Continental automotive GmbH",
    "Model": "KR5876268",
    "DeviceType": "PEPS"
},
{
    "LicenceNo": "074-C1-2014",
    "Manufucturer": "Continental automotive GmbH",
    "Model": "M3NA2C738448",
    "DeviceType": "PEPS"
},
{
    "LicenceNo": "126-C1-2015",
    "Manufucturer": "Continental automotive GmbH",
    "Model": "A2C31243600",
    "DeviceType": "PEPS System"
},
{
    "LicenceNo": "310-C1-2016",
    "Manufucturer": "Sensormatic Electronics, LLC",
    "Model": "AMX-1000",
    "DeviceType": "Phasing Tool"
},
{
    "LicenceNo": "274-C1-2016",
    "Manufucturer": "Medtronic Inc",
    "Model": "2090",
    "DeviceType": "Programmer"
},
{
    "LicenceNo": "317-C1-2016",
    "Manufucturer": "Medtronic Inc",
    "Model": "CareLink Encore(TM) 26901",
    "DeviceType": "Programmer"
},
{
    "LicenceNo": "318-C1-2016",
    "Manufucturer": "Medtronic Inc",
    "Model": "CareLink Encore(TM) 29901(REF29901A)",
    "DeviceType": "Programmer"
},
{
    "LicenceNo": "273-C1-2016",
    "Manufucturer": "Medtronic Inc",
    "Model": "2067",
    "DeviceType": "Programming RF"
},
{
    "LicenceNo": "184-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "L200, L201, L221&L209",
    "DeviceType": "PROPONENT"
},
{
    "LicenceNo": "093-C1-2014",
    "Manufucturer": "Delphi ELectronics & Safety",
    "Model": "L2C0054TR",
    "DeviceType": "Radar"
},
{
    "LicenceNo": "208-C1-2015",
    "Manufucturer": "Robert Bosch GmbH",
    "Model": "LRR4",
    "DeviceType": "Radar"
},
{
    "LicenceNo": "100-C1-2014",
    "Manufucturer": "Automotive Distance Control",
    "Model": "SRR2-B",
    "DeviceType": "Radar"
},
{
    "LicenceNo": "329-C1-2016",
    "Manufucturer": "Autoliv ASP Inc",
    "Model": "6234734",
    "DeviceType": "Radar Sensor"
},
{
    "LicenceNo": "309-C1-2016",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "R3TR",
    "DeviceType": "Radar Sensor"
},
{
    "LicenceNo": "334-C1-2017",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "RS4",
    "DeviceType": "Radar Sensor"
},
{
    "LicenceNo": "096-C1-2014",
    "Manufucturer": "Autoliv ASP Inc",
    "Model": "6266260",
    "DeviceType": "Radar"
},
{
    "LicenceNo": "097-C1-2014",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "L2C0051TR",
    "DeviceType": "Radar"
},
{
    "LicenceNo": "091-C1-2014",
    "Manufucturer": "Robert Bosch GmbH",
    "Model": "LRR4",
    "DeviceType": "Radar"
},
{
    "LicenceNo": "376-C1-2017",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "VP2_5",
    "DeviceType": "Radio Car"
},
{
    "LicenceNo": "375-C1-2017",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "VP2_7",
    "DeviceType": "Radio Car"
},
{
    "LicenceNo": "374-C1-2017",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "VP2_8.4",
    "DeviceType": "Radio Car"
},
{
    "LicenceNo": "007-C1-2013",
    "Manufucturer": "Rosemount Inc",
    "Model": "VP4R-A",
    "DeviceType": "TR"
},
{
    "LicenceNo": "114-C1-2015",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LANR14",
    "DeviceType": "RADIO NAV"
},
{
    "LicenceNo": "369-C1-2017",
    "Manufucturer": "Visteon Engineering Services Ltd",
    "Model": "RADIO AHU",
    "DeviceType": "Radio with BT"
},
{
    "LicenceNo": "265-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LANR16",
    "DeviceType": "RadioNavigation"
},
{
    "LicenceNo": "322-C1-2016",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "F16-AM433RX",
    "DeviceType": "Receiver"
},
{
    "LicenceNo": "085-C1-2014",
    "Manufucturer": "Ohsung ElectronicsCo.,Ltd",
    "Model": "NGI KHR",
    "DeviceType": "Remote Control"
},
{
    "LicenceNo": "407-C1-2017",
    "Manufucturer": "Lear Corporation",
    "Model": "5E0F00",
    "DeviceType": "RF Receiver"
},
{
    "LicenceNo": "359-C1-2017",
    "Manufucturer": "Continental Automotive Systems US Inc",
    "Model": "A2C74295202",
    "DeviceType": "RF receiver"
},
{
    "LicenceNo": "328-C1-2016",
    "Manufucturer": "Lear Automotive Services",
    "Model": "ZAFFT6BCMRKETPMS",
    "DeviceType": "RF receiver"
},
{
    "LicenceNo": "140-C1-2015",
    "Manufucturer": "Covidien LLC",
    "Model": "FT10",
    "DeviceType": "RFID Module"
},
{
    "LicenceNo": "224-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "TXN1",
    "DeviceType": "RFT"
},
{
    "LicenceNo": "259-C1-2016",
    "Manufucturer": "TRW Automotive US LLC",
    "Model": "55T& 46R",
    "DeviceType": "RKE Transceiver"
},
{
    "LicenceNo": "261-C1-2016",
    "Manufucturer": "TRW Automotive US LLC",
    "Model": "53T",
    "DeviceType": "RKE Transmitter"
},
{
    "LicenceNo": "260-C1-2016",
    "Manufucturer": "TRW Automotive US LLC",
    "Model": "54T",
    "DeviceType": "RKE Transmitter"
},
{
    "LicenceNo": "281-C1-2016",
    "Manufucturer": "Asia Pacific Satellite Communication Inc.",
    "Model": "XT",
    "DeviceType": "Satellite Phone"
},
{
    "LicenceNo": "280-C1-2016",
    "Manufucturer": "Asia Pacific Satellite Communication Inc.",
    "Model": "XT-LITE",
    "DeviceType": "Satellite Phone"
},
{
    "LicenceNo": "288-C1-2016",
    "Manufucturer": "DATUM SYSTEMS INC",
    "Model": "M7LT-BAND",
    "DeviceType": "SAT-TERMINAL"
},
{
    "LicenceNo": "233-C1-2016",
    "Manufucturer": "Kodak Alaris Inc",
    "Model": "i1150WN",
    "DeviceType": "Scanner"
},
{
    "LicenceNo": "234-C1-2016",
    "Manufucturer": "Kodak Alaris Inc",
    "Model": "i1190WN",
    "DeviceType": "Scanner"
},
{
    "LicenceNo": "325-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "RMCRMM1AP1",
    "DeviceType": "Smart Control"
},
{
    "LicenceNo": "326-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "RMCSPM1AP1",
    "DeviceType": "Smart Control"
},
{
    "LicenceNo": "248-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1723",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "394-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1897",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "398-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1901",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "395-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1905",
    "DeviceType": "Mobile Phone"
},
{
    "LicenceNo": "120-C1-2015",
    "Manufucturer": "Automotive Distance Control",
    "Model": "",
    "DeviceType": "SRD"
},
{
    "LicenceNo": "127-C1-2015",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "WDH720Q",
    "DeviceType": "SRD Device"
},
{
    "LicenceNo": "166-C1-2015",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "L2C0059TR",
    "DeviceType": "SRR3 radar"
},
{
    "LicenceNo": "165-C1-2015",
    "Manufucturer": "Autoliv ASP Inc",
    "Model": "6181175",
    "DeviceType": "SRS Sensor"
},
{
    "LicenceNo": "164-C1-2015",
    "Manufucturer": "Viasat Inc",
    "Model": "RM4100 1-IFL, ka",
    "DeviceType": "SurfBeam 2 RSM"
},
{
    "LicenceNo": "346-C1-2017",
    "Manufucturer": "Alpine Electronics Inc",
    "Model": "MMXF online",
    "DeviceType": "SYSTEM"
},
{
    "LicenceNo": "003-C1-2013",
    "Manufucturer": "Apple Inc",
    "Model": "A1455",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "004-C12013",
    "Manufucturer": "Apple Inc",
    "Model": "A1458",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "005-C1.2013",
    "Manufucturer": "Apple Inc",
    "Model": "A1460",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "090-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1566",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "247-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1673",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "246-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1674",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "213-C1-2016",
    "Manufucturer": "Jet optoelectronics co.,ltd.",
    "Model": "RSE III & RSE III C&G",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "037-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1395",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "036-C1-2014",
    "Manufucturer": "Apple Inc",
    "Model": "A1396",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "361-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1670",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "362-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1671",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "363-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1701",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "364-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1709",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "352-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1822",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "351-C1-2017",
    "Manufucturer": "Apple Inc",
    "Model": "A1823",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "168-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "i Pad pro A1584",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "169-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "i Pad pro A1652",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "163-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "iPad Mini 4 A1538",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "162-C1-2015",
    "Manufucturer": "Apple Inc",
    "Model": "iPad Mini 4 A1550",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "115-C1-2015",
    "Manufucturer": "Pegatron Corporation.",
    "Model": "SDIS1",
    "DeviceType": "Tablet"
},
{
    "LicenceNo": "033-C1-2014",
    "Manufucturer": "Fujitsu Limited",
    "Model": "LIFEBOOK S792",
    "DeviceType": "TC"
},
{
    "LicenceNo": "061-C1-2014",
    "Manufucturer": "Rosemount Inc",
    "Model": "CA-170-CTPL-HS",
    "DeviceType": "TR"
},
{
    "LicenceNo": "303-C1-2016",
    "Manufucturer": "Motorola Solutions",
    "Model": "Motoroal- MTS4",
    "DeviceType": "Tetra"
},
{
    "LicenceNo": "332-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "MTM5400",
    "DeviceType": "TETRA"
},
{
    "LicenceNo": "348-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "MTP3000",
    "DeviceType": "TETRA"
},
{
    "LicenceNo": "333-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "MTP3250",
    "DeviceType": "TETRA"
},
{
    "LicenceNo": "235-C1-2016",
    "Manufucturer": "Apple Inc",
    "Model": "A1553",
    "DeviceType": "The AppleIncIncWatch"
},
{
    "LicenceNo": "110-C1-2015",
    "Manufucturer": "TRW Automotive Electronics US LLC",
    "Model": "70T",
    "DeviceType": "TPM System"
},
{
    "LicenceNo": "125-C1-2015",
    "Manufucturer": "Lear Corporation Electrical and Electronics Division",
    "Model": "KOBT510A",
    "DeviceType": "TPM System"
},
{
    "LicenceNo": "128-C1-2015",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "S180052056",
    "DeviceType": "TPM System"
},
{
    "LicenceNo": "130-C1-2015",
    "Manufucturer": "Huf Electronics Bretten GmbH",
    "Model": "TSSRE4Db",
    "DeviceType": "TPM System"
},
{
    "LicenceNo": "131-C1-2015",
    "Manufucturer": "Huf Electronics Bretten GmbH",
    "Model": "TSSRE4Dg",
    "DeviceType": "TPM System"
},
{
    "LicenceNo": "132-C1-2015",
    "Manufucturer": "Huf Electronics Bretten GmbH",
    "Model": "TSSRE4Td",
    "DeviceType": "TPM System"
},
{
    "LicenceNo": "267-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "C2A4MA4",
    "DeviceType": "TPMS"
},
{
    "LicenceNo": "067-C1-2014",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "FO3-AM433RX",
    "DeviceType": "TPMS"
},
{
    "LicenceNo": "293-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "FP4",
    "DeviceType": "TPMS"
},
{
    "LicenceNo": "266-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "GG4",
    "DeviceType": "TPMS"
},
{
    "LicenceNo": "134-C1-2015",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "TIS-01",
    "DeviceType": "TPMS"
},
{
    "LicenceNo": "227-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "TIS-07",
    "DeviceType": "TPMS"
},
{
    "LicenceNo": "095-C1-2014",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "BB5T-1A180-AA",
    "DeviceType": "TPMT"
},
{
    "LicenceNo": "119-C1-2015",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "S180052028",
    "DeviceType": "TPS"
},
{
    "LicenceNo": "059-C1-2014",
    "Manufucturer": "Intermec",
    "Model": "1000CP02U",
    "DeviceType": "TR"
},
{
    "LicenceNo": "012-C1-2013",
    "Manufucturer": "Rosemount Inc",
    "Model": "1410",
    "DeviceType": "TR"
},
{
    "LicenceNo": "209-C1-2016",
    "Manufucturer": "Rosemount Inc",
    "Model": "2051",
    "DeviceType": "TR"
},
{
    "LicenceNo": "111-C1-2015",
    "Manufucturer": "Rosemount Inc",
    "Model": "248",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "152-C1-2015",
    "Manufucturer": "Rosemount Inc",
    "Model": "3051",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "129-C1-2015",
    "Manufucturer": "Rosemount Inc",
    "Model": "3308A",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "405-C1-2017",
    "Manufucturer": "Emerson Automation Solutions, Rosemount Inc",
    "Model": "3308A",
    "DeviceType": "TR"
},
{
    "LicenceNo": "071-C1-2014",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "5WK50165",
    "DeviceType": "TR"
},
{
    "LicenceNo": "382-C1-2017",
    "Manufucturer": "Autoliv ASP inc",
    "Model": "6378909",
    "DeviceType": "TR"
},
{
    "LicenceNo": "150-C1-2015",
    "Manufucturer": "Rosemount Inc",
    "Model": "702DX32",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "151-C1-2015",
    "Manufucturer": "Rosemount Inc",
    "Model": "702DX42",
    "DeviceType": "Wireless Kit"
},
{
    "LicenceNo": "220-C1-2016",
    "Manufucturer": "RESPIRONICS",
    "Model": "708",
    "DeviceType": "TR"
},
{
    "LicenceNo": "217-C1-2016",
    "Manufucturer": "RESPIRONICS",
    "Model": "774",
    "DeviceType": "TR"
},
{
    "LicenceNo": "221-c1-2016",
    "Manufucturer": "RESPIRONICS",
    "Model": "781",
    "DeviceType": "TR"
},
{
    "LicenceNo": "348-C1-2017",
    "Manufucturer": "FUJIFILM CORPORATION",
    "Model": "853Y120008",
    "DeviceType": "TR"
},
{
    "LicenceNo": "078-C1-2014",
    "Manufucturer": "Valeoi Securite Habitacle,",
    "Model": "A08TBB",
    "DeviceType": "TR"
},
{
    "LicenceNo": "070-C1-2014",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "A2C31348400",
    "DeviceType": "TR"
},
{
    "LicenceNo": "060-C1-2014",
    "Manufucturer": "Continental Automotive GMBH",
    "Model": "A2C53295073",
    "DeviceType": "TR"
},
{
    "LicenceNo": "219-C1-2016",
    "Manufucturer": "RESPIRONICS",
    "Model": "ACJ-TI114A",
    "DeviceType": "TR"
},
{
    "LicenceNo": "077-C1-2014",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "AG2SZ4",
    "DeviceType": "TR"
},
{
    "LicenceNo": "385-C1-2017",
    "Manufucturer": "Marquardt GmbH",
    "Model": "AK2",
    "DeviceType": "TR"
},
{
    "LicenceNo": "343-C1-2017",
    "Manufucturer": "Abbott Point Of Care Point of Care",
    "Model": "AN-500",
    "DeviceType": "TR"
},
{
    "LicenceNo": "391-C1-2017",
    "Manufucturer": "LG Electronics Inc",
    "Model": "AN-MR18BA",
    "DeviceType": "TR"
},
{
    "LicenceNo": "397-C1-2017",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "AUS4 BASIC",
    "DeviceType": "TR"
},
{
    "LicenceNo": "396-C1-2017",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "AUS4 STANDARD",
    "DeviceType": "TR"
},
{
    "LicenceNo": "218-C1-2016",
    "Manufucturer": "RESPIRONICS",
    "Model": "Auto BiPAP",
    "DeviceType": "TR"
},
{
    "LicenceNo": "344-C1-2017",
    "Manufucturer": "Panasonic Taiwan Co Ltd",
    "Model": "Auto CPAP",
    "DeviceType": "BT"
},
{
    "LicenceNo": "357-C1-2017",
    "Manufucturer": "Panasonic Taiwan Co Ltd",
    "Model": "BiPAP Pro",
    "DeviceType": "BT"
},
{
    "LicenceNo": "414-C1-2017",
    "Manufucturer": "Alpine Electronics Inc",
    "Model": "BIS01",
    "DeviceType": "TR"
},
{
    "LicenceNo": "048-C1-2014",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "BSD3.0",
    "DeviceType": "TR"
},
{
    "LicenceNo": "258-C1-2016",
    "Manufucturer": "Delphi France SAS",
    "Model": "BSI",
    "DeviceType": "TR"
},
{
    "LicenceNo": "255-C1-2016",
    "Manufucturer": "Huawei International pte Ltd",
    "Model": "BTS3900AL",
    "DeviceType": "TR"
},
{
    "LicenceNo": "336-C1-2017",
    "Manufucturer": "Caterpillar Inc",
    "Model": "CATBTFOB",
    "DeviceType": "TR"
},
{
    "LicenceNo": "335-C1-2017",
    "Manufucturer": "Caterpillar Inc",
    "Model": "CATBTNT",
    "DeviceType": "TR"
},
{
    "LicenceNo": "062-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "CD1112",
    "DeviceType": "TR"
},
{
    "LicenceNo": "315-C1-2016",
    "Manufucturer": "Panasonic Corporation",
    "Model": "CF-D1G",
    "DeviceType": "Car Radio"
},
{
    "LicenceNo": "094-C1-2014",
    "Manufucturer": "Panasonic Corporation",
    "Model": "CF-D1N",
    "DeviceType": "PC"
},
{
    "LicenceNo": "223-C1-2016",
    "Manufucturer": "Humax Automotive Co Ltd",
    "Model": "CMF-R3000M-16C-A",
    "DeviceType": "TR"
},
{
    "LicenceNo": "138-C1-2015",
    "Manufucturer": "Panasonic Corporation",
    "Model": "CPAP",
    "DeviceType": "PC"
},
{
    "LicenceNo": "052-C1-2014",
    "Manufucturer": "Panasonic Corporation",
    "Model": "CPAP PRO",
    "DeviceType": "TR"
},
{
    "LicenceNo": "298-C1-2016",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "CV1-134TRX",
    "DeviceType": "TR"
},
{
    "LicenceNo": "406-C1-2017",
    "Manufucturer": "KATHREIN Automotive GmbH",
    "Model": "DDAECE01",
    "DeviceType": "TR"
},
{
    "LicenceNo": "378-C1-2017",
    "Manufucturer": "Actia Automotivemotive",
    "Model": "DHU2",
    "DeviceType": "TR"
},
{
    "LicenceNo": "399-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "DM4000",
    "DeviceType": "TR"
},
{
    "LicenceNo": "402-C1-2017",
    "Manufucturer": "Danimex",
    "Model": "DP2000",
    "DeviceType": "TR"
},
{
    "LicenceNo": "401-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "DP3400",
    "DeviceType": "TR"
},
{
    "LicenceNo": "400-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "DP4000",
    "DeviceType": "TR"
},
{
    "LicenceNo": "022-C1-2013",
    "Manufucturer": "Magneti Marelli S.P.A",
    "Model": "EN1",
    "DeviceType": "TR"
},
{
    "LicenceNo": "107-C1-2014",
    "Manufucturer": "Harman Automotive System GmbH",
    "Model": "EN1H",
    "DeviceType": "TR"
},
{
    "LicenceNo": "041-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "F161302",
    "DeviceType": "TR"
},
{
    "LicenceNo": "058-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "F164702",
    "DeviceType": "TR"
},
{
    "LicenceNo": "055-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "F164802",
    "DeviceType": "TR"
},
{
    "LicenceNo": "262-C1-2016",
    "Manufucturer": "Panasonic Corporation",
    "Model": "FG-185-SG32-MH",
    "DeviceType": "TR"
},
{
    "LicenceNo": "123-C1-2015",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "FO4-AM868TRX",
    "DeviceType": "TR"
},
{
    "LicenceNo": "412-C1-2017",
    "Manufucturer": "Visteon Engineering Services Ltd",
    "Model": "G17 AHU",
    "DeviceType": "TR"
},
{
    "LicenceNo": "389-C1-2017",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "GG4T",
    "DeviceType": "TR"
},
{
    "LicenceNo": "386-C1-2017",
    "Manufucturer": "Magneti Marelli S.P.A",
    "Model": "GRG2501",
    "DeviceType": "TR"
},
{
    "LicenceNo": "404-C1-2017",
    "Manufucturer": "Deere & Company",
    "Model": "GU6U",
    "DeviceType": "TR"
},
{
    "LicenceNo": "211-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "HD39J123GW",
    "DeviceType": "TR"
},
{
    "LicenceNo": "212-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "HFM_CMFB_01",
    "DeviceType": "TR"
},
{
    "LicenceNo": "342-C1-2017",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "IDGNG1",
    "DeviceType": "TR"
},
{
    "LicenceNo": "042-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "k10387",
    "DeviceType": "TR"
},
{
    "LicenceNo": "043-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "k10388",
    "DeviceType": "TR"
},
{
    "LicenceNo": "044-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "k164102",
    "DeviceType": "TR"
},
{
    "LicenceNo": "054-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "k30345",
    "DeviceType": "TR"
},
{
    "LicenceNo": "056-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "k30356",
    "DeviceType": "TR"
},
{
    "LicenceNo": "053-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "K30357",
    "DeviceType": "TR"
},
{
    "LicenceNo": "079-C1-2014",
    "Manufucturer": "Ford Motor Company",
    "Model": "KMHSG1P1",
    "DeviceType": "TR"
},
{
    "LicenceNo": "047-C1-2014",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "LCA2.0",
    "DeviceType": "TR"
},
{
    "LicenceNo": "392-C1-2017",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LGSBWAC72",
    "DeviceType": "TR"
},
{
    "LicenceNo": "393-C1-2017",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LGSWFAC71",
    "DeviceType": "TR"
},
{
    "LicenceNo": "057-C1-2014",
    "Manufucturer": "FUJITSU Limited",
    "Model": "LIFEBOOK E734",
    "DeviceType": "TR"
},
{
    "LicenceNo": "027-C1-2013",
    "Manufucturer": "Johnson Controls lnc",
    "Model": "MAZ",
    "DeviceType": "TR"
},
{
    "LicenceNo": "026-C1-2013",
    "Manufucturer": "Johnson Controls lnc",
    "Model": "MAZDA_GEN_65_CMU",
    "DeviceType": "TR"
},
{
    "LicenceNo": "016-C1-2013",
    "Manufucturer": "S1NN GmbH &Co.KG",
    "Model": "MIB",
    "DeviceType": "TR"
},
{
    "LicenceNo": "356-C1-2017",
    "Manufucturer": "Panasonic Corporation",
    "Model": "MIB_Std",
    "DeviceType": "WLAN BT"
},
{
    "LicenceNo": "050-C1-2014",
    "Manufucturer": "LG Electronics Inc",
    "Model": "MIB2",
    "DeviceType": "TR"
},
{
    "LicenceNo": "104-C1-2014",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "MIB2 Main-Unit",
    "DeviceType": "TR"
},
{
    "LicenceNo": "051-C1-2014",
    "Manufucturer": "Delphi Deutschland GmbH",
    "Model": "MIB2 STD",
    "DeviceType": "TR"
},
{
    "LicenceNo": "380-C1-2017",
    "Manufucturer": "illumina,lnc",
    "Model": "MiSeq",
    "DeviceType": "TR"
},
{
    "LicenceNo": "381-C1-2017",
    "Manufucturer": "illumina,lnc",
    "Model": "MiSeqFGx",
    "DeviceType": "TR"
},
{
    "LicenceNo": "049-C1-2014",
    "Manufucturer": "Robert Bosch GmbH",
    "Model": "MQB BCM",
    "DeviceType": "TR"
},
{
    "LicenceNo": "418-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "MTP6000Series",
    "DeviceType": "TR"
},
{
    "LicenceNo": "420-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "MTP8000EX Series",
    "DeviceType": "TR"
},
{
    "LicenceNo": "025-C1-2013",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "NBT",
    "DeviceType": "TR"
},
{
    "LicenceNo": "388-C1-2017",
    "Manufucturer": "Humax Co Ltd.",
    "Model": "NDHD-1500S",
    "DeviceType": "TR"
},
{
    "LicenceNo": "252-C1-2016",
    "Manufucturer": "Huawei International pte Ltd",
    "Model": "OPTIX RTN950A",
    "DeviceType": "TR"
},
{
    "LicenceNo": "021-C1-2013",
    "Manufucturer": "Panasonic Automotive Systems",
    "Model": "OUC11545917",
    "DeviceType": "TR"
},
{
    "LicenceNo": "210-C1-2016",
    "Manufucturer": "Panasonic Automotive Systems",
    "Model": "OUC26006559",
    "DeviceType": "TR"
},
{
    "LicenceNo": "366-C1-2017",
    "Manufucturer": "Robert Bosch(Australia)Pty Ltd",
    "Model": "P003",
    "DeviceType": "TR"
},
{
    "LicenceNo": "383-C1-2017",
    "Manufucturer": "Marquardt GmbH",
    "Model": "PK2",
    "DeviceType": "TR"
},
{
    "LicenceNo": "103-C1-2014",
    "Manufucturer": "Caterpillar Inc",
    "Model": "PL631",
    "DeviceType": "TR"
},
{
    "LicenceNo": "102-C1-2014",
    "Manufucturer": "Caterpillar Inc",
    "Model": "PL641",
    "DeviceType": "TR"
},
{
    "LicenceNo": "066-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "Powershot SX280",
    "DeviceType": "TR"
},
{
    "LicenceNo": "105-C1-2014",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "PPIS LTE",
    "DeviceType": "TR"
},
{
    "LicenceNo": "106-C1-2014",
    "Manufucturer": "Harman Becker Automotive System GmbH",
    "Model": "PPIS UMTS IV",
    "DeviceType": "TR"
},
{
    "LicenceNo": "244-C1-2016",
    "Manufucturer": "MED-EL",
    "Model": "Remote Control",
    "DeviceType": "TR"
},
{
    "LicenceNo": "387-C1-2017",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "RFHUB JL",
    "DeviceType": "TR"
},
{
    "LicenceNo": "215-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "RMCSPK1AP1",
    "DeviceType": "TR"
},
{
    "LicenceNo": "046-C1-2014",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "RMCTPH",
    "DeviceType": "TR"
},
{
    "LicenceNo": "251-C1-2016",
    "Manufucturer": "Huawei International pte Ltd",
    "Model": "RRU3824",
    "DeviceType": "TR"
},
{
    "LicenceNo": "040-C1-2014",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "S180150008",
    "DeviceType": "TR"
},
{
    "LicenceNo": "069-C1-2014",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "s180222004,006,100",
    "DeviceType": "TR"
},
{
    "LicenceNo": "018-C1-2013",
    "Manufucturer": "S1NNGMBH",
    "Model": "SCM",
    "DeviceType": "TR"
},
{
    "LicenceNo": "014-C1-2013",
    "Manufucturer": "DELPHI",
    "Model": "SILVERBOX",
    "DeviceType": "TR"
},
{
    "LicenceNo": "145-C1-2016",
    "Manufucturer": "MED-EL",
    "Model": "SONNET",
    "DeviceType": "TR"
},
{
    "LicenceNo": "419-C1-2017",
    "Manufucturer": "Motorola Solutions",
    "Model": "ST7000",
    "DeviceType": "TR"
},
{
    "LicenceNo": "032-C1-2013",
    "Manufucturer": "Silex Technology American.Inc",
    "Model": "SX-SDCAG",
    "DeviceType": "TR"
},
{
    "LicenceNo": "020-C1-2013",
    "Manufucturer": "S1NN Gmbh",
    "Model": "SYNC",
    "DeviceType": "TR"
},
{
    "LicenceNo": "284-C1-2016",
    "Manufucturer": "Panasonic Automotive Systems",
    "Model": "SYNCG3-L",
    "DeviceType": "Panasonic"
},
{
    "LicenceNo": "067-C1-2014",
    "Manufucturer": "wyse Technology LLC",
    "Model": "TxoD",
    "DeviceType": "TR"
},
{
    "LicenceNo": "015-C1-2013",
    "Manufucturer": "S1NNGMBH",
    "Model": "UMI",
    "DeviceType": "TR"
},
{
    "LicenceNo": "024-C1-2013",
    "Manufucturer": "I+ME ACTIA INFORMATIK UND MIKRO",
    "Model": "VCI+XENTRY CONNECT",
    "DeviceType": "TR"
},
{
    "LicenceNo": "023-C1-2013",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "VP2",
    "DeviceType": "TR"
},
{
    "LicenceNo": "216-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "WCK720Q",
    "DeviceType": "TR"
},
{
    "LicenceNo": "214-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "WCK730B",
    "DeviceType": "TR"
},
{
    "LicenceNo": "034-C1-2014",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "WDF210M",
    "DeviceType": "TR"
},
{
    "LicenceNo": "045-C1-2014",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "WEG720B",
    "DeviceType": "TR"
},
{
    "LicenceNo": "017-C1-2013",
    "Manufucturer": "Corporation Toshiba",
    "Model": "WLM-40U",
    "DeviceType": "TR"
},
{
    "LicenceNo": "063-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "WM2017",
    "DeviceType": "TR"
},
{
    "LicenceNo": "064-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "WM218",
    "DeviceType": "TR"
},
{
    "LicenceNo": "068-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "WM219",
    "DeviceType": "TR"
},
{
    "LicenceNo": "056-C1-2014",
    "Manufucturer": "Canon Inc",
    "Model": "WM223",
    "DeviceType": "TR"
},
{
    "LicenceNo": "275-C1-2016",
    "Manufucturer": "Panasonic Automotive Systems",
    "Model": "WPG",
    "DeviceType": "Telematic Unit"
},
{
    "LicenceNo": "373-C1-2017",
    "Manufucturer": "TEAM SIMOCO",
    "Model": "X Fin",
    "DeviceType": "TR"
},
{
    "LicenceNo": "409-C1-2017",
    "Manufucturer": "Varex lmaging Deutschland AG",
    "Model": "XRpad2",
    "DeviceType": "TR"
},
{
    "LicenceNo": "099-C1-2014",
    "Manufucturer": "Lear Automotive Services",
    "Model": "ZAFT6BCM",
    "DeviceType": "TR"
},
{
    "LicenceNo": "250-C1-2016",
    "Manufucturer": "ZTE Corporation",
    "Model": "ZXSDR BS8908",
    "DeviceType": "TR"
},
{
    "LicenceNo": "084-C1-2014",
    "Manufucturer": "Technisat Digital GmbH",
    "Model": "MIB STD2",
    "DeviceType": "Transceiver BT"
},
{
    "LicenceNo": "345-C1-2017",
    "Manufucturer": "Geoforce, Inc.",
    "Model": "GT1K",
    "DeviceType": "Transmission"
},
{
    "LicenceNo": "403-C1-2017",
    "Manufucturer": "Panasonic Automotive System Company of America",
    "Model": "248DX",
    "DeviceType": "TR"
},
{
    "LicenceNo": "122-C1-2015",
    "Manufucturer": "ALPS Electric Inc.",
    "Model": "387",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "377-C1-2017",
    "Manufucturer": "Panasonic Automotive System Company of America",
    "Model": "702",
    "DeviceType": "Radio Car"
},
{
    "LicenceNo": "415-C1-2017",
    "Manufucturer": "Panasonic Automotive System Company of America",
    "Model": "705",
    "DeviceType": "TR"
},
{
    "LicenceNo": "080-C1-2014",
    "Manufucturer": "Omron Automotive Electronics Inc",
    "Model": "848TX",
    "DeviceType": "TR"
},
{
    "LicenceNo": "116-c1-2015",
    "Manufucturer": "Valeo Comfort And Driving Assistance.",
    "Model": "A08TEA",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "225-C1-2016",
    "Manufucturer": "Continental Automotive GmbH",
    "Model": "AlfaRFHM1",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "408-C1-2017",
    "Manufucturer": "Alps Electric (North America) Inc",
    "Model": "BxxT-19H316-x",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "338-C1-2017",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "FS12A",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "339-C1-2017",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "FS12P",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "411-C1-2017",
    "Manufucturer": "Huf Hülsbeck & Fürst GmbH & Co KG",
    "Model": "HUF8435",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "135-C1-2015",
    "Manufucturer": "Delphi Automotive Systems",
    "Model": "L2C0042TR",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "301-C1-2016",
    "Manufucturer": "Lear Automotive (EEDS) Spain SL",
    "Model": "TTRBDCLR01",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "379-C1-2017",
    "Manufucturer": "Alps Electric(North America)Inc. Electric (North America), lnc.",
    "Model": "xxxT-15K601-xx",
    "DeviceType": "Transmitter"
},
{
    "LicenceNo": "367-C1-2017",
    "Manufucturer": "ALPS ELECTRIC CO.,LTD",
    "Model": "TWB1G0125",
    "DeviceType": "Transmitter Key"
},
{
    "LicenceNo": "188-C1-2015",
    "Manufucturer": "Poston Scientific Corporation",
    "Model": "U125",
    "DeviceType": "VALITUDE"
},
{
    "LicenceNo": "189-C1-2015",
    "Manufucturer": "Poston Scientific Corporation",
    "Model": "U128",
    "DeviceType": "VALITUDE"
},
{
    "LicenceNo": "410-C1-2017",
    "Manufucturer": "Hella Kgaa Hueck & Co",
    "Model": "LCA3.5-GM",
    "DeviceType": "Vehicle Radar"
},
{
    "LicenceNo": "147-C1-2015",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LAN5200WR2",
    "DeviceType": "Vehicle MS"
},
{
    "LicenceNo": "146-C1-2015",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LAN5210WR2",
    "DeviceType": "Vehicle MS"
},
{
    "LicenceNo": "416-C1-2017",
    "Manufucturer": "Conti Temic microelectronic GmbH",
    "Model": "ARS™4-B",
    "DeviceType": "Vehicle Radar"
},
{
    "LicenceNo": "109-C1-2015",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "L2C0055TR",
    "DeviceType": "Vehicular Radar"
},
{
    "LicenceNo": "350-C1-2017",
    "Manufucturer": "Delphi Electronics & Safety",
    "Model": "L2C0065TR",
    "DeviceType": "Vehicular Radar"
},
{
    "LicenceNo": "349-C1-2017",
    "Manufucturer": "Autoliv ASP Inc",
    "Model": "NB24G175V1",
    "DeviceType": "Vehicular radar"
},
{
    "LicenceNo": "190-C1-2015",
    "Manufucturer": "Poston Scientific Corporation",
    "Model": "U225, U226",
    "DeviceType": "VISIONIST CRT"
},
{
    "LicenceNo": "191-C1-2015",
    "Manufucturer": "Poston Scientific Corporation",
    "Model": "U228",
    "DeviceType": "VISIONIST X4"
},
{
    "LicenceNo": "148-C1-2015",
    "Manufucturer": "Huf Hülsbeck & Fürst GmbH & Co KG",
    "Model": "HUF 8423",
    "DeviceType": "Volvo SPA"
},
{
    "LicenceNo": "145-C1-2015",
    "Manufucturer": "Huf Hülsbeck & Fürst GmbH & Co KG",
    "Model": "HUF 8432",
    "DeviceType": "Volvo SPA"
},
{
    "LicenceNo": "286-C1-2016",
    "Manufucturer": "SATCOM Technologies",
    "Model": "Series 1385",
    "DeviceType": "VSAT Antenna"
},
{
    "LicenceNo": "253-C1-2016",
    "Manufucturer": "Huawei Technologies Co Ltd",
    "Model": "UGW9811/ USN9810",
    "DeviceType": "WCDMA MOBILE"
},
{
    "LicenceNo": "175-C1-2015",
    "Manufucturer": "Altai Technologies Limited",
    "Model": "AP5822",
    "DeviceType": "WiFi"
},
{
    "LicenceNo": "256-C1-2016",
    "Manufucturer": "Samsung Electronics Co Ltd",
    "Model": "WIDT30Q",
    "DeviceType": "WiFi Module"
},
{
    "LicenceNo": "133-C1-2015",
    "Manufucturer": "Hon Hai Precision Ind Co Ltd",
    "Model": "T77H566",
    "DeviceType": "WiFi BT Module"
},
{
    "LicenceNo": "167-C1-2015",
    "Manufucturer": "Infomark Co., Ltd.",
    "Model": "IMW-C910W",
    "DeviceType": "WIMAX Dula CPE"
},
{
    "LicenceNo": "001-C1-2013",
    "Manufucturer": "Masimo Corporation",
    "Model": "RAD7CA",
    "DeviceType": "Wireless"
},
{
    "LicenceNo": "285-C1-2016",
    "Manufucturer": "Novero Dabendorf GmbH",
    "Model": "WCH-182",
    "DeviceType": "Wireless"
},
{
    "LicenceNo": "390-C1-2017",
    "Manufucturer": "Omron Automotive Electronics Inc",
    "Model": "300S",
    "DeviceType": "TR"
},
{
    "LicenceNo": "282-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "WC900A05",
    "DeviceType": "Wireless Power"
},
{
    "LicenceNo": "413-C1-2017",
    "Manufucturer": "Makita Corporation",
    "Model": "WUT01",
    "DeviceType": "Wireless Unit"
},
{
    "LicenceNo": "283-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "WC900A15",
    "DeviceType": "Wireless Power"
},
{
    "LicenceNo": "305-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "FH0C9CDHK72",
    "DeviceType": "WLAN Module"
},
{
    "LicenceNo": "320-C1-2016",
    "Manufucturer": "LG Electronics Inc",
    "Model": "LCW-004",
    "DeviceType": "WLAN Module"
},
{
    "LicenceNo": "242-C1-2016",
    "Manufucturer": "Omron Automotive Electronics Inc",
    "Model": "CF-54",
    "DeviceType": "Transceiver"
},
{
    "LicenceNo": "249-C1-2016",
    "Manufucturer": "Sigma Designs,Inc",
    "Model": "UZB3-E",
    "DeviceType": "Wrieless USB"
},
{
    "LicenceNo": "193-C1-2015",
    "Manufucturer": "Boston Scientific Corporation",
    "Model": "3120",
    "DeviceType": "ZOOM LATITUDE"
}
];